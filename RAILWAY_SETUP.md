# 🚆 Railway Deployment Guide

Your code is available at: `https://github.com/T361/legalgramchatbotbackend`

## Overview
This repository contains the Python FastAPI microservice used by the Legalgram chatbot. The instructions below walk you through deploying this service to Railway and updating the frontend to point at the deployed domain.

### Step 1 — Create the Railway Project
1. Sign in to https://railway.app
2. Click **New Project** → **Deploy from GitHub**
3. Choose the repository: `T361/legalgramchatbotbackend`

### Step 2 — Build & Start Commands
Railway usually auto-detects Python projects. Use the following if you need to provide them manually:

- Build command: leave empty (Railway detects Python)
- Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

Procfile (already included):

```
web: python main.py
```

Note: The repository includes a `Procfile` and `requirements.txt`. The recommended runtime is Python 3.11+.

### Step 3 — Environment Variables (Variables → New Variable)
Add the following variables in the Railway Dashboard (these names are referenced by the code):

- `GROQ_API_KEY` : Your Groq API key (example: `gsk_...`).
- `PORT` : Leave blank or set to `8000` (Railway will provide $PORT at runtime; uvicorn uses $PORT automatically).
- `SOME_OTHER_SECRET` : If your backend uses additional secrets (e.g., DB credentials, API keys), add them here.

Recommended production variables to review (if applicable):

- `DATABASE_URL` — Postgres URL if you connect to a DB
- `REDIS_URL` — Redis URL if you use caching/session storage
- `GROQ_API_KEY` — required by the service to call Groq securely from backend

Security note: Do not store API keys in the frontend. Keep them in Railway variables only.

### Step 4 — Networking / Domain
1. In Railway project → Settings → Domains, copy the generated domain, e.g. `legalgramchatbotbackend-production.up.railway.app`.
2. Use that domain as your BACKEND URL in the frontend (see next step).

### Step 5 — Update Frontend
1. Open the frontend repo (`Lovable`).
2. Open `src/services/groqService.ts` and update the BACKEND_URL value or set `VITE_API_URL` in your frontend environment to the Railway domain you copied.

Example (set in `.env` or Railway environment for frontend hosting):

```
VITE_API_URL=https://legalgramchatbotbackend-production.up.railway.app
```

### Step 6 — Quick verification
After deployment, verify the backend endpoint is reachable:

```
curl -X POST "https://your-domain.example/api/chat" -H "Content-Type: application/json" -d '{"message":"hello","session_id":"test"}'
```

The response should be JSON containing a `response` string. If not, check Railway logs for stack traces and ensure environment variables are set.

### Troubleshooting
- If deployment fails due to package installation, check `requirements.txt` for incompatible versions and adjust the Python runtime in Railway.
- If the app fails to start, view Railway logs (Project → Deployments → Logs) and fix exceptions.

---

If you want, I can also create a small GitHub Actions workflow to deploy on push to `main` or prepare a README section with one-click Railway steps.
