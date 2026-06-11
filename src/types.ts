export type NavTab = "home" | "e-commerce" | "marketing" | "creative" | "about";

export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  brand: string;
  category: string;
  text: string;
  rating: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  bulletPoints: string[];
  linkText: string;
  isDark?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  metrics: string;
  metricsLabel: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface IndustryItem {
  id: string;
  label: string;
  icon: string;
}

export interface AuditReportData {
  summary: string;
  marketFitScore: number;
  seoRating: string;
  ecomChecklist: Array<{ item: string; status: "success" | "warning" | "error"; recommendation: string }>;
  actionPlan: string[];
}
