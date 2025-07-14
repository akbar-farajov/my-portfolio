"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "@/data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-[#1E2D3D]">
      <div className="flex items-center justify-between w-full h-12">
        <div className="flex items-center h-full">
          <div className="md:border-r h-full flex items-center w-[300px] pl-6">
            <Link href="/" className="text-white text-lg font-medium ">
              akbar-farajov
            </Link>
          </div>

          <nav className="items-center h-full hidden md:flex">
            {navLinks.slice(0, navLinks.length - 1).map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative flex items-center h-full px-6 text-sm transition-colors hover:text-white border-r  ${
                    isActive ? "text-white" : "text-[#607B96]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-link"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FEA55F]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="h-full hidden md:flex">
          <Link
            href="/contact"
            className={`relative flex items-center h-full px-6 text-sm border-l border-[#1E2D3D] transition-colors hover:text-white ${
              pathname === "/contact" ? "text-white" : "text-[#607B96]"
            }`}
          >
            _contact-me
            {pathname === "/contact" && (
              <motion.div
                layoutId="active-nav-link"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FEA55F]"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        </div>
        <div className="md:hidden px-4">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
