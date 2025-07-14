"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import TabsBar from "./TabsBar";
import ContentDisplay from "./ContentDisplay";
import { DataFolder } from "@/data/about-data";

export interface File {
  name: string;
  type: "file" | "folder";
  content?: any;
  icon?: string;
}

interface VsCodeLayoutProps {
  sidebarFolders: DataFolder[];
  initialOpenFile: File;
}

export default function VsCodeLayout({
  sidebarFolders,
  initialOpenFile,
}: VsCodeLayoutProps) {
  const [openFiles, setOpenFiles] = useState<File[]>([initialOpenFile]);
  const [activeFile, setActiveFile] = useState<string>(initialOpenFile.name);

  const handleOpenFile = (file: File) => {
    if (!openFiles.find((f) => f.name === file.name)) {
      setOpenFiles((prev) => [...prev, file]);
    }
    setActiveFile(file.name);
  };

  const handleCloseFile = (fileName: string) => {
    const newOpenFiles = openFiles.filter((f) => f.name !== fileName);
    setOpenFiles(newOpenFiles);

    if (activeFile === fileName) {
      if (newOpenFiles.length > 0) {
        setActiveFile(newOpenFiles[newOpenFiles.length - 1].name);
      } else {
        setActiveFile("");
      }
    }
  };

  const activeFileContent = openFiles.find(
    (f) => f.name === activeFile
  )?.content;

  return (
    <div className="flex h-[calc(100vh-100px)] border-t border-[#1E2D3D] overflow-hidden">
      {/* Sol Panel: Fayl Siyahısı */}
      <Sidebar
        folders={sidebarFolders}
        onFileClick={handleOpenFile}
        activeFile={activeFile}
      />

      <div className="flex flex-col flex-grow">
        {/* Üst Panel: Açıq Faylların Tabları */}
        <div className="">
          <TabsBar
            openFiles={openFiles}
            activeFile={activeFile}
            onTabClick={setActiveFile}
            onTabClose={handleCloseFile}
          />
        </div>
        {/* Sağ Panel: Məzmun */}
        <ContentDisplay content={activeFileContent} />
      </div>
    </div>
  );
}
