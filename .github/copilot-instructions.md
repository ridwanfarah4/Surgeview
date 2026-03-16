# Copilot / AI Agent Instructions for this repo

This project is a Wasp + React + TypeScript app (Open SaaS template). Keep guidance tightly focused on repository-specific patterns, dev flows, and integration points so AI agents are productive immediately.

- **Project roots & runtime:** Uses Wasp (`main.wasp`) to wire client/server; runs with `wasp start db` (start DB) and `wasp start` (app). If you change Prisma models, run `wasp db migrate-dev`.
- **Env files:** Developer secrets live in `.env.client` and `.env.server` at repo root. Do not commit these files.

- **DB & schema:** Prisma schema is at `schema.prisma` and migrations are under `migrations/`. Use Wasp commands to change schema; do not manually edit production migration history.

- **Tech stack:** Frontend: React + TypeScript + Vite + Tailwind. Backend: Node via Wasp server functions, Prisma for DB. See `package.json`, `vite.config.ts`, and `tailwind.config.js` for infra details.

- **Directory conventions:**
  - `src/client` — client app entry, shared hooks, components. UI components under `src/client/components`.
  - `src/admin` — admin/dashboard UI and layout components (e.g., `Header.tsx`, `Sidebar.tsx`).
  - `src/server` — server helpers and validation (e.g., `src/server/utils.ts`, `src/server/validation.ts`).
  - Feature folders (e.g., `src/competitors`, `src/file-upload`, `src/payment`) often expose an `operations.ts` file containing backend-facing logic or helper functions. Example: `src/competitors/operations.ts`.
  - Shared utilities are in `src/shared` and `src/client/utils.ts`.

- **Pattern: `operations.ts`** — Many features group domain logic or API-like helpers in an `operations.ts` file adjacent to UI pages. When adding feature logic, follow this existing pattern.

- **File upload & storage:** S3 helpers live at `src/file-upload/s3Utils.ts`. Follow its patterns for signed upload flows.

- **Payments & webhooks:** Payment integrations have their own subfolders under `src/payment` (e.g., `stripe`, `lemonSqueezy`, `polar`). Webhook handlers and payment-specific logic live under `src/payment` (see `webhook.ts` and `paymentProcessor.ts`). Be careful when changing webhook endpoints—tests and local replay are recommended.

- **Auth flows:** Auth pages and email/password flows are under `src/auth`, including `email-and-pass` pages (email verification, reset flow). Look for `userSignupFields.ts` for signup field definitions.

- **Migrations & data:** Migration files are present in `migrations/`. To add schema changes: update Prisma models, then run `wasp db migrate-dev`. For local dev, run `wasp start db` first.

- **Dev commands (quick):**
  - Start DB: `wasp start db`
  - Start app: `wasp start`
  - Apply dev migrations: `wasp db migrate-dev`

- **Tests & lint:** There is no central test harness in the repo root. Run project-specific scripts in `package.json` where available. Prefer running the app locally to validate end-to-end changes.

- **Search patterns for newcomers:** Look for `operations.ts`, `*.ts(x)` under `src/` for feature implementations, and `main.wasp` for Wasp declarations. Example quick grep targets: `operations.ts`, `schema.prisma`, `wasp`, `s3Utils`, `webhook`.

- **PR guidance for AI edits:**
  - Keep changes small and focused; update migrations only via `wasp db migrate-dev` and include migration files in PR.
  - When editing API-like logic in `operations.ts`, update adjacent UI pages that call it (search for imports).
  - For style/UI edits, prefer reusing components under `src/client/components` and `src/admin/elements`.

- **Do not modify:** Avoid changing `main.wasp` wiring or Wasp internals unless necessary. Avoid altering migration history in `migrations/` except by adding new migration files via the Wasp workflow.

If anything below is unclear or you want the instructions expanded (more examples, quick grep commands, or CI notes), say which area to expand and I will iterate.
<!-- Copilot instructions tailored to the Spybrief / OpenSaaS Wasp app -->
# Copilot usage notes for this repository

