# Next.js Boilerplate

Starter built on the Minimal UI kit with all demo pages removed. Components, theme, layouts, auth (JWT) and i18n are kept.

## Stack

- Next.js 16 (App Router), React 19
- MUI 9 (+ MUI X Data Grid / Date Pickers), Emotion
- React Hook Form + Zod
- i18next (en, fr, vi, cn, ar), RTL support
- Axios, Framer Motion, Iconify

## Prerequisites

- Node.js >= 22.12

## Getting started

```sh
cp .env.example .env
yarn install   # or: npm install
yarn dev       # http://localhost:3032
```

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `dev`             | Start dev server on port 3032        |
| `build` / `start` | Production build / serve             |
| `lint` / `lint:fix` | ESLint                             |
| `fm:check` / `fm:fix` | Prettier                         |
| `fix:all`         | Lint fix + format                    |

## Folder structure

```
src/
├── app/                 # Routes (App Router)
│   ├── (home)/          # "/" with MainLayout
│   ├── auth/jwt/        # sign-in, sign-up
│   ├── dashboard/       # AuthGuard + DashboardLayout
│   └── error/           # 403, 404, 500
├── assets/              # Inline SVG icons, illustrations, static data (countries)
├── auth/                # JWT context, guards, hooks, sign-in/up views
├── components/          # Reusable UI components (upload, editor, chart, table, hook-form, ...)
├── layouts/             # main, dashboard, simple, auth-split, auth-centered + nav configs
├── lib/                 # axios instance + API endpoints
├── locales/             # i18n setup and translations
├── routes/              # paths.js, RouterLink, router hooks
├── sections/            # Page views (blank, error) — one folder per feature
├── theme/               # MUI theme, component overrides, settings
├── utils/               # format-number, format-time
└── global-config.js     # App name, server url, auth config
```

## Adding a page

1. **Path** — add the route to `src/routes/paths.js`:
   ```js
   dashboard: { root: ROOTS.DASHBOARD, users: `${ROOTS.DASHBOARD}/users` },
   ```
2. **View** — create `src/sections/users/view/users-view.jsx` (+ `index.js` barrel). Build the UI from `src/components`.
3. **Route** — create `src/app/dashboard/users/page.jsx` that exports `metadata` and renders the view.
4. **Navigation** — add an item to `src/layouts/nav-config-dashboard.jsx` (or `nav-config-main.jsx` for public pages).
5. **API** — add endpoints to `src/lib/axios.js`.

## Auth

`CONFIG.auth.method` is `jwt`. The provider in `src/auth/context/jwt` calls:

- `POST /api/auth/sign-in` → `{ accessToken }`
- `POST /api/auth/sign-up` → `{ accessToken }`
- `GET  /api/auth/me` → `{ user }`

on `NEXT_PUBLIC_SERVER_URL`. Update `src/lib/axios.js` endpoints to match your backend.

Set `CONFIG.auth.skip = true` in `src/global-config.js` to open the dashboard without signing in while building UI.

The layout header still uses a placeholder user (`src/auth/hooks/use-mocked-user.js`). Swap `useMockedUser()` for `useAuthContext()` once your API returns a real user.

## Docs

Component and theme docs for the underlying kit: https://docs.minimals.cc
