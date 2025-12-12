// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const;

// Services Data
export const SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Crafting pixel-perfect, high-performance websites that convert visitors into customers',
    icon: 'code',
    features: ['React & Next.js', 'Full-Stack Solutions', 'Lightning Fast', 'SEO Optimized'],
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Designing stunning interfaces with user experience at the heart of every decision',
    icon: 'palette',
    features: ['User-Centered Design', 'Interactive Prototypes', 'Design Systems', 'Accessibility First'],
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: 'Building native-quality mobile apps that users love and businesses rely on',
    icon: 'smartphone',
    features: ['React Native', 'iOS & Android', 'Offline Support', 'Push Notifications'],
  },
  {
    id: 4,
    title: 'Brand Strategy',
    description: 'Creating compelling brand identities that resonate with your target audience',
    icon: 'trending-up',
    features: ['Brand Guidelines', 'Visual Identity', 'Marketing Strategy', 'Content Creation'],
  },
  {
    id: 5,
    title: 'E-Commerce',
    description: 'Developing secure, scalable online stores with seamless payment integration',
    icon: 'cloud',
    features: ['Shopify & WooCommerce', 'Payment Gateway', 'Inventory Management', 'Analytics Dashboard'],
  },
  {
    id: 6,
    title: 'Consulting',
    description: 'Expert advice to transform your digital presence',
    icon: 'users',
    features: ['Strategy Planning', 'Tech Stack', 'Best Practices', 'Team Training'],
  },
] as const;

// Testimonials Data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alexandra Sterling',
    role: 'Founder & CEO, LuxeRetail',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    content: 'Digital Creative Studio transformed our outdated website into a modern masterpiece. Our conversions increased by 180% in just 3 months. Their attention to detail is unmatched!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'VP of Product, TechFlow',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    content: 'The team delivered a lightning-fast, beautifully animated platform that our users absolutely love. Best investment we made this year!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    role: 'Creative Director, ArtisanCo',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    content: 'Finally, a team that truly understands design AND development. They brought our brand vision to life with pixel-perfect precision.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Harrison',
    role: 'CTO, FinanceHub',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    content: 'Their code quality is exceptional. Clean, scalable, and well-documented. Plus, the accessibility features exceed industry standards!',
    rating: 5,
  },
] as const;

// Gallery/Portfolio Items
export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Figma', 'Design System', 'Analytics'],
  },
  {
    id: 4,
    title: 'Healthcare Portal',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'HIPAA', 'Security'],
  },
  {
    id: 5,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['SEO', 'Content', 'Analytics'],
  },
  {
    id: 6,
    title: 'Cloud Infrastructure',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    tags: ['AWS', 'DevOps', 'Kubernetes'],
  },
] as const;

// Stats/Numbers
export const STATS = [
  { id: 1, label: 'Projects Delivered', value: 200 },
  { id: 2, label: 'Global Clients', value: 150 },
  { id: 3, label: 'Creative Experts', value: 32 },
  { id: 4, label: 'Years of Innovation', value: 10 },
] as const;

// Social Links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: 'instagram' },
] as const;

// Company Info
export const COMPANY_INFO = {
  name: 'Digital Creative Studio',
  tagline: 'Where Creativity Meets Innovation',
  email: 'hello@digitalcreative.studio',
  phone: '+1 (555) 789-0123',
  address: '456 Creative Avenue, Innovation District, San Francisco, CA 94102',
} as const;
