Do not import the .env file; read it directly from the global object provided by your bundler.
const apiUrl = import.meta.env.VITE_API_URL;

React build tools require a specific prefix so you don't accidentally leak server-side secrets into the browser bundle. Variables without the prefix are ignored in frontend code.
VITE_API_URL=https://api.example.com
VITE_STRIPE_PUBLIC_KEY=pk_test_12345

IMAP fetch (backfill to a date, then only new mail)
→ rules: known ATS senders, subject patterns ──→ related / skipped + reason code
→ local LLM, only for what the rules can't decide ──→ related / skipped / unsure
→ extract fields (JSON, "unknown" allowed)
→ match to an existing application row, or create one
→ Postgres ← Express API ← React grid: applications tab + review tab
↓
your corrections → labeled set → accuracy per stage

skip reasons fixed codes, not free text. For example: newsletter, job_alert, no_ats_sender,
llm_unrelated.

Active table

Interview stage table

rejected table

rules only first then integrate a local llm

import simplify jobs, github (swe internship links), linkedin?, indeed?, etc?

applications (one table)
├─ Active tab = WHERE status = 'active' ORDER BY applied_on
├─ Interview stage tab = WHERE status = 'interview' ORDER BY applied_on
└─ Rejected tab = WHERE status = 'rejected' ORDER BY applied_on

    Changing a status is one UPDATE. "Choose the correct row based on date applied" -> ORDER

BY. The auto-date is applied_on DATE DEFAULT CURRENT_DATE. Add status_events table that records
each change with its date, written in the same transaction as the UPDATE -> "applied
10/2, OA 10/9, rejected 10/30".

──────────┬─────────────────────────┬───────────────────────────────────────────────────────┐
│ Part │ SQL feature │ What it does│
├─────────────┼─────────────────────────┼───────────────────────────────────────────────────────┤
│ Tracker │ UPDATE, DEFAULT, │ Status changes, auto dates, history that never gets │
│ │ transactions │ half-written │
├─────────────┼─────────────────────────┼───────────────────────────────────────────────────────┤
│ Job pool │ UNIQUE + INSERT ... ON │ Re-importing the same listing never makes a duplicate │
│ │ CONFLICT │ │
├─────────────┼─────────────────────────┼───────────────────────────────────────────────────────┤
│ Job pool │ NOT EXISTS (anti-join) │ Hides listings you've already applied to │
├─────────────┼─────────────────────────┼───────────────────────────────────────────────────────┤
│ Job pool │ archived_at + date math │ A repeat posting comes back once it's newer than the │
│ │ │ archive date plus your gap │
├─────────────┼─────────────────────────┼───────────────────────────────────────────────────────┤
│ Gmail │ UNIQUE on message id │ Re-running a batch never logs the same email twice │
│ reader │ │ │
├─────────────┼─────────────────────────┼───────────────────────────────────────────────────────┤
│ Accuracy │ JOIN + GROUP BY │ Accuracy per stage and per rules version, from your │
│ page │ │ corrections │
└─────────────┴─────────────────────────┴───────────────────────────────────────────────────

supabase
Turn on RLS (row-level security) on every table.
Delete email bodies after review.

Dedup │ Already-applied warning │
├──────────┼─────────────────────────────────────────────────┼──────────────────────────────────┤
│ Question │ "Is this the same posting I've already seen?" │ "Have I applied to this │
│ │ │ company?" │
├──────────┼─────────────────────────────────────────────────┼──────────────────────────────────┤
│ Effect │ Hidden from the pool │ Shown, with a badge: "Applied │
│ │ │ 10/02, Backend Intern, rejected" │
├──────────┼─────────────────────────────────────────────────┼──────────────────────────────────┤
│ │ Posting URL with tracking parameters removed; │ Company name; a stronger badge │
│ Match on │ fallback: same company + normalized title + │ if the title is similar │
│ │ location within 60 days │ │
├──────────┼─────────────────────────────────────────────────┼──────────────────────────────────┤
│ SQL │ UNIQUE + INSERT ... ON CONFLICT │ LEFT JOIN to applications
