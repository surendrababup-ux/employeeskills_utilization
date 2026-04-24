// ============================================================
// SMARTSHORE HCM - MAIN APPLICATION (Fully Functional)
// ============================================================

// ---- SVG ICONS ----
const ICONS = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  utilization:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  employees: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  projects:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M6 20V10M12 20V4M18 20v-6"/></svg>`,
  skills:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  forecast:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  board:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="5" height="12" rx="1"/><rect x="17" y="3" width="5" height="8" rx="1"/></svg>`,
  plus:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  search:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  edit:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
  download:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  alert:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  info:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  trend_up:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  trend_dn:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
  clock:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  users:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  filter:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  chevron_l: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevron_r: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  check:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  layer:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
};

// ---- GLOBAL STATE ----
const GRID_WEEKS  = 6;
const GRID_MONTHS = 3;
let gridWeekOffset  = 0;
let gridMonthOffset = 0;
let utilFilterProject = 'all';
let utilFilterUtil    = 'all';
let empSearch = '';
let empFilter = 'all';
let _modalSkills = [];
let utilView        = 'schedule'; // 'schedule' | 'byproject'
let utilViewMode    = 'weekly';   // 'weekly' | 'monthly'
let byProjFilterEmp  = 'all';
let byProjFilterProj = 'all';
let _capSummaryMode  = 'week'; // 'week' | 'total'

// ---- UTILITIES ----
function avatar(emp, size = 'md') {
  const sz = size === 'lg' ? 'width:46px;height:46px;border-radius:12px;font-size:15px'
           : size === 'sm' ? 'width:26px;height:26px;border-radius:50%;font-size:9px'
           : size === 'xs' ? 'width:22px;height:22px;border-radius:50%;font-size:8px'
           : 'width:36px;height:36px;border-radius:10px;font-size:12px';
  return `<div style="background:${emp.color};${sz};display:flex;align-items:center;justify-content:center;font-weight:700;color:white;flex-shrink:0">${emp.initials}</div>`;
}

function utilClass(pct) {
  if (!pct || pct === 0) return 'empty';
  if (pct > 100)  return 'over';
  if (pct >= 80)  return 'high';
  return 'low';
}

function progressColor(pct) {
  if (pct >= 80) return '#22c55e';
  if (pct >= 50) return '#3b82f6';
  return '#f59e0b';
}

function toast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (type ? ' ' + type : '');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

function showModal(html) {
  const ov = document.getElementById('modal-overlay');
  ov.innerHTML = `<div class="modal">${html}</div>`;
  ov.removeAttribute('style');           // clear display:none
  ov.style.display = 'flex';
  ov.style.alignItems = 'center';
  ov.style.justifyContent = 'center';
  setTimeout(() => ov.classList.add('show'), 10);
  ov.querySelector('.modal-close')?.addEventListener('click', closeModal);
}

function closeModal() {
  const ov = document.getElementById('modal-overlay');
  ov.classList.remove('show');
  setTimeout(() => { ov.style.display = 'none'; ov.innerHTML = ''; }, 200);
}

// ---- DATE HELPERS ----
function _toMonday(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d.toISOString().slice(0, 10);
}

function _weeksInRange(fromMonday, toMonday) {
  if (!fromMonday || !toMonday) return [];
  const weeks = [];
  // Use T12:00:00 (noon) so no timezone shifts the date to a different day
  const end = new Date(toMonday + 'T12:00:00');
  let cur   = new Date(fromMonday + 'T12:00:00');
  while (cur <= end && weeks.length <= 60) {
    const y = cur.getFullYear();
    const m = String(cur.getMonth() + 1).padStart(2, '0');
    const d = String(cur.getDate()).padStart(2, '0');
    weeks.push(`${y}-${m}-${d}`);
    cur.setDate(cur.getDate() + 7);
  }
  return weeks;
}

function _fmtWeek(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function _fmtMonth(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
}

function _todayMonday() {
  return _toMonday(new Date().toISOString().slice(0, 10));
}

// ---- ROUTING ----
let currentPage = 'dashboard';
let chartInstances = {};

const pages = [
  { id:'dashboard',   label:'Dashboard',     icon:'dashboard' },
  { id:'utilization', label:'Utilization',   icon:'utilization' },
  { id:'employees',   label:'Employees',     icon:'employees' },
  { id:'projects',    label:'Projects',      icon:'projects' },
  { id:'skills',      label:'Skills Matrix', icon:'skills' },
  { id:'forecast',    label:'Forecast',      icon:'forecast' },
  { id:'board',       label:'Project Board', icon:'board' },
];

function navigate(page) {
  currentPage = page;
  _updateTeamCount();
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  Object.values(chartInstances).forEach(c => c.destroy());
  chartInstances = {};

  const content  = document.getElementById('main-content');
  const topTitle = document.getElementById('topbar-title');
  const topSub   = document.getElementById('topbar-sub');
  const pg = pages.find(p => p.id === page);
  topTitle.textContent = pg ? pg.label : '';

  switch (page) {
    case 'dashboard':
      content.innerHTML = renderDashboard();
      topSub.textContent = 'Welcome back! Here\'s your team overview.';
      break;
    case 'utilization':
      _jumpToCurrentWeek();
      content.innerHTML = renderUtilization();
      topSub.textContent = 'Weekly allocation tracking · click any cell to edit · bulk entry available';
      break;
    case 'employees':
      content.innerHTML = renderEmployees(empSearch, empFilter);
      topSub.textContent = `${APP_DATA.employees.length} team members`;
      break;
    case 'projects':
      content.innerHTML = renderProjects();
      topSub.textContent = `${APP_DATA.projects.length} projects tracked`;
      break;
    case 'skills':
      content.innerHTML = renderSkills();
      topSub.textContent = `${APP_DATA.skills.length} skills · click any cell to cycle skill level`;
      break;
    case 'forecast':
      content.innerHTML = renderForecast();
      topSub.textContent = 'Capacity planning & actual hours from assignments';
      break;
    case 'board':
      content.innerHTML = renderBoard();
      topSub.textContent = 'Kanban task tracking · use Move To to change columns';
      break;
  }
  initCharts(page);
  attachHandlers(page);
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const emps = APP_DATA.employees;
  const avgUtil    = emps.length ? Math.round(emps.reduce((s,e) => s + e.utilization, 0) / emps.length) : 0;
  const overAlloc  = emps.filter(e => e.utilization > 100).length;
  const onBench    = emps.filter(e => e.utilization < 20).length;
  const available  = emps.filter(e => e.utilization < 80).length;
  const totalHours = APP_DATA.assignments.reduce((s,a) => s + a.hours, 0);

  const topEmps = [...emps].sort((a,b) => b.utilization - a.utilization).slice(0, 5);

  return `
  <div class="kpi-grid">
    <div class="kpi-card">
      <div class="kpi-icon" style="background:#dbeafe">${ICONS.trend_up.replace('currentColor','#2563eb')}</div>
      <div class="kpi-value">${avgUtil}%</div>
      <div class="kpi-label">Avg Team Utilization</div>
      <div class="kpi-delta neutral">${ICONS.users.replace('currentColor','#64748b')} Across ${emps.length} employees</div>
    </div>
    <div class="kpi-card kpi-card--clickable" onclick="showDrilldown('available')">
      <div class="kpi-icon" style="background:#dcfce7">${ICONS.users.replace('currentColor','#16a34a')}</div>
      <div class="kpi-value">${available}</div>
      <div class="kpi-label">Available Capacity</div>
      <div class="kpi-delta neutral">${ICONS.info} Members below 80% · click to view</div>
    </div>
    <div class="kpi-card kpi-card--clickable" onclick="showDrilldown('overallocated')">
      <div class="kpi-icon" style="background:#fee2e2">${ICONS.alert.replace('currentColor','#dc2626')}</div>
      <div class="kpi-value" style="color:#dc2626">${overAlloc}</div>
      <div class="kpi-label">Overallocated</div>
      <div class="kpi-delta down">${ICONS.alert.replace('currentColor','#dc2626')} Needs attention · click to view</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon" style="background:#f3e8ff">${ICONS.clock.replace('currentColor','#7c3aed')}</div>
      <div class="kpi-value" style="color:#7c3aed">${totalHours.toLocaleString()}h</div>
      <div class="kpi-label">Total Allocated Hours</div>
      <div class="kpi-delta neutral">${ICONS.layer.replace('currentColor','#64748b')} Across all projects</div>
    </div>
  </div>

  <div class="chart-grid">
    <div class="card">
      <div class="card-header">
        <span class="card-title">Team Utilization Trend</span>
        <span class="badge blue">Live from DB</span>
      </div>
      <div class="card-body"><canvas id="chart-trend" height="220"></canvas></div>
    </div>
    <div class="card">
      <div class="card-header">
        <span class="card-title">Project Distribution</span>
      </div>
      <div class="card-body"><canvas id="chart-proj-dist" height="220"></canvas></div>
    </div>
  </div>

  <div class="chart-grid">
    <div class="card">
      <div class="card-header">
        <span class="card-title">Employee Utilization Breakdown</span>
        <button class="btn btn-secondary btn-sm" onclick="navigate('utilization')">View Grid</button>
      </div>
      <div class="card-body"><canvas id="chart-emp-util" height="280"></canvas></div>
    </div>
    <div class="card">
      <div class="card-header"><span class="card-title">Top Utilized Employees</span></div>
      <div class="card-body" style="padding-top:8px">
        ${topEmps.map(e => `
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            ${avatar(e)}
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;font-size:13px">${e.name}</div>
              <div style="font-size:11px;color:#64748b">${e.role}</div>
              <div style="height:5px;background:#f1f5f9;border-radius:3px;margin-top:4px">
                <div style="height:100%;width:${Math.min(e.utilization,100)}%;background:${e.utilization>100?'#ef4444':e.utilization>=80?'#f59e0b':'#22c55e'};border-radius:3px"></div>
              </div>
            </div>
            <div style="font-size:16px;font-weight:800;color:${e.utilization>100?'#ef4444':e.utilization>=80?'#f59e0b':'#22c55e'};flex-shrink:0">
              ${e.utilization}%
            </div>
          </div>`).join('')}
        <button class="btn btn-secondary btn-sm" style="width:100%;margin-top:6px" onclick="navigate('employees')">View All Employees</button>
      </div>
    </div>
  </div>`;
}

// ============================================================
// DASHBOARD DRILLDOWN MODALS
// ============================================================
function showDrilldown(type) {
  const emps = APP_DATA.employees;
  const isOver = type === 'overallocated';

  const list = isOver
    ? emps.filter(e => e.utilization > 100).sort((a, b) => b.utilization - a.utilization)
    : emps.filter(e => e.utilization < 80).sort((a, b) => a.utilization - b.utilization);

  const title    = isOver ? 'Overallocated Employees' : 'Available Capacity';
  const subtitle = isOver
    ? 'These employees are booked beyond their weekly capacity and need attention.'
    : 'These employees have utilization below 80% and have capacity for more work.';
  const accentColor = isOver ? '#ef4444' : '#16a34a';
  const bgColor     = isOver ? '#fef2f2' : '#f0fdf4';

  const rows = list.length ? list.map(e => {
    const cap         = e.hoursPerWeek || 40;
    const bookedHours = Math.round((e.utilization / 100) * cap);
    const freeHours   = Math.max(0, cap - bookedHours);
    const overHours   = Math.max(0, bookedHours - cap);
    const barPct      = Math.min(e.utilization, 100);
    const barColor    = e.utilization > 100 ? '#ef4444' : e.utilization >= 80 ? '#f59e0b' : '#22c55e';
    const projects    = e.projects.map(pid => APP_DATA.getProject(pid)?.name).filter(Boolean);

    return `
    <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f1f5f9">
      ${avatar(e)}
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
          <span style="font-weight:600;font-size:13px">${e.name}</span>
          <span style="font-size:11px;color:#64748b">${e.role}</span>
        </div>
        <div style="font-size:11px;color:#94a3b8;margin-bottom:6px">${projects.join(' · ') || 'No projects'}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="flex:1;height:6px;background:#f1f5f9;border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${barPct}%;background:${barColor};border-radius:4px"></div>
          </div>
          <span style="font-size:12px;font-weight:700;color:${accentColor};flex-shrink:0;min-width:38px;text-align:right">${e.utilization}%</span>
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0;min-width:80px">
        ${isOver
          ? `<div style="font-size:11px;color:#ef4444;font-weight:600">+${overHours}h over</div>
             <div style="font-size:10px;color:#94a3b8">${bookedHours}h / ${cap}h cap</div>`
          : `<div style="font-size:11px;color:#16a34a;font-weight:600">${freeHours}h free</div>
             <div style="font-size:10px;color:#94a3b8">${bookedHours}h / ${cap}h cap</div>`
        }
      </div>
    </div>`;
  }).join('') : `<div style="text-align:center;padding:32px;color:#94a3b8;font-size:13px">
    ${isOver ? 'No overallocated employees — great!' : 'All employees are at or above 80% utilization.'}
  </div>`;

  showModal(`
    <button class="modal-close">✕</button>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px">
      <div style="width:40px;height:40px;background:${bgColor};border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${isOver ? ICONS.alert.replace('currentColor', accentColor) : ICONS.users.replace('currentColor', accentColor)}
      </div>
      <div>
        <div style="font-size:16px;font-weight:700">${title}</div>
        <div style="font-size:12px;color:#64748b">${list.length} employee${list.length !== 1 ? 's' : ''}</div>
      </div>
    </div>
    <p style="font-size:12px;color:#64748b;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #f1f5f9">${subtitle}</p>
    <div style="max-height:420px;overflow-y:auto;padding-right:4px">${rows}</div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px">
      <button class="btn btn-secondary" onclick="closeModal()">Close</button>
      <button class="btn btn-primary" onclick="closeModal();navigate('employees')">View All Employees</button>
    </div>
  `);
}

// ============================================================
// UTILIZATION PAGE — wrapper with sub-tabs
// ============================================================
function renderUtilization() {
  return `
  <div class="util-page-header">
    <div class="util-subtabs">
      <button class="util-subtab ${utilView==='schedule'?'active':''}" onclick="setUtilView('schedule')">Schedule</button>
      <button class="util-subtab ${utilView==='byproject'?'active':''}" onclick="setUtilView('byproject')">By Project</button>
    </div>
    <div class="util-viewmode">
      <button class="view-mode-btn" onclick="openBulkAllocation()">${ICONS.layer} Bulk booking</button>
      <button class="view-mode-btn ${utilViewMode==='weekly'?'active':''}" onclick="setUtilViewMode('weekly')">Weekly</button>
      <button class="view-mode-btn ${utilViewMode==='monthly'?'active':''}" onclick="setUtilViewMode('monthly')">Monthly</button>
    </div>
  </div>
  ${utilView === 'schedule' ? renderScheduleView() : renderByProjectView()}`;
}

// ---- Schedule sub-tab (dispatches to weekly or monthly) ----
function renderScheduleView() {
  if (utilViewMode === 'monthly') return renderScheduleMonthly();
  return renderScheduleWeekly();
}

function renderScheduleMonthly() {
  const allMonths = _allMonths();
  const maxMO     = Math.max(0, allMonths.length - GRID_MONTHS);
  if (gridMonthOffset > maxMO) gridMonthOffset = maxMO;
  const months  = allMonths.slice(gridMonthOffset, gridMonthOffset + GRID_MONTHS);
  const canPrev = gridMonthOffset > 0;
  const canNext = gridMonthOffset + GRID_MONTHS < allMonths.length;

  const monthWeeks = months.map(m => APP_DATA.weekLabels.filter(w => w.startsWith(m)));

  const overallAvg = APP_DATA.employees.length
    ? Math.round(APP_DATA.employees.reduce((s,e)=>s+e.utilization,0)/APP_DATA.employees.length) : 0;

  const empRows = APP_DATA.employees.map(emp => {
    const monthHrs = months.map((_, mi) =>
      monthWeeks[mi].reduce((s,w) =>
        s + APP_DATA.assignments.filter(a=>a.employeeId===emp.id&&a.weekStart===w).reduce((ss,a)=>ss+a.hours,0)
      , 0)
    );
    const total = monthHrs.reduce((s,v)=>s+v,0);
    const totalCap = monthWeeks.reduce((s,mw)=>s+mw.length,0) * (emp.hoursPerWeek||40);
    const utilPct = totalCap ? Math.round((total/totalCap)*100) : 0;
    return { emp, monthHrs, total, utilPct };
  }).filter(r => r.total > 0).sort((a, b) => a.emp.name.localeCompare(b.emp.name));

  const rangeLabel = months.length ? `${_fmtMonthKey(months[0])} – ${_fmtMonthKey(months[months.length-1])}` : 'No data';

  return `
  <div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:14px 18px;margin-bottom:16px;display:flex;gap:28px;align-items:center;flex-wrap:wrap">
    ${[
      {label:'Avg Utilization', val:overallAvg+'%', color:'#2563eb'},
      {label:'Overallocated',   val:APP_DATA.employees.filter(e=>e.utilization>100).length, color:'#ef4444'},
      {label:'Fully Utilized',  val:APP_DATA.employees.filter(e=>e.utilization>=80&&e.utilization<=100).length, color:'#f59e0b'},
      {label:'Available',       val:APP_DATA.employees.filter(e=>e.utilization<80&&e.utilization>=20).length, color:'#22c55e'},
      {label:'On Bench',        val:APP_DATA.employees.filter(e=>e.utilization<20).length, color:'#8b5cf6'},
    ].map(s=>`<div>
      <div style="font-size:22px;font-weight:800;color:${s.color}">${s.val}</div>
      <div style="font-size:11px;color:#64748b;font-weight:500">${s.label}</div>
    </div>`).join('')}
  </div>

  <div class="card">
    <div class="card-header">
      <span class="card-title">Monthly View — total hours per employee</span>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="btn btn-secondary btn-sm" ${canPrev?'':'disabled'} onclick="prevWeeks()">${ICONS.chevron_l} Prev</button>
        <span style="font-size:12px;color:#64748b;white-space:nowrap">${rangeLabel}</span>
        <button class="btn btn-secondary btn-sm" ${canNext?'':'disabled'} onclick="nextWeeks()">Next ${ICONS.chevron_r}</button>
      </div>
    </div>
    <div class="util-table-wrap">
      <table class="util-table">
        <thead>
          <tr>
            <th class="emp-col">Employee</th>
            ${months.map(m=>`<th style="text-align:center;min-width:110px">${_fmtMonthKey(m)}</th>`).join('')}
            <th style="text-align:center">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${empRows.length
            ? empRows.map(({emp, monthHrs, total, utilPct}) => `
              <tr>
                <td class="emp-col">
                  <div style="display:flex;align-items:center;gap:8px">
                    ${avatar(emp)}
                    <div style="flex:1;min-width:0">
                      <div class="emp-name">${emp.name}</div>
                      <div class="emp-role">${emp.role}</div>
                    </div>
                  </div>
                </td>
                ${monthHrs.map((h,mi) => {
                  const cap = monthWeeks[mi].length * (emp.hoursPerWeek||40);
                  const pct = cap ? Math.min(100, Math.round((h/cap)*100)) : 0;
                  return `<td style="text-align:center;padding:8px 4px">
                    ${h > 0
                      ? `<div style="font-size:13px;font-weight:700;color:#1e293b">${h}h</div>
                         <div style="font-size:10px;color:#64748b;margin-top:1px">${pct}%</div>
                         <div style="height:4px;background:#f1f5f9;border-radius:2px;margin:3px 12px 0">
                           <div style="height:100%;width:${pct}%;background:${pct>100?'#ef4444':pct>=80?'#f59e0b':'#3b82f6'};border-radius:2px"></div>
                         </div>`
                      : '<span style="color:#cbd5e1;font-size:12px">—</span>'}
                  </td>`;
                }).join('')}
                <td style="text-align:center">
                  <span class="badge ${utilPct>100?'red':utilPct>=80?'amber':utilPct>=50?'green':'blue'}">${total}h</span>
                </td>
                <td style="padding:4px">
                  <button class="btn btn-secondary btn-sm" style="white-space:nowrap;font-size:11px"
                          onclick="openBulkAllocation('${emp.id}')">+ Allocate</button>
                </td>
              </tr>`).join('')
            : `<tr><td colspan="${months.length+2}" style="text-align:center;padding:40px;color:#94a3b8">No hours logged for this period</td></tr>`}
        </tbody>
      </table>
    </div>
  </div>`;
}

function renderScheduleWeekly() {
  const allWeeks  = APP_DATA.weekLabels;
  const maxOffset = Math.max(0, allWeeks.length - GRID_WEEKS);
  if (gridWeekOffset > maxOffset) gridWeekOffset = maxOffset;

  const weeks   = allWeeks.slice(gridWeekOffset, gridWeekOffset + GRID_WEEKS);
  const canPrev = gridWeekOffset > 0;
  const canNext = gridWeekOffset + GRID_WEEKS < allWeeks.length;

  const emps = APP_DATA.employees.filter(e => {
    if (utilFilterProject !== 'all' && !e.projects.includes(utilFilterProject)) return false;
    if (utilFilterUtil === 'over' && e.utilization <= 100) return false;
    if (utilFilterUtil === 'low'  && e.utilization >= 50)  return false;
    return true;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const teamAvg = weeks.map((_, wi) => {
    const realWi = gridWeekOffset + wi;
    const vals   = APP_DATA.employees.map(e => (APP_DATA.weeklyUtil[e.id] || [])[realWi] || 0);
    return vals.length ? Math.round(vals.reduce((s,v) => s+v, 0) / vals.length) : 0;
  });

  const overallAvg = teamAvg.length ? Math.round(teamAvg.reduce((s,v)=>s+v,0)/teamAvg.length) : 0;
  const rangeLabel = _fmtDateRange(weeks);

  const legendItems = [
    { color:'#e2e8f0', label:'0%' },
    { color:'#fca5a5', label:'<80%' },
    { color:'#16a34a', label:'80–100%' },
    { color:'#fef08a', label:'>100%' },
  ];

  return `
  <!-- ── Filters toolbar ── -->
  <div class="toolbar" style="margin-bottom:14px">
    <div class="search-bar">
      ${ICONS.search}
      <input type="text" id="util-search" placeholder="Search employees…" oninput="filterUtilRows(this.value)">
    </div>
    <select class="filter-select" id="util-proj-filter" onchange="utilFilterProject=this.value;refreshUtil()">
      <option value="all" ${utilFilterProject==='all'?'selected':''}>All Projects</option>
      ${APP_DATA.projects.map(p=>`<option value="${p.id}" ${utilFilterProject===p.id?'selected':''}>${p.name}</option>`).join('')}
    </select>
    <select class="filter-select" id="util-filter" onchange="utilFilterUtil=this.value;refreshUtil()">
      <option value="all"  ${utilFilterUtil==='all'?'selected':''}>All Status</option>
      <option value="over" ${utilFilterUtil==='over'?'selected':''}>Overallocated</option>
      <option value="low"  ${utilFilterUtil==='low'?'selected':''}>Under-utilized</option>
    </select>
  </div>

  <!-- ── KPI strip ── -->
  <div style="background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:12px 18px;margin-bottom:14px;display:flex;gap:24px;align-items:center;flex-wrap:wrap">
    ${[
      {label:'Avg Utilization', val:overallAvg+'%', color:'#2563eb'},
      {label:'Overallocated',   val:APP_DATA.employees.filter(e=>e.utilization>100).length,  color:'#ef4444'},
      {label:'Fully Utilized',  val:APP_DATA.employees.filter(e=>e.utilization===100).length, color:'#2563eb'},
      {label:'Available',       val:APP_DATA.employees.filter(e=>e.utilization<100&&e.utilization>=20).length, color:'#16a34a'},
      {label:'On Bench',        val:APP_DATA.employees.filter(e=>e.utilization<20).length,   color:'#8b5cf6'},
    ].map(s=>`<div>
      <div style="font-size:20px;font-weight:800;color:${s.color}">${s.val}</div>
      <div style="font-size:11px;color:#64748b;font-weight:500">${s.label}</div>
    </div>`).join('')}
  </div>

  <!-- ── Nav bar: prev/next + legend ── -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:10px">
    <div style="display:flex;align-items:center;gap:10px">
      <button class="date-nav-btn" ${canPrev?'':'disabled'} onclick="prevWeeks()" title="Previous period">${ICONS.chevron_l}</button>
      <span style="font-size:15px;font-weight:700;color:#1e293b;white-space:nowrap">${rangeLabel}</span>
      <button class="date-nav-btn" ${canNext?'':'disabled'} onclick="nextWeeks()" title="Next period">${ICONS.chevron_r}</button>
      <button class="date-nav-today" onclick="goToToday()">Today</button>
    </div>
    <div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#64748b;flex-wrap:wrap">
      <span style="font-weight:600;margin-right:2px">Utilization:</span>
      ${legendItems.map(l=>`
        <span style="display:flex;align-items:center;gap:4px;white-space:nowrap">
          <span style="width:10px;height:10px;border-radius:50%;background:${l.color};display:inline-block;flex-shrink:0"></span>
          ${l.label}
        </span>`).join('')}
    </div>
  </div>

  <!-- ── Grid card ── -->
  <div class="card card-scroll">
    <div class="util-table-wrap" style="border-radius:14px;min-height:60px">
      <table class="util-table" id="util-table">
        <thead>
          <tr>
            <th class="emp-col" style="font-size:10px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:#94a3b8">Employee</th>
            ${weeks.map((w, i) => {
              const d = new Date(w + 'T00:00:00');
              const dayLabel  = d.toLocaleDateString('en-US', { month:'short', day:'numeric' });
              const yearLabel = d.getFullYear();
              return `<th style="text-align:center;padding:10px 6px">
                <div style="font-weight:700;font-size:13px;color:#1e293b">${dayLabel}</div>
                <div style="font-size:10px;color:#94a3b8;margin-top:1px">${yearLabel}</div>
              </th>`;
            }).join('')}
            <th style="text-align:center;font-size:10px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:#94a3b8">Avg</th>
            <th style="width:90px"></th>
          </tr>
        </thead>
        <tbody>
          ${emps.map(emp => {
            const allPcts  = APP_DATA.weeklyUtil[emp.id] || [];
            const weekPcts = weeks.map((_, wi) => allPcts[gridWeekOffset + wi] || 0);
            const weekHrs  = weeks.map(w =>
              APP_DATA.assignments
                .filter(a => a.employeeId === emp.id && a.weekStart === w)
                .reduce((s, a) => s + a.hours, 0)
            );
            const avg = weekPcts.length ? Math.round(weekPcts.reduce((s,v)=>s+v,0)/weekPcts.length) : 0;
            return `
            <tr class="emp-row-data" data-name="${emp.name.toLowerCase()}">
              <td class="emp-col">
                <div style="display:flex;align-items:center;gap:9px">
                  ${avatar(emp, 'xs')}
                  <div style="min-width:0">
                    <div style="font-weight:600;font-size:12px;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">${emp.name}</div>
                    <div style="font-size:10px;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">${emp.role}</div>
                  </div>
                </div>
              </td>
              ${weekPcts.map((pct, wi) => {
                const hrs = weekHrs[wi];
                const wk  = weeks[wi];
                return `<td style="padding:4px 3px">
                  <div class="util-cell ${utilClass(pct)}"
                       onclick="openCellEditor('${emp.id}','${wk}',this)"
                       title="Click to edit · ${emp.name} · ${_fmtWeek(wk)}">
                    <div style="font-size:14px;font-weight:700;line-height:1.1">${hrs ? hrs+'h' : '—'}</div>
                    <div style="font-size:10px;margin-top:3px;opacity:0.85">${pct}%</div>
                  </div>
                </td>`;
              }).join('')}
              <td style="text-align:center;padding:4px 6px">
                <span class="badge ${avg>100?'amber':avg>=80?'green':'red'}">${avg}%</span>
              </td>
              <td style="padding:4px 6px">
                <button class="btn btn-secondary btn-sm" style="white-space:nowrap;font-size:11px;padding:4px 10px"
                        onclick="openBulkAllocation('${emp.id}')">+ Allocate</button>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>

  ${renderCapacitySummary(weeks, rangeLabel)}`;
}

// ---- Capacity Summary ----
function renderCapacitySummary(weeks, rangeLabel) {
  const emps = APP_DATA.employees.slice().sort((a, b) => a.name.localeCompare(b.name));
  const isTotals = _capSummaryMode === 'total';

  const rows = emps.map(emp => {
    const cap = emp.hoursPerWeek || 40;
    const weekRows = weeks.map(w => {
      const booked = APP_DATA.assignments
        .filter(a => a.employeeId === emp.id && a.weekStart === w)
        .reduce((s, a) => s + (a.hours || 0), 0);
      const actual = APP_DATA.assignments
        .filter(a => a.employeeId === emp.id && a.weekStart === w)
        .reduce((s, a) => s + (a.actualHours || 0), 0);
      const variance  = actual - booked;
      const available = cap - booked;
      return { w, booked, actual, cap, variance, available };
    });
    if (isTotals) {
      const totBooked = weekRows.reduce((s, r) => s + r.booked, 0);
      const totActual = weekRows.reduce((s, r) => s + r.actual, 0);
      const totCap    = cap * weeks.length;
      return [{ emp, isFirst: true, w: null, booked: totBooked, actual: totActual, cap: totCap, variance: totActual - totBooked, available: totCap - totBooked }];
    }
    return weekRows.map((r, i) => ({ emp, isFirst: i === 0, ...r }));
  }).flat();

  function varianceBadge(v) {
    if (v === 0) return `<span style="font-size:12px;color:#64748b">0h</span>`;
    const color = v < 0 ? '#f59e0b' : '#22c55e';
    const bg    = v < 0 ? '#fffbeb' : '#f0fdf4';
    return `<span style="background:${bg};color:${color};border:1px solid ${color};padding:2px 9px;border-radius:20px;font-size:11px;font-weight:700">${v > 0 ? '+' : ''}${v}h</span>`;
  }

  function availBadge(available) {
    if (available <= 0) return `<span style="background:#2563eb;color:white;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600">Fully booked</span>`;
    return `<span style="background:#f1f5f9;color:#475569;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600">${available}h free</span>`;
  }

  return `
  <div class="card" style="margin-top:20px">
    <div class="card-header" style="align-items:flex-start;gap:12px">
      <div>
        <div class="card-title" style="font-size:16px;font-weight:700">Capacity summary</div>
        <div style="font-size:12px;color:#64748b;margin-top:3px">
          Booked, actual and remaining capacity for ${rangeLabel} (${isTotals ? 'totals' : 'weekly'} view).
        </div>
      </div>
      <div style="display:flex;gap:2px;background:#f1f5f9;border-radius:8px;padding:3px;flex-shrink:0">
        <button onclick="_capSummaryMode='week';refreshUtil()" style="padding:5px 14px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s;${!isTotals?'background:white;color:#1e293b;box-shadow:0 1px 4px rgba(0,0,0,0.1)':'background:transparent;color:#64748b'}">Per week</button>
        <button onclick="_capSummaryMode='total';refreshUtil()" style="padding:5px 14px;border:none;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.15s;${isTotals?'background:white;color:#1e293b;box-shadow:0 1px 4px rgba(0,0,0,0.1)':'background:transparent;color:#64748b'}">Total</button>
      </div>
    </div>
    <div class="util-table-wrap">
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead>
          <tr style="border-bottom:2px solid #f1f5f9">
            <th style="text-align:left;padding:8px 20px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.07em;min-width:220px">Employee</th>
            ${!isTotals ? `<th style="padding:8px 16px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.07em;white-space:nowrap">Week</th>` : ''}
            <th style="text-align:center;padding:8px 16px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.07em">Booked</th>
            <th style="text-align:center;padding:8px 16px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.07em">Actual</th>
            <th style="text-align:center;padding:8px 16px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.07em">Capacity</th>
            <th style="text-align:center;padding:8px 16px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.07em">Variance</th>
            <th style="text-align:right;padding:8px 20px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.07em">Available</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(r => `
          <tr style="border-bottom:1px solid #f8fafc" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''">
            <td style="padding:${r.isFirst ? '12px' : '6px'} 20px ${r.isFirst ? '4px' : '6px'}">
              ${r.isFirst ? `
                <div style="font-weight:700;font-size:13px;color:#1e293b">${r.emp.name}</div>
                <div style="font-size:11px;color:#94a3b8;margin-top:1px">${r.emp.role}</div>` : ''}
            </td>
            ${!isTotals ? `<td style="padding:6px 16px;color:#94a3b8;font-size:12px;white-space:nowrap">${r.w}</td>` : ''}
            <td style="text-align:center;padding:6px 16px;font-weight:600;color:#1e293b">${r.booked}h</td>
            <td style="text-align:center;padding:6px 16px;color:#64748b">${r.actual}h</td>
            <td style="text-align:center;padding:6px 16px;color:#64748b">${r.cap}h</td>
            <td style="text-align:center;padding:6px 16px">${varianceBadge(r.variance)}</td>
            <td style="text-align:right;padding:6px 20px">${availBadge(r.available)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

// ---- By Project sub-tab ----
function renderByProjectView() {
  let weeks, canPrev, canNext, rangeLabel, periodLabel;

  if (utilViewMode === 'monthly') {
    const allMonths = _allMonths();
    const maxMO     = Math.max(0, allMonths.length - GRID_MONTHS);
    if (gridMonthOffset > maxMO) gridMonthOffset = maxMO;
    const months = allMonths.slice(gridMonthOffset, gridMonthOffset + GRID_MONTHS);
    canPrev     = gridMonthOffset > 0;
    canNext     = gridMonthOffset + GRID_MONTHS < allMonths.length;
    weeks       = _weeksForMonths(months);
    rangeLabel  = months.length ? `${_fmtMonthKey(months[0])} – ${_fmtMonthKey(months[months.length-1])}` : 'No data';
    periodLabel = `${GRID_MONTHS}-month range`;
  } else {
    const allWeeks  = APP_DATA.weekLabels;
    const maxOffset = Math.max(0, allWeeks.length - GRID_WEEKS);
    if (gridWeekOffset > maxOffset) gridWeekOffset = maxOffset;
    weeks       = allWeeks.slice(gridWeekOffset, gridWeekOffset + GRID_WEEKS);
    canPrev     = gridWeekOffset > 0;
    canNext     = gridWeekOffset + GRID_WEEKS < allWeeks.length;
    rangeLabel  = _fmtDateRange(weeks);
    periodLabel = `${GRID_WEEKS}-week range`;
  }

  const weekSet = new Set(weeks);

  // Stats
  const rangeAssigns  = APP_DATA.assignments.filter(a => weekSet.has(a.weekStart));
  const totalBooked   = rangeAssigns.reduce((s,a) => s + (a.hours       || 0), 0);
  const totalActual   = rangeAssigns.reduce((s,a) => s + (a.actualHours || 0), 0);
  const activeProjCnt = new Set(rangeAssigns.map(a => a.projectId)).size;
  const avgUtil       = APP_DATA.employees.length
    ? Math.round(APP_DATA.employees.reduce((s,e) => s + e.utilization, 0) / APP_DATA.employees.length) : 0;

  // Filter projects and employees
  const hasFilter    = byProjFilterEmp !== 'all' || byProjFilterProj !== 'all';
  const visProjects  = byProjFilterProj !== 'all'
    ? APP_DATA.projects.filter(p => p.id === byProjFilterProj)
    : APP_DATA.projects;

  // Build project → employee → week data
  const projectBlocks = visProjects.map(proj => {
    // employees on this project in this period
    const empIds = byProjFilterEmp !== 'all'
      ? [byProjFilterEmp]
      : [...new Set(APP_DATA.assignments
          .filter(a => a.projectId === proj.id && weekSet.has(a.weekStart))
          .map(a => a.employeeId))];

    if (empIds.length === 0) return null;

    const empRows = empIds.map(eId => {
      const emp = APP_DATA.getEmployee(eId);
      if (!emp) return null;
      const weekData = weeks.map(w => {
        const assigns = APP_DATA.assignments.filter(a => a.employeeId === eId && a.projectId === proj.id && a.weekStart === w);
        return {
          booked: assigns.reduce((s,a) => s + (a.hours || 0), 0),
          actual: assigns.reduce((s,a) => s + (a.actualHours || 0), 0),
        };
      });
      const totBooked = weekData.reduce((s,d) => s + d.booked, 0);
      const totActual = weekData.reduce((s,d) => s + d.actual, 0);
      return { emp, weekData, totBooked, totActual };
    }).filter(Boolean);

    if (empRows.length === 0) return null;

    const projBooked = empRows.reduce((s,r) => s + r.totBooked, 0);
    const projActual = empRows.reduce((s,r) => s + r.totActual, 0);
    return { proj, empRows, projBooked, projActual };
  }).filter(Boolean);

  // Max hours across all cells for bar scaling
  const maxCellHrs = Math.max(1, ...projectBlocks.flatMap(b =>
    b.empRows.flatMap(r => r.weekData.flatMap(d => [d.booked, d.actual]))
  ));

  function weekCell(d) {
    if (d.booked === 0 && d.actual === 0) {
      return `<td style="padding:4px 6px;text-align:center">
        <div style="color:#cbd5e1;font-size:11px;font-weight:500">—</div>
      </td>`;
    }
    const bPct = Math.round((d.booked / maxCellHrs) * 100);
    const aPct = Math.round((d.actual / maxCellHrs) * 100);
    const aColor = d.actual > d.booked ? '#ef4444' : '#22c55e';
    return `<td style="padding:4px 6px;min-width:90px">
      <div style="display:flex;flex-direction:column;gap:3px">
        <div style="display:flex;align-items:center;gap:5px">
          <div style="flex:1;height:6px;background:#f1f5f9;border-radius:3px;overflow:hidden;min-width:44px">
            <div style="height:100%;width:${bPct}%;background:#3b82f6;border-radius:3px"></div>
          </div>
          <span style="font-size:11px;font-weight:700;color:#3b82f6;min-width:28px;text-align:right">${d.booked}h</span>
        </div>
        <div style="display:flex;align-items:center;gap:5px">
          <div style="flex:1;height:6px;background:#f1f5f9;border-radius:3px;overflow:hidden;min-width:44px">
            <div style="height:100%;width:${aPct}%;background:${aColor};border-radius:3px"></div>
          </div>
          <span style="font-size:11px;font-weight:600;color:${aColor};min-width:28px;text-align:right">${d.actual}h</span>
        </div>
      </div>
    </td>`;
  }

  function diffBadge(booked, actual) {
    const diff = actual - booked;
    if (diff === 0 && booked === 0) return `<span style="color:#cbd5e1;font-size:11px">—</span>`;
    if (diff === 0) return `<span style="background:#dcfce7;color:#166534;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:600">On track</span>`;
    const isOver = diff > 0;
    return `<span style="background:${isOver?'#fef3c7':'#fee2e2'};color:${isOver?'#92400e':'#991b1b'};padding:2px 8px;border-radius:20px;font-size:11px;font-weight:600">${isOver?'+':''}${diff}h</span>`;
  }

  const projectCards = projectBlocks.map(({ proj, empRows, projBooked, projActual }) => `
  <div class="card" style="margin-bottom:16px;overflow:visible">
    <!-- Project header -->
    <div style="padding:14px 18px 12px;border-bottom:1px solid #f1f5f9;display:flex;align-items:center;gap:12px;flex-wrap:wrap">
      <div style="width:10px;height:10px;border-radius:50%;background:${proj.color};flex-shrink:0"></div>
      <div style="flex:1;min-width:0">
        <div style="font-size:15px;font-weight:700;color:#1e293b">${proj.name}</div>
        <div style="font-size:11px;color:#94a3b8;margin-top:1px">${proj.client || ''}</div>
      </div>
      <div style="display:flex;gap:16px;flex-shrink:0">
        <div style="text-align:right">
          <div style="font-size:13px;font-weight:700;color:#3b82f6">${projBooked}h</div>
          <div style="font-size:10px;color:#94a3b8">Booked</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:13px;font-weight:700;color:${projActual>projBooked?'#ef4444':'#22c55e'}">${projActual}h</div>
          <div style="font-size:10px;color:#94a3b8">Actual</div>
        </div>
        <div style="text-align:right">${diffBadge(projBooked, projActual)}<div style="font-size:10px;color:#94a3b8;margin-top:2px">Variance</div></div>
      </div>
    </div>
    <!-- Weekly table -->
    <div class="util-table-wrap">
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead>
          <tr style="border-bottom:2px solid #f1f5f9">
            <th style="text-align:left;padding:8px 18px;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.07em;min-width:160px;position:sticky;left:0;background:#fff;z-index:2">Employee</th>
            ${weeks.map(w => {
              const d = new Date(w + 'T00:00:00');
              return `<th style="padding:8px 6px;text-align:center;min-width:90px">
                <div style="font-size:12px;font-weight:700;color:#1e293b">${d.toLocaleDateString('en-US',{month:'short',day:'numeric'})}</div>
                <div style="font-size:10px;color:#94a3b8">${d.getFullYear()}</div>
              </th>`;
            }).join('')}
            <th style="padding:8px 18px;text-align:center;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;white-space:nowrap">Total</th>
            <th style="padding:8px 18px;text-align:right;font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase">Variance</th>
          </tr>
          <tr style="border-bottom:1px solid #f1f5f9;background:#fafbfc">
            <td style="padding:4px 18px;font-size:10px;color:#94a3b8;position:sticky;left:0;background:#fafbfc;z-index:2">
              <span style="color:#3b82f6;font-weight:600">■</span> Booked &nbsp;
              <span style="color:#22c55e;font-weight:600">■</span> Actual
            </td>
            ${weeks.map(() => `<td></td>`).join('')}
            <td></td><td></td>
          </tr>
        </thead>
        <tbody>
          ${empRows.map(({ emp, weekData, totBooked, totActual }) => `
          <tr style="border-bottom:1px solid #f8fafc" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''">
            <td style="padding:10px 18px;position:sticky;left:0;background:white;z-index:1;border-right:1px solid #f1f5f9">
              <div style="display:flex;align-items:center;gap:8px">
                ${avatar(emp, 'xs')}
                <div style="min-width:0">
                  <div style="font-weight:600;font-size:12px;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:110px">${emp.name}</div>
                  <div style="font-size:10px;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:110px">${emp.role}</div>
                </div>
              </div>
            </td>
            ${weekData.map(d => weekCell(d)).join('')}
            <td style="padding:6px 18px;text-align:center">
              <div style="font-size:12px;font-weight:700;color:#3b82f6">${totBooked}h</div>
              <div style="font-size:11px;color:#22c55e">${totActual}h</div>
            </td>
            <td style="padding:6px 18px;text-align:right">${diffBadge(totBooked, totActual)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`).join('');

  return `
  <!-- Stats bar -->
  <div class="byproj-stats">
    ${[
      {label:'People',          val: APP_DATA.employees.length, color:'#2563eb'},
      {label:'Active projects', val: activeProjCnt,             color:'#8b5cf6'},
      {label:'Booked hours',    val: totalBooked+'h',           color:'#3b82f6'},
      {label:'Actual hours',    val: totalActual+'h',           color:'#22c55e'},
      {label:'Avg utilization', val: avgUtil+'%',               color:'#f59e0b'},
    ].map(s=>`
      <div>
        <div style="font-size:22px;font-weight:800;color:${s.color}">${s.val}</div>
        <div style="font-size:11px;color:#64748b;font-weight:500">${s.label}</div>
      </div>`).join('')}
  </div>

  <!-- Date navigator + filters -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
    <div style="display:flex;align-items:center;gap:10px">
      <button class="date-nav-btn" ${canPrev?'':'disabled'} onclick="prevWeeks()">${ICONS.chevron_l}</button>
      <span style="font-size:15px;font-weight:700;color:#1e293b;white-space:nowrap">${rangeLabel}</span>
      <button class="date-nav-btn" ${canNext?'':'disabled'} onclick="nextWeeks()">${ICONS.chevron_r}</button>
      <button class="date-nav-today" onclick="goToToday()">Today</button>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <select class="filter-select" onchange="byProjFilterEmp=this.value;refreshUtil()">
        <option value="all" ${byProjFilterEmp==='all'?'selected':''}>All employees</option>
        ${APP_DATA.employees.map(e=>`<option value="${e.id}" ${byProjFilterEmp===e.id?'selected':''}>${e.name}</option>`).join('')}
      </select>
      <select class="filter-select" onchange="byProjFilterProj=this.value;refreshUtil()">
        <option value="all" ${byProjFilterProj==='all'?'selected':''}>All projects</option>
        ${APP_DATA.projects.map(p=>`<option value="${p.id}" ${byProjFilterProj===p.id?'selected':''}>${p.name}</option>`).join('')}
      </select>
      ${hasFilter ? `<button class="btn btn-secondary btn-sm" onclick="byProjFilterEmp='all';byProjFilterProj='all';refreshUtil()">Clear</button>` : ''}
    </div>
  </div>

  <!-- Legend -->
  <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;font-size:11px;color:#64748b">
    <span style="display:flex;align-items:center;gap:5px"><span style="width:10px;height:6px;border-radius:2px;background:#3b82f6;display:inline-block"></span>Booked hours</span>
    <span style="display:flex;align-items:center;gap:5px"><span style="width:10px;height:6px;border-radius:2px;background:#22c55e;display:inline-block"></span>Actual hours</span>
    <span style="display:flex;align-items:center;gap:5px"><span style="width:10px;height:6px;border-radius:2px;background:#ef4444;display:inline-block"></span>Actual &gt; Booked</span>
  </div>

  ${projectCards.length
    ? projectCards
    : `<div class="byproj-section"><div class="byproj-empty">No allocation data for this period.<br><span style="font-size:12px">Try navigating to a different date range or use Bulk booking to add hours.</span></div></div>`
  }`;
}

function refreshUtil() {
  document.getElementById('main-content').innerHTML = renderUtilization();
  attachHandlers('utilization');
}

function filterUtilRows(q) {
  document.querySelectorAll('.emp-row-data').forEach(row => {
    row.style.display = row.dataset.name.includes(q.toLowerCase()) ? '' : 'none';
  });
}

function prevWeeks() {
  if (utilViewMode === 'monthly') {
    gridMonthOffset = Math.max(0, gridMonthOffset - 1);
  } else {
    gridWeekOffset = Math.max(0, gridWeekOffset - GRID_WEEKS);
  }
  refreshUtil();
}

function nextWeeks() {
  if (utilViewMode === 'monthly') {
    gridMonthOffset = Math.min(Math.max(0, _allMonths().length - GRID_MONTHS), gridMonthOffset + 1);
  } else {
    gridWeekOffset = Math.min(
      Math.max(0, APP_DATA.weekLabels.length - GRID_WEEKS),
      gridWeekOffset + GRID_WEEKS
    );
  }
  refreshUtil();
}

function setUtilView(view) { utilView = view; refreshUtil(); }
function setUtilViewMode(mode) { utilViewMode = mode; refreshUtil(); }

function _jumpToCurrentWeek() {
  const now = new Date();
  const allWeeks = APP_DATA.weekLabels;
  let best = 0;
  for (let i = 0; i < allWeeks.length; i++) {
    if (new Date(allWeeks[i] + 'T00:00:00') <= now) best = i;
    else break;
  }
  gridWeekOffset = Math.max(0, Math.min(best, Math.max(0, allWeeks.length - GRID_WEEKS)));
}

function goToToday() {
  const now = new Date();
  if (utilViewMode === 'monthly') {
    const todayMonth = now.toISOString().slice(0, 7);
    const allM = _allMonths();
    let idx = allM.findIndex(m => m >= todayMonth);
    if (idx < 0) idx = allM.length - 1;
    gridMonthOffset = Math.max(0, Math.min(idx, Math.max(0, allM.length - GRID_MONTHS)));
  } else {
    const allWeeks = APP_DATA.weekLabels;
    let closest = 0, minDiff = Infinity;
    allWeeks.forEach((w, i) => {
      const diff = Math.abs(new Date(w + 'T00:00:00') - now);
      if (diff < minDiff) { minDiff = diff; closest = i; }
    });
    gridWeekOffset = Math.max(0, Math.min(closest, Math.max(0, allWeeks.length - GRID_WEEKS)));
  }
  refreshUtil();
}

function _fmtDateRange(weeks) {
  if (!weeks.length) return 'No data';
  const fmt = d => new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
  return `${fmt(weeks[0])} – ${fmt(weeks[weeks.length - 1])}`;
}

function _allMonths() {
  const seen = new Set(), months = [];
  APP_DATA.weekLabels.forEach(w => { const m = w.slice(0,7); if (!seen.has(m)) { seen.add(m); months.push(m); } });
  return months.sort();
}

function _fmtMonthKey(mk) {
  return new Date(mk + '-01T00:00:00').toLocaleDateString('en-US', { month:'short', year:'numeric' });
}

function _weeksForMonths(monthKeys) {
  const s = new Set(monthKeys);
  return APP_DATA.weekLabels.filter(w => s.has(w.slice(0, 7)));
}

// ---- CELL POPOVER (positioned above clicked cell) ----
let _popEmpId = '', _popWeekStart = '', _popCap = 40;

function openCellEditor(empId, weekStart, cellEl) {
  const emp = APP_DATA.getEmployee(empId);
  if (!emp) { toast('Employee not found', 'error'); return; }

  _popEmpId     = empId;
  _popWeekStart = weekStart;
  _popCap       = emp.hoursPerWeek || 40;

  const cap       = _popCap;
  const curAssign = APP_DATA.assignments.filter(a =>
    a.employeeId === empId && a.weekStart === weekStart
  );
  const totalBooked = curAssign.reduce((s,a) => s + a.hours, 0);
  const totalActual = curAssign.reduce((s,a) => s + (a.actualHours || 0), 0);

  const projectRows = APP_DATA.projects.map(proj => {
    const cur    = curAssign.find(a => a.projectId === proj.id);
    const booked = cur ? cur.hours : 0;
    const actual = cur ? (cur.actualHours || 0) : 0;
    const active = booked > 0 || actual > 0;
    return `
    <tr style="border-bottom:1px solid #f8fafc;${active?'background:#f0fdf4':''}">
      <td style="padding:6px 10px">
        <div style="display:flex;align-items:center;gap:7px">
          <div style="width:9px;height:9px;border-radius:50%;background:${proj.color};flex-shrink:0"></div>
          <span style="font-size:12px;font-weight:${active?'600':'400'};color:${active?'#1e293b':'#94a3b8'};
                       white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:140px"
                title="${proj.name}">${proj.name}</span>
        </div>
      </td>
      <td style="padding:6px 6px;text-align:center">
        <input type="number" class="popover-input pop-booked" data-proj="${proj.id}"
               value="${booked}" min="0" max="80" placeholder="0"
               oninput="updatePopoverTotal()" onfocus="this.select()">
      </td>
      <td style="padding:6px 6px;text-align:center">
        <input type="number" class="popover-input pop-actual" data-proj="${proj.id}"
               value="${actual}" min="0" max="80" placeholder="0"
               oninput="updatePopoverTotal()" onfocus="this.select()">
      </td>
    </tr>`;
  }).join('');

  showModal(`
  <div class="modal-header">
    <div>
      <span class="modal-title">${emp.name} &nbsp;·&nbsp; Week of ${_fmtWeek(weekStart)}</span>
      <div style="font-size:12px;color:#64748b;margin-top:2px" id="pop-total">${totalBooked}h booked · ${totalActual}h actual / ${cap}h cap</div>
    </div>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body" style="padding:0">
    <table class="popover-table" style="width:100%">
      <thead>
        <tr>
          <th style="text-align:left;padding:10px 14px;min-width:175px">Project</th>
          <th style="width:80px;text-align:center;padding:10px 8px">Booked</th>
          <th style="width:80px;text-align:center;padding:10px 8px">Actual</th>
        </tr>
      </thead>
      <tbody>${projectRows}</tbody>
    </table>
  </div>
  <div class="modal-footer">
    <span style="font-size:11px;color:#94a3b8;margin-right:auto">Set to 0 to clear &nbsp;·&nbsp; green = has hours</span>
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" id="pop-save-btn" onclick="saveCellPopover()">Save</button>
  </div>`);
}

function updatePopoverTotal() {
  const bookedInputs = document.querySelectorAll('.pop-booked');
  const actualInputs = document.querySelectorAll('.pop-actual');
  const totalB = Array.from(bookedInputs).reduce((s,i) => s + (parseInt(i.value)||0), 0);
  const totalA = Array.from(actualInputs).reduce((s,i) => s + (parseInt(i.value)||0), 0);
  const el = document.getElementById('pop-total');
  if (el) {
    const over = totalB > _popCap;
    el.textContent = `${totalB}h booked · ${totalA}h actual / ${_popCap}h cap`;
    el.style.color = over ? '#ef4444' : '#64748b';
  }
}

function closeCellPopover() {
  closeModal();
}

async function saveCellPopover() {
  const bookedInputs = document.querySelectorAll('.pop-booked');
  const actualInputs = document.querySelectorAll('.pop-actual');
  const totalB = Array.from(bookedInputs).reduce((s,i) => s + (parseInt(i.value)||0), 0);

  if (totalB > _popCap * 1.5 && !confirm(`${totalB}h booked exceeds capacity by >50%. Save anyway?`)) return;

  const btn = document.getElementById('pop-save-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }

  try {
    const existingByProj = {};
    APP_DATA.assignments
      .filter(a => a.employeeId === _popEmpId && a.weekStart === _popWeekStart)
      .forEach(a => existingByProj[a.projectId] = a);

    const ops = [];
    bookedInputs.forEach(inp => {
      const projId     = inp.dataset.proj;
      const booked     = parseInt(inp.value) || 0;
      const actualInp  = document.querySelector(`.pop-actual[data-proj="${projId}"]`);
      const actual     = parseInt(actualInp?.value) || 0;
      const wasPresent = !!existingByProj[projId];

      if (booked > 0 || actual > 0) {
        ops.push(DB.upsertAssignment(_popEmpId, projId, _popWeekStart, booked, actual));
      } else if (wasPresent) {
        ops.push(DB.deleteAssignment(_popEmpId, projId, _popWeekStart));
      }
    });

    await Promise.all(ops);
    await DB.loadAll();
    closeCellPopover();
    toast('Saved!', 'success');
    refreshUtil();
  } catch (err) {
    toast(err.message || 'Save failed', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'Save'; }
  }
}

// legacy stubs — not used but kept to avoid errors if referenced
function updateCellTotal() {}
async function saveCellEditor() {}

// ---- BULK ALLOCATION MODAL ----
function openBulkAllocation(empId = '', projId = '') {
  const today   = _todayMonday();
  const d4      = new Date(today + 'T00:00:00');
  d4.setDate(d4.getDate() + 21);                    // default: 4 weeks out
  const endDate = d4.toISOString().slice(0, 10); // 4 weeks default

  showModal(`
  <div class="modal-header">
    <span class="modal-title">${ICONS.layer} Bulk Allocation Entry</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body" style="min-width:520px">
    <div style="font-size:12px;color:#64748b;margin-bottom:14px;padding:8px 12px;background:#f0f9ff;border-radius:8px;border-left:3px solid #3b82f6">
      Set recurring hours for an employee on a project across a date range. Each week will be saved as a separate allocation.
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Employee *</label>
        <select class="form-input" id="ba-emp" onchange="previewBulkAllocation()">
          <option value="">— Select employee —</option>
          ${APP_DATA.employees.map(e =>
            `<option value="${e.id}" ${e.id === empId ? 'selected' : ''}>${e.name} (${e.hoursPerWeek}h/wk)</option>`
          ).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Project *</label>
        <select class="form-input" id="ba-proj" onchange="previewBulkAllocation()">
          <option value="">— Select project —</option>
          ${APP_DATA.projects.map(p =>
            `<option value="${p.id}" ${p.id === projId ? 'selected' : ''}>${p.name}</option>`
          ).join('')}
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">From Date *</label>
        <input type="date" class="form-input" id="ba-from" value="${today}"
               onchange="previewBulkAllocation()">
        <div style="font-size:10px;color:#94a3b8;margin-top:3px">Auto-rounds to Monday</div>
      </div>
      <div class="form-group">
        <label class="form-label">To Date *</label>
        <input type="date" class="form-input" id="ba-to" value="${endDate}"
               onchange="previewBulkAllocation()">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Hours / Week *</label>
        <input type="number" class="form-input" id="ba-hours" value="40" min="1" max="80"
               oninput="previewBulkAllocation()">
      </div>
      <div class="form-group" style="display:flex;align-items:flex-end">
        <button class="btn btn-secondary" style="width:100%" onclick="previewBulkAllocation()">
          Preview Weeks
        </button>
      </div>
    </div>
    <div id="ba-preview" style="margin-top:4px"></div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" id="ba-save" onclick="saveBulkAllocation()">
      ${ICONS.check} Save All Weeks
    </button>
  </div>`);

  if (empId) setTimeout(previewBulkAllocation, 50);
}

function previewBulkAllocation() {
  const empId   = document.getElementById('ba-emp')?.value;
  const projId  = document.getElementById('ba-proj')?.value;
  const fromRaw = document.getElementById('ba-from')?.value;
  const toRaw   = document.getElementById('ba-to')?.value;
  const hours   = parseInt(document.getElementById('ba-hours')?.value) || 0;
  const preview = document.getElementById('ba-preview');
  if (!preview) return;

  if (!empId || !projId || !fromRaw || !toRaw || !hours) {
    preview.innerHTML = '<div style="font-size:12px;color:#94a3b8;padding:8px 0">Fill all fields above to preview weeks.</div>';
    return;
  }

  const from  = _toMonday(fromRaw);
  const to    = _toMonday(toRaw);
  const emp   = APP_DATA.getEmployee(empId);
  const proj  = APP_DATA.getProject(projId);
  const weeks = _weeksInRange(from, to);

  if (weeks.length === 0) {
    preview.innerHTML = '<div style="font-size:12px;color:#ef4444">From date must be before To date.</div>';
    return;
  }
  if (weeks.length > 52) {
    preview.innerHTML = '<div style="font-size:12px;color:#ef4444">Max 52 weeks per bulk entry.</div>';
    return;
  }

  const cap = emp?.hoursPerWeek || 40;
  let hasOver = false;

  const rows = weeks.map(w => {
    const currentTotal = APP_DATA.assignments
      .filter(a => a.employeeId === empId && a.weekStart === w)
      .reduce((s,a) => s + a.hours, 0);
    const currentOnProj = APP_DATA.assignments
      .find(a => a.employeeId === empId && a.projectId === projId && a.weekStart === w)?.hours || 0;
    const afterTotal = currentTotal - currentOnProj + hours;
    const afterPct   = Math.round(afterTotal / cap * 100);
    const over       = afterTotal > cap;
    if (over) hasOver = true;
    return `<tr style="border-bottom:1px solid #f1f5f9">
      <td style="padding:5px 8px;font-size:12px">${_fmtWeek(w)}</td>
      <td style="padding:5px 8px;font-size:12px;text-align:center;font-weight:600">${hours}h</td>
      <td style="padding:5px 8px;font-size:12px;text-align:center;color:#64748b">${currentTotal}h now</td>
      <td style="padding:5px 8px;font-size:12px;text-align:center;font-weight:700;color:${over?'#ef4444':'#22c55e'}">
        ${afterTotal}h (${afterPct}%)${over?' ⚠':''}
      </td>
    </tr>`;
  });

  preview.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <div style="font-size:12px;font-weight:600;color:#374151">
        ${weeks.length} week${weeks.length!==1?'s':''} · ${emp?.name} → ${proj?.name}
      </div>
      <div style="font-size:11px;color:#64748b">${hours * weeks.length}h total</div>
    </div>
    ${hasOver ? `<div style="font-size:11px;color:#ef4444;margin-bottom:6px;padding:6px 10px;background:#fee2e2;border-radius:6px">
      ⚠ Some weeks will exceed capacity (${cap}h). Review before saving.
    </div>` : ''}
    <div style="max-height:200px;overflow-y:auto;border:1px solid #e2e8f0;border-radius:8px">
      <table style="width:100%;border-collapse:collapse">
        <thead style="position:sticky;top:0;background:#f8fafc">
          <tr style="font-size:11px;color:#94a3b8">
            <th style="padding:6px 8px;text-align:left;font-weight:500">Week</th>
            <th style="padding:6px 8px;text-align:center;font-weight:500">New Hours</th>
            <th style="padding:6px 8px;text-align:center;font-weight:500">Current</th>
            <th style="padding:6px 8px;text-align:center;font-weight:500">After Change</th>
          </tr>
        </thead>
        <tbody>${rows.join('')}</tbody>
      </table>
    </div>`;
}

async function saveBulkAllocation() {
  const empId  = document.getElementById('ba-emp')?.value;
  const projId = document.getElementById('ba-proj')?.value;
  const from   = _toMonday(document.getElementById('ba-from')?.value);
  const to     = _toMonday(document.getElementById('ba-to')?.value);
  const hours  = parseInt(document.getElementById('ba-hours')?.value) || 0;

  if (!empId || !projId || !hours) {
    toast('Please select employee, project, and enter hours.', 'error'); return;
  }

  const weeks = _weeksInRange(from, to);
  if (weeks.length === 0) { toast('Invalid date range.', 'error'); return; }

  const records = weeks.map(w => ({ employeeId: empId, projectId: projId, weekStart: w, hours }));

  const btn = document.getElementById('ba-save');
  if (btn) { btn.disabled = true; btn.textContent = `Saving ${records.length} weeks…`; }

  try {
    await DB.batchUpsertAssignments(records);
    await DB.loadAll();
    closeModal();
    toast(`${records.length} week allocations saved!`, 'success');
    gridWeekOffset = 0;
    navigate('utilization');
  } catch (err) {
    toast(err.message || 'Save failed', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'Save All Weeks'; }
  }
}

// ============================================================
// EMPLOYEES
// ============================================================
function renderEmployees(search = '', filter = 'all') {
  const emps = APP_DATA.employees.filter(e => {
    const ms = !search || e.name.toLowerCase().includes(search) || e.role.toLowerCase().includes(search);
    const mf = filter === 'all'
      || (filter === 'over'  && e.utilization > 100)
      || (filter === 'avail' && e.utilization < 50)
      || filter === e.dept?.toLowerCase();
    return ms && mf;
  }).sort((a, b) => a.name.localeCompare(b.name));

  return `
  <div class="section-header">
    <div>
      <div class="section-title">Team Members</div>
      <div class="section-sub">${APP_DATA.employees.length} employees · ${APP_DATA.projects.length} active projects</div>
    </div>
    <button class="btn btn-primary" onclick="openAddEmployee()">${ICONS.plus} Add Employee</button>
  </div>

  <div class="toolbar">
    <div class="search-bar">
      ${ICONS.search}
      <input type="text" placeholder="Search by name or role…" id="emp-search" value="${search}"
        oninput="empSearch=this.value;document.getElementById('main-content').innerHTML=renderEmployees(empSearch,empFilter);attachHandlers('employees')">
    </div>
    <select class="filter-select"
            onchange="empFilter=this.value;document.getElementById('main-content').innerHTML=renderEmployees(empSearch,empFilter);attachHandlers('employees')">
      <option value="all"      ${filter==='all'?'selected':''}>All</option>
      <option value="delivery" ${filter==='delivery'?'selected':''}>Delivery</option>
      <option value="pmo"      ${filter==='pmo'?'selected':''}>PMO</option>
      <option value="leadership" ${filter==='leadership'?'selected':''}>Leadership</option>
      <option value="over"     ${filter==='over'?'selected':''}>Overallocated</option>
      <option value="avail"    ${filter==='avail'?'selected':''}>Available</option>
    </select>
    <div class="badge blue">${emps.length} shown</div>
  </div>

  <div class="emp-grid">
    ${emps.map(emp => {
      const projObjs = emp.projects.map(pid => APP_DATA.getProject(pid)).filter(Boolean);
      return `
      <div class="emp-card">
        <div class="emp-card-actions">
          <button onclick="openEditEmployee('${emp.id}')" title="Edit">${ICONS.edit}</button>
          <button onclick="confirmDeleteEmployee('${emp.id}')" title="Delete" style="color:#ef4444">${ICONS.trash}</button>
        </div>
        <div class="emp-card-top">
          ${avatar(emp, 'lg')}
          <div style="flex:1;min-width:0">
            <div class="emp-name">${emp.name}</div>
            <div class="emp-role">${emp.role}</div>
            <span class="emp-dept">${emp.dept || 'Delivery'}</span>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:20px;font-weight:800;color:${emp.utilization>100?'#ef4444':emp.utilization>=80?'#f59e0b':'#22c55e'}">${emp.utilization}%</div>
            <div style="font-size:10px;color:#64748b">utilization</div>
          </div>
        </div>

        <div style="height:6px;background:#f1f5f9;border-radius:3px;margin-bottom:14px">
          <div style="height:100%;width:${Math.min(emp.utilization,100)}%;background:${emp.utilization>100?'#ef4444':emp.utilization>=80?'#f59e0b':'#22c55e'};border-radius:3px;transition:width 0.3s"></div>
        </div>

        ${projObjs.length ? `
        <div style="margin-bottom:10px">
          <div style="font-size:10px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:5px">Projects</div>
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            ${projObjs.map(p=>`<span class="proj-badge" style="background:${p.color}">${p.client || p.name}</span>`).join('')}
          </div>
        </div>` : '<div style="font-size:11px;color:#94a3b8;margin-bottom:10px">No active projects</div>'}

        <div>
          <div style="font-size:10px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:5px">Skills</div>
          <div class="skills-tags">
            ${emp.skills.slice(0,4).map((s,i)=>`<span class="skill-tag${i<2?' highlight':''}">${s}</span>`).join('')}
            ${emp.skills.length>4?`<span class="skill-tag">+${emp.skills.length-4}</span>`:''}
          </div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:12px;border-top:1px solid #f1f5f9">
          <span style="font-size:11px;color:#64748b">${emp.hoursPerWeek}h/week</span>
          <span style="font-size:11px;color:#64748b">${emp.location || 'India'}</span>
          <button class="btn btn-secondary btn-sm" style="font-size:11px"
                  onclick="openBulkAllocation('${emp.id}')">+ Allocate</button>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ============================================================
// PROJECTS
// ============================================================
function renderProjects() {
  return `
  <div class="section-header">
    <div>
      <div class="section-title">Projects</div>
      <div class="section-sub">${APP_DATA.projects.length} projects tracked</div>
    </div>
    <button class="btn btn-primary" onclick="openAddProject()">${ICONS.plus} Add Project</button>
  </div>

  <div class="toolbar">
    <div class="search-bar">
      ${ICONS.search}
      <input type="text" placeholder="Search projects…" oninput="filterProjects(this.value)" id="proj-search">
    </div>
    <select class="filter-select" onchange="filterProjectsByStatus(this.value)">
      <option value="all">All Status</option>
      <option value="Active">Active</option>
      <option value="On Hold">On Hold</option>
      <option value="Completed">Completed</option>
    </select>
  </div>

  <div class="proj-grid" id="proj-grid">
    ${APP_DATA.projects.slice().sort((a, b) => a.name.localeCompare(b.name)).map(p => renderProjectCard(p)).join('')}
  </div>`;
}

function renderProjectCard(p) {
  const members        = p.members.map(id => APP_DATA.getEmployee(id)).filter(Boolean);
  const visibleMembers = members.slice(0, 5);
  const extra          = members.length - 5;
  return `
  <div class="proj-card" data-name="${p.name.toLowerCase()}" data-status="${p.status}">
    <div class="proj-card-bar" style="background:${p.color}"></div>
    <div class="proj-card-body">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px">
        <div>
          <div class="proj-card-title">${p.name}</div>
          <div class="proj-card-client">${p.client}</div>
        </div>
        <div style="display:flex;gap:6px">
          <button class="btn btn-secondary btn-sm btn-icon" onclick="openEditProject('${p.id}')">${ICONS.edit}</button>
          <button class="btn btn-danger btn-sm btn-icon"    onclick="confirmDeleteProject('${p.id}')">${ICONS.trash}</button>
        </div>
      </div>

      <span class="proj-status ${p.status==='Active'?'active':p.status==='On Hold'?'on-hold':'completed'}">
        <span style="width:6px;height:6px;border-radius:50%;background:currentColor;display:inline-block"></span>
        ${p.status}
      </span>

      <div class="proj-stats">
        <div><div class="proj-stat-label">Members</div><div class="proj-stat-value">${p.members.length}</div></div>
        <div><div class="proj-stat-label">Total Hours</div><div class="proj-stat-value">${p.totalHours.toLocaleString()}h</div></div>
        <div><div class="proj-stat-label">Phase</div><div class="proj-stat-value" style="font-size:12px">${p.phase}</div></div>
        <div><div class="proj-stat-label">Budget</div><div class="proj-stat-value" style="font-size:12px">$${(p.budget/1000).toFixed(0)}K</div></div>
      </div>

      <div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:#64748b;margin-bottom:4px">
          <span>Progress</span><span style="font-weight:600;color:#374151">${p.progress}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${p.progress}%;background:${p.color}"></div></div>
      </div>

      <div class="proj-members" style="margin-top:14px;display:flex;align-items:center">
        ${visibleMembers.map(m => `<div style="width:26px;height:26px;border-radius:50%;background:${m.color};border:2px solid white;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:white;margin-left:-6px" title="${m.name}">${m.initials}</div>`).join('')}
        ${extra > 0 ? `<span class="more">+${extra} more</span>` : ''}
      </div>
      <div style="font-size:11px;color:#94a3b8;margin-top:8px">${p.startDate || '—'} → ${p.endDate || '—'}</div>

      <button class="btn btn-secondary btn-sm" style="width:100%;margin-top:12px"
              onclick="openBulkAllocation('','${p.id}')">
        ${ICONS.layer} Bulk Allocate to Project
      </button>
    </div>
  </div>`;
}

function filterProjects(q) {
  document.querySelectorAll('#proj-grid .proj-card').forEach(c => {
    c.style.display = c.dataset.name.includes(q.toLowerCase()) ? '' : 'none';
  });
}
function filterProjectsByStatus(s) {
  document.querySelectorAll('#proj-grid .proj-card').forEach(c => {
    c.style.display = (s === 'all' || c.dataset.status === s) ? '' : 'none';
  });
}

// ============================================================
// SKILLS MATRIX — editable cells
// ============================================================
let _skillFilterVal  = '';
let _selectedSkills  = new Set();   // empty = show all
let _skillChipSearch = '';

function renderSkills() {
  const allSkills = APP_DATA.skills.slice().sort((a, b) => a.localeCompare(b));
  const allEmps   = APP_DATA.employees.slice().sort((a, b) => a.name.localeCompare(b.name));
  const emps      = _selectedSkills.size > 0
    ? allEmps.filter(e => [..._selectedSkills].some(s => (e.skillLevels[s] || 0) > 0))
    : allEmps;

  // chips visible in the picker (filtered by search text)
  const visibleChips = _skillChipSearch
    ? allSkills.filter(s => s.toLowerCase().includes(_skillChipSearch.toLowerCase()))
    : allSkills;

  // columns shown in the matrix (selected, or all if none selected)
  const matrixSkills = _selectedSkills.size > 0
    ? allSkills.filter(s => _selectedSkills.has(s))
    : allSkills;

  function dotHTML(level, empId, skill) {
    const cls    = ['none','l1','l2','l3','l4'][level] || 'none';
    const label  = ['','1','2','3','4'][level] || '';
    const titles = ['No skill','Beginner','Intermediate','Advanced','Expert'];
    const safeSkill = skill.replace(/'/g,"\\'").replace(/"/g,'&quot;');
    return `<div class="matrix-dot ${cls}"
                 onclick="showSkillPopup(event,'${empId}','${safeSkill}',${level})"
                 title="${titles[level]||'None'} · click to change"
                 style="cursor:pointer;transition:transform 0.1s"
                 onmouseover="this.style.transform='scale(1.25)'"
                 onmouseout="this.style.transform=''">${label}</div>`;
  }

  const coverage = matrixSkills.map(skill => {
    const count = allEmps.filter(e => (e.skillLevels[skill] || 0) > 0).length;
    return { skill, count, pct: allEmps.length ? Math.round(count/allEmps.length*100) : 0 };
  }).sort((a,b) => b.count - a.count);

  const selCount = _selectedSkills.size;

  return `
  <div class="section-header">
    <div>
      <div class="section-title">Skills Matrix</div>
      <div class="section-sub">${emps.length} ${_selectedSkills.size > 0 ? `of ${allEmps.length}` : ''} employees · ${allSkills.length} skills · click any cell to set proficiency</div>
    </div>
    <button class="btn btn-secondary" onclick="exportSkillsMatrix()">${ICONS.download} Export</button>
  </div>

  <!-- ── Skill Picker ── -->
  <div class="card" style="margin-bottom:16px;padding:14px 16px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
      <div class="search-bar" style="flex:1;max-width:340px">
        ${ICONS.search}
        <input type="text" id="skill-chip-search" placeholder="Search skills…"
          value="${_skillChipSearch.replace(/"/g,'&quot;')}"
          oninput="_skillChipSearch=this.value;_refreshSkillsPage()"
          autocomplete="off">
      </div>
      <button class="btn btn-secondary btn-sm" onclick="_skillSelectAll()">Select all</button>
      <button class="btn btn-secondary btn-sm" onclick="_skillClear()">Clear</button>
      <span style="font-size:12px;color:#94a3b8;margin-left:4px">
        ${selCount > 0 ? `${selCount} selected` : 'Showing all'}
      </span>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:7px;max-height:160px;overflow-y:auto;padding:2px 0" id="skill-chip-cloud">
      ${visibleChips.length
        ? visibleChips.map(s => {
            const active = _selectedSkills.has(s);
            return `<button
              class="skill-chip${active?' skill-chip-active':''}"
              onclick="_toggleSkillChip('${s.replace(/'/g,"\\'")}')"
              title="${s}">${s}</button>`;
          }).join('')
        : `<span style="font-size:12px;color:#94a3b8">No skills match "${_skillChipSearch}"</span>`
      }
    </div>
    <div style="display:flex;gap:16px;margin-top:10px;padding-top:10px;border-top:1px solid #f1f5f9;flex-wrap:wrap">
      <span style="font-size:11px;color:#64748b;font-weight:600;white-space:nowrap;align-self:center">Level:</span>
      <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:#64748b"><span style="width:12px;height:12px;border-radius:50%;background:#e2e8f0;display:inline-block"></span>0 · None</span>
      <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:#64748b"><span style="width:12px;height:12px;border-radius:50%;background:#bbf7d0;display:inline-block"></span>1 · Beginner</span>
      <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:#64748b"><span style="width:12px;height:12px;border-radius:50%;background:#4ade80;display:inline-block"></span>2 · Intermediate</span>
      <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:#64748b"><span style="width:12px;height:12px;border-radius:50%;background:#16a34a;display:inline-block"></span>3 · Advanced</span>
      <span style="display:flex;align-items:center;gap:5px;font-size:11px;color:#64748b"><span style="width:12px;height:12px;border-radius:50%;background:#1e3a8a;display:inline-block"></span>4 · Expert</span>
    </div>
  </div>

  <!-- ── Matrix ── -->
  <div class="card" style="margin-bottom:20px">
    <div class="card-header">
      <span class="card-title">Employee × Skill Matrix</span>
      <span style="font-size:11px;color:#94a3b8">Click any dot to cycle level: None → 1 → 2 → 3 → 4 → None</span>
    </div>
    <div class="matrix-wrap">
      <table class="matrix-table">
        <thead>
          <tr>
            <th class="emp-head">Employee</th>
            ${matrixSkills.map(s => `<th class="skill-head" title="${s}">${s}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${emps.map(emp => `
          <tr>
            <td class="emp-cell">
              <div style="display:flex;align-items:center;gap:8px">
                ${avatar(emp, 'xs')}
                <div>
                  <div style="font-weight:600;font-size:12px">${emp.name}</div>
                  <div style="font-size:10px;color:#94a3b8">${emp.role}</div>
                </div>
              </div>
            </td>
            ${matrixSkills.map(skill => {
              const level = emp.skillLevels[skill] || 0;
              return `<td style="text-align:center">${dotHTML(level, emp.id, skill)}</td>`;
            }).join('')}
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- ── Coverage Summary ── -->
  <div class="card">
    <div class="card-header"><span class="card-title">Skill Coverage Summary</span></div>
    <div class="card-body" style="padding:0">
      <table class="coverage-table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Coverage</th>
            <th style="width:200px">Distribution</th>
            <th style="text-align:right">Employees</th>
          </tr>
        </thead>
        <tbody>
          ${coverage.map(c => `
          <tr>
            <td style="font-weight:500">${c.skill}</td>
            <td><span class="badge ${c.pct>=50?'green':c.pct>=25?'amber':'red'}">${c.pct}%</span></td>
            <td>
              <div class="coverage-bar-wrap">
                <div class="coverage-bar">
                  <div class="coverage-bar-fill" style="width:${c.pct}%;background:${c.pct>=50?'#22c55e':c.pct>=25?'#f59e0b':'#ef4444'}"></div>
                </div>
              </div>
            </td>
            <td style="text-align:right;color:#64748b">${c.count} / ${allEmps.length}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

function _refreshSkillsPage() {
  document.getElementById('main-content').innerHTML = renderSkills();
  attachHandlers('skills');
}

function _toggleSkillChip(skillName) {
  if (_selectedSkills.has(skillName)) _selectedSkills.delete(skillName);
  else _selectedSkills.add(skillName);
  _refreshSkillsPage();
}

function _skillSelectAll() {
  const chips = _skillChipSearch
    ? APP_DATA.skills.filter(s => s.toLowerCase().includes(_skillChipSearch.toLowerCase()))
    : APP_DATA.skills;
  chips.forEach(s => _selectedSkills.add(s));
  _refreshSkillsPage();
}

function _skillClear() {
  _selectedSkills.clear();
  _skillChipSearch = '';
  _refreshSkillsPage();
}

function showSkillPopup(event, empId, skillName, currentLevel) {
  event.stopPropagation();
  const emp = APP_DATA.getEmployee(empId);
  const empName = emp ? emp.name : '';
  const levelNames = ['No skill','Beginner','Intermediate','Advanced','Expert'];

  let popup = document.getElementById('skill-rating-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'skill-rating-popup';
    document.body.appendChild(popup);
    document.addEventListener('click', () => {
      const p = document.getElementById('skill-rating-popup');
      if (p) p.classList.remove('visible');
    });
  }

  const btns = [0,1,2,3,4].map(v => {
    const active = v === currentLevel ? ' srp-active' : '';
    const lbl = v === 0 ? '0' : v;
    return `<button class="srp-btn srp-${v}${active}"
      onclick="setSkillLevelDirect('${empId}','${skillName.replace(/'/g,"\\'")}',${v})"
      onmouseover="document.getElementById('srp-hover-label').textContent='${levelNames[v]}'"
      onmouseout="document.getElementById('srp-hover-label').textContent='${levelNames[currentLevel]}'"
      title="${levelNames[v]}">${lbl}</button>`;
  }).join('');

  popup.innerHTML = `
    <div class="srp-skill">${skillName}</div>
    <div class="srp-emp">${empName}</div>
    <div class="srp-btns">${btns}</div>
    <div class="srp-label" id="srp-hover-label">${levelNames[currentLevel]}</div>`;

  // Position popup near the clicked cell
  const rect = event.currentTarget.getBoundingClientRect();
  const pw = 240, ph = 130;
  let left = rect.left + window.scrollX - pw/2 + rect.width/2;
  let top  = rect.bottom + window.scrollY + 8;
  if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;
  if (left < 8) left = 8;
  if (top + ph > window.innerHeight + window.scrollY - 8) top = rect.top + window.scrollY - ph - 8;

  popup.style.left = left + 'px';
  popup.style.top  = top  + 'px';
  popup.classList.add('visible');
}

async function setSkillLevelDirect(empId, skillName, newLevel) {
  const popup = document.getElementById('skill-rating-popup');
  if (popup) popup.classList.remove('visible');
  const levelNames = ['removed','Beginner','Intermediate','Advanced','Expert'];
  try {
    await DB.updateSkillLevel(empId, skillName, newLevel);
    await DB.loadAll();
    document.getElementById('main-content').innerHTML = renderSkills();
    attachHandlers('skills');
    toast(`${skillName}: ${newLevel ? levelNames[newLevel] : 'skill removed'}`, newLevel ? 'success' : '');
  } catch (err) {
    toast(err.message || 'Skill update failed', 'error');
  }
}

// ============================================================
// FORECAST — fully data-driven from real assignments in Supabase
// ============================================================

// Build monthly data from actual assignments
function _buildForecastData() {
  // Group week_starts by month key "Apr 26"
  const weeksByMonth = {};
  APP_DATA.weekLabels.forEach(w => {
    const key = _fmtMonth(w);
    if (!weeksByMonth[key]) weeksByMonth[key] = [];
    weeksByMonth[key].push(w);
  });

  const months = Object.keys(weeksByMonth).sort((a, b) => {
    const da = new Date('01 ' + a), db = new Date('01 ' + b);
    return da - db;
  });

  // Monthly total capacity = sum(emp.hoursPerWeek) × weeks in month
  const totalCapPerWeek = APP_DATA.employees.reduce((s, e) => s + e.hoursPerWeek, 0);

  const capacity = months.map(m => totalCapPerWeek * weeksByMonth[m].length);

  // Monthly actual hours (demand = what's actually allocated)
  const demand = months.map(m => {
    const weeksInMonth = weeksByMonth[m];
    return APP_DATA.assignments
      .filter(a => weeksInMonth.includes(a.weekStart))
      .reduce((s, a) => s + a.hours, 0);
  });

  // By project per month
  const byProject = {};
  APP_DATA.projects.forEach(p => {
    byProject[p.client || p.name] = months.map(m => {
      const weeksInMonth = weeksByMonth[m];
      return APP_DATA.assignments
        .filter(a => a.projectId === p.id && weeksInMonth.includes(a.weekStart))
        .reduce((s, a) => s + a.hours, 0);
    });
  });

  return { months, capacity, demand, byProject, weeksByMonth };
}

function renderForecast() {
  const fd = _buildForecastData();
  const { months, capacity, demand } = fd;

  const totalActualHrs = demand.reduce((s,v)=>s+v,0);
  const totalCapHrs    = capacity.reduce((s,v)=>s+v,0);
  const avgMonthUtil   = months.length ? Math.round(totalActualHrs / months.length) : 0;
  const overMonths     = months.filter((_,i) => demand[i] > capacity[i]).length;

  return `
  <div class="section-header">
    <div>
      <div class="section-title">Capacity Forecast</div>
      <div class="section-sub">
        ${months.length ? `${months[0]} – ${months[months.length-1]} · ${months.length} months` : 'No data yet — add assignments first'}
        · All data live from Supabase
      </div>
    </div>
    <button class="btn btn-secondary" onclick="exportForecast()">${ICONS.download} Export</button>
  </div>

  <div class="kpi-grid" style="margin-bottom:20px">
    <div class="kpi-card">
      <div class="kpi-icon" style="background:#dbeafe">${ICONS.clock.replace('currentColor','#2563eb')}</div>
      <div class="kpi-value">${totalActualHrs.toLocaleString()}h</div>
      <div class="kpi-label">Total Allocated Hours</div>
      <div class="kpi-delta neutral">${APP_DATA.assignments.length} assignments</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon" style="background:#dcfce7">${ICONS.trend_up.replace('currentColor','#16a34a')}</div>
      <div class="kpi-value">${avgMonthUtil.toLocaleString()}h</div>
      <div class="kpi-label">Avg Monthly Demand</div>
      <div class="kpi-delta neutral">Across ${months.length} months</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon" style="background:#fee2e2">${ICONS.users.replace('currentColor','#dc2626')}</div>
      <div class="kpi-value">${totalCapHrs.toLocaleString()}h</div>
      <div class="kpi-label">Total Capacity</div>
      <div class="kpi-delta neutral">${APP_DATA.employees.length} employees</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon" style="background:${overMonths?'#fee2e2':'#dcfce7'}">${ICONS.alert.replace('currentColor',overMonths?'#dc2626':'#16a34a')}</div>
      <div class="kpi-value" style="color:${overMonths?'#dc2626':'#22c55e'}">${overMonths}</div>
      <div class="kpi-label">Months Over Capacity</div>
      <div class="kpi-delta ${overMonths?'down':'neutral'}">${overMonths?'Needs attention':'All months within capacity'}</div>
    </div>
  </div>

  <div class="chart-grid-2">
    <div class="card">
      <div class="card-header">
        <span class="card-title">Capacity vs Allocated Hours (Monthly)</span>
        <div style="display:flex;gap:12px;font-size:11px">
          <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:3px;background:#3b82f6;display:inline-block"></span>Capacity</span>
          <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:3px;background:#ef4444;display:inline-block"></span>Allocated</span>
        </div>
      </div>
      <div class="card-body"><canvas id="chart-cap" height="240"></canvas></div>
    </div>
    <div class="card">
      <div class="card-header"><span class="card-title">Allocated Hours by Project (Monthly)</span></div>
      <div class="card-body"><canvas id="chart-proj-demand" height="240"></canvas></div>
    </div>
  </div>

  <div class="card">
    <div class="card-header"><span class="card-title">Monthly Detail — Capacity vs Allocated</span></div>
    <div class="card-body" style="padding:0">
      <table class="coverage-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Weeks</th>
            <th>Capacity (h)</th>
            <th>Allocated (h)</th>
            <th>Gap</th>
            <th>Utilization</th>
            <th style="width:140px">Bar</th>
          </tr>
        </thead>
        <tbody>
          ${months.map((m,i)=>{
            const cap  = capacity[i];
            const dem  = demand[i];
            const gap  = cap - dem;
            const util = cap ? Math.round(dem / cap * 100) : 0;
            const wks  = fd.weeksByMonth[m]?.length || 0;
            return `<tr>
              <td style="font-weight:600">${m}</td>
              <td style="color:#64748b">${wks}w</td>
              <td>${cap.toLocaleString()}h</td>
              <td style="font-weight:600">${dem.toLocaleString()}h</td>
              <td><span class="badge ${gap>=0?'green':'red'}">${gap>=0?'+':''}${gap.toLocaleString()}h</span></td>
              <td><span class="badge ${util>100?'red':util>=80?'amber':'green'}">${util}%</span></td>
              <td>
                <div class="coverage-bar-wrap">
                  <div class="coverage-bar" style="height:8px">
                    <div class="coverage-bar-fill" style="width:${Math.min(util,100)}%;background:${util>100?'#ef4444':util>=80?'#f59e0b':'#22c55e'}"></div>
                  </div>
                </div>
              </td>
            </tr>`;
          }).join('')}
          ${!months.length ? `<tr><td colspan="7" style="text-align:center;color:#94a3b8;padding:24px">No assignment data found. Add allocations in the Utilization page.</td></tr>` : ''}
        </tbody>
      </table>
    </div>
  </div>`;
}

// ============================================================
// PROJECT BOARD — functional kanban with status moves + localStorage
// ============================================================
const BOARD_COLS = [
  { id:'todo',        label:'To Do',       color:'#64748b' },
  { id:'in_progress', label:'In Progress', color:'#3b82f6' },
  { id:'review',      label:'In Review',   color:'#f59e0b' },
  { id:'done',        label:'Done',        color:'#22c55e' },
];

function _saveBoardTasks() {
  try { localStorage.setItem('shcm_board_tasks', JSON.stringify(APP_DATA.boardTasks)); } catch {}
}

function _loadBoardTasks() {
  try {
    const saved = localStorage.getItem('shcm_board_tasks');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) APP_DATA.boardTasks = parsed;
    }
  } catch {}
}

function renderBoard() {
  const projFilter = 'all'; // can make stateful if needed

  return `
  <div class="section-header">
    <div>
      <div class="section-title">Project Board</div>
      <div class="section-sub">Kanban · ${APP_DATA.boardTasks.length} tasks · use "Move to" to change columns</div>
    </div>
    <button class="btn btn-primary" onclick="openAddTask()">${ICONS.plus} Add Task</button>
  </div>

  <div class="toolbar">
    <div class="search-bar">
      ${ICONS.search}
      <input type="text" placeholder="Search tasks…" oninput="filterBoardCards(this.value)">
    </div>
    <select class="filter-select" onchange="filterBoardByProject(this.value)">
      <option value="all">All Projects</option>
      ${APP_DATA.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('')}
    </select>
    <div style="margin-left:auto;display:flex;gap:6px">
      ${BOARD_COLS.map(c=>`
        <span class="badge" style="background:${c.color}20;color:${c.color}">
          ${c.label}: ${APP_DATA.boardTasks.filter(t=>t.status===c.id).length}
        </span>`).join('')}
    </div>
  </div>

  <div class="kanban-board" id="kanban-board">
    ${BOARD_COLS.map(col => {
      const tasks = APP_DATA.boardTasks.filter(t => t.status === col.id);
      return `
      <div class="kanban-col" data-col="${col.id}">
        <div class="kanban-col-header">
          <span class="kanban-col-title" style="color:${col.color}">● ${col.label}</span>
          <span class="kanban-count">${tasks.length}</span>
        </div>
        <div class="kanban-tasks" id="col-${col.id}">
          ${tasks.map(t => renderKanbanCard(t)).join('')}
        </div>
        <button onclick="openAddTask('${col.id}')"
                style="width:100%;background:transparent;border:1.5px dashed #cbd5e1;border-radius:8px;padding:8px;color:#94a3b8;font-size:12px;cursor:pointer;margin-top:8px;font-family:inherit">
          + Add card
        </button>
      </div>`;
    }).join('')}
  </div>`;
}

function renderKanbanCard(t) {
  const priority = (t.priority || 'Medium').toLowerCase();
  const moveOpts = BOARD_COLS
    .filter(c => c.id !== t.status)
    .map(c => `<option value="${c.id}">${c.label}</option>`)
    .join('');

  const taskIdExpr = typeof t.id === 'number' ? t.id : `'${t.id}'`;

  return `
  <div class="kanban-card" data-task="${t.id}" data-proj="${t.project || ''}">
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:6px;margin-bottom:6px">
      <div class="kanban-card-title" style="flex:1">${t.title}</div>
      <span class="priority-badge ${priority}">${t.priority || 'Medium'}</span>
    </div>
    <div class="kanban-proj" style="color:#64748b;font-size:11px;margin-bottom:6px">${t.projectName || ''}</div>
    <div class="kanban-tags" style="margin-bottom:8px">
      ${(t.tags||[]).map(tag=>`<span class="kanban-tag">${tag}</span>`).join('')}
    </div>
    <div class="kanban-footer" style="display:flex;align-items:center;justify-content:space-between;gap:6px">
      <span class="kanban-date" style="font-size:10px;color:#94a3b8">${t.dueDate ? 'Due '+t.dueDate : ''}</span>
      <select style="font-size:10px;border:1px solid #e2e8f0;border-radius:5px;padding:3px 6px;color:#64748b;cursor:pointer;background:white;font-family:inherit"
              onchange="moveTask(${taskIdExpr},this.value);this.value=''"
              title="Move to column">
        <option value="">Move to…</option>
        ${moveOpts}
      </select>
    </div>
  </div>`;
}

function moveTask(taskId, newStatus) {
  const task = APP_DATA.boardTasks.find(t => t.id == taskId);
  if (!task || !newStatus) return;
  const oldStatus = task.status;
  task.status = newStatus;
  _saveBoardTasks();
  navigate('board');
  const labelMap = {todo:'To Do', in_progress:'In Progress', review:'In Review', done:'Done'};
  toast(`Moved to ${labelMap[newStatus] || newStatus}`, 'success');
}

function filterBoardCards(q) {
  document.querySelectorAll('.kanban-card').forEach(card => {
    const title = card.querySelector('.kanban-card-title')?.textContent.toLowerCase() || '';
    card.style.display = title.includes(q.toLowerCase()) ? '' : 'none';
  });
}

function filterBoardByProject(projId) {
  document.querySelectorAll('.kanban-card').forEach(card => {
    card.style.display = (projId === 'all' || card.dataset.proj === projId) ? '' : 'none';
  });
}

// ============================================================
// ============================================================
// MODAL SKILL EDITOR HELPERS
// ============================================================
function _skillLevelLabel(l) {
  return ['', 'Beginner', 'Intermediate', 'Advanced', 'Expert'][l] || '';
}

function _renderSkillsSection() {
  const added = new Set(_modalSkills.map(s => s.name));
  const suggestions = APP_DATA.skills.filter(s => !added.has(s)).slice(0, 14);

  const rows = _modalSkills.map((s, idx) => `
    <div class="msk-row">
      <span class="msk-name" title="${s.name}">${s.name}</span>
      <div class="msk-levels">
        ${[1,2,3,4].map(l =>
          `<button class="msk-dot${l <= s.level ? ' active' : ''}" onclick="_setModalSkillLevel(${idx},${l})">${l}</button>`
        ).join('')}
      </div>
      <span class="msk-label">${_skillLevelLabel(s.level)}</span>
      <button class="msk-remove" onclick="_removeModalSkill(${idx})">×</button>
    </div>`).join('');

  return `
  <div class="form-group" style="margin-top:4px">
    <label class="form-label">Skills &amp; Proficiency <span style="font-weight:400;color:#94a3b8">(1=Beginner · 4=Expert)</span></label>
    <div class="msk-list" id="msk-list">
      ${rows || '<div style="color:#94a3b8;font-size:12px;padding:4px 0">No skills added yet — use the field below</div>'}
    </div>
    <div class="msk-add-row">
      <input class="form-input" id="msk-input"
             placeholder="Search or type a new skill name…"
             oninput="_filterSkillSuggestions()"
             onkeydown="if(event.key==='Enter'){_addModalSkillFromInput();event.preventDefault()}">
      <button class="btn btn-secondary btn-sm" style="white-space:nowrap" onclick="_addModalSkillFromInput()">+ Add</button>
      <div class="msk-suggestions" id="msk-suggestions" style="display:none"></div>
    </div>
    ${suggestions.length ? `
    <div class="msk-quick">
      <span style="font-size:11px;color:#94a3b8;font-weight:600;white-space:nowrap">Quick add:</span>
      ${suggestions.map(s => `<button class='msk-quick-btn' onclick='_addModalSkill(${JSON.stringify(s)})'>+ ${s}</button>`).join('')}
    </div>` : ''}
  </div>`;
}

function _refreshSkillsSection() {
  const c = document.getElementById('msk-container');
  if (c) c.innerHTML = _renderSkillsSection();
}

function _setModalSkillLevel(idx, level) {
  if (_modalSkills[idx]) { _modalSkills[idx].level = level; _refreshSkillsSection(); }
}

function _removeModalSkill(idx) {
  _modalSkills.splice(idx, 1);
  _refreshSkillsSection();
}

function _addModalSkill(name) {
  const n = (name || '').trim();
  if (!n) return;
  if (_modalSkills.find(x => x.name === n)) { toast(`"${n}" is already in the list`, 'error'); return; }
  _modalSkills.push({ name: n, level: 3 });
  _refreshSkillsSection();
}

function _addModalSkillFromInput() {
  const inp = document.getElementById('msk-input');
  if (!inp?.value.trim()) return;
  _addModalSkill(inp.value.trim());
  inp.value = '';
  const sug = document.getElementById('msk-suggestions');
  if (sug) sug.style.display = 'none';
}

function _filterSkillSuggestions() {
  const inp = document.getElementById('msk-input');
  const sug = document.getElementById('msk-suggestions');
  if (!inp || !sug) return;
  const val = inp.value.trim().toLowerCase();
  if (!val) { sug.style.display = 'none'; return; }
  const added = new Set(_modalSkills.map(s => s.name));
  const matches = APP_DATA.skills.filter(s => !added.has(s) && s.toLowerCase().includes(val)).slice(0, 8);
  if (!matches.length) { sug.style.display = 'none'; return; }
  sug.innerHTML = matches.map(s =>
    `<div class='msk-suggestion-item' onclick='_selectSkillSuggestion(${JSON.stringify(s)})'>${s}</div>`
  ).join('');
  sug.style.display = 'block';
}

function _selectSkillSuggestion(name) {
  _addModalSkill(name);
  const inp = document.getElementById('msk-input');
  if (inp) inp.value = '';
  const sug = document.getElementById('msk-suggestions');
  if (sug) sug.style.display = 'none';
}

// MODALS — Employees
// ============================================================
function openAddEmployee() {
  _modalSkills = [];
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Add New Employee</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Full Name *</label>
        <input class="form-input" id="m-name" placeholder="e.g. John Smith">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input class="form-input" id="m-email" type="email" placeholder="john@smartshore.com">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Role *</label>
        <input class="form-input" id="m-role" placeholder="e.g. HCM Consultant">
      </div>
      <div class="form-group">
        <label class="form-label">Department</label>
        <select class="form-input" id="m-dept">
          <option>Delivery</option><option>PMO</option><option>Leadership</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Hours / Week</label>
        <input class="form-input" id="m-hours" type="number" value="40">
      </div>
      <div class="form-group">
        <label class="form-label">Location</label>
        <input class="form-input" id="m-loc" placeholder="e.g. India">
      </div>
    </div>
    <div id="msk-container">${_renderSkillsSection()}</div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveEmployee()">Save Employee</button>
  </div>`);
}

function openEditEmployee(id) {
  const emp = APP_DATA.getEmployee(id);
  if (!emp) return;
  _modalSkills = emp.skills.map(name => ({
    name,
    level: emp.skillLevels?.[name] || 3,
  }));
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Edit Employee</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Full Name</label>
        <input class="form-input" id="m-name" value="${emp.name}">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input class="form-input" id="m-email" value="${emp.email || ''}">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Role</label>
        <input class="form-input" id="m-role" value="${emp.role}">
      </div>
      <div class="form-group">
        <label class="form-label">Department</label>
        <select class="form-input" id="m-dept">
          <option ${emp.dept==='Delivery'?'selected':''}>Delivery</option>
          <option ${emp.dept==='PMO'?'selected':''}>PMO</option>
          <option ${emp.dept==='Leadership'?'selected':''}>Leadership</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Hours / Week</label>
        <input class="form-input" id="m-hours" type="number" value="${emp.hoursPerWeek}">
      </div>
      <div class="form-group">
        <label class="form-label">Location</label>
        <input class="form-input" id="m-loc" value="${emp.location || ''}">
      </div>
    </div>
    <div id="msk-container">${_renderSkillsSection()}</div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveEmployee('${id}')">Save Changes</button>
  </div>`);
}

async function saveEmployee(id) {
  const name = document.getElementById('m-name')?.value.trim();
  const role = document.getElementById('m-role')?.value.trim();
  if (!name || !role) { toast('Name and role are required.', 'error'); return; }
  const btn = document.querySelector('#modal-overlay .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  const skillsSnapshot = [..._modalSkills];
  try {
    if (id) {
      await DB.updateEmployee(id, {
        name, role,
        email:        document.getElementById('m-email')?.value.trim(),
        dept:         document.getElementById('m-dept')?.value,
        location:     document.getElementById('m-loc')?.value.trim(),
        hoursPerWeek: document.getElementById('m-hours')?.value,
      });
      // Remove skills no longer in list, upsert current skills
      const origSkills = APP_DATA.getEmployee(id)?.skills || [];
      const newNames   = new Set(skillsSnapshot.map(s => s.name));
      const removed    = origSkills.filter(n => !newNames.has(n));
      await Promise.all(removed.map(n => DB.updateSkillLevel(id, n, 0)));
      await Promise.all(skillsSnapshot.map(s => DB.updateSkillLevel(id, s.name, s.level)));
      closeModal(); toast('Employee updated!', 'success');
    } else {
      const newEmp = await DB.addEmployee({
        name, role,
        email:        document.getElementById('m-email')?.value.trim(),
        dept:         document.getElementById('m-dept')?.value,
        hoursPerWeek: document.getElementById('m-hours')?.value,
        location:     document.getElementById('m-loc')?.value.trim(),
      });
      if (newEmp?.id && skillsSnapshot.length) {
        await Promise.all(skillsSnapshot.map(s => DB.updateSkillLevel(newEmp.id, s.name, s.level)));
      }
      closeModal(); toast('Employee added!', 'success');
    }
    await DB.loadAll();
    navigate('employees');
  } catch (err) {
    toast(err.message || 'Save failed', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'Save'; }
  }
}

function confirmDeleteEmployee(id) {
  const emp = APP_DATA.getEmployee(id);
  if (!emp) return;
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Remove Employee</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <p>Remove <strong>${emp.name}</strong>? All their assignments will also be deleted.</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-danger" onclick="deleteEmployee('${id}')">Remove</button>
  </div>`);
}

async function deleteEmployee(id) {
  try {
    await DB.deleteEmployee(id);
    await DB.loadAll();
    closeModal(); toast('Employee removed.');
    navigate('employees');
  } catch (err) { toast(err.message || 'Delete failed', 'error'); }
}

// ============================================================
// MODALS — Projects
// ============================================================
function openAddProject() {
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Add New Project</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <div class="form-group">
      <label class="form-label">Project Name *</label>
      <input class="form-input" id="m-pname" placeholder="e.g. Acme Corp - HCM Implementation">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Client *</label>
        <input class="form-input" id="m-pclient" placeholder="Client name">
      </div>
      <div class="form-group">
        <label class="form-label">Status</label>
        <select class="form-input" id="m-pstatus">
          <option>Active</option><option>On Hold</option><option>Completed</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Start Date</label>
        <input class="form-input" id="m-pstart" type="date">
      </div>
      <div class="form-group">
        <label class="form-label">End Date</label>
        <input class="form-input" id="m-pend" type="date">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Phase</label>
        <input class="form-input" id="m-pphase" placeholder="e.g. Discovery">
      </div>
      <div class="form-group">
        <label class="form-label">Budget ($)</label>
        <input class="form-input" id="m-pbudget" type="number" placeholder="e.g. 200000">
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveProject()">Save Project</button>
  </div>`);
}

function openEditProject(id) {
  const p = APP_DATA.getProject(id);
  if (!p) return;
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Edit Project</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <div class="form-group">
      <label class="form-label">Project Name</label>
      <input class="form-input" id="m-pname" value="${p.name}">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Client</label>
        <input class="form-input" id="m-pclient" value="${p.client}">
      </div>
      <div class="form-group">
        <label class="form-label">Status</label>
        <select class="form-input" id="m-pstatus">
          <option ${p.status==='Active'?'selected':''}>Active</option>
          <option ${p.status==='On Hold'?'selected':''}>On Hold</option>
          <option ${p.status==='Completed'?'selected':''}>Completed</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Progress %</label>
        <input class="form-input" id="m-pprog" type="number" value="${p.progress}" min="0" max="100">
      </div>
      <div class="form-group">
        <label class="form-label">Phase</label>
        <input class="form-input" id="m-pphase" value="${p.phase}">
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveProject('${id}')">Save Changes</button>
  </div>`);
}

async function saveProject(id) {
  const name   = document.getElementById('m-pname')?.value.trim();
  const client = document.getElementById('m-pclient')?.value.trim();
  if (!name || !client) { toast('Name and client are required.', 'error'); return; }
  const btn = document.querySelector('#modal-overlay .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }
  try {
    if (id) {
      await DB.updateProject(id, {
        name, client,
        status:   document.getElementById('m-pstatus')?.value,
        phase:    document.getElementById('m-pphase')?.value.trim(),
        progress: document.getElementById('m-pprog')?.value,
      });
      closeModal(); toast('Project updated!', 'success');
    } else {
      await DB.addProject({
        name, client,
        status:    document.getElementById('m-pstatus')?.value,
        startDate: document.getElementById('m-pstart')?.value,
        endDate:   document.getElementById('m-pend')?.value,
        budget:    document.getElementById('m-pbudget')?.value || 0,
        phase:     document.getElementById('m-pphase')?.value || 'Initiation',
      });
      closeModal(); toast('Project added!', 'success');
    }
    await DB.loadAll();
    navigate('projects');
  } catch (err) {
    toast(err.message || 'Save failed', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'Save'; }
  }
}

function confirmDeleteProject(id) {
  const p = APP_DATA.getProject(id);
  if (!p) return;
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Delete Project</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <p>Delete <strong>${p.name}</strong>? All assignments linked to this project will also be removed.</p>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-danger" onclick="deleteProject('${id}')">Delete</button>
  </div>`);
}

async function deleteProject(id) {
  try {
    await DB.deleteProject(id);
    await DB.loadAll();
    closeModal(); toast('Project deleted.');
    navigate('projects');
  } catch (err) { toast(err.message || 'Delete failed', 'error'); }
}

// ============================================================
// MODALS — Board Tasks
// ============================================================
function openAddTask(status = 'todo') {
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Add Task</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <div class="form-group">
      <label class="form-label">Task Title *</label>
      <input class="form-input" id="m-ttitle" placeholder="e.g. Core HR Configuration">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Project</label>
        <select class="form-input" id="m-tproj">
          <option value="">None</option>
          ${APP_DATA.projects.map(p=>`<option value="${p.id}">${p.name}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Priority</label>
        <select class="form-input" id="m-tpri">
          <option>Critical</option><option>High</option><option selected>Medium</option><option>Low</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Due Date</label>
        <input class="form-input" id="m-tdue" type="date">
      </div>
      <div class="form-group">
        <label class="form-label">Status</label>
        <select class="form-input" id="m-tstatus">
          <option value="todo"        ${status==='todo'?'selected':''}>To Do</option>
          <option value="in_progress" ${status==='in_progress'?'selected':''}>In Progress</option>
          <option value="review"      ${status==='review'?'selected':''}>In Review</option>
          <option value="done"        ${status==='done'?'selected':''}>Done</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Tags (comma-separated)</label>
      <input class="form-input" id="m-ttags" placeholder="e.g. HCM, Config, UAT">
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" onclick="saveTask()">Add Task</button>
  </div>`);
}

async function saveTask() {
  const title = document.getElementById('m-ttitle')?.value.trim();
  if (!title) { toast('Please enter a task title.', 'error'); return; }
  const projId   = document.getElementById('m-tproj').value;
  const proj     = projId ? APP_DATA.getProject(projId) : null;
  const tagsRaw  = document.getElementById('m-ttags')?.value || '';
  const tags     = tagsRaw.split(',').map(t=>t.trim()).filter(Boolean);

  const btn = document.querySelector('#modal-overlay .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Adding…'; }
  try {
    const newTask = {
      title,
      project:     projId || null,
      projectName: proj?.name || '',
      assignees:   [],
      priority:    document.getElementById('m-tpri').value,
      dueDate:     document.getElementById('m-tdue')?.value || '',
      tags,
      status:      document.getElementById('m-tstatus').value,
    };
    await DB.addTask(newTask);
    _saveBoardTasks();
    closeModal(); toast('Task added!', 'success');
    navigate('board');
  } catch (err) {
    toast(err.message || 'Add failed', 'error');
    if (btn) { btn.disabled = false; btn.textContent = 'Add Task'; }
  }
}

// ============================================================
// CHARTS
// ============================================================
function initCharts(page) {
  if (page === 'dashboard') initDashboardCharts();
  if (page === 'forecast')  initForecastCharts();
}

function initDashboardCharts() {
  const weeks = APP_DATA.weekLabels;
  if (!weeks.length) return;

  // Use last 12 weeks for dashboard trend
  const last12Start = Math.max(0, weeks.length - 12);
  const displayWeeks = weeks.slice(last12Start);

  const teamAvg = displayWeeks.map((_, wi) => {
    const realWi = last12Start + wi;
    const vals   = APP_DATA.employees.map(e => (APP_DATA.weeklyUtil[e.id] || [])[realWi] || 0);
    return vals.length ? Math.round(vals.reduce((s,v)=>s+v,0)/vals.length) : 0;
  });

  // Trend chart
  const trendCtx = document.getElementById('chart-trend');
  if (trendCtx) {
    chartInstances['trend'] = new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: displayWeeks.map(_fmtWeek),
        datasets: [{
          label: 'Team Avg Utilization',
          data: teamAvg,
          borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.08)',
          tension: 0.4, fill: true, pointRadius: 4, pointHoverRadius: 6, borderWidth: 2.5
        },{
          label: '100% Target',
          data: Array(displayWeeks.length).fill(100),
          borderColor: '#ef4444', borderDash:[5,5], borderWidth:1.5, pointRadius:0, fill:false
        }]
      },
      options: {
        responsive:true, maintainAspectRatio:false,
        plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,font:{size:11}} } },
        scales:{
          y:{ min:0, max:130, grid:{color:'#f1f5f9'}, ticks:{callback:v=>v+'%',font:{size:11}} },
          x:{ grid:{display:false}, ticks:{font:{size:11}, maxTicksLimit:8} }
        }
      }
    });
  }

  // Project distribution donut
  const projCtx = document.getElementById('chart-proj-dist');
  if (projCtx && APP_DATA.projects.length) {
    chartInstances['proj'] = new Chart(projCtx, {
      type: 'doughnut',
      data: {
        labels: APP_DATA.projects.map(p=>p.client||p.name),
        datasets:[{
          data: APP_DATA.projects.map(p=>p.totalHours||p.members.length),
          backgroundColor: APP_DATA.projects.map(p=>p.color),
          borderWidth: 2, borderColor:'white', hoverOffset:6
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:false, cutout:'68%',
        plugins:{ legend:{ position:'bottom', labels:{boxWidth:12,font:{size:11}} } }
      }
    });
  }

  // Employee utilization bar chart
  const empCtx = document.getElementById('chart-emp-util');
  if (empCtx && APP_DATA.employees.length) {
    const sorted = [...APP_DATA.employees].sort((a,b) => b.utilization - a.utilization);
    chartInstances['emputil'] = new Chart(empCtx, {
      type:'bar',
      data:{
        labels: sorted.map(e=>e.name.split(' ')[0]),
        datasets:[{
          label:'Utilization %',
          data: sorted.map(e=>e.utilization),
          backgroundColor: sorted.map(e=>e.utilization>100?'rgba(239,68,68,0.8)':e.utilization>=80?'rgba(245,158,11,0.8)':'rgba(34,197,94,0.8)'),
          borderRadius:5, borderSkipped:false
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:false, indexAxis:'y',
        plugins:{ legend:{display:false} },
        scales:{
          x:{ max:130, grid:{color:'#f1f5f9'}, ticks:{callback:v=>v+'%',font:{size:10}} },
          y:{ grid:{display:false}, ticks:{font:{size:11}} }
        }
      }
    });
  }
}

function initForecastCharts() {
  const fd = _buildForecastData();
  const { months, capacity, demand, byProject } = fd;

  if (!months.length) return;

  // Capacity vs Allocated line chart
  const capCtx = document.getElementById('chart-cap');
  if (capCtx) {
    chartInstances['cap'] = new Chart(capCtx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Capacity',
          data: capacity,
          borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.08)',
          fill: true, tension: 0.4, pointRadius: 5, borderWidth: 2.5
        },{
          label: 'Allocated',
          data: demand,
          borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.05)',
          fill: true, tension: 0.4, pointRadius: 5, borderWidth: 2.5
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth:12, font:{size:11} } } },
        scales: {
          y: { grid:{color:'#f1f5f9'}, ticks:{font:{size:11}} },
          x: { grid:{display:false}, ticks:{font:{size:11}} }
        }
      }
    });
  }

  // Allocated hours by project stacked bar
  const pdCtx = document.getElementById('chart-proj-demand');
  if (pdCtx) {
    const projEntries = Object.entries(byProject).filter(([,data]) => data.some(v=>v>0));
    const datasets = projEntries.map(([name, data], i) => {
      const proj = APP_DATA.projects.find(p => (p.client||p.name) === name);
      return {
        label: name,
        data,
        backgroundColor: proj?.color || _chartColor(i),
        stack: 'alloc', borderRadius: 3, borderSkipped: false
      };
    });

    chartInstances['pd'] = new Chart(pdCtx, {
      type: 'bar',
      data: { labels: months, datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth:10, font:{size:10} } } },
        scales: {
          x: { stacked:true, grid:{display:false}, ticks:{font:{size:11}} },
          y: { stacked:true, grid:{color:'#f1f5f9'}, ticks:{font:{size:11}} }
        }
      }
    });
  }
}

