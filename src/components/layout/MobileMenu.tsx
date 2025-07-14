import React, { useState } from "react";
import {
  Sheet,
  SheetDescription,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center justify-center">
        {isOpen ? <XIcon /> : <MenuIcon />}
      </SheetTrigger>
      <SheetContent className="bg-background w-full mt-[49px] max-h-[calc(100vh-98px)] text-white ">
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className="text-white text-lg font-medium py-4 border-b px-6"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
