import VsCodeLayout from "@/app/(main)/(pages)/about/components/vscode-layout";
import aboutDataStructure, { sidebarFiles } from "@/data/about-data";

export default function AboutPage() {
  const { folders } = aboutDataStructure;
  return (
    <VsCodeLayout
      sidebarFolders={folders}
      initialOpenFile={sidebarFiles[0]} // Başlanğıcda bu fayl açıq olsun
    />
  );
}
