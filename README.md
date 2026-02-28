# Deploy to Vercel

## Steps:

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Click "Import" → Upload folder: `~/Downloads/tracker-vercel`
5. Click "Deploy"
6. Done! You'll get URL like: `https://your-app.vercel.app`

## Or use Vercel CLI:

```bash
npm i -g vercel
cd ~/Downloads/tracker-vercel
vercel
```

## Files:
- `api/track.js` - Proxy API
- `public/index.html` - Web app
- `vercel.json` - Config

## Usage:
Open URL on mobile → Enter code → Fetch → Copy

Location: ~/Downloads/tracker-vercel/