function _chartColor(i) {
  const colors = ['#6366f1','#8b5cf6','#ec4899','#ef4444','#f59e0b','#10b981','#3b82f6','#14b8a6'];
  return colors[i % colors.length];
}

// ---- EVENT HANDLERS ----
function attachHandlers(page) {
  const ov = document.getElementById('modal-overlay');
  if (ov) ov.onclick = e => { if (e.target === e.currentTarget) closeModal(); };
}

// ---- LOADING STATES ----
function showLoading() {
  document.getElementById('main-content').innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh;gap:16px">
      <div style="width:44px;height:44px;border:4px solid #e2e8f0;border-top-color:#3b82f6;border-radius:50%;animation:spin 0.7s linear infinite"></div>
      <div style="color:#64748b;font-size:14px">Loading from Supabase…</div>
    </div>
    <style>@keyframes spin{to{transform:rotate(360deg)}}</style>`;
}

function showDbError(err) {
  document.getElementById('main-content').innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh;gap:16px;text-align:center">
      <div style="font-size:48px">⚠️</div>
      <div style="font-size:18px;font-weight:700;color:#ef4444">Database connection failed</div>
      <div style="font-size:13px;color:#64748b;max-width:420px">${err.message || err}</div>
      <div style="font-size:12px;color:#94a3b8">Check Supabase URL/key and that real_data.sql has been run.</div>
      <button class="btn btn-primary" onclick="initApp()">Retry</button>
    </div>`;
}

