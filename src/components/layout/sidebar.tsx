"use client";

import { useState } from "react";
import { DataFolder, DataFile } from "@/data/about-data";
import { File } from "../../app/(main)/(pages)/about/components/vscode-layout";
import { ChevronRight, ChevronDown } from "lucide-react";

interface SidebarProps {
  folders: DataFolder[];
  onFileClick: (file: File) => void;
  activeFile: string;
}

export default function Sidebar({
  folders,
  onFileClick,
  activeFile,
}: SidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(
      folders.filter((folder) => folder.expanded).map((folder) => folder.name)
    )
  );

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(folderName)) {
        newSet.delete(folderName);
      } else {
        newSet.add(folderName);
      }
      return newSet;
    });
  };

  const handleFileClick = (file: DataFile) => {
    // Convert DataFile to File format expected by VscodeLayout
    const convertedFile: File = {
      name: file.name,
      type: file.type,
      content: file.content,
      icon: "📄", // Convert ReactNode icon to string for compatibility
    };
    onFileClick(convertedFile);
  };

  return (
    <div className="bg-slate-950 w-[300px] flex-shrink-0 border-r p-2 text-white h-full">
      <h2 className="text-xs text-[#607B96] uppercase tracking-widest mb-2">
        File Explorer
      </h2>
      <ul className="space-y-1">
        {folders.map((folder) => (
          <li key={folder.name}>
            {/* Folder header */}
            <button
              onClick={() => toggleFolder(folder.name)}
              className="w-full flex items-center gap-2 px-2 py-1 text-left rounded hover:bg-[#1c2b3a60] text-sm"
            >
              {expandedFolders.has(folder.name) ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
              {folder.icon}
              <span>{folder.name}</span>
            </button>

            {/* Files within folder */}
            {expandedFolders.has(folder.name) && (
              <ul className="ml-6 mt-1 space-y-1">
                {folder.files.map((file) => (
                  <li key={file.name}>
                    <button
                      onClick={() => handleFileClick(file)}
                      className={`w-full flex items-center gap-2 px-2 py-1 text-left rounded text-sm ${
                        activeFile === file.name
                          ? "bg-[#1E2D3D]"
                          : "hover:bg-[#1c2b3a60]"
                      }`}
                    >
                      {file.icon}
                      <span>{file.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
