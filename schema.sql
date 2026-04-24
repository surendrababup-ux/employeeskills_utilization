-- ============================================================
-- SMARTSHORE HCM — SUPABASE SCHEMA + SEED DATA
-- Run this entire script in Supabase SQL Editor
-- ============================================================

-- ---- DROP (safe re-run) ----
DROP TABLE IF EXISTS task_tags        CASCADE;
DROP TABLE IF EXISTS task_assignees   CASCADE;
DROP TABLE IF EXISTS board_tasks      CASCADE;
DROP TABLE IF EXISTS weekly_utilization CASCADE;
DROP TABLE IF EXISTS employee_skills  CASCADE;
DROP TABLE IF EXISTS employee_projects CASCADE;
DROP TABLE IF EXISTS projects         CASCADE;
DROP TABLE IF EXISTS employees        CASCADE;

-- ================================================================
-- TABLE DEFINITIONS
-- ================================================================

CREATE TABLE employees (
  id              SERIAL PRIMARY KEY,
  name            TEXT NOT NULL,
  initials        TEXT NOT NULL,
  role            TEXT NOT NULL,
  dept            TEXT NOT NULL DEFAULT 'Delivery',
  email           TEXT,
  location        TEXT DEFAULT 'India',
  hours_per_week  INTEGER DEFAULT 40,
  utilization     INTEGER DEFAULT 0,
  color           TEXT DEFAULT '#6366f1',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE projects (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  client      TEXT NOT NULL,
  status      TEXT DEFAULT 'Active',
  color       TEXT DEFAULT '#3b82f6',
  start_date  DATE,
  end_date    DATE,
  total_hours NUMERIC DEFAULT 0,
  budget      NUMERIC DEFAULT 0,
  phase       TEXT DEFAULT 'Initiation',
  progress    INTEGER DEFAULT 0,
  description TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE employee_projects (
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  project_id  INTEGER REFERENCES projects(id)  ON DELETE CASCADE,
  PRIMARY KEY (employee_id, project_id)
);

CREATE TABLE employee_skills (
  id          SERIAL PRIMARY KEY,
  employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  skill_name  TEXT    NOT NULL,
  skill_level INTEGER DEFAULT 1,
  skill_order INTEGER DEFAULT 0
);

CREATE TABLE weekly_utilization (
  id              SERIAL PRIMARY KEY,
  employee_id     INTEGER REFERENCES employees(id) ON DELETE CASCADE,
  week_index      INTEGER NOT NULL,
  utilization_pct INTEGER DEFAULT 0,
  UNIQUE (employee_id, week_index)
);

CREATE TABLE board_tasks (
  id           SERIAL PRIMARY KEY,
  title        TEXT NOT NULL,
  project_id   INTEGER REFERENCES projects(id) ON DELETE SET NULL,
  project_name TEXT,
  priority     TEXT DEFAULT 'Medium',
  due_date     DATE,
  status       TEXT DEFAULT 'todo',
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE task_assignees (
  task_id     INTEGER REFERENCES board_tasks(id) ON DELETE CASCADE,
  employee_id INTEGER REFERENCES employees(id)   ON DELETE CASCADE,
  PRIMARY KEY (task_id, employee_id)
);

CREATE TABLE task_tags (
  id      SERIAL PRIMARY KEY,
  task_id INTEGER REFERENCES board_tasks(id) ON DELETE CASCADE,
  tag     TEXT NOT NULL
);

-- ================================================================
-- ROW LEVEL SECURITY  (open access — add auth policies later)
-- ================================================================
ALTER TABLE employees           ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects            ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee_projects   ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee_skills     ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_utilization  ENABLE ROW LEVEL SECURITY;
ALTER TABLE board_tasks         ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_assignees      ENABLE ROW LEVEL SECURITY;
ALTER TABLE task_tags           ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_all" ON employees           FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all" ON projects            FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all" ON employee_projects   FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all" ON employee_skills     FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all" ON weekly_utilization  FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all" ON board_tasks         FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all" ON task_assignees      FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "anon_all" ON task_tags           FOR ALL TO anon USING (true) WITH CHECK (true);

-- ================================================================
-- SEED: EMPLOYEES
-- ================================================================
INSERT INTO employees (id, name, initials, role, dept, email, location, hours_per_week, utilization, color) VALUES
(1,  'Pradeep Pillage',         'PP', 'Scrum Master',           'Delivery',   'pradeep.pillage@smartshore.com',    'India',  40, 95,  '#6366f1'),
(2,  'Sajid Arora',             'SA', 'HCM Consultant',         'Delivery',   'sajid.arora@smartshore.com',        'India',  40, 100, '#8b5cf6'),
(3,  'Pushpraj Dharmraj',       'PD', 'Payroll Consultant',     'Delivery',   'pushpraj.dharmraj@smartshore.com',  'India',  40, 100, '#ec4899'),
(4,  'Vengedesh Ganesan',       'VG', 'HCM Functional Lead',   'Delivery',   'vengedesh.ganesan@smartshore.com',  'India',  40, 88,  '#ef4444'),
(5,  'Vasanthi Krishnamurthy',  'VK', 'Project Manager',        'PMO',        'vasanthi.k@smartshore.com',         'Remote', 40, 80,  '#f59e0b'),
(6,  'Akhil Vatakuri',          'AV', 'HCM Consultant',         'Delivery',   'akhil.vatakuri@smartshore.com',     'India',  40, 75,  '#10b981'),
(7,  'Durga Prasad',            'DP', 'Data Conversion Lead',   'Delivery',   'durga.prasad@smartshore.com',       'India',  40, 110, '#3b82f6'),
(8,  'Gayum Jinka',             'GJ', 'OTL Consultant',         'Delivery',   'gayum.jinka@smartshore.com',        'India',  40, 92,  '#14b8a6'),
(9,  'Damara Ram Babu',         'DR', 'HCM Consultant',         'Delivery',   'damara.ram@smartshore.com',         'India',  40, 85,  '#f97316'),
(10, 'Ujwith Burlapakka',       'UB', 'HCM Consultant',         'Delivery',   'ujwith.burlapakka@smartshore.com',  'India',  40, 90,  '#84cc16'),
(11, 'Seetha Prabhakar',        'SP', 'HCM Functional Lead',   'Delivery',   'seetha.prabhakar@smartshore.com',   'India',  40, 78,  '#06b6d4'),
(12, 'Manirathnam Subramanian', 'MS', 'Payroll Consultant',     'Delivery',   'manirathnam.s@smartshore.com',      'India',  40, 95,  '#a855f7'),
(13, 'Mohan Nonekalava',        'MN', 'HCM Consultant',         'Delivery',   'mohan.nonekalava@smartshore.com',   'India',  40, 65,  '#e11d48'),
(14, 'Arushi Jain',             'AJ', 'Absence Mgmt Consultant','Delivery',   'arushi.jain@smartshore.com',        'India',  40, 70,  '#d97706'),
(15, 'Ashish Pandey',           'AP', 'HCM Consultant',         'Delivery',   'ashish.pandey@smartshore.com',      'India',  40, 40,  '#059669'),
(16, 'Sheeba CS',               'SC', 'Payroll Consultant',     'Delivery',   'sheeba.cs@smartshore.com',          'India',  40, 85,  '#2563eb'),
(17, 'Jami Ranjan Das',         'JD', 'HCM Consultant',         'Delivery',   'jami.das@smartshore.com',           'India',  40, 50,  '#0d9488'),
(18, 'Murugesan Kanasah',       'MK', 'Project Manager',        'PMO',        'murugesan.k@smartshore.com',        'India',  40, 82,  '#ea580c'),
(19, 'Vilpeshree Sukra',        'VS', 'HCM Consultant',         'Delivery',   'vilpeshree.sukra@smartshore.com',   'India',  40, 20,  '#65a30d'),
(20, 'Surendra Babu',           'SB', 'Practice Manager',       'Leadership', 'surendrababup@gmail.com',           'India',  40, 60,  '#7c3aed');

SELECT setval('employees_id_seq', 20);

-- ================================================================
-- SEED: PROJECTS
-- ================================================================
INSERT INTO projects (id, name, client, status, color, start_date, end_date, total_hours, budget, phase, progress, description) VALUES
(1, 'Black & Veatch - HCM Imp',       'Black & Veatch',   'Active', '#ef4444', '2024-01-15', '2025-09-30', 4173,   850000, 'Implementation', 72, 'Full Oracle HCM Cloud implementation covering Core HR, Payroll, Time & Labor, and Benefits.'),
(2, 'CRU - HCM Implementation',        'CRU',              'Active', '#3b82f6', '2024-06-01', '2025-06-30',   35,   120000, 'Discovery',      18, 'Oracle HCM Implementation for CRU organization including Core HR setup.'),
(3, 'CNRL - HCM OTL Implementation',   'CNRL',             'Active', '#8b5cf6', '2024-03-01', '2025-04-30',   75,   200000, 'Configuration',  45, 'Oracle Time & Labor implementation for Canadian Natural Resources Limited.'),
(4, 'CoM - HCM Implementation',        'City of Miami',    'Active', '#f59e0b', '2024-02-01', '2025-08-31',  140,   320000, 'Testing',        63, 'Complete HCM implementation for City of Miami government entity.'),
(5, 'Mary Greely Health - HCM',        'Mary Greely Health','Active','#10b981', '2024-05-01', '2025-05-31',   85,   180000, 'Data Migration', 55, 'HCM Data Conversion and Configuration for Mary Greely Health System.'),
(6, 'Hendricks HCM Implementation',    'Hendricks',        'Active', '#06b6d4', '2024-07-01', '2025-03-31',    8,    90000, 'Initiation',     10, 'Oracle HCM implementation for Hendricks regional hospital network.'),
(7, 'CK Power - HCM Core HR',          'CK Power',         'Active', '#ec4899', '2024-08-01', '2025-07-31',   32,   150000, 'Requirements',   25, 'Core HR, Absence and Workforce Management implementation for CK Power.');

SELECT setval('projects_id_seq', 7);

-- ================================================================
-- SEED: EMPLOYEE_PROJECTS
-- ================================================================
INSERT INTO employee_projects (employee_id, project_id) VALUES
(1,1),(1,2),
(2,1),(2,2),
(3,1),
(4,1),(4,3),
(5,1),
(6,1),(6,2),
(7,1),
(8,1),(8,3),
(9,1),
(10,1),(10,4),
(11,1),
(12,1),(12,5),
(13,1),
(14,4),
(15,6),
(16,5),
(17,7),
(18,1),
(20,1),(20,2),(20,3),(20,4),(20,5),(20,6),(20,7);

-- ================================================================
-- SEED: EMPLOYEE_SKILLS
-- ================================================================
INSERT INTO employee_skills (employee_id, skill_name, skill_level, skill_order) VALUES
-- Pradeep Pillage
(1,'Scrum / Agile',4,0),(1,'HCM - Core HR',3,1),(1,'Data Conversion - Core HR',3,2),(1,'HCM - Time & Labor',2,3),
-- Sajid Arora
(2,'HCM - Core HR',4,0),(2,'HCM - CBC',3,1),(2,'HCM - Time & Labor',3,2),(2,'Payroll Configuration',2,3),
-- Pushpraj Dharmraj
(3,'HCM - Payroll',4,0),(3,'HCM - Payroll Formula',4,1),(3,'Payroll Configuration',3,2),(3,'HCM - Core HR',2,3),
-- Vengedesh Ganesan
(4,'HCM - Core HR',4,0),(4,'Data Conversion - Core HR',4,1),(4,'HCM - CBC',3,2),(4,'HCM - Time & Labor',2,3),
-- Vasanthi Krishnamurthy
(5,'Project Management',4,0),(5,'HCM - Core HR',3,1),(5,'Scrum / Agile',3,2),
-- Akhil Vatakuri
(6,'HCM - Core HR',3,0),(6,'HCM - CBC',3,1),(6,'HCM - Time & Labor',3,2),(6,'Data Conversion - Core HR',2,3),
-- Durga Prasad
(7,'Data Conversion - Core HR',4,0),(7,'Data Conversion - Payroll',4,1),(7,'Data Conversion - Benefits',3,2),
(7,'Data Conversion - Compensation',3,3),(7,'Data Conversion - Absence Balance',2,4),(7,'Data Conversion - Time Balance',2,5),
-- Gayum Jinka
(8,'HCM - Time & Labor',4,0),(8,'Data Conversion - Core HR',3,1),(8,'Data Conversion - Time Balance',3,2),
-- Damara Ram Babu
(9,'Data Conversion - Core HR',4,0),(9,'Data Conversion - Absence Balance',3,1),(9,'HCM - Core HR',2,2),
-- Ujwith Burlapakka
(10,'HCM - Core HR',4,0),(10,'HCM - CBC',3,1),(10,'HCM - Time & Labor',3,2),(10,'Absence Management - Remote',2,3),
-- Seetha Prabhakar
(11,'HCM - Core HR',4,0),(11,'HCM - Absence Management',3,1),(11,'Data Conversion - Core HR',3,2),(11,'Testing / QA',2,3),
-- Manirathnam Subramanian
(12,'HCM - Payroll',4,0),(12,'HCM - Core HR',3,1),(12,'HCM - Time & Labor',3,2),(12,'BP Reports',3,3),(12,'SAP Reporting',2,4),
-- Mohan Nonekalava
(13,'Data Conversion - Core HR',3,0),(13,'HCM - CBC',3,1),(13,'Data Conversion - Benefits',2,2),(13,'Data Conversion - Compensation',2,3),
-- Arushi Jain
(14,'HCM - Absence Management',4,0),(14,'Absence Management - Remote',4,1),(14,'Data Conversion - Absence Balance',3,2),
-- Ashish Pandey
(15,'HCM - Core HR',3,0),(15,'HCM - Benefits',3,1),(15,'Data Conversion - Benefits',2,2),
-- Sheeba CS
(16,'HCM - Payroll',4,0),(16,'Payroll Configuration',4,1),(16,'HCM - Payroll Formula',3,2),(16,'BP Reports',3,3),
-- Jami Ranjan Das
(17,'HCM - Core HR',3,0),(17,'HCM - Compensation',3,1),(17,'Data Conversion - Compensation',2,2),
-- Murugesan Kanasah
(18,'Project Management',4,0),(18,'HCM - Payroll',3,1),(18,'HCM - Core HR',3,2),(18,'Workforce Management',2,3),
-- Vilpeshree Sukra
(19,'HCM - Core HR',2,0),(19,'HCM - CBC',2,1),(19,'Project Management',1,2),
-- Surendra Babu
(20,'Project Management',4,0),(20,'HCM - Core HR',3,1),(20,'Scrum / Agile',3,2),(20,'Workforce Management',3,3);

-- ================================================================
-- SEED: WEEKLY_UTILIZATION  (12 weeks starting Apr 7 2025)
-- ================================================================
INSERT INTO weekly_utilization (employee_id, week_index, utilization_pct) VALUES
(1,0,95),(1,1,100),(1,2,90),(1,3,85),(1,4,95),(1,5,100),(1,6,90),(1,7,80),(1,8,95),(1,9,100),(1,10,95),(1,11,90),
(2,0,100),(2,1,100),(2,2,100),(2,3,90),(2,4,100),(2,5,100),(2,6,80),(2,7,100),(2,8,100),(2,9,90),(2,10,100),(2,11,100),
(3,0,100),(3,1,100),(3,2,100),(3,3,100),(3,4,100),(3,5,100),(3,6,100),(3,7,100),(3,8,100),(3,9,100),(3,10,100),(3,11,100),
(4,0,80),(4,1,90),(4,2,85),(4,3,90),(4,4,88),(4,5,80),(4,6,90),(4,7,85),(4,8,90),(4,9,88),(4,10,80),(4,11,90),
(5,0,80),(5,1,80),(5,2,80),(5,3,80),(5,4,80),(5,5,80),(5,6,80),(5,7,80),(5,8,80),(5,9,80),(5,10,80),(5,11,80),
(6,0,70),(6,1,80),(6,2,75),(6,3,70),(6,4,75),(6,5,80),(6,6,75),(6,7,70),(6,8,80),(6,9,75),(6,10,80),(6,11,75),
(7,0,110),(7,1,115),(7,2,110),(7,3,105),(7,4,115),(7,5,110),(7,6,110),(7,7,115),(7,8,110),(7,9,105),(7,10,115),(7,11,110),
(8,0,90),(8,1,95),(8,2,90),(8,3,85),(8,4,92),(8,5,90),(8,6,95),(8,7,90),(8,8,85),(8,9,92),(8,10,90),(8,11,95),
(9,0,80),(9,1,85),(9,2,90),(9,3,85),(9,4,85),(9,5,80),(9,6,90),(9,7,85),(9,8,85),(9,9,80),(9,10,90),(9,11,85),
(10,0,90),(10,1,90),(10,2,85),(10,3,90),(10,4,90),(10,5,90),(10,6,85),(10,7,90),(10,8,90),(10,9,90),(10,10,85),(10,11,90),
(11,0,75),(11,1,80),(11,2,75),(11,3,80),(11,4,78),(11,5,75),(11,6,80),(11,7,75),(11,8,80),(11,9,78),(11,10,75),(11,11,80),
(12,0,95),(12,1,100),(12,2,90),(12,3,95),(12,4,95),(12,5,100),(12,6,90),(12,7,95),(12,8,95),(12,9,100),(12,10,90),(12,11,95),
(13,0,60),(13,1,65),(13,2,70),(13,3,65),(13,4,65),(13,5,60),(13,6,70),(13,7,65),(13,8,65),(13,9,60),(13,10,70),(13,11,65),
(14,0,70),(14,1,70),(14,2,75),(14,3,70),(14,4,70),(14,5,70),(14,6,75),(14,7,70),(14,8,70),(14,9,70),(14,10,75),(14,11,70),
(15,0,40),(15,1,45),(15,2,40),(15,3,40),(15,4,40),(15,5,45),(15,6,40),(15,7,40),(15,8,40),(15,9,45),(15,10,40),(15,11,40),
(16,0,85),(16,1,85),(16,2,90),(16,3,85),(16,4,85),(16,5,85),(16,6,90),(16,7,85),(16,8,85),(16,9,85),(16,10,90),(16,11,85),
(17,0,50),(17,1,55),(17,2,50),(17,3,50),(17,4,50),(17,5,55),(17,6,50),(17,7,50),(17,8,50),(17,9,55),(17,10,50),(17,11,50),
(18,0,80),(18,1,85),(18,2,80),(18,3,85),(18,4,82),(18,5,80),(18,6,85),(18,7,80),(18,8,85),(18,9,82),(18,10,80),(18,11,85),
(19,0,20),(19,1,15),(19,2,20),(19,3,25),(19,4,20),(19,5,15),(19,6,20),(19,7,25),(19,8,20),(19,9,15),(19,10,20),(19,11,25),
(20,0,60),(20,1,60),(20,2,55),(20,3,60),(20,4,60),(20,5,60),(20,6,55),(20,7,60),(20,8,60),(20,9,60),(20,10,55),(20,11,60);

-- ================================================================
-- SEED: BOARD TASKS
-- ================================================================
INSERT INTO board_tasks (id, title, project_id, project_name, priority, due_date, status) VALUES
(1,  'Core HR Configuration',       1, 'Black & Veatch - HCM Imp',    'High',     '2025-05-15', 'in_progress'),
(2,  'Payroll Data Migration',       1, 'Black & Veatch - HCM Imp',    'Critical', '2025-05-30', 'in_progress'),
(3,  'OTL Configuration Review',     3, 'CNRL - HCM OTL Implementation','Medium',  '2025-05-20', 'in_progress'),
(4,  'Benefits Setup',               1, 'Black & Veatch - HCM Imp',    'Medium',   '2025-06-10', 'todo'),
(5,  'UAT Planning',                 4, 'CoM - HCM Implementation',    'High',     '2025-05-25', 'todo'),
(6,  'Data Conversion - Core HR',    5, 'Mary Greely Health - HCM',    'High',     '2025-06-01', 'todo'),
(7,  'Kickoff Meeting',              7, 'CK Power - HCM Core HR',      'Low',      '2025-04-25', 'todo'),
(8,  'Requirements Gathering',       2, 'CRU - HCM Implementation',    'Medium',   '2025-04-28', 'todo'),
(9,  'Payroll Parallel Run',         1, 'Black & Veatch - HCM Imp',    'Critical', '2025-07-15', 'review'),
(10, 'Go-Live Prep Checklist',       1, 'Black & Veatch - HCM Imp',    'High',     '2025-07-30', 'review'),
(11, 'Security Role Setup',          4, 'CoM - HCM Implementation',    'Medium',   '2025-05-10', 'review'),
(12, 'Initial Discovery Session',    6, 'Hendricks HCM Implementation','Low',      '2025-04-20', 'done'),
(13, 'Project Charter Sign-off',     7, 'CK Power - HCM Core HR',      'High',     '2025-04-18', 'done'),
(14, 'Environment Setup',            3, 'CNRL - HCM OTL Implementation','Medium',  '2025-04-15', 'done'),
(15, 'Legacy Data Extract',          5, 'Mary Greely Health - HCM',    'High',     '2025-04-22', 'done');

SELECT setval('board_tasks_id_seq', 15);

-- ================================================================
-- SEED: TASK ASSIGNEES
-- ================================================================
INSERT INTO task_assignees (task_id, employee_id) VALUES
(1,1),(1,4),(2,7),(2,3),(3,8),(4,15),(5,5),(5,14),(6,7),(6,9),
(7,20),(7,17),(8,2),(8,6),(9,3),(9,16),(10,5),(10,18),(11,10),
(12,15),(13,20),(14,4),(14,8),(15,12);

-- ================================================================
-- SEED: TASK TAGS
-- ================================================================
INSERT INTO task_tags (task_id, tag) VALUES
(1,'HCM'),(1,'Config'),(2,'Data'),(2,'Payroll'),(3,'OTL'),(4,'Benefits'),
(5,'Testing'),(5,'UAT'),(6,'Data'),(7,'Meeting'),(8,'Discovery'),
(9,'Payroll'),(10,'GoLive'),(11,'Security'),(12,'Discovery'),
(13,'PMO'),(14,'Setup'),(15,'Data');
