"use client";
import { BiHome } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("main");
  console.log(activeSection);

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

  return (
    <div className="flex w-full justify-center items-center py-2 fixed left-0 right-0 h-16 bg-transparent z-30">
      <div
        id="navBar"
        className="z-10 fixed  rounded-2xl flex items-center p-2 neutral-border-medium border-solid-1 radius-m-4 shadow-l transparent gap-x-2 bg-gray-800 backdrop-blur"
      >
        <a
          aria-label="main"
          href="#main"
          className={cn(
            "rounded-2xl px-4 py-1 text-sm font-medium flex items-center gap-x-2",
            activeSection === "main" && "text-[#6078ff]",
            activeSection !== "main" && "text-white"
          )}
        >
          <BiHome size={18} />
          Inicio
        </a>
        <a
          aria-label="experience"
          href="#experience"
          className={cn(
            "rounded-2xl px-4 py-1 text-sm font-medium flex items-center gap-x-2",
            activeSection === "experience" && "text-[#6078ff]",
            activeSection !== "experience" && "text-white"
          )}
        >
          <MdOutlineWorkOutline size={18} />
          Experiencia
        </a>
        <a
          aria-label="projects"
          href="#projects"
          className={cn(
            "rounded-2xl px-4 py-1 text-sm font-medium flex items-center gap-x-2",
            activeSection === "projects" && "text-[#6078ff]",
            activeSection !== "projects" && "text-white"
          )}
        >
          <MdWeb size={18} />
          Proyectos
        </a>
        <a
          href="#"
          className={cn(
            "rounded-2xl px-4 py-1 text-sm font-medium flex items-center gap-x-2",
            activeSection === "blog" && "text-[#6078ff]",
            activeSection !== "blog" && "text-white"
          )}
        >
          <FaRegBookmark size={16} />
          Blog
        </a>
      </div>
    </div>
  );
}
