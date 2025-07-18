# 🚀 Vercel Deployment Guide

## Issue: 404 Not Found on Vercel

If you're getting a 404 error when deploying to Vercel, follow these steps:

### Solution 1: Deploy from the Correct Directory

1. **Make sure you're deploying from the Portfolio directory:**
   ```bash
   cd Portfolio
   vercel
   ```

2. **Or if using GitHub integration:**
   - Connect your GitHub repository
   - Set the **Root Directory** to `Portfolio` in Vercel settings
   - Set **Build Command** to: `echo "Static site - no build required"`
   - Set **Output Directory** to: `.`

### Solution 2: Move Files to Root (Alternative)

If the above doesn't work, move all files to the root directory:

1. **Copy all files from Portfolio/ to root:**
   ```bash
   cp Portfolio/* .
   cp Portfolio/public/* public/
   ```

2. **Deploy from root directory:**
   ```bash
   vercel
   ```

### Solution 3: Vercel Configuration

The `vercel.json` file is already configured for proper deployment:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Common Issues & Fixes:

1. **File Path Issues:**
   - Ensure `index.html` is in the root of your deployment directory
   - Check that `styles.css` and `script.js` are in the same directory as `index.html`

2. **Build Settings:**
   - Framework Preset: `Other`
   - Build Command: `echo "Static site"`
   - Output Directory: `.`

3. **Environment Variables:**
   - No environment variables needed for this static site

### Testing Locally:

Before deploying, test locally:
```bash
# Install a simple HTTP server
npm install -g http-server

# Serve the site locally
http-server -p 3000

# Open http://localhost:3000
```

### Vercel CLI Commands:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### File Structure for Deployment:

```
Portfolio/
├── index.html          # Main file
├── styles.css          # Styles
├── script.js           # JavaScript
├── vercel.json         # Vercel config
├── public/             # Assets
│   ├── rishaub-profile.jpg
│   └── resume.pdf
└── README.md
```

### Troubleshooting:

1. **Check Vercel logs** in the dashboard
2. **Verify file paths** in the HTML file
3. **Ensure all assets** are in the correct locations
4. **Check for any 404 errors** in the browser console

### Contact Support:

If issues persist:
- Check Vercel documentation: https://vercel.com/docs
- Review deployment logs in Vercel dashboard
- Ensure all external CDN links are accessible 