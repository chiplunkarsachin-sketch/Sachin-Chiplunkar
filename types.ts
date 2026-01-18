import { LucideIcon } from 'lucide-react';

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Stats and metrics
export interface StatProps {
  value: string;
  label: string;
  icon: LucideIcon;
  citation?: string;
  delay?: number;
}

// Method pillars
export interface PillarProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  outcomes: string[];
  color: 'primary' | 'accent' | 'alert';
  delay?: number;
}

// Process phases
export interface PhaseProps {
  icon: React.ReactNode;
  phase: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  isLast?: boolean;
  delay?: number;
}

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

// LinkedIn posts (for n8n integration)
export interface LinkedInPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  engagement?: {
    likes: number;
    comments: number;
  };
}

// Credentials
export interface Credential {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Animation props
export interface AnimationProps {
  isVisible: boolean;
  delay?: number;
}
