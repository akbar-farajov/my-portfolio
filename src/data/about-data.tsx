import {
  Code,
  Award,
  User,
  Briefcase,
  Rocket,
  Heart,
  FolderCode,
  Database,
  BriefcaseBusiness,
} from "lucide-react";
import { RiFolderUserFill } from "@remixicon/react";

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
    id: "privia-security",
    company: "Privia Security",
    position: "Senior FrontEnd Developer",
    period: "March 2024 - Present",
    description:
      "Leading frontend development for cybersecurity platforms and fintech solutions",
    responsibilities: [
      "Developed PriviaHub - a comprehensive Cybersecurity Training, Simulation and Exercise (CyberRange) platform for corporate and individual users",
      "Integrated robot automation and captcha systems into SmartPortal application for finance projects",
      "Worked as fullstack developer on Doccon project - a document sharing and verification system for finance and HR teams",
      "Developed clone projects using HTML, CSS and JavaScript for companies seeking support",
    ],
    technologies: ["React", "TypeScript", "Node.js", ".NET Core", "PostgreSQL"],
    achievements: [
      "Successfully launched PriviaHub platform serving 1000+ users",
      "Improved application performance by 40% through optimization",
    ],
  },
  {
    id: "ersa-yazilim",
    company: "Ersa Yazılım",
    position: "FullStack Developer",
    period: "November 2022 - March 2024",
    description: "Full-stack development focusing on enterprise applications",
    responsibilities: [
      "Developed enterprise web applications using modern frameworks",
      "Implemented RESTful APIs and database architectures",
      "Collaborated with cross-functional teams on product development",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["React", "Vue.js", "C#", ".NET", "SQL Server", "MongoDB"],
    achievements: [
      "Delivered 5+ major projects on time and within budget",
      "Reduced code complexity by implementing design patterns",
    ],
  },
];

// Projects Data
export const projectsData: Project[] = [
  {
    id: "priviahub",
    name: "PriviaHub",
    description: "Comprehensive cybersecurity training and simulation platform",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    status: "completed",
    liveUrl: "https://priviahub.com",
  },
  {
    id: "smartportal",
    name: "SmartPortal",
    description: "Financial platform with robot integration and automation",
    technologies: ["React", "C#", ".NET Core", "SQL Server"],
    status: "completed",
  },
  {
    id: "doccon",
    name: "Doccon",
    description: "Document sharing and verification system for enterprises",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    status: "completed",
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    description: "Modern portfolio website with VS Code theme",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "in-progress",
    githubUrl: "https://github.com/username/portfolio",
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
    ],
  },
  {
    category: "Design",
    items: ["UI/UX Design", "System Architecture", "Design Patterns"],
  },
  {
    category: "Personal",
    items: ["MotoSports", "Photography", "Travel", "Reading Tech Blogs"],
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
  ],
};

export const backendSkills: SkillCategory = {
  category: "Backend Technologies",
  skills: [
    { name: "Node.js", level: "Intermediate", years: 1 },
    { name: "Supabase", level: "Intermediate", years: 1 },
    { name: "Express.js", level: "Intermediate", years: 1 },
  ],
};

export const databaseSkills: SkillCategory = {
  category: "Databases & Tools",
  skills: [
    { name: "PostgreSQL", level: "Intermediate", years: 1 },
    { name: "MongoDB", level: "Beginner", years: 1 },
    { name: "Git", level: "Advanced", years: 2 },
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
      icon: <RiFolderUserFill className="w-4 h-4 text-[#43D9AD]" />,
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
          name: "backend.json",
          type: "file",
          content: backendSkills,
          icon: <Code className="w-4 h-4 text-green-500" />,
          lastModified: "2024-01-10",
        },
        {
          name: "databases.json",
          type: "file",
          content: databaseSkills,
          icon: <Database className="w-4 h-4 text-blue-500" />,
          lastModified: "2024-01-09",
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
