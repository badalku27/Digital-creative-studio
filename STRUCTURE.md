# Project Structure

```
frontend-developer-assignment/
│
├── 📁 .vscode/                      # VS Code configuration
│   ├── extensions.json             # Recommended extensions
│   └── settings.json               # Workspace settings
│
├── 📁 public/                       # Static assets (served as-is)
│   └── .gitkeep                    # Placeholder for public folder
│
├── 📁 src/                          # Source code
│   │
│   ├── 📁 assets/                   # Assets (images, icons, etc.)
│   │   └── 📁 icons/
│   │       └── .gitkeep
│   │
│   ├── 📁 components/               # React components
│   │   │
│   │   ├── 📁 ui/                   # Reusable UI components
│   │   │   ├── Button.tsx          # 🎨 Button component (4 variants)
│   │   │   └── Card.tsx            # 🎨 Card component (animated)
│   │   │
│   │   ├── Hero.tsx                # 🏠 Hero section
│   │   ├── Navbar.tsx              # 🧭 Navigation bar
│   │   ├── Services.tsx            # 💼 Services section (6 cards)
│   │   ├── About.tsx               # ℹ️ About section
│   │   ├── Gallery.tsx             # 🖼️ Gallery with filtering
│   │   ├── Testimonials.tsx        # 💬 Testimonials carousel
│   │   ├── CallToAction.tsx        # 📢 CTA section
│   │   └── Footer.tsx              # 🔗 Footer
│   │
│   ├── 📁 layouts/                  # Layout components
│   │   └── MainLayout.tsx          # Main app layout wrapper
│   │
│   ├── 📁 hooks/                    # Custom React hooks
│   │   └── index.ts                # 🪝 6 custom hooks
│   │
│   ├── 📁 utils/                    # Utility functions
│   │   └── helpers.ts              # 🛠️ Helper functions
│   │
│   ├── 📁 constants/                # Constants and static data
│   │   └── data.ts                 # 📊 Application data
│   │
│   ├── 📁 styles/                   # Global styles
│   │   └── index.css               # 🎨 Global CSS + Tailwind
│   │
│   ├── App.tsx                     # 📱 Main App component
│   ├── main.tsx                    # 🚀 Application entry point
│   └── vite-env.d.ts               # Vite type definitions
│
├── 📄 index.html                    # HTML template
│
├── 📦 package.json                  # Dependencies & scripts
├── 📦 package-lock.json             # Locked dependencies
│
├── ⚙️ vite.config.ts                # Vite configuration
├── ⚙️ tsconfig.json                 # TypeScript config (main)
├── ⚙️ tsconfig.node.json            # TypeScript config (Node)
├── ⚙️ tailwind.config.js            # Tailwind CSS configuration
├── ⚙️ postcss.config.js             # PostCSS configuration
├── ⚙️ .eslintrc.cjs                 # ESLint configuration
│
├── 📝 README.md                     # Main documentation
├── 📝 SETUP.md                      # Setup instructions
├── 📝 DEPLOYMENT.md                 # Deployment guide
├── 📝 CONTRIBUTING.md               # Contributing guidelines
├── 📝 PROJECT_SUMMARY.md            # Project overview
├── 📝 QUICKSTART.md                 # Quick start guide
├── 📝 CHECKLIST.md                  # Project checklist
├── 📝 STRUCTURE.md                  # This file
│
└── 🚫 .gitignore                    # Git ignore rules
```

## 📊 Component Hierarchy

```
App
└── MainLayout
    ├── Navbar
    │   ├── Button (CTA)
    │   └── Mobile Menu
    │
    ├── Main Content
    │   ├── Hero
    │   │   ├── Button (Primary)
    │   │   ├── Button (Outline)
    │   │   └── Stats Grid
    │   │
    │   ├── Services
    │   │   └── Card × 6
    │   │       ├── Icon
    │   │       ├── Title
    │   │       ├── Description
    │   │       └── Features List
    │   │
    │   ├── About
    │   │   ├── Image Section
    │   │   ├── Stats Grid
    │   │   ├── Button (Primary)
    │   │   └── Button (Outline)
    │   │
    │   ├── Gallery
    │   │   ├── Filter Tabs
    │   │   └── Project Cards × 6
    │   │       ├── Image
    │   │       ├── Tags
    │   │       └── Title
    │   │
    │   ├── Testimonials
    │   │   ├── Card (Current)
    │   │   │   ├── Stars
    │   │   │   ├── Content
    │   │   │   └── Client Info
    │   │   ├── Navigation Buttons
    │   │   └── Dot Indicators
    │   │
    │   └── CallToAction
    │       ├── Button (Primary)
    │       ├── Button (Outline)
    │       └── Contact Info
    │
    └── Footer
        ├── Company Info
        ├── Quick Links
        ├── Services Links
        ├── Contact Info
        └── Bottom Bar
```

