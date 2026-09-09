import { Project, Service, ProcessStep, TechTool } from '../types';

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Business Websites',
    description: 'Modern websites designed specifically for businesses that want to look professional online.',
    iconName: 'Building2',
    tags: ['B2B & B2C', 'Corporate Identity', 'Fast Loading'],
    deliverables: ['Custom Layout Architecture', 'High-Trust Conversion Flow', 'Mobile-First Responsive Design']
  },
  {
    number: '02',
    title: 'Restaurant Websites',
    description: 'Beautiful food-focused websites with menus, galleries, location information, reservations and ordering CTAs.',
    iconName: 'UtensilsCrossed',
    tags: ['Menu Experience', 'Table Bookings', 'Atmosphere Showcase'],
    deliverables: ['Interactive Digital Menu', 'Reservation System Link', 'Optimized Food Photography Grid']
  },
  {
    number: '03',
    title: 'Landing Pages',
    description: 'High-converting landing pages designed around one clear business goal.',
    iconName: 'Zap',
    tags: ['Single Goal Focus', 'Lead Generation', 'Conversion Architecture'],
    deliverables: ['Persuasive Hero Section', 'Trust & Proof Modules', 'Frictionless Action Funnel']
  },
  {
    number: '04',
    title: 'Website Redesigns',
    description: 'Transform outdated websites into modern, premium digital experiences.',
    iconName: 'RefreshCw',
    tags: ['Legacy Modernization', 'Brand Elevation', 'UX Cleanup'],
    deliverables: ['Audit of Outdated Friction Points', 'Contemporary Visual Redesign', 'Retained SEO Structure']
  },
  {
    number: '05',
    title: 'AI-Powered Websites',
    description: 'Use AI to speed up research, content creation, design exploration and development while keeping the final website human-designed.',
    iconName: 'Cpu',
    tags: ['Accelerated Research', 'AI Content Support', 'Rapid Iteration'],
    deliverables: ['Competitor Data Analysis', 'Dynamic Content Drafts', 'Human-Refined Code Architecture']
  },
  {
    number: '06',
    title: 'Local Business Websites',
    description: 'Professional websites for businesses that want more customers to discover and trust them online.',
    iconName: 'MapPin',
    tags: ['Salons & Barbers', 'Gyms & Studios', 'Local Search Ready'],
    deliverables: ['Google Maps & Location Focus', 'Direct WhatsApp / Call Triggers', 'Authentic Review Showcase']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'maasoli-lunch-home',
    title: 'Maasoli Lunch Home',
    category: 'Restaurant Website',
    isConcept: true,
    tagline: 'Coastal culinary heritage delivered through immersive digital hospitality.',
    description: 'A premium digital experience designed to showcase authentic food, atmosphere and restaurant information. Features an interactive curated catch-of-the-day menu, rich visual texture, and a frictionless reservation flow.',
    clientType: 'Authentic Seafood Restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Interactive visual menu with dietary tags and catch-of-the-day carousel',
      'Atmospheric photography highlighting heritage and dining warmth',
      'One-tap reservation integration via phone and WhatsApp'
    ],
    metrics: { label: 'Menu Engagement Time', value: '3.4x higher' },
    aiToolsUsed: ['Competitive menu UX analysis', 'Copy structuring', 'Color harmony exploration'],
    humanCraftFocus: 'Typographic hierarchy, authentic cultural aesthetics, micro-interactions',
    accentColor: '#06b6d4'
  },
  {
    id: 'local-restaurant-concept',
    title: 'Local Restaurant Concept',
    category: 'Restaurant / Food',
    isConcept: true,
    tagline: 'Elevating neighborhood dining into a memorable culinary destination.',
    description: 'Designed for local eateries seeking to break away from generic delivery app listings. Prioritizes appetizing visual storytelling, chef profiles, and instant table reservations with zero friction.',
    clientType: 'Neighborhood Bistro & Grill',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Split-screen hero showcasing seasonal specialty creations',
      'Interactive location map with parking tips and peak hours guidance',
      'Mobile-optimized order pickup trigger'
    ],
    metrics: { label: 'Direct Booking Flow', value: '< 2 clicks' },
    aiToolsUsed: ['Customer persona queries', 'Initial layout wireframing', 'SEO schema generation'],
    humanCraftFocus: 'Editorial layout balance, tactile contrast, optical padding',
    accentColor: '#3b82f6'
  },
  {
    id: 'premium-cafe-concept',
    title: 'Premium Café Concept',
    category: 'Hospitality',
    isConcept: true,
    tagline: 'Specialty coffee culture brought to life with minimalist precision.',
    description: 'A clean, tactile website concept for third-wave roasters and specialty coffee spaces. Features origin storytelling, live roast schedules, and an aesthetic merchandise & beans showcase.',
    clientType: 'Artisan Coffee Roastery',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Minimalist dark aesthetic matching luxury espresso machinery',
      'Single-origin roast card showcase with flavor profile wheels',
      'Seamless event booking for weekend cupping sessions'
    ],
    metrics: { label: 'Bean Purchase Conversion', value: '+38% est.' },
    aiToolsUsed: ['Flavor note categorization', 'Accessibility contrast checking'],
    humanCraftFocus: 'High-end coffee photography layout, bespoke cursor feedback',
    accentColor: '#8b5cf6'
  },
  {
    id: 'business-landing-page',
    title: 'Business Landing Page',
    category: 'Business',
    isConcept: true,
    tagline: 'High-converting conversion architecture for modern advisory practices.',
    description: 'Engineered around one clear outcome: booking qualified discovery calls. Replaces generic corporate jargon with clear value props, social proof metrics, and high-contrast trust anchors.',
    clientType: 'B2B Consulting & Services',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'High-impact hero with proof metrics and interactive case calculator',
      'Social proof carousel featuring quantified client ROI',
      'Synchronized Calendly scheduling embed'
    ],
    metrics: { label: 'Conversion Velocity', value: '2.8x' },
    aiToolsUsed: ['Objection-handling copy drafts', 'Competitive positioning data'],
    humanCraftFocus: 'Typography pairing, spacing cadence, trustworthy dark theme',
    accentColor: '#0ea5e9'
  },
  {
    id: 'atelier-salon-concept',
    title: 'Lumière Hair & Grooming Studio',
    category: 'Local Service',
    isConcept: true,
    tagline: 'Luxury styling portfolio and automated appointment funnel.',
    description: 'A bespoke concept for high-end barbershops and boutique salons. Features stylist lookbooks, transparent service tiers, and immediate booking availability right from the home screen.',
    clientType: 'Boutique Salon & Barber',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      'Visual lookbook filterable by cut, coloring, and stylist',
      'Integrated live stylist chair availability preview',
      'Mobile client care notes and consultation intake'
    ],
    metrics: { label: 'Client Retention Rate', value: 'High' },
    aiToolsUsed: ['Style category tags', 'Service pricing table comparison'],
    humanCraftFocus: 'Editorial fashion photography framing, smooth transitions',
    accentColor: '#ec4899'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Learn about the business, customers and goals. Uncover what makes your brand distinct and what your ideal clients care about.',
    aiAspect: 'AI Industry Analysis & Audience Insights',
    humanAspect: 'Direct 1-on-1 Dialogue & Business Empathy'
  },
  {
    number: '02',
    title: 'Research',
    description: 'Study competitors, industry trends and customer expectations to find unexploited opportunities in your local market.',
    aiAspect: 'AI Competitive Deep-Dive & Pattern Discovery',
    humanAspect: 'Strategic Positioning & Creative Angles'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create the visual direction, structure and user experience. Craft wireframes, layouts, typography, and interactive components.',
    aiAspect: 'AI Ideation & Rapid Layout Prototyping',
    humanAspect: 'Human Aesthetic Eye, Polish & Visual Hierarchy'
  },
  {
    number: '04',
    title: 'Build',
    description: 'Use modern web technologies and AI-assisted workflows to develop a responsive, lightning-fast, and accessible website.',
    aiAspect: 'AI Code Generation & Boilerplate Automation',
    humanAspect: 'Component Architecture, Performance & Custom CSS'
  },
  {
    number: '05',
    title: 'Refine',
    description: 'Test, optimize and polish every important detail — from mobile gestures to CTA visibility, SEO metadata, and speed audits.',
    aiAspect: 'AI Edge-Case Detection & Cross-Device Checks',
    humanAspect: 'Quality Control, Micro-Interactions & Final Launch'
  }
];

