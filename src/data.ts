import { ServiceItem, ProcessStep, Testimonial, IndustryItem, CaseStudy } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "domestic-mgmt",
    title: "Domestic Account Management",
    description: "Expert end-to-end management of your seller accounts, inventory optimization, and listing performance.",
    icon: "Storefront",
    bulletPoints: [
      "Inventory Syncing",
      "Performance Audits"
    ],
    linkText: "Learn More"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven performance marketing strategies across search, social, and marketplace ad platforms.",
    icon: "Megaphone",
    bulletPoints: [
      "SEO & SEM Mastery",
      "Social Media Ads"
    ],
    linkText: "Explore Strategy",
    isDark: true
  },
  {
    id: "creative-dev",
    title: "Creative & Development",
    description: "High-conversion landing pages, brand identity design, and custom web development solutions.",
    icon: "Brush",
    bulletPoints: [
      "UI/UX Design",
      "Custom Web Apps"
    ],
    linkText: "View Portfolio"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Audit",
    description: "Deep dive into your current performance and market gaps.",
    icon: "Search"
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom roadmap tailored to your specific growth objectives.",
    icon: "GitBranch"
  },
  {
    step: "03",
    title: "Execution",
    description: "High-impact implementation across all digital touchpoints.",
    icon: "Rocket"
  },
  {
    step: "04",
    title: "Optimization",
    description: "Continuous data-driven refinement for maximum ROI.",
    icon: "TrendingUp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "LuxeWear",
    initial: "L",
    brand: "LuxeWear",
    category: "Fashion & Lifestyle",
    text: "AgileSphere transformed our Amazon presence, leading to a 40% YoY increase in revenue. Their attention to detail is unmatched.",
    rating: 5
  },
  {
    id: "2",
    name: "TechNova",
    initial: "T",
    brand: "TechNova",
    category: "Electronics",
    text: "The digital marketing strategy they implemented for our new product launch exceeded all KPIs. We saw a 3x return on ad spend.",
    rating: 5
  },
  {
    id: "3",
    name: "HomeHaven",
    initial: "H",
    brand: "HomeHaven",
    category: "Home & Kitchen",
    text: "Their creative team redesigned our storefront and the conversion rate jumped by 25% in the first month alone.",
    rating: 5
  }
];

export const INDUSTRIES: IndustryItem[] = [
  { id: "electronics", label: "Electronics", icon: "Smartphone" },
  { id: "fashion", label: "Fashion", icon: "Shirt" },
  { id: "home-kitchen", label: "Home & Kitchen", icon: "Home" },
  { id: "fmcg", label: "FMCG", icon: "ShoppingBag" }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    client: "LuxeWear Premium",
    category: "Fashion & Apparel",
    metrics: "+40% YoY",
    metricsLabel: "Revenue Increase",
    title: "Rebuilding an Amazon Apparel Empire",
    challenge: "LuxeWear faced declining organic ranks, high cost of advertising (ACoS), and frequent stockouts on major SKUs.",
    solution: "We streamlined raw supply syncing, redesigned their primary product carousels to be lifestyle-first, and structured keyword-targeted bid campaigns.",
    outcome: "40% year-on-year sales growth within 90 days. Average PPC conversion improved from 7% to 14.8%.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cs-2",
    client: "TechNova Electronics",
    category: "Hardware & Sound",
    metrics: "3.2x ROI",
    metricsLabel: "Ad Return Lift",
    title: "Launching Next-Gen Audioscapes with Meta Ads",
    challenge: "Audiophile-grade products were getting lost against generic imports. Average CPA was exceeding margins.",
    solution: "Engaged a dynamic digital video campaign centering high-fidelity teardowns, precision SEO search capturing high-intent audiophile forums, and specialized retargeting.",
    outcome: "3.2x Return on Ad Spend (ROAS). Reached over 1.2M targeted prospects and acquired 15,000 active database subscribers.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cs-3",
    client: "HomeHaven Kitchen",
    category: "Appliances & Goods",
    metrics: "+25%",
    metricsLabel: "Storefront Conversion",
    title: "UX Makeover: Modern Homeware Experience",
    challenge: "Traffic was solid, but visitors bounced before completing checkouts due to generic product info sheets and trust concerns.",
    solution: "Created highly polished lifestyle layouts, custom interactive dimension diagrams, transparent user-reviews grid, and one-click shipping calculations.",
    outcome: "25% conversion rate surge in 4 weeks. Reduced cart abandonment rate by 18%.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  }
];
