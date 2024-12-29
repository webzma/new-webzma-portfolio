"use client";

import { BiHome } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [activeSection, setActiveSection] = useState("main");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "main";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id") || "main";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname === "/blog") {
    return null;
  }

  return (
    <div className="flex w-full justify-center items-center py-2 fixed left-0 right-0 h-14 bg-transparent z-30 backdrop-blur">
      <div
        id="navBar"
        className="z-10 shadow-2xl fixed rounded-2xl flex items-center p-2 neutral-border-medium border-solid-1 radius-m-4 shadow-l transparent gap-x-1 bg-gray-800 backdrop-blur"
      >
        <Link
          aria-label="main"
          href="#main"
          className={cn(
            "rounded-2xl px-2 sm:px-4 py-1 text-xs sm:text-sm font-medium flex items-center gap-x-2",
            activeSection === "main" && "text-[#6078ff]",
            activeSection !== "main" && "text-white"
          )}
        >
          <BiHome size={18} className="hidden sm:block" />
          Inicio
        </Link>
        <Link
          aria-label="experience"
          href="#experience"
          className={cn(
            "rounded-2xl px-2 sm:px-4 py-1 text-xs sm:text-sm font-medium flex items-center gap-x-2",
            activeSection === "experience" && "text-[#6078ff]",
            activeSection !== "experience" && "text-white"
          )}
        >
          <MdOutlineWorkOutline size={18} className="hidden sm:block" />
          Experiencia
        </Link>
        <Link
          aria-label="projects"
          href="#projects"
          className={cn(
            "rounded-2xl px-2 sm:px-4 py-1 text-xs sm:text-sm font-medium flex items-center gap-x-2",
            activeSection === "projects" && "text-[#6078ff]",
            activeSection !== "projects" && "text-white"
          )}
        >
          <MdWeb size={18} className="hidden sm:block" />
          Proyectos
        </Link>
        <Link
          href="/blog"
          className={cn(
            "rounded-2xl px-2 sm:px-4 py-1 text-xs sm:text-sm font-medium flex items-center gap-x-2",
            activeSection === "blog" && "text-[#6078ff]",
            activeSection !== "blog" && "text-white",
            pathname === "/blog" && "text-[#6078ff]"
          )}
        >
          <FaRegBookmark size={16} className="hidden sm:block" />
          Blog
        </Link>
      </div>
    </div>
  );
}
