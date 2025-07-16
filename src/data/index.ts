// Navigation Links
export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { name: "_hello", path: "/" },
  { name: "_about-me", path: "/about" },
  { name: "_projects", path: "/projects" },
  { name: "_contact", path: "/contact" },
];

// About Data Exports
export {
  type PersonalInfo,
  type Experience,
  type Project,
  type Interest,
  type Skill,
  type SkillCategory,
  type Education,
  type DataFile,
  type DataFolder,
  type AboutDataStructure,
  type LegacyFile,
  personalInfoData,
  experienceData,
  projectsData,
  interestsData,
  frontendSkills,
  educationData,
  aboutDataStructure,
  sidebarFiles,
  getFileByPath,
  getAllFiles,
  getFolderByName,
} from "./about-data";

// Re-export the default about data structure
export { default as aboutData } from "./about-data";
