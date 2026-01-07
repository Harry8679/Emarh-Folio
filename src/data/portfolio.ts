import { Project, Experience, Service, SocialLink } from '@/types';

// Projets Portfolio
export const projects: Project[] = [
  {
    id: '1',
    title: 'NeoLearn',
    description: 'Plateforme d\'apprentissage en ligne complète avec modèle freemium pour cours de mathématiques et informatique.',
    technologies: [
      { name: 'Next.js 14', color: '#000000' },
      { name: 'NestJS', color: '#E0234E' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
    ],
    category: 'fullstack',
    featured: true,
  },
  {
    id: '2',
    title: 'Christian Marketplace',
    description: 'Plateforme e-commerce dédiée à la communauté chrétienne avec système de validation des vendeurs et commissions.',
    technologies: [
      { name: 'Symfony', color: '#000000' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Twig', color: '#99CC00' },
      { name: 'Doctrine', color: '#FC6B2D' },
    ],
    category: 'web',
    featured: true,
  },
  {
    id: '3',
    title: 'React Mastery Hub',
    description: '30 mini-projets pour apprendre React de manière progressive et pratique.',
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
    ],
    category: 'web',
    featured: false,
  },
  {
    id: '4',
    title: 'Algo Master',
    description: 'Plateforme d\'apprentissage d\'algorithmes JavaScript pour préparation aux entretiens techniques.',
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Node.js', color: '#339933' },
    ],
    category: 'web',
    featured: false,
  },
  {
    id: '5',
    title: 'Transkage',
    description: 'Service de livraison de colis innovant connectant voyageurs et expéditeurs via architecture microservices.',
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'AWS', color: '#FF9900' },
      { name: 'Docker', color: '#2496ED' },
    ],
    category: 'fullstack',
    featured: true,
  },
];

// Expériences Professionnelles
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Freelance',
    position: 'Développeur Full Stack & Formateur',
    period: '2017 - Présent',
    description: 'Développement d\'applications web et mobiles sur mesure pour divers clients.',
    missions: [
      'Conception et développement d\'applications web avec React, Node.js et Symfony',
      'Développement d\'applications mobiles avec React Native',
      'Formation en mathématiques et informatique (YouTube, cours particuliers)',
      'Architecture de solutions techniques complètes',
    ],
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'React Native', color: '#61DAFB' },
      { name: 'Symfony', color: '#000000' },
      { name: 'TypeScript', color: '#3178C6' },
    ],
    color: '#3B82F6',
  },
  {
    id: '2',
    company: 'Projets E-Learning',
    position: 'Créateur de Contenu Pédagogique',
    period: '2020 - Présent',
    description: 'Création de plateformes et contenus pédagogiques en mathématiques et informatique.',
    missions: [
      'Développement de plateformes d\'apprentissage en ligne',
      'Création de vidéos pédagogiques sur YouTube',
      'Animation de communautés sur TikTok et Instagram',
      'Conception de parcours d\'apprentissage structurés',
    ],
    technologies: [
      { name: 'Next.js', color: '#000000' },
      { name: 'NestJS', color: '#E0234E' },
      { name: 'PostgreSQL', color: '#336791' },
    ],
    color: '#10B981',
  },
  {
    id: '3',
    company: 'Projets Open Source',
    position: 'Contributeur & Développeur',
    period: '2018 - Présent',
    description: 'Contribution à des projets open source et développement d\'outils pour la communauté.',
    missions: [
      'Développement d\'applications React TypeScript',
      'Contribution à des bibliothèques JavaScript',
      'Partage de connaissances via des projets éducatifs',
    ],
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Git', color: '#F05032' },
    ],
    color: '#8B5CF6',
  },
];

// Services proposés
export const services: Service[] = [
  {
    id: '1',
    title: 'Développement Web',
    description: 'Création d\'applications web modernes, performantes et responsive.',
    icon: 'code',
    features: [
      'Sites vitrines et landing pages',
      'Applications web complexes (SPA)',
      'E-commerce et plateformes sur mesure',
      'APIs REST et GraphQL',
      'Intégration de CMS (Headless)',
    ],
  },
  {
    id: '2',
    title: 'Développement Mobile',
    description: 'Applications mobiles natives et cross-platform pour iOS et Android.',
    icon: 'smartphone',
    features: [
      'Applications React Native',
      'Interface utilisateur moderne',
      'Intégration API backend',
      'Notifications push',
      'Déploiement App Store et Play Store',
    ],
  },
  {
    id: '3',
    title: 'Formation & Accompagnement',
    description: 'Cours particuliers et formations en mathématiques et informatique.',
    icon: 'graduation-cap',
    features: [
      'Cours de mathématiques (collège à supérieur)',
      'Programmation (JavaScript, TypeScript, React)',
      'Préparation aux entretiens techniques',
      'Mentorat développeur junior',
      'Contenu pédagogique sur YouTube',
    ],
  },
  {
    id: '4',
    title: 'Architecture & Conseil',
    description: 'Conseil technique et architecture de solutions logicielles.',
    icon: 'layers',
    features: [
      'Audit de code et architecture',
      'Choix de stack technique',
      'Optimisation des performances',
      'Mise en place de CI/CD',
      'Formation des équipes',
    ],
  },
];

// Liens sociaux
export const socialLinks: SocialLink[] = [
  {
    platform: 'youtube',
    url: 'https://youtube.com/@votre-chaine',
    followers: '5K+',
  },
  {
    platform: 'tiktok',
    url: 'https://tiktok.com/@votre-compte',
    followers: '2K+',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/votre-compte',
    followers: '1.5K+',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/votre-profil',
  },
  {
    platform: 'github',
    url: 'https://github.com/votre-username',
  },
];

// Informations personnelles
export const personalInfo = {
  name: 'Harry',
  title: 'Développeur Full Stack & Formateur',
  tagline: 'Je transforme vos idées en applications web et mobiles performantes',
  bio: `Développeur Full Stack passionné avec 8 ans d'expérience dans la création d'applications web et mobiles. 
  
Spécialisé dans les technologies JavaScript modernes (React, Node.js, TypeScript), je développe également des applications backend avec Symfony. À côté de mon activité de développement, je partage mes connaissances en mathématiques et informatique via ma chaîne YouTube et mes cours particuliers.

Mon approche combine expertise technique, créativité et pédagogie pour livrer des solutions sur mesure qui répondent réellement aux besoins de mes clients.`,
  email: 'contact@votre-agence.fr',
  location: 'Paris, France',
  availability: 'Disponible pour de nouveaux projets',
  skills: [
    'React', 'React Native', 'Node.js', 'TypeScript', 
    'Next.js', 'NestJS', 'Symfony', 'PostgreSQL',
    'MongoDB', 'Tailwind CSS', 'Docker', 'Git',
  ],
};