function _updateTeamCount() {
  const el = document.getElementById('sidebar-team-count');
  if (!el) return;
  const n = APP_DATA.employees?.length || 0;
  el.textContent = `Team · ${n} ${n === 1 ? 'person' : 'people'}`;
}

// ---- INIT ----
async function initApp() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.page));
  });

  showLoading();
  try {
    await DB.loadAll();
    _loadBoardTasks();    // restore board task states from localStorage
    _updateTeamCount();
    navigate('dashboard');
  } catch (err) {
    console.error('DB load failed:', err);
    showDbError(err);
  }
}

document.addEventListener('DOMContentLoaded', initApp);

// ============================================================
// EXPORT / IMPORT
// ============================================================

function _downloadCSV(filename, rows) {
  const csv = rows.map(r => r.map(v =>
    (v == null ? '' : String(v)).includes(',') || String(v).includes('"') || String(v).includes('\n')
      ? `"${String(v).replace(/"/g, '""')}"`
      : String(v)
  ).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function _parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const header = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const vals = [];
    let cur = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"' && !inQ) { inQ = true; continue; }
      if (ch === '"' && inQ && line[i+1] === '"') { cur += '"'; i++; continue; }
      if (ch === '"' && inQ) { inQ = false; continue; }
      if (ch === ',' && !inQ) { vals.push(cur.trim()); cur = ''; continue; }
      cur += ch;
    }
    vals.push(cur.trim());
    const obj = {};
    header.forEach((h, i) => obj[h] = vals[i] ?? '');
    return obj;
  });
}

