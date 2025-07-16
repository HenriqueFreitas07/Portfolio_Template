export type ProjectType =
  | "academic"
  | "personal"
  | "freelance"
  | "internship"
  | "volunteer";

export interface Project {
  title: string;
  slug?: string;
  description: string;
  techStack: string[];
  role?: string;
  type: ProjectType;
  startDate: Date;
  endDate?: Date;
  featured?: boolean;
  repoUrl?: string;
  liveUrl?: string;
  images?: string[];
  highlights?: string[];
}