export const TECH_TOOLS: TechTool[] = [
  { name: 'AI Studio', role: 'Prompt Engineering & Logic', category: 'AI', icon: 'Bot' },
  { name: 'Google AI', role: 'Intelligent Research & Synthesis', category: 'AI', icon: 'Sparkles' },
  { name: 'React', role: 'Component Framework', category: 'Frontend', icon: 'Code2' },
  { name: 'JavaScript', role: 'Interactive Logic', category: 'Frontend', icon: 'FileCode' },
  { name: 'HTML5', role: 'Semantic Web Structure', category: 'Frontend', icon: 'Layout' },
  { name: 'CSS / Tailwind', role: 'Design Systems & Styling', category: 'Design', icon: 'Palette' },
  { name: 'Figma', role: 'Visual Prototyping & Layouts', category: 'Design', icon: 'Figma' },
  { name: 'GitHub', role: 'Version Control & Codebase', category: 'Workflow', icon: 'GitBranch' }
];

export const TARGET_CLIENTS = [
  { name: 'Restaurants', icon: 'Utensils' },
  { name: 'Cafés', icon: 'Coffee' },
  { name: 'Salons', icon: 'Scissors' },
  { name: 'Barbers', icon: 'Sparkles' },
  { name: 'Gyms', icon: 'Dumbbell' },
  { name: 'Local Businesses', icon: 'Store' },
  { name: 'Small Businesses', icon: 'Briefcase' },
  { name: 'Startups', icon: 'Rocket' },
  { name: 'Personal Brands', icon: 'UserCheck' }
];
