import {
  Code,
  Award,
  User,
  Briefcase,
  Rocket,
  Heart,
  FolderCode,
  BriefcaseBusiness,
  Folder,
} from "lucide-react";

// ===== TYPE DEFINITIONS =====
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  avatar?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status: "completed" | "in-progress" | "planned";
}

export interface Interest {
  category: string;
  items: string[];
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  years?: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

export interface DataFile {
  name: string;
  type: "file";
  content: unknown;
  icon: React.ReactNode;
  lastModified?: string;
}

export interface DataFolder {
  name: string;
  type: "folder";
  icon: React.ReactNode;
  files: DataFile[];
  expanded?: boolean;
}

export interface AboutDataStructure {
  folders: DataFolder[];
}

// ===== DATA CONTENT =====

// Personal Information Data
export const personalInfoData: PersonalInfo = {
  name: "Akbar Farajov",
  title: "Frontend Developer",
  location: "Baku, Azerbaijan",
  email: "akbarfarajovdev@gmail.com",
  bio: "I’m a passionate Frontend Developer with strong experience in building modern web apps using React, Next.js, and TypeScript. Currently improving my skills through real-world projects and internship experience. I’m interested in accessibility, AI, and building intuitive UIs.",
};

// Experience Data
export const experienceData: Experience[] = [
  {
    id: "fintlabs",
    company: "FintLabs Academy",
    position: "Frontend Developer",
    period: "April 2024 - Present",
    description:
      "Contributing to fintech projects in a real-world remote team setup",
    responsibilities: [
      "Developing scalable user interfaces using Next.js, TypeScript and Tailwind CSS",
      "Collaborating with backend developers and designers for feature integration",
      "Contributing to internal CMS and AI SDK integrations",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "React",
      "VercelAiSDK",
      "StrapiCMS",
      "Docker",
      "GitLab",
      "Jira",
    ],
  },
  {
    id: "fintlabs",
    company: "FintLabs Academy",
    position: "Frontend Intern Developer",
    period: "January 2024 - April 2024",
    description:
      "Contributing to fintech projects in a real-world remote team setup",
    responsibilities: [
      "Developing scalable user interfaces using Next.js, TypeScript and Tailwind CSS",
      "Collaborating with backend developers and designers for feature integration",
      "Contributing to internal CMS and AI SDK integrations",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
];

// Projects Data
export const projectsData: Project[] = [
  {
    id: "turbotable",
    name: "TurboTable AI",
    description:
      "A SaaS platform that enables users to generate admin dashboards and AI-powered tables with just a few clicks using prebuilt templates.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Shadcn UI",
      "VercelAiSDK",
      "Docker",
      "GitLab",
      "Jira",
    ],
    status: "in-progress",
    liveUrl: "https://turbotable.ai/",
  },
  {
    id: "azeristudent",
    name: "Azeri Student",
    description:
      "A student portal platform that helps Azerbaijani students access educational content, updates, and community support.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
      "VercelAiSDK",
      "StrapiCMS",
      "GraphQL",
      "Docker",
      "GitLab",
      "Jira",
    ],
    status: "completed",
    liveUrl: "https://azeristudent.az/",
  },
  {
    id: "digsme",
    name: "DigsMe",
    description:
      "An NGO website for social awareness campaigns and community engagement in Ukraine. Provides detailed resources and event updates.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "ClickUp",
      "Docker",
      "GitLab",
    ],
    status: "completed",
    liveUrl: "https://digsme.org.ua/",
  },
  {
    id: "tagme",
    name: "TagMe",
    description:
      "An innovative platform where users can generate unique links and share personalized content. Designed for creators and social engagement.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    status: "in-progress",
    liveUrl: "http://tagme.vercel.app/",
  },
];

// Interests Data
export const interestsData: Interest[] = [
  {
    category: "Technology",
    items: [
      "Web Development",
      "Artificial Intelligence",
      "Cybersecurity",
      "Open Source",
      "Mobile Development",
    ],
  },
  {
    category: "Design",
    items: [
      "UI/UX Design",
      "System Architecture",
      "Design Patterns",
      "Animation",
    ],
  },
  {
    category: "Personal",
    items: ["Football", "Art", "Travel", "Reading Tech Blogs", "Rap Music"],
  },
];

// Skills Data
export const frontendSkills: SkillCategory = {
  category: "Frontend Technologies",
  skills: [
    { name: "JavaScript", level: "Advanced", years: 2 },
    { name: "TypeScript", level: "Advanced", years: 1 },
    { name: "React", level: "Advanced", years: 2 },
    { name: "Next.js", level: "Advanced", years: 1 },
    { name: "Tailwind CSS", level: "Advanced", years: 1 },
    { name: "HTML", level: "Expert", years: 3 },
    { name: "CSS", level: "Advanced", years: 3 },
    { name: "Shadcn UI", level: "Intermediate", years: 1 },
    { name: "Zustand", level: "Intermediate", years: 1 },
  ],
};

