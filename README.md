# Digital Creative Studio

A modern portfolio website built with React, TypeScript, and Tailwind CSS.

**Built by:** [Badal Kumar](https://github.com/badalku27)

## Live Demo

- [View Demo](https://your-deployment-url.vercel.app)
- [GitHub Repo](https://github.com/badalku27/Figma_design)

## About This Project

This is a portfolio website for Digital Creative Studio. I built it to showcase modern web design with clean animations and a responsive layout. The site works great on all devices and includes sections for services, portfolio, testimonials, and more.

**What's included:**
- Smooth animations that feel natural
- Clean, modern design
- Mobile-friendly layout
- Fast loading times
- Easy to navigate

## Tech Stack

I used these tools to build this project:

- **React** - For building the UI
- **TypeScript** - To catch bugs before they happen
- **Tailwind CSS** - For quick and clean styling
- **Framer Motion** - For smooth animations
- **Vite** - Super fast development and building

## Features

**Main Sections:**
- Hero section with animated stats
- Services showcase with 6 different offerings
- About section with company info
- Portfolio gallery with filters
- Client testimonials carousel
- Contact section
- Responsive navigation bar
- Footer with links and contact info

**Cool stuff:**
- Smooth page animations
- Hover effects on cards and buttons
- Mobile menu that slides in
- Filter projects by category
- Testimonial carousel with arrows

8. **Footer**
   - Company information
   - Quick links
   - Social media links
   - Contact details

### Interactions & Animations
- ✅ Hover states on all interactive elements
- ✅ Smooth page transitions using Framer Motion
- ✅ Scroll-triggered animations
- ✅ Button click feedback
- ✅ Card lift effects
- ✅ Mobile menu transitions

### Accessibility Features
- ✅ Semantic HTML5 elements
- ✅ ARIA labels and attributes
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Alt text for images
- ✅ Proper heading hierarchy
- ✅ Color contrast compliance
- ✅ Screen reader friendly

## How to Run This

You'll need Node.js installed on your computer.

**1. Download the code:**
```bash
git clone https://github.com/badalku27/Figma_design.git
cd Figma_design
```

**2. Install everything:**
```bash
npm install
```

**3. Start it up:**
```bash
npm run dev
```

Go to the original link and you should see it running!

## Commands

- `npm run dev` - Starts development mode
- `npm run build` - Builds the final version
- `npm run preview` - Preview the built version
- Minification
- Asset optimization

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
frontend-developer-assignment/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx
│   ├── layouts/        # Layout components
│   │   └── MainLayout.tsx
│   ├── hooks/          # Custom React hooks
│   │   └── index.ts
│   ├── utils/          # Utility functions
│   │   └── helpers.ts
│   ├── constants/      # Constants and data
│   │   └── data.ts
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.tsx         # Main App component
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
├── package.json
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── README.md
```

## 🔑 Key Implementation Details

### Component Architecture
- **Atomic Design Principles**: Components are organized from smallest (Button, Card) to largest (Pages)
- **Composition over Inheritance**: Leveraging React's composition model
- **Type Safety**: Full TypeScript coverage with proper interfaces and types

### State Management
- **Local State**: Using React hooks (useState, useEffect)
- **Custom Hooks**: Reusable logic extracted into custom hooks
  - `useScrollPosition` - Track scroll position
  - `useIntersectionObserver` - Detect element visibility
  - `useWindowSize` - Responsive viewport tracking
  - `useToggle` - Boolean state management
  - `usePrefersReducedMotion` - Accessibility preference

### Styling Approach
- **Tailwind CSS**: Utility-first approach for rapid development
- **Custom Configuration**: Extended theme with project-specific colors, fonts, and spacing
- **Component Classes**: Reusable utility classes defined in global CSS
- **Responsive Design**: Mobile-first with desktop optimization

### Animation Strategy
- **Framer Motion**: Declarative animations with performance in mind
- **Scroll Animations**: Elements animate on scroll into view
- **Hover Effects**: Smooth transitions on interactive elements
- **Reduced Motion**: Respects user's motion preferences

## What I Focused On

**Making it accessible:**
- Works with keyboard navigation
- Proper alt text for images
- Good color contrast
- Clean HTML structure

**Performance:**
- Fast loading times
- Optimized images
- Only loads what's needed

## A Few Notes

- The content (services, testimonials, etc.) is hardcoded right now. In a real project, this would come from a database or CMS.
- Images are from Unsplash - placeholders for actual project images.
- Built for modern browsers (Chrome, Firefox, Safari, Edge).
- The site is one page with smooth scrolling between sections.

## ⏱ Time Tracking

### Breakdown by Phase

1. **Project Setup & Configuration** (2 hours)
   - Vite + React + TypeScript setup
   - Tailwind CSS configuration
   - ESLint and TypeScript configuration
   - Project structure setup

2. **Design Analysis & Planning** (1.5 hours)
   - Figma design review
   - Component identification
   - Color and typography extraction
   - Planning component hierarchy

3. **Component Development** (8 hours)
   - UI components (Button, Card)
   - Hero section
   - Services section
   - About section
   - Gallery with filtering
   - Testimonials carousel
   - Call to Action
   - Navigation & Footer

4. **Animations & Interactions** (3 hours)
   - Framer Motion integration
   - Scroll animations
   - Hover effects
   - Transition refinement

5. **Responsive Design** (2 hours)
   - Mobile menu
   - Responsive grid adjustments
   - Testing across breakpoints

6. **Accessibility Implementation** (1.5 hours)
   - ARIA attributes
   - Keyboard navigation
   - Focus states
   - Semantic HTML review

7. **Testing & Refinement** (2 hours)
   - Cross-browser testing
   - Performance optimization
   - Bug fixes
   - Code cleanup

8. **Documentation** (1 hour)
   - README creation
   - Code comments
   - Setup instructions

**Total Time**: ~21 hours

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Vercel auto-detects Vite configuration
4. Deploy with one click

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📄 License

This project is created as part of a technical assignment.

## Made By

**Badal Kumar**
- GitHub: [@badalku27](https://github.com/badalku27)

---

Thanks for checking out my project! If you have any questions or suggestions, feel free to open an issue or reach out.
