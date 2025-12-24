FAST Roadmap — Neo-Cyberpunk / Zen Obsidian UI
============================================

A curated academic roadmap web app for FAST-NU (BS Software Engineering), built with Next.js, Tailwind CSS, Framer Motion and an optional React-Three-Fiber background.

This repository contains a visual redesign that experiments with two visual directions:

- "Neo-Cyberpunk" — Glassmorphism, radiant gradients, Three.js starfield/grid background, dramatic hero. (high-fidelity visuals)
- "Zen Obsidian" — Solid, minimal, high-contrast palette with improved whitespace and readability (production-safe fallback).

The work in this branch includes both design explorations and critical bug fixes (scrolling, resource links, dropdown opacity, layout). The primary goal is a clean, usable learning platform for FAST students.

Table of contents
-----------------

- What this project is
- Quick start (dev)
- Important commands
- Design notes & theme choices
- Key files and components changed
- Troubleshooting
  - Turbopack "OS file watch limit reached" fix
  - If dev server fails to boot
- How to contribute
- License

What this project is
--------------------

FAST Roadmap is a small curriculum navigator that maps semesters, courses, and curated resources (YouTube playlists, archived lectures, websites). It was built as a student-focused utility and UX experiment in styling (cyberpunk vs. zen-minimal).

Tech stack
----------

- Next.js 16.x (App Router)
- Tailwind CSS
- Framer Motion
- React Three Fiber (@react-three/fiber) and @react-three/drei (optional 3D background)
- Lucide icons
- MongoDB Atlas (optional) with static JSON fallback when no DB URI is present

Quick start (development)
-------------------------

1. Install dependencies:

```bash
cd /home/dns/Desktop/TOOL/emergent-atlas
npm install
```

2. Run the dev server (Turbopack - recommended):

```bash
# start dev server on port 3000
npm run dev -- --port 3000
```

If Turbopack fails due to OS file watch limits see Troubleshooting below.

Important commands
------------------

- npm run dev — start dev server (Turbopack by default)
- NEXT_DISABLE_TURBOPACK=1 npm run dev — start under webpack (fallback if Turbopack issues)
- npm run build && npm run start — build & run production

Design notes
------------

Two primary visual directions are present in this codebase. Pick one (or keep both) by adjusting styles/components:

1. Neo-Cyberpunk (exploratory)
   - `src/app/globals.css` contains gradient, glass and neon utilities.
   - `src/components/three/CyberBackground.tsx` implements a Three.js starfield + grid. It is optional and will gracefully fallback to a static mesh gradient on low-power devices.
   - Hero is in `src/components/organisms/PortalGate.tsx` — big "ENTER SYSTEM" CTA and animated gradient title.

2. Zen Obsidian (production-ready fallback)
   - `globals.css` also contains a cleaned palette (Zinc-based solid backgrounds) and classes meant for a calmer UI.
   - Many components were rewritten to support solid backgrounds and improved spacing.

Key files and components (what changed)
--------------------------------------

- src/app/globals.css — global styles (cyberpunk utilities + zen fallback palette)
- src/components/three/CyberBackground.tsx — Three.js starfield/grid background (react-three-fiber)
- src/components/organisms/PortalGate.tsx — welcome/hero screen (ENTER SYSTEM)
- src/components/organisms/AtlasGrid.tsx — main grid (refactored for spacing, fixed scrolling, opaque dropdowns)
- src/components/organisms/CourseDetailPanel.tsx — detail panel with resources rendered using ResourceLink
- src/components/molecules/ResourceLink.tsx — updated resource type mappings and visuals
- src/components/molecules/SearchInput.tsx — improved focus styling
- src/components/molecules/* — RoadmapPhaseItem, FailurePointItem, etc. adjusted visual styles

Functional fixes implemented
----------------------------

- Fixed scrolling: main layout uses `h-screen` / `flex` and a `flex-1 overflow-y-auto min-h-0` content area to ensure native scrolling.
- Resources now render in the `CourseDetailPanel` using `ResourceLink` and open external links with `target="_blank" rel="noopener noreferrer"`.
- Dropdowns/selects removed glass/backdrop-blur and now use opaque `bg-zinc-900`/`bg-[#18181b]` with `z-50` to avoid bleed-through.
- Added missing resource icon mappings for several resource types (ARCHIVE_VIDEO, YOUTUBE_PLAYLIST, WEB_TOOL)

Troubleshooting
---------------

If the dev server crashes with an error like "OS file watch limit reached" (Turbopack panic) do one of the following:

1) Increase inotify watches (recommended):

```bash
# increase until next reboot
sudo sysctl fs.inotify.max_user_watches=524288

# make persistent
echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

2) Start dev server with Turbopack disabled (slower but reliable):

```bash
NEXT_DISABLE_TURBOPACK=1 npm run dev
```

3) Kill other watchers (editors, secondary dev servers) then restart.

If you see TypeScript/JSX syntax errors after edits, run a TypeScript check or linter locally to find which file is malformed:

```bash
npm run build
# or
pnpm -w tsc --noEmit
```

How to verify the critical fixes
--------------------------------

- Start the dev server and open http://localhost:3000
- From the welcome screen click ENTER SYSTEM (or press Enter)
- On the main grid, verify:
  - You can scroll the course list fully.
  - Open a course detail panel and click the Abdul Bari archive link — it should open in a new tab (Archive.org URL).
  - Dropdowns are opaque and do not show background bleed-through.

Notes on pushing and branches
----------------------------

This README was added to the current working branch. If you need it on a specific remote branch (for example `main` or `dev`), create or switch to that branch before committing and pushing.

Example workflow:

```bash
git checkout -b feat/readme
git add README.md
git commit -m "docs: add comprehensive README with setup and troubleshooting"
git push -u origin feat/readme
```

Contributing
------------

- Follow the code style already used in the repo.
- Keep UI changes focused: either Neo-Cyberpunk or Zen Obsidian styles (mixing both can be visually noisy).
- Add tests for data transformations where possible.

License
-------

MIT — see LICENSE file if included.

Credits
-------

Built for FAST-NU BS Software Engineering students.

Contact
-------

For design decisions or questions, open an issue in this repo or contact the project owner listed in `src/lib/constants.ts`.
