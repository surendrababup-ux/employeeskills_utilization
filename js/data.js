// ============================================================
// SMARTSHORE HCM - APP DATA SHELL
// All data loaded from Supabase via DB.loadAll()
// ============================================================

const APP_DATA = {
  company: { name: 'Smartshore HCM Team', logo: 'SH', totalEmployees: 0 },

  // ── Populated by DB.loadAll() ─────────────────────────────────────
  employees:   [],
  projects:    [],
  skills:      [],
  weeklyUtil:  {},   // { employeeId: [pct, pct, ...] } aligned to weekLabels
  weekLabels:  [],   // sorted unique week_start dates from assignments
  assignments: [],   // raw flat assignment records

  getEmployee: () => undefined,
  getProject:  () => undefined,

  // ── Forecast computed from real assignments in app.js ─────────────
  // forecast.months / capacity / demand / byProject are derived at runtime
  forecast: {
    months:   [],
    capacity: [],
    demand:   [],
    byProject: {},
  },

  // ── Board tasks — persisted in localStorage ────────────────────────
  boardTasks: [],
};
