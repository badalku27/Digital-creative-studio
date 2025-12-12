# Quick Start Guide - Windows PowerShell

## Step-by-Step Instructions to Run the Project

### Step 1: Verify Prerequisites

Open PowerShell and check if Node.js is installed:

```powershell
node --version
```

Expected output: `v18.x.x` or higher

If not installed, download from: https://nodejs.org/

### Step 2: Navigate to Project Directory

```powershell
cd f:\Figma_design
```

### Step 3: Install Dependencies

```powershell
npm install
```

This will take 1-3 minutes. You'll see a progress bar.

### Step 4: Start Development Server

```powershell
npm run dev
```

Expected output:
```
  VITE v5.2.0  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 5: Open in Browser

The terminal will show the URL. Either:
- Hold `Ctrl` and click the link, or
- Open your browser and go to: `http://localhost:3000`

### Step 6: Make Changes (Optional)

The app will automatically reload when you save changes to files in the `src/` folder.

### Step 7: Build for Production (When Ready)

```powershell
npm run build
```

Production files will be in the `dist/` folder.

### Step 8: Preview Production Build

```powershell
npm run preview
```

## Common Commands

### Stop the Development Server
Press `Ctrl + C` in the PowerShell window

### Clear and Reinstall Dependencies
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### Run Type Checking
```powershell
npm run type-check
```

### Run Linting
```powershell
npm run lint
```

### View Package Scripts
```powershell
npm run
```

## Troubleshooting

### Port Already in Use
Vite will automatically try the next available port (3001, 3002, etc.)

### Module Not Found
```powershell
npm install
```

### Permission Errors
Run PowerShell as Administrator

### Node Version Issues
Update Node.js to version 18 or higher

## Next Steps

1. ✅ Explore the code in `src/components/`
2. ✅ Customize content in `src/constants/data.ts`
3. ✅ Update colors in `tailwind.config.js`
4. ✅ Replace placeholder images
5. ✅ Deploy (see DEPLOYMENT.md)

## Need Help?

- Read README.md for detailed documentation
- Check SETUP.md for detailed setup instructions
- Check PROJECT_SUMMARY.md for project overview

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run type-check` | Check TypeScript types |

---

**You're all set!** 🚀 Happy coding!
