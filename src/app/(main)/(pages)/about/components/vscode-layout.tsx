"use client";
import { useState } from "react";
import Sidebar from "../../../../../components/layout/sidebar";
import TabsBar from "../../../../../components/layout/tabs-bar";
import ContentDisplay from "./content-display";
import { DataFolder } from "@/data/about-data";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../../../components/ui/sheet";
import { ChevronDown } from "lucide-react";

export interface File {
  name: string;
  type: "file" | "folder";
  content?: unknown;
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
    <div className="flex h-[calc(100vh-100px)] overflow-hidden w-full max-w-full">
      <div className="hidden md:block h-full">
        <Sidebar
          folders={sidebarFolders}
          onFileClick={handleOpenFile}
          activeFile={activeFile}
        />
      </div>

      <div className="flex flex-col flex-grow min-w-0 w-full">
        <div className="w-full max-w-full">
          <TabsBar
            openFiles={openFiles}
            activeFile={activeFile}
            onTabClick={setActiveFile}
            onTabClose={handleCloseFile}
          />
        </div>
        <Sheet modal={false}>
          <SheetTrigger className="md:hidden p-2 bg-slate-950">
            <div className="w-full flex justify-between bg-background/10 border rounded-md px-2 py-1">
              {activeFile}
              <ChevronDown />
            </div>
          </SheetTrigger>
          <SheetContent className="w-max border-none" side="left">
            <Sidebar
              folders={sidebarFolders}
              onFileClick={handleOpenFile}
              activeFile={activeFile}
            />
          </SheetContent>
        </Sheet>
        <ContentDisplay content={activeFileContent} />
      </div>
    </div>
  );
}
