# Deployment Guide

This guide will help you deploy the Digital Creative Studio to various hosting platforms.

## Prerequisites

- GitHub account
- Node.js 18+ installed locally
- Project repository pushed to GitHub

## Option 1: Deploy to Vercel (Recommended)

Vercel provides the easiest and fastest deployment for Vite projects.

### Steps:

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite configuration

3. **Configure Build Settings** (usually auto-detected)
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)
   - Get your live URL: `https://your-project.vercel.app`

### Automatic Deployments

- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## Option 2: Deploy to Netlify

Netlify is another excellent option for static site hosting.

### Steps:

1. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Get your live URL: `https://your-project.netlify.app`

### Netlify CLI (Alternative)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your project
npm run build

# Deploy
netlify deploy --prod
```

---

## Option 3: GitHub Pages

Deploy directly from GitHub repository.

### Steps:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/frontend-developer-assignment"
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/frontend-developer-assignment/',
     // ... rest of config
   });
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

---

## Option 4: Manual Deployment (Any Host)

For any static hosting service (e.g., AWS S3, Firebase Hosting, etc.)

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload dist/ folder**
   - The `dist` folder contains all production-ready files
   - Upload all files to your hosting provider

3. **Configure server**
   - Ensure index.html is served for all routes
   - Enable HTTPS
   - Set proper cache headers

### Server Configuration Examples

#### Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Post-Deployment Checklist

After deploying, verify:

- ✅ Site loads correctly
- ✅ All sections are visible
- ✅ Animations work smoothly
- ✅ Images load properly
- ✅ Navigation works
- ✅ No console errors
- ✅ Mobile responsiveness
- ✅ Performance (run Lighthouse audit)
- ✅ HTTPS enabled
- ✅ Custom domain configured (if applicable)

---

## Performance Optimization

### After deployment:

1. **Run Lighthouse Audit**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit for Performance, Accessibility, Best Practices, SEO

2. **Monitor Core Web Vitals**
   - Check First Contentful Paint (FCP)
   - Check Largest Contentful Paint (LCP)
   - Check Cumulative Layout Shift (CLS)
   - Check First Input Delay (FID)

3. **Optimize if needed**
   - Compress images further
   - Enable CDN
   - Implement additional code splitting
   - Add service worker for offline support

---

## Continuous Deployment

### With Vercel/Netlify:

Both platforms offer automatic deployments:
- Push to `main` → Production deployment
- Create PR → Preview deployment
- No configuration needed!

### With GitHub Actions (Custom):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Troubleshooting

### Common Issues:

1. **Build fails on deployment**
   - Check Node.js version (should be 18+)
   - Ensure all dependencies are in package.json
   - Run `npm run build` locally first

2. **404 errors on page refresh**
   - Configure server to serve index.html for all routes
   - Add `_redirects` file for Netlify:
     ```
     /*    /index.html   200
     ```

3. **Images not loading**
   - Verify image paths are correct
   - Use relative paths or configure base URL

4. **Slow load times**
   - Enable CDN
   - Optimize images
   - Check bundle size with `npm run build -- --analyze`

---

## Custom Domain Setup

### Vercel:
1. Add domain in project settings
2. Update DNS records:
   - A record: 76.76.21.21
   - CNAME: cname.vercel-dns.com

### Netlify:
1. Add domain in site settings
2. Update DNS records:
   - A record: 75.2.60.5
   - CNAME: your-site.netlify.app

---

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)

---

**Ready to deploy?** Choose your platform and follow the steps above! 🚀
