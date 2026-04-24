// ============================================================
// SMARTSHORE HCM — SUPABASE CLIENT & DATA LAYER (UUID schema)
// ============================================================

const SUPABASE_URL = 'https://ryilwwtbqesfydhaulzv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_WgNflyEj7mTvgqxRxLIs_g_oBU_PPkW';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function sbErr(label, error) {
  console.error(`[Supabase] ${label}:`, error?.message || error);
  throw new Error(error?.message || `${label} failed`);
}

// ============================================================
// LOAD ALL — builds APP_DATA from Supabase on startup
// ============================================================
const DB = {

  async loadAll() {
    const [
      { data: emps,       error: e1 },
      { data: projs,      error: e2 },
      { data: empSkills,  error: e3 },
      { data: assigns,    error: e4 },
      { data: boardRows,  error: e5 },
    ] = await Promise.all([
      sb.from('employees').select('*').order('created_at'),
      sb.from('projects').select('*').order('created_at'),
      sb.from('employee_skills').select('*').order('employee_id, skill_order'),
      sb.from('assignments').select('*').order('week_start'),
      sb.from('board_tasks').select('*').order('created_at'),
    ]);

    if (e1) sbErr('employees', e1);
    if (e2) sbErr('projects',  e2);
    if (e3) sbErr('employee_skills', e3);
    if (e4) sbErr('assignments', e4);
    // e5 is intentionally silent — board_tasks table may not exist yet

    // ── skills by employee ─────────────────────────────────────────
    const skillsByEmp = {};
    (empSkills || []).forEach(r => {
      if (!skillsByEmp[r.employee_id]) skillsByEmp[r.employee_id] = [];
      skillsByEmp[r.employee_id].push({ name: r.skill_name, level: r.skill_level });
    });

    // ── assignments → week buckets ─────────────────────────────────
    // weekLabels = sorted unique week_start dates from assignments
    const weekSet = new Set((assigns || []).map(a => a.week_start));
    APP_DATA.weekLabels = [...weekSet].sort();

    // assignments by employee_id → { weekStart → totalHours }
    const assignByEmp = {};
    const projsByEmp  = {};
    (assigns || []).forEach(a => {
      // hours per week
      if (!assignByEmp[a.employee_id]) assignByEmp[a.employee_id] = {};
      assignByEmp[a.employee_id][a.week_start] = (assignByEmp[a.employee_id][a.week_start] || 0) + a.hours;
      // project membership
      if (!projsByEmp[a.employee_id]) projsByEmp[a.employee_id] = new Set();
      projsByEmp[a.employee_id].add(a.project_id);
    });

    // assignments by project_id → Set of employee_ids
    const empsByProj = {};
    (assigns || []).forEach(a => {
      if (!empsByProj[a.project_id]) empsByProj[a.project_id] = new Set();
      empsByProj[a.project_id].add(a.employee_id);
    });

    // ── populate APP_DATA.employees ────────────────────────────────
    APP_DATA.employees = (emps || []).map(e => {
      const cap      = e.capacity_hours || 40;
      const weekData = assignByEmp[e.id] || {};
      // utilization % per week
      const weekPcts = APP_DATA.weekLabels.map(w =>
        weekData[w] ? Math.round((weekData[w] / cap) * 100) : 0
      );
      const avg = weekPcts.length
        ? Math.round(weekPcts.reduce((s, v) => s + v, 0) / weekPcts.length)
        : 0;

      return {
        id:           e.id,
        name:         e.name,
        initials:     e.initials,
        role:         e.role || '',
        dept:         e.dept || 'Delivery',
        email:        e.email || '',
        location:     e.location || 'India',
        hoursPerWeek: cap,
        utilization:  avg,
        color:        e.color || '#6366f1',
        skills:       (skillsByEmp[e.id] || []).map(s => s.name),
        skillLevels:  Object.fromEntries((skillsByEmp[e.id] || []).map(s => [s.name, s.level])),
        projects:     [...(projsByEmp[e.id] || [])],
        weekPcts,     // array aligned to APP_DATA.weekLabels
      };
    });

    // ── populate APP_DATA.projects ─────────────────────────────────
    APP_DATA.projects = (projs || []).map(p => ({
      id:          p.id,
      name:        p.name,
      client:      p.client || '',
      status:      p.status === 'active' ? 'Active' : p.status,
      color:       p.color || '#3b82f6',
      startDate:   p.start_date || '',
      endDate:     p.end_date   || '',
      totalHours:  _projectTotalHours(p.id, assigns || []),
      budget:      p.budget || 0,
      phase:       p.phase  || 'Active',
      progress:    p.progress || 0,
      description: p.description || '',
      members:     [...(empsByProj[p.id] || [])],
    }));

    // ── weekly util keyed by employeeId ────────────────────────────
    APP_DATA.weeklyUtil = {};
    APP_DATA.employees.forEach(e => {
      APP_DATA.weeklyUtil[e.id] = e.weekPcts;
    });

    // ── raw assignments (for detailed views) ──────────────────────
    APP_DATA.assignments = (assigns || []).map(a => ({
      id:          a.id,
      employeeId:  a.employee_id,
      projectId:   a.project_id,
      weekStart:   a.week_start,
      hours:       a.hours,
      actualHours: a.actual_hours || 0,
    }));

    // ── populate APP_DATA.boardTasks from Supabase (if available) ─────
    if (boardRows && boardRows.length > 0) {
      APP_DATA.boardTasks = boardRows.map(r => ({
        id:          r.id,
        title:       r.title,
        project:     r.project_id,
        projectName: r.project_name || '',
        priority:    r.priority || 'Medium',
        dueDate:     r.due_date || '',
        status:      r.status || 'todo',
        tags:        r.tags || [],
        assignees:   r.assignees || [],
      }));
    }

    // ── rebuild helpers ────────────────────────────────────────────
    APP_DATA.getEmployee = id => APP_DATA.employees.find(e => e.id === id);
    APP_DATA.getProject  = id => APP_DATA.projects.find(p => p.id === id);
    APP_DATA.company.totalEmployees = APP_DATA.employees.length;

    // Collect all unique skills
    const allSkills = new Set();
    (empSkills || []).forEach(r => allSkills.add(r.skill_name));
    APP_DATA.skills = [...allSkills].sort();
  },

  // ============================================================
  // EMPLOYEES
  // ============================================================
  async addEmployee(data) {
    const row = {
      id:             (crypto?.randomUUID ? crypto.randomUUID() : _uuidFallback()),
      name:           data.name,
      initials:       _initials(data.name),
      role:           data.role || '',
      dept:           data.dept || 'Delivery',
      email:          data.email || '',
      location:       data.location || 'India',
      capacity_hours: parseInt(data.hoursPerWeek) || 40,
      color:          _randomColor(),
    };
    const { data: inserted, error } = await sb.from('employees').insert(row).select().single();
    if (error) sbErr('addEmployee', error);
    return inserted;
  },

  async updateEmployee(id, data) {
    const row = {};
    if (data.name)         { row.name = data.name; row.initials = _initials(data.name); }
    if (data.role !== undefined)     row.role           = data.role;
    if (data.dept !== undefined)     row.dept           = data.dept;
    if (data.location !== undefined) row.location       = data.location;
    if (data.email)        row.email         = data.email;
    if (data.hoursPerWeek) row.capacity_hours = parseInt(data.hoursPerWeek);
    const { error } = await sb.from('employees').update(row).eq('id', id);
    if (error) sbErr('updateEmployee', error);
  },

  async deleteEmployee(id) {
    const { error } = await sb.from('employees').delete().eq('id', id);
    if (error) sbErr('deleteEmployee', error);
  },

  // ============================================================
  // PROJECTS
  // ============================================================
  async addProject(data) {
    const row = {
      id:         (crypto?.randomUUID ? crypto.randomUUID() : _uuidFallback()),
      name:       data.name,
      client:     data.client || '',
      status:     (data.status || 'Active').toLowerCase(),
      color:      _randomProjectColor(),
      start_date: data.startDate || null,
      end_date:   data.endDate   || null,
      budget:     data.budget ? parseFloat(data.budget) : 0,
      phase:      data.phase  || 'Initiation',
    };
    const { data: inserted, error } = await sb.from('projects').insert(row).select().single();
    if (error) sbErr('addProject', error);
    return inserted;
  },

  async updateProject(id, data) {
    const row = {};
    if (data.name)     row.name     = data.name;
    if (data.client)   row.client   = data.client;
    if (data.status)   row.status   = data.status.toLowerCase();
    if (data.phase)    row.phase    = data.phase;
    if (data.progress !== undefined) row.progress = parseInt(data.progress);
    const { error } = await sb.from('projects').update(row).eq('id', id);
    if (error) sbErr('updateProject', error);
  },

  async deleteProject(id) {
    const { error } = await sb.from('projects').delete().eq('id', id);
    if (error) sbErr('deleteProject', error);
  },

  // ============================================================
  // ASSIGNMENTS  (add / update hours for a given employee + week)
  // ============================================================
  async upsertAssignment(employeeId, projectId, weekStart, hours, actualHours) {
    const updateData = { hours };
    if (actualHours !== undefined) updateData.actual_hours = actualHours;

    const { data: existing } = await sb.from('assignments')
      .select('id')
      .eq('employee_id', employeeId)
      .eq('project_id', projectId)
      .eq('week_start', weekStart)
      .maybeSingle();

    if (existing) {
      const { error } = await sb.from('assignments').update(updateData).eq('id', existing.id);
      if (error) sbErr('updateAssignment', error);
    } else {
      const { error } = await sb.from('assignments').insert({
        id: crypto.randomUUID(),
        employee_id: employeeId, project_id: projectId, week_start: weekStart,
        hours, actual_hours: actualHours || 0
      });
      if (error) sbErr('insertAssignment', error);
    }
  },

  // ============================================================
  // ASSIGNMENTS — batch upsert + delete
  // ============================================================
  async batchUpsertAssignments(records) {
    // records: [{employeeId, projectId, weekStart, hours}]
    await Promise.all(records.map(r =>
      this.upsertAssignment(r.employeeId, r.projectId, r.weekStart, r.hours)
    ));
  },

  async deleteAssignment(employeeId, projectId, weekStart) {
    const { error } = await sb.from('assignments')
      .delete()
      .eq('employee_id', employeeId)
      .eq('project_id', projectId)
      .eq('week_start', weekStart);
    if (error) sbErr('deleteAssignment', error);
  },

  // ============================================================
  // SKILLS — update/delete individual skill level
  // ============================================================
  async updateSkillLevel(employeeId, skillName, newLevel) {
    const { data: existing } = await sb.from('employee_skills')
      .select('id')
      .eq('employee_id', employeeId)
      .eq('skill_name', skillName)
      .maybeSingle();

    if (newLevel === 0) {
      if (existing) {
        const { error } = await sb.from('employee_skills').delete().eq('id', existing.id);
        if (error) sbErr('deleteSkill', error);
      }
    } else if (existing) {
      const { error } = await sb.from('employee_skills')
        .update({ skill_level: newLevel }).eq('id', existing.id);
      if (error) sbErr('updateSkillLevel', error);
    } else {
      const order = (APP_DATA.getEmployee(employeeId)?.skills?.length) || 0;
      const { error } = await sb.from('employee_skills')
        .insert({ employee_id: employeeId, skill_name: skillName, skill_level: newLevel, skill_order: order });
      if (error) sbErr('insertSkill', error);
    }
  },

  // ============================================================
  // BOARD TASKS (still uses integer-based separate table if needed)
  // ============================================================
  async addTask(data) {
    // board_tasks is optional; gracefully degrade if table doesn't exist
    try {
      const row = {
        title:        data.title,
        project_id:   data.project || data.projectId || null,
        project_name: data.projectName || '',
        priority:     data.priority || 'Medium',
        due_date:     data.dueDate || null,
        status:       data.status || 'todo',
      };
      const { data: inserted, error } = await sb.from('board_tasks').insert(row).select().single();
      if (error) throw error;
      const t = {
        id:          inserted.id,
        title:       inserted.title,
        project:     inserted.project_id,
        projectName: inserted.project_name || '',
        priority:    inserted.priority,
        dueDate:     inserted.due_date || '',
        status:      inserted.status,
        tags:        data.tags || [],
        assignees:   data.assignees || [],
      };
      APP_DATA.boardTasks.push(t);
      return t;
    } catch {
      // If board_tasks table doesn't exist, push to local only
      const t = { ...data, id: Date.now() };
      APP_DATA.boardTasks.push(t);
      return t;
    }
  },
};

// ── PRIVATE HELPERS ─────────────────────────────────────────────────────────
function _uuidFallback() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function _initials(name) {
  return name.trim().split(/\s+/).map(w => w[0] || '').join('').slice(0, 2).toUpperCase();
}

function _projectTotalHours(projId, assigns) {
  return assigns.filter(a => a.project_id === projId).reduce((s, a) => s + (a.hours || 0), 0);
}

const _avatarColors = [
  '#6366f1','#8b5cf6','#ec4899','#ef4444','#f59e0b','#10b981',
  '#3b82f6','#14b8a6','#f97316','#84cc16','#06b6d4','#a855f7',
];
const _projColors = ['#ef4444','#3b82f6','#8b5cf6','#f59e0b','#10b981','#06b6d4','#ec4899'];
function _randomColor()        { return _avatarColors[Math.floor(Math.random() * _avatarColors.length)]; }
function _randomProjectColor() { return _projColors[Math.floor(Math.random() * _projColors.length)]; }
