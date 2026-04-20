# vercel-deploy-starter

Demo repo for the "Deploy Anything in 5 Minutes" video.
Part of the [Vibe to Production](https://www.youtube.com/@sharonsciammas) series.

## What this shows

- Next.js app that reads from an environment variable
- Automatically detects Vercel environment (local / preview / production)
- Shows your branch URL when deployed to a preview environment

## Deploy in 5 steps

1. Fork this repo on GitHub
2. Go to [vercel.com](https://vercel.com) → Add New Project
3. Connect your GitHub account and select this repo
4. Click Deploy (no configuration needed)
5. Go to Project Settings → Environment Variables → add `GREETING` with any value

Every push to any branch creates a preview deployment automatically.

## Run locally

```bash
git clone https://github.com/sharonds/vercel-deploy-starter
cd vercel-deploy-starter
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## License

MIT
