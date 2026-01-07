export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack';
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  logo?: string;
  position: string;
  period: string;
  description: string;
  missions: string[];
  technologies: Technology[];
  color: string; // Couleur pour la planète 3D
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface SocialLink {
  platform: 'youtube' | 'tiktok' | 'instagram' | 'linkedin' | 'github';
  url: string;
  followers?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}