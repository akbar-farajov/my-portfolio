"use client";

import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippets = [
  {
    title: "portfolio.ts",
    code: `function createAwesomePortfolio(name: string): Portfolio {
  return {
    developer: "Akbar ",
    techStack: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    contact: "akbarfarajov74@gmail.com",
    openToWork: true,
    passion: "Building amazing user experiences",
    motto: "Code with purpose, design with heart"
  };
}`,
  },
  {
    title: "motivation.ts",
    code: `const motivation = () => {
  while(true) {
    learn();
    build();
    share();
    if (tired) rest();
  }
};
    
motivation();`,
  },
  {
    title: "deploy.ts",
    code: `const showcaseProject = async (project: Project) => {
  const result = await deploy({
    name: project.name,
    tech: project.stack,
    live: true,
    github: project.repo
  });
  
  return result.success ? 
    "🚀 Live and ready!" : 
    "🔧 Still perfecting...";
};`,
  },
];

const useTypingEffect = (text: string, speed: number = 60) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    setDisplayedText("");
    let i = 0;

    if (text.length > 0) {
      setDisplayedText(text.charAt(0));
      i = 0;
    }

    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
};

export default function AnimatedCodeBlock() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentSnippet = codeSnippets[currentSnippetIndex];
  const animatedCode = useTypingEffect(currentSnippet.code, 25);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-xl max-w-xl h-[350px]  bg-[#011627] rounded-lg border border-[#1E2D3D] shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between p-3 bg-[#1E2D3D] rounded-t-lg">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#FE5F57] rounded-full"></div>
          <div className="w-3 h-3 bg-[#FEBC2E] rounded-full"></div>
          <div className="w-3 h-3 bg-[#28C840] rounded-full"></div>
        </div>
        <p className="text-sm text-[#607B96] font-mono">
          {currentSnippet.title}
        </p>
        <div className="flex gap-1">
          {codeSnippets.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSnippetIndex
                  ? "bg-[#28C840]"
                  : "bg-[#607B96] opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className={`w-full p-4 text-left font-mono text-sm h-full max-h-[290px] overflow-x-auto overflow-y-auto transition-opacity duration-300 ${
          isTransitioning ? "opacity-50" : "opacity-100"
        }`}
      >
        <SyntaxHighlighter
          language="typescript"
          style={atomDark}
          customStyle={{
            backgroundColor: "transparent",
            padding: "0",
            margin: "0",
            overflow: "visible",
            fontSize: "14px",
            lineHeight: "1.5",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
          wrapLongLines={true}
          showLineNumbers={true}
          lineNumberStyle={{
            color: "#607B96",
            fontSize: "12px",
            marginRight: "5px",
            userSelect: "none",
            minWidth: "25px",
            display: "inline-block",
          }}
        >
          {animatedCode}
        </SyntaxHighlighter>

        <span className="inline-block w-2 h-5 bg-[#28C840] ml-1 animate-pulse" />
      </div>
    </div>
  );
}
