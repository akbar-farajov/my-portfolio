"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ContentDisplayProps {
  content: unknown;
}

export default function ContentDisplay({ content }: ContentDisplayProps) {
  if (!content) {
    return (
      <div className="p-8 bg-background flex-grow text-[#607B96]">
        Select a file to view its content.
      </div>
    );
  }

  const contentString =
    typeof content === "string" ? content : JSON.stringify(content, null, 2);
  const language = typeof content === "string" ? "markdown" : "json";

  return (
    <div className="p-4 bg-background flex-1 overflow-auto">
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          backgroundColor: "transparent",
          margin: 0,
          padding: "1rem",
        }}
        wrapLongLines
        showLineNumbers
        codeTagProps={{ style: { fontFamily: "var(--font-fira-code)" } }}
      >
        {contentString}
      </SyntaxHighlighter>
    </div>
  );
}