## 🎨 Styling Architecture

```
Tailwind CSS
├── tailwind.config.js (Custom theme)
│   ├── Colors (primary, secondary, accent, neutral)
│   ├── Fonts (Inter, Poppins)
│   ├── Spacing (custom values)
│   ├── Animations (8 custom animations)
│   └── Shadows (4 custom shadows)
│
└── src/styles/index.css
    ├── @tailwind base
    ├── @tailwind components
    │   ├── Button styles (.btn, .btn-primary, etc.)
    │   ├── Card styles (.card)
    │   ├── Container (.container-custom)
    │   ├── Section (.section-padding)
    │   ├── Headings (.heading-primary, etc.)
    │   └── Utilities (links, inputs, badges)
    └── @tailwind utilities
        └── Custom utilities (animation delays, etc.)
```

## 🔧 Configuration Flow

```
Entry Point (index.html)
    ↓
main.tsx (imports React & styles)
    ↓
App.tsx (main component)
    ↓
MainLayout (wrapper)
    ↓
Individual Sections (Hero, Services, etc.)
    ↓
UI Components (Button, Card)
```

## 📦 Dependencies Tree

```
Production Dependencies
├── react (18.3.1)              # UI library
├── react-dom (18.3.1)          # React DOM renderer
├── framer-motion (11.0.3)      # Animations
└── clsx (2.1.0)                # className utility

Development Dependencies
├── @vitejs/plugin-react        # Vite React plugin
├── vite                        # Build tool
├── typescript                  # Type safety
├── tailwindcss                 # CSS framework
├── autoprefixer                # CSS vendor prefixes
├── postcss                     # CSS processing
├── eslint                      # Code linting
└── @types/*                    # TypeScript definitions
```

## 🗂️ File Types

| Extension | Count | Purpose |
|-----------|-------|---------|
| `.tsx` | 13 | React components (TypeScript + JSX) |
| `.ts` | 3 | TypeScript files (no JSX) |
| `.css` | 1 | Global styles |
| `.js` | 3 | Configuration files |
| `.json` | 4 | Config & package files |
| `.md` | 8 | Documentation files |
| `.cjs` | 1 | CommonJS config (ESLint) |
| `.html` | 1 | HTML template |

## 📏 Code Statistics

- **Total Files**: ~35
- **React Components**: 13
- **Custom Hooks**: 6
- **Utility Functions**: 7
- **Data Constants**: 6 collections
- **Configuration Files**: 8
- **Documentation Files**: 8
- **Estimated Lines of Code**: 2,500+

## 🎯 Key Features per Section

### Hero (Hero.tsx)
- Gradient background
- Animated elements
- CTA buttons
- Stats display
- Scroll indicator

### Services (Services.tsx)
- 6 service cards
- Icon placeholders
- Feature lists
- Hover effects
- Staggered animations

### About (About.tsx)
- Image section
- 4 stats grid
- Floating card
- CTA buttons
- Responsive layout

### Gallery (Gallery.tsx)
- Filter tabs (7 categories)
- 6 project cards
- Category filtering
- Smooth transitions
- Tag display

### Testimonials (Testimonials.tsx)
- 4 testimonials
- Carousel navigation
- Star ratings
- Auto-rotate
- Responsive fallback

### CallToAction (CallToAction.tsx)
- Gradient background
- CTA buttons
- Contact info
- Animated elements
- Pattern overlay

## 🚀 Getting Started

1. **Install**: `npm install`
2. **Develop**: `npm run dev`
3. **Build**: `npm run build`
4. **Deploy**: Follow DEPLOYMENT.md

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Complete project documentation |
| SETUP.md | Detailed setup instructions |
| DEPLOYMENT.md | Deployment to various platforms |
| CONTRIBUTING.md | How to contribute |
| PROJECT_SUMMARY.md | Quick project overview |
| QUICKSTART.md | Fastest way to get started |
| CHECKLIST.md | Requirements checklist |
| STRUCTURE.md | This file - project structure |

---

**Need help?** Start with QUICKSTART.md or README.md!
