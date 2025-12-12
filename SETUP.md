# Setup Instructions

Quick start guide to get the project up and running.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- **Git** - [Download](https://git-scm.com/)
- A code editor (VS Code recommended)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/frontend-developer-assignment.git
cd frontend-developer-assignment
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The application will be available at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Development Workflow

### Running the Project

1. Start the dev server: `npm run dev`
2. Open browser to `http://localhost:3000`
3. Make changes to files in `src/`
4. Changes will be reflected instantly (HMR)

### Code Quality

Run linting:
```bash
npm run lint
```

Run type checking:
```bash
npm run type-check
```

### Making Changes

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test your changes
4. Commit: `git commit -m "Description of changes"`
5. Push: `git push origin feature/your-feature`

## VS Code Setup (Recommended)

### Recommended Extensions

Install these VS Code extensions for the best experience:

1. **ESLint** - `dbaeumer.vscode-eslint`
2. **Tailwind CSS IntelliSense** - `bradlc.vscode-tailwindcss`
3. **Prettier** - `esbenp.prettier-vscode`
4. **TypeScript** - Built-in

The project includes `.vscode/extensions.json` which will prompt you to install these.

### Settings

The project includes VS Code settings for:
- Auto-formatting on save
- ESLint auto-fix on save
- Tailwind CSS IntelliSense

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── Hero.tsx     # Hero section
│   ├── Navbar.tsx   # Navigation
│   └── ...          # Other sections
├── layouts/         # Layout components
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── constants/       # Data and constants
├── styles/          # Global styles
└── App.tsx          # Main app component
```

## Common Tasks

### Adding a New Component

1. Create file in `src/components/`
2. Use TypeScript and functional components
3. Export as default
4. Import and use in parent component

Example:
```typescript
import { FC } from 'react';

interface MyComponentProps {
  title: string;
}

const MyComponent: FC<MyComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default MyComponent;
```

### Adding New Styles

1. Use Tailwind utility classes when possible
2. For custom styles, add to `src/styles/index.css`
3. Follow the existing pattern of `@layer components` or `@layer utilities`

### Adding New Data

1. Add to `src/constants/data.ts`
2. Define TypeScript types for data
3. Export as const

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
# The dev server will automatically use port 3001, 3002, etc.
# Or specify a custom port:
npm run dev -- --port 3001
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Run type checking to see TypeScript errors
npm run type-check

# Run linting to see code style issues
npm run lint
```

### Tailwind Styles Not Working

Make sure:
1. Tailwind directives are in `src/styles/index.css`
2. Import statement exists in `src/main.tsx`
3. `tailwind.config.js` includes all content paths

## Getting Help

- Check the [README.md](README.md) for detailed information
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions
- Open an issue on GitHub for bugs
- Check existing issues for similar problems

## Next Steps

After setup:
1. ✅ Explore the codebase
2. ✅ Run the development server
3. ✅ Make your first change
4. ✅ Build for production
5. ✅ Deploy (see [DEPLOYMENT.md](DEPLOYMENT.md))

Happy coding! 🚀
