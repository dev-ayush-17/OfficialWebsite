// ============================================================
// WnCC NIT Patna — Type Definitions
// ============================================================

/** Hierarchy levels for team members */
export type MemberHierarchy = 'post-bearer' | 'senior' | 'junior';

/** Social link for a team member */
export interface SocialLinks {
  linkedin?: string;
  github?: string;
  email?: string;
  twitter?: string;
  website?: string;
}

/** Individual team member */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  hierarchy: MemberHierarchy;
  image: string;
  socials: SocialLinks;
  quote?: string;
}

/** A club team (e.g., Blockchain, Web Dev) */
export interface Team {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  leader: TeamMember;
  members: TeamMember[];
}

/** Event listing */
export interface ClubEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  location: string;
  registrationLink?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

/** Gallery image */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  event: string;
  date: string;
  category: string;
  width: number;
  height: number;
}

/** Blog post */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  tags: string[];
  coverImage: string;
  readTime: number;
  featured?: boolean;
}

/** Developer who built the website */
export interface Developer {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: SocialLinks;
  contributions: string[];
  techStack: string[];
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

/** Social media platform link */
export interface SocialPlatform {
  name: string;
  url: string;
  icon: string;
}

/** Bento grid feature item */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  size: 'small' | 'medium' | 'large';
  color: string;
  stat?: string;
  statLabel?: string;
}

/** Contact form submission */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/** PI/President profile */
export interface LeaderProfile {
  name: string;
  title: string;
  department: string;
  image: string;
  quote: string;
  designation: string;
}
