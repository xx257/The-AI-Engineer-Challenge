# Matrix Terminal Frontend

A **Next.js** chat UI with a Matrix-style terminal aesthetic — green phosphor text, falling code rain, and a shell-style prompt. It talks to the FastAPI backend at `POST /api/chat`.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (includes `npm`)
- Backend running locally (see repo root `README.md` or `api/README.md`)

## Run locally

**Terminal 1 — backend** (from repo root):

```bash
export OPENAI_API_KEY=sk-your-key-here
uv sync
uv run uvicorn api.index:app --reload
```

**Terminal 2 — frontend** (from this folder):

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`next.config.ts` proxies `/api/*` to `http://localhost:8000` in development, so you do not need CORS tweaks for local testing.

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push the repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Set the environment variable **`OPENAI_API_KEY`** in the Vercel project settings.
3. Deploy — root `vercel.json` routes `/api/*` to Python and everything else to this Next.js app.

## Theme

| Token | Value | Use |
|-------|-------|-----|
| Background | `#020a02` | Page |
| Panel | `#041204` | Terminal window |
| Primary green | `#00ff41` | Prompts, accents |
| Body text | `#c8ffc8` | Coach replies |

Contrast is tuned so text stays readable over the animated rain layer.
