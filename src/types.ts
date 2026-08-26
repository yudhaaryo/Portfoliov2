export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack Systems' | 'Web Apps' | 'UI/UX & Tools' | 'API & Backend';
  year: string;
  client: string;
  role: string;
  accentColor: 'orange' | 'lime' | 'blue' | 'light' | 'pink';
  accentHex: string;
  shortDescription: string;
  fullOverview: string;
  problem: string;
  goal: string;
  solution: string;
  keyFeatures: {
    title: string;
    description: string;
    badge?: string;
  }[];
  techStack: {
    name: string;
    category: string;
    roleInProject: string;
  }[];
  architecture: string[];
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  results: {
    metric: string;
    label: string;
  }[];
  lessonsLearned: string[];
  image: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  highlight?: string;
}

export interface TechItem {
  name: string;
  category: 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'TOOLS' | 'SYSTEMS & ARCHITECTURE';
  level: string;
  experienceYears: string;
  description: string;
  featuredProjects: string[];
  iconName?: string;
  tagColor?: string;
}

export interface ContactLink {
  id: string;
  name: string;
  label: string;
  value: string;
  url: string;
  actionText: string;
  icon: string;
  accent: string;
}