Purpose: Give AI coding agents concise, actionable context to be immediately productive in this Wasp + React + Prisma codebase.

- Big picture:
  - This is a Wasp full‑stack app (see top‑level `main.wasp`). The app uses Vite + React for the client and a Wasp built Node/Express server with Prisma for DB access.
  - The canonical data model is in [schema.prisma](schema.prisma). DB migrations are under `migrations/` and are applied via Wasp/Prisma.

- Key developer workflows (explicit commands):
  - Ensure environment files exist: `.env.client` and `.env.server` at repo root.
  - Start the DB (Postgres) for local dev: `wasp start db` (leave running).
  - Start the app: `wasp start` (leave running).
  - When changing Prisma entities: `wasp db migrate-dev`.

- Project layout (most important places to inspect):
  - [src/client](src/client): React entry (`App.tsx`), common UI and hooks.
  - [src/admin](src/admin): Admin dashboard layout/components.
  - [src/server](src/server): Server utilities and validation helpers.
  - [src/*/operations.ts]: Many features expose server operations in a file named `operations.ts` next to the feature (examples: [src/competitors/operations.ts](src/competitors/operations.ts), [src/file-upload/operations.ts](src/file-upload/operations.ts)). Treat these as the primary server API surface.
  - [src/file-upload/s3Utils.ts](src/file-upload/s3Utils.ts): S3 helpers and signed upload flows.
  - [src/payment](src/payment): Payment processors, webhooks and plan definitions (look at [src/payment/paymentProcessor.ts](src/payment/paymentProcessor.ts) and [src/payment/webhook.ts](src/payment/webhook.ts)).
  - [migrations/](migrations): Prisma migration SQL; keep migrations consistent when changing the schema.

- Conventions and patterns to follow (project‑specific):
  - Feature modules commonly use `operations.ts` for server functions and `XPage.tsx` for pages. When implementing a new feature, add `operations.ts` for server logic and keep client UI in `*.tsx` under the same folder.
  - Validation is centralized in `src/server/validation.ts` and feature `validation.ts` files. Reuse Zod schemas where present.
  - Shared utils reside in `src/shared` and `src/server/utils.ts`; prefer adding cross‑cutting helpers there.
  - Styling: Tailwind + Tailwind plugin config; global CSS and Tailwind config live at the repo root (`tailwind.config.js`, `src/client/Main.css`). Use component-level Tailwind classes and existing utility components in `src/client/components/ui/`.

- Integrations & dependencies to be aware of:
  - Prisma + Postgres (DB migrations in `migrations/`).
  - Background jobs: project includes pg‑boss usage in the generated Wasp SDK (see `.wasp/out`), so be cautious when changing job names or schedules.
  - S3 uploads via AWS SDK (`@aws-sdk/*`) — check `src/file-upload` for signing flows.
  - Payments: supports Stripe, LemonSqueezy and Polar (see `src/payment/lemonSqueezy/`, `src/payment/stripe/`, `src/payment/polar/`).
  - Analytics and providers: `src/analytics/providers` contains provider adapters (GA, Plausible).
  - OpenAI usage present (`openai` dependency) — review `demo-ai-app/` for examples of server/client usage.

- Quick examples for common tasks:
  - Add a new server operation for a feature: create `src/yourFeature/operations.ts`, export functions, then call them from client code; follow patterns in [src/competitors/operations.ts](src/competitors/operations.ts).
  - Add a DB field: update `schema.prisma`, create a migration (`wasp db migrate-dev`), and update any Zod schemas in `validation.ts`.
  - Change file upload flow: edit `src/file-upload/s3Utils.ts` and `src/file-upload/operations.ts` together — both are used for signing + server validation.

- What NOT to assume:
  - There are no npm scripts for building or starting the app — use the `wasp` CLI as described above.
  - Some runtime behavior (jobs, generated SDK code) lives under `.wasp/out` — do not edit generated files there; change the source Wasp definitions instead.

If anything above is unclear or you want more examples (for example, a template `operations.ts` or a walkthrough of a payment webhook change), tell me which area to expand and I will iterate.
<!-- Copilot/AI agent instructions for the Spybrief Wasp app -->
# Copilot / AI Agent Instructions

Purpose: Give actionable, repo-specific guidance so an AI coding agent can be productive immediately.

Big picture
- This is a Wasp full-stack app: Wasp config (main.wasp) generates a React frontend, Node server, and Prisma models from schema.prisma.
- Runtime pieces: `client` (React/TSX in `src/`), `server` (Wasp server operations in `src/`), and database (Prisma).
- Feature code is grouped by feature under `src/{featureName}` (e.g., `competitors`, `payment`, `auth`).

Quick dev workflow (local)
- Ensure `.env.client` and `.env.server` exist in project root.
- Start DB: `wasp start db` (leave running). Then start app: `wasp start`.
- After schema changes run: `wasp db migrate-dev`.

Key files & patterns to consult
- `main.wasp` — source of truth for routes, pages, auth, and operations (use `@src/...` imports inside `main.wasp`).
- `schema.prisma` — Prisma models → Wasp entities.
- `src/*/operations.ts` — implement Wasp `query` and `action` handlers for each feature.
- `wasp/*` virtual modules: `wasp/entities`, `wasp/client/operations`, `wasp/server/operations`, `wasp/auth` — import from these for generated types/clients.
- `.cursor/rules/*.mdc` — project-specific guidance (wasp-overview, auth, db ops, deployment, project-conventions). Read these for conventions.

Important code conventions
- Imports in TSX/TS files: prefer relative paths inside `src/`. Use `wasp/...` imports for Wasp-generated types/clients (e.g., `import { useQuery } from 'wasp/client/operations'`).
- In `main.wasp` component imports must use `@src/...` (e.g., `component: import { LoginPage } from "@src/auth/LoginPage.tsx"`).
- Operations: implement paired query/action functions in `operations.ts` inside the feature folder and declare them in `main.wasp` with `entities: [...]` so `context.entities.Model` is available.
- Client actions: call actions directly with `await myAction(args)` from `wasp/client/operations` — avoid `useAction` unless doing optimistic updates.
- Prisma enums (runtime values) import from `@prisma/client` (not `wasp/entities`).
- Server errors: throw `HttpError` from `wasp/server` for structured client responses.

Auth specifics
- Auth configured via `main.wasp` (see `auth` block). When `emailSender: { provider: Dummy }` is used, verification/reset links are printed to the server console.
- Use `useAuth()` from `wasp/client/auth` on the client. Auth identity fields live under `user.identities.*` or use helpers in `wasp/auth` (e.g., `getEmail(user)`).

Deployment & integrations
- Deploy via Wasp CLI (example target: Fly.io): `wasp deploy fly launch <app-name> <region>` then `wasp deploy fly deploy` for updates.
- External integrations (webhooks, payment processors) often live under `src/payment` (see `payment/webhook.ts`, `payment/stripe/`, `payment/lemonSqueezy/`).

What to change and how
- If adding an operation: update `main.wasp` (declare the operation and entities), implement function in `src/<feature>/operations.ts`, restart `wasp start` to pick up generated types.
- If updating Prisma models: edit `schema.prisma` then run `wasp db migrate-dev` and restart dev server.

Quick examples
- Call an action from client:
  import { createCompetitor } from 'wasp/client/operations';
  await createCompetitor({ name: 'X' });
- Server operation skeleton (`src/<feature>/operations.ts`):
  export const getItems = async (_args, context) => {
    if (!context.user) throw new (await import('wasp/server')).HttpError(401, 'Not authorized');
    return context.entities.Item.findMany({ where: { userId: context.user.id } });
  }

Notes for reviewers
- Prefer consulting `main.wasp`, `schema.prisma`, and `src/*/operations.ts` for authoritative behavior rather than guessing.
- Read `.cursor/rules/` docs in this repo for additional, discoverable project rules before making changes.

If anything here is unclear or you want more detail about a specific area (auth flow, payment hooks, or a feature folder), say which feature and I'll expand the guidance.
