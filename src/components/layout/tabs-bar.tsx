"use client";
import { X } from "lucide-react";

interface FileType {
  name: string;
  type: "file" | "folder";
  content?: unknown;
  icon?: string;
}

interface TabsBarProps {
  openFiles: FileType[];
  activeFile: string;
  onTabClick: (fileName: string) => void;
  onTabClose: (fileName: string) => void;
}

export default function TabsBar({
  openFiles,
  activeFile,
  onTabClick,
  onTabClose,
}: TabsBarProps) {
  return (
    <div
      className="flex border-b border-[#1E2D3D] overflow-x-auto w-[100vw] md:w-[calc(100vw-300px)] "
      style={{
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {openFiles.map((file) => (
        <div
          key={file.name}
          onClick={() => onTabClick(file.name)}
          className={`flex items-center gap-4 px-4 py-2 border-r cursor-pointer ${
            activeFile === file.name
              ? "bg-background text-white"
              : "bg-[#011221] text-[#607B96]"
          }`}
        >
          <span>{file.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(file.name);
            }}
            className="hover:bg-[#1c2b3a] p-1 rounded"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
