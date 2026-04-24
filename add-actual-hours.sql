-- Run this once in Supabase → SQL Editor to add the actual_hours column
ALTER TABLE assignments ADD COLUMN IF NOT EXISTS actual_hours INTEGER NOT NULL DEFAULT 0;
