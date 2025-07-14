import { RiLinkedinFill, RiTwitterXFill, RiGithubFill } from "@remixicon/react";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <RiLinkedinFill size={20} />,
    url: "https://www.linkedin.com/in/akbar-farajov",
  },
  {
    name: "Twitter",
    icon: <RiTwitterXFill size={20} />,
    url: "https://twitter.com/akbarfarajov",
  },
  {
    name: "Github",
    icon: <RiGithubFill size={20} />,
    url: "https://github.com/akbar-farajov",
  },
];

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t">
      <div className="flex items-center justify-between w-full h-12 text-white/70">
        <div className="flex items-center h-full">
          <div className="border-r h-full flex items-center px-2">
            Find me on
          </div>

          <nav className="items-center h-full flex">
            {socialLinks.slice(0, socialLinks.length - 1).map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center h-full px-3 text-sm transition-colors hover:text-white border-r`}
                >
                  {link.icon}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="h-full flex">
          <Link
            href="https://github.com/akbar-farajov"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative flex items-center h-full px-3 md:px-2 text-sm border-l border-[#1E2D3D] transition-colors hover:text-white`}
          >
            <span className="mr-2 hidden md:block">akbar-farajov</span>
            {socialLinks[2].icon}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