export const otherSkills: SkillCategory = {
  category: "Other Technologies",
  skills: [
    { name: "Git", level: "Advanced", years: 3 },
    { name: "Supabase", level: "Intermediate", years: 2 },
    { name: "Figma", level: "Intermediate", years: 1 },
    { name: "GitLab", level: "Intermediate", years: 1 },
    { name: "Jira", level: "Intermediate", years: 1 },
    { name: "VercelAiSDK", level: "Intermediate", years: 1 },
    { name: "StrapiCMS", level: "Intermediate", years: 1 },
    { name: "GraphQL", level: "Intermediate", years: 1 },
    { name: "Docker", level: "Beginner", years: 1 },
  ],
};

// Education Data
export const educationData: Education[] = [
  {
    id: "bmu-master",
    institution: "Baku State University",
    degree: "Master's Degree",
    field: "Computer Science",
    period: "2024 - Present",
    achievements: ["Built multiple real-world projects during studies"],
  },
  {
    id: "bmu-bachelor",
    institution: "Baku State University",
    degree: "Bachelor's Degree",
    field: "Mathematics and Computer Science",
    period: "2019 - 2024",
    achievements: [
      "Built multiple real-world projects during studies",
      "Prepared thesis on accessibility in frontend and AI-based solutions",
    ],
  },
];

// ===== FOLDER STRUCTURE =====
export const aboutDataStructure: AboutDataStructure = {
  folders: [
    {
      name: "personal-info",
      type: "folder",
      icon: <Folder className="w-4 h-4 text-[#43D9AD]" />,
      expanded: true,
      files: [
        {
          name: "bio.json",
          type: "file",
          content: personalInfoData,
          icon: <User className="w-4 h-4 text-yellow-500" />,
          lastModified: "2024-01-15",
        },
        {
          name: "experience.json",
          type: "file",
          content: experienceData,
          icon: <Briefcase className="w-4 h-4 text-green-500" />,
          lastModified: "2024-01-14",
        },
        {
          name: "projects.json",
          type: "file",
          content: projectsData,
          icon: <Rocket className="w-4 h-4 text-red-500" />,
          lastModified: "2024-01-13",
        },
        {
          name: "interests.json",
          type: "file",
          content: interestsData,
          icon: <Heart className="w-4 h-4 text-blue-500" />,
          lastModified: "2024-01-12",
        },
      ],
    },
    {
      name: "skills",
      type: "folder",
      icon: <FolderCode className="w-4 h-4 text-purple-500" />,
      expanded: false,
      files: [
        {
          name: "frontend.json",
          type: "file",
          content: frontendSkills,
          icon: <Code className="w-4 h-4 text-yellow-500" />,
          lastModified: "2024-01-11",
        },
        {
          name: "other.json",
          type: "file",
          content: otherSkills,
          icon: <Code className="w-4 h-4 text-green-500" />,
          lastModified: "2024-01-10",
        },
      ],
    },
    {
      name: "education",
      type: "folder",
      icon: <BriefcaseBusiness className="w-4 h-4 text-green-500" />,
      expanded: false,
      files: [
        {
          name: "academic.json",
          type: "file",
          content: educationData,
          icon: <Award className="w-4 h-4 text-yellow-500" />,
          lastModified: "2024-01-08",
        },
      ],
    },
  ],
};

// ===== UTILITY FUNCTIONS =====
export const getFileByPath = (
  folderName: string,
  fileName: string
): DataFile | null => {
  const folder = aboutDataStructure.folders.find((f) => f.name === folderName);
  if (!folder) return null;

  return folder.files.find((f) => f.name === fileName) || null;
};

export const getAllFiles = (): DataFile[] => {
  return aboutDataStructure.folders.flatMap((folder) => folder.files);
};

export const getFolderByName = (name: string): DataFolder | null => {
  return aboutDataStructure.folders.find((f) => f.name === name) || null;
};

// ===== BACKWARD COMPATIBILITY =====
// Legacy sidebarFiles format for VsCodeLayout component
export interface LegacyFile {
  name: string;
  type: "file" | "folder";
  content?: unknown;
  icon?: string;
}

export const sidebarFiles: LegacyFile[] = [
  // Flatten all files from all folders for backward compatibility
  ...getAllFiles().map((file) => ({
    name: file.name,
    type: file.type as "file",
    content: file.content,
    icon: "📄", // Simple string icon for compatibility
  })),
];

// Export the main data structure
export default aboutDataStructure;
