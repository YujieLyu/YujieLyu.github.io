export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  tooltip: string;
  description: string;
  bullets: string[];
  projectUrl?: string;
  projectLabel?: string;
}

export interface Education {
  degree: string;
  institution: string;
  institutionUrl: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  image: string;
  tags: string[];
  description: string;
  links: { icon: string; url: string; label?: string }[];
}

export interface Achievement {
  title: string;
  image: string;
  description: string;
}

export interface ProfileData {
  name: string;
  nickname: string;
  subtitle: string;
  tagline: string;
  heroDescription: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
  aboutImage: string;
  aboutText: string[];
  techStack: string[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  achievements: Achievement[];
  contactText: string;
  contactLink: { url: string; label: string };
}