function openExportModal() {
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Export Data</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <p style="color:#64748b;font-size:13px;margin-bottom:16px">Download your data as CSV files you can open in Excel or Google Sheets.</p>
    <div style="display:flex;flex-direction:column;gap:10px">
      <button class="btn btn-secondary" style="justify-content:flex-start;gap:10px;padding:12px 16px" onclick="_exportEmployees()">
        ${ICONS.user} <div style="text-align:left"><div style="font-weight:600">Employees</div><div style="font-size:11px;color:#94a3b8;font-weight:400">${APP_DATA.employees.length} records · name, email, role, capacity</div></div>
      </button>
      <button class="btn btn-secondary" style="justify-content:flex-start;gap:10px;padding:12px 16px" onclick="_exportProjects()">
        ${ICONS.folder} <div style="text-align:left"><div style="font-weight:600">Projects</div><div style="font-size:11px;color:#94a3b8;font-weight:400">${APP_DATA.projects.length} records · name, client, status, dates</div></div>
      </button>
      <button class="btn btn-secondary" style="justify-content:flex-start;gap:10px;padding:12px 16px" onclick="_exportAssignments()">
        ${ICONS.clock} <div style="text-align:left"><div style="font-weight:600">Assignments</div><div style="font-size:11px;color:#94a3b8;font-weight:400">${APP_DATA.assignments.length} records · employee, project, week, hours</div></div>
      </button>
      <button class="btn btn-secondary" style="justify-content:flex-start;gap:10px;padding:12px 16px" onclick="exportSkillsMatrix()">
        ${ICONS.download} <div style="text-align:left"><div style="font-weight:600">Skills Matrix</div><div style="font-size:11px;color:#94a3b8;font-weight:400">${APP_DATA.employees.length} employees · all skills & levels</div></div>
      </button>
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Close</button>
  </div>`);
}

function _exportEmployees() {
  const rows = [['Name','Email','Role','Capacity Hours']];
  APP_DATA.employees.forEach(e => rows.push([e.name, e.email||'', e.role||'', e.capacity||40]));
  _downloadCSV('employees.csv', rows);
  toast('Employees exported!', 'success');
}

function _exportProjects() {
  const rows = [['Name','Client','Status','Start Date','End Date']];
  APP_DATA.projects.forEach(p => rows.push([p.name, p.client||'', p.status||'', p.start_date||'', p.end_date||'']));
  _downloadCSV('projects.csv', rows);
  toast('Projects exported!', 'success');
}

function _exportAssignments() {
  const empMap = Object.fromEntries(APP_DATA.employees.map(e => [e.id, e.name]));
  const projMap = Object.fromEntries(APP_DATA.projects.map(p => [p.id, p.name]));
  const rows = [['Employee','Project','Week Start','Hours']];
  APP_DATA.assignments.forEach(a => rows.push([
    empMap[a.employee_id] || a.employee_id,
    projMap[a.project_id] || a.project_id,
    a.week_start, a.hours
  ]));
  _downloadCSV('assignments.csv', rows);
  toast('Assignments exported!', 'success');
}

function exportSkillsMatrix() {
  const rows = [['Employee','Skill','Level']];
  APP_DATA.employees.forEach(e => {
    (e.skills || []).forEach(s => rows.push([e.name, s.name, s.level]));
  });
  if (rows.length === 1) { toast('No skills data to export', 'error'); return; }
  _downloadCSV('skills_matrix.csv', rows);
  toast('Skills matrix exported!', 'success');
}

function exportForecast() {
  const empMap = Object.fromEntries(APP_DATA.employees.map(e => [e.id, e.name]));
  const projMap = Object.fromEntries(APP_DATA.projects.map(p => [p.id, p.name]));
  const rows = [['Employee','Project','Week Start','Hours','Utilization %']];
  APP_DATA.assignments.forEach(a => {
    const emp = APP_DATA.employees.find(e => e.id === a.employee_id);
    const cap = emp?.capacity || 40;
    const util = Math.round((a.hours / cap) * 100);
    rows.push([empMap[a.employee_id]||'', projMap[a.project_id]||'', a.week_start, a.hours, util]);
  });
  if (rows.length === 1) { toast('No forecast data to export', 'error'); return; }
  _downloadCSV('forecast.csv', rows);
  toast('Forecast exported!', 'success');
}

function openImportModal() {
  showModal(`
  <div class="modal-header">
    <span class="modal-title">Import Data</span>
    <button class="modal-close">×</button>
  </div>
  <div class="modal-body">
    <div style="margin-bottom:14px">
      <label class="form-label">What are you importing?</label>
      <select class="form-input" id="import-type" onchange="_updateImportTemplate()">
        <option value="employees">Employees</option>
        <option value="projects">Projects</option>
        <option value="assignments">Assignments</option>
      </select>
    </div>
    <div id="import-template" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px;margin-bottom:14px;font-size:11px;font-family:monospace;color:#475569;line-height:1.6">
      <strong style="font-size:11px;font-family:inherit;display:block;margin-bottom:4px;color:#1e293b">Required columns:</strong>
      Name, Email, Role, Capacity Hours
    </div>
    <div style="margin-bottom:14px">
      <label class="form-label">Upload CSV File</label>
      <input type="file" accept=".csv,text/csv" id="import-file" class="form-input" style="padding:6px"
        onchange="_previewImport(this)">
    </div>
    <div id="import-preview" style="display:none">
      <div style="font-size:12px;font-weight:600;color:#475569;margin-bottom:6px" id="import-preview-label"></div>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;overflow:auto;max-height:160px;font-size:11px;padding:8px;font-family:monospace;white-space:pre" id="import-preview-text"></div>
    </div>
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" id="import-confirm-btn" disabled onclick="_confirmImport()">Import</button>
  </div>`);
}

function _updateImportTemplate() {
  const type = document.getElementById('import-type')?.value;
  const el = document.getElementById('import-template');
  if (!el) return;
  const cols = {
    employees:   'Name, Email, Role, Capacity Hours',
    projects:    'Name, Client, Status, Start Date, End Date',
    assignments: 'Employee, Project, Week Start, Hours',
  };
  el.innerHTML = `<strong style="font-size:11px;font-family:inherit;display:block;margin-bottom:4px;color:#1e293b">Required columns:</strong>${cols[type] || ''}`;
  document.getElementById('import-file').value = '';
  document.getElementById('import-preview').style.display = 'none';
  document.getElementById('import-confirm-btn').disabled = true;
}

let _importRows = [];
let _importType = '';

function _previewImport(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      _importType = document.getElementById('import-type').value;
      _importRows = _parseCSV(e.target.result);
      const preview = document.getElementById('import-preview');
      const label   = document.getElementById('import-preview-label');
      const text    = document.getElementById('import-preview-text');
      const btn     = document.getElementById('import-confirm-btn');
      if (!_importRows.length) { toast('No data rows found in CSV', 'error'); return; }
      label.textContent = `${_importRows.length} rows found — preview (first 5):`;
      text.textContent = JSON.stringify(_importRows.slice(0,5), null, 2);
      preview.style.display = 'block';
      btn.disabled = false;
    } catch(err) {
      toast('Could not parse CSV: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}

async function _confirmImport() {
  const btn = document.getElementById('import-confirm-btn');
  btn.disabled = true;
  btn.textContent = 'Importing…';
  try {
    if (_importType === 'employees') await _importEmployees(_importRows);
    else if (_importType === 'projects') await _importProjects(_importRows);
    else if (_importType === 'assignments') await _importAssignments(_importRows);
    closeModal();
    toast(`${_importRows.length} ${_importType} imported! Reloading data…`, 'success');
    await DB.loadAll();
    _updateTeamCount();
    navigate(APP_STATE.page || 'dashboard');
  } catch(err) {
    toast('Import failed: ' + err.message, 'error');
    btn.disabled = false;
    btn.textContent = 'Import';
  }
}

async function _importEmployees(rows) {
  const records = rows.map(r => ({
    name:           r['Name'] || r['name'] || '',
    email:          r['Email'] || r['email'] || null,
    role:           r['Role'] || r['role'] || '',
    capacity_hours: parseInt(r['Capacity Hours'] || r['capacity_hours'] || 40, 10),
    color:          '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'),
    initials:       (r['Name']||r['name']||'??').split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase(),
  })).filter(r => r.name);
  if (!records.length) throw new Error('No valid employee rows (Name column required)');
  const { error } = await sb.from('employees').insert(records);
  if (error) throw new Error(error.message);
}

async function _importProjects(rows) {
  const validStatuses = new Set(['active','planning','completed','on_hold']);
  const records = rows.map(r => ({
    name:       r['Name'] || r['name'] || '',
    client:     r['Client'] || r['client'] || '',
    status:     validStatuses.has((r['Status']||r['status']||'').toLowerCase())
                  ? (r['Status']||r['status']).toLowerCase() : 'active',
    start_date: r['Start Date'] || r['start_date'] || null,
    end_date:   r['End Date'] || r['end_date'] || null,
    color:      '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'),
  })).filter(r => r.name);
  if (!records.length) throw new Error('No valid project rows (Name column required)');
  const { error } = await sb.from('projects').insert(records);
  if (error) throw new Error(error.message);
}

async function _importAssignments(rows) {
  const empByName = Object.fromEntries(APP_DATA.employees.map(e => [e.name.toLowerCase(), e.id]));
  const projByName = Object.fromEntries(APP_DATA.projects.map(p => [p.name.toLowerCase(), p.id]));
  const records = [];
  const skipped = [];
  rows.forEach(r => {
    const empName  = (r['Employee'] || r['employee'] || '').toLowerCase();
    const projName = (r['Project']  || r['project']  || '').toLowerCase();
    const empId  = empByName[empName];
    const projId = projByName[projName];
    if (!empId)  { skipped.push(`Unknown employee: ${empName}`); return; }
    if (!projId) { skipped.push(`Unknown project: ${projName}`);  return; }
    records.push({
      employee_id: empId,
      project_id:  projId,
      week_start:  r['Week Start'] || r['week_start'] || '',
      hours:       parseInt(r['Hours'] || r['hours'] || 0, 10),
    });
  });
  if (skipped.length) console.warn('Import skipped rows:', skipped);
  if (!records.length) throw new Error('No valid assignment rows. Check employee/project names match exactly.');
  const { error } = await sb.from('assignments').insert(records);
  if (error) throw new Error(error.message);
}
