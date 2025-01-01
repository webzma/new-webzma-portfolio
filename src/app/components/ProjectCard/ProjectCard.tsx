import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { FaGithub } from "react-icons/fa6";
import Nextjs from "../TechIcons/Next";
import Astro from "../TechIcons/Astro";
import TailwindCSS from "../TechIcons/Tailwind";
import ReactI from "../TechIcons/React";
import Image from "next/image";
import { IoIosBrowsers } from "react-icons/io";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demo: string;
    github: string;
  };
}

const techBadgesMap: {
  [key: string]: { color: string; icon: JSX.Element | null };
} = {
  "Next.js": {
    color: "bg-black/90 text-white",
    icon: <Nextjs className="size-5" />,
  },
  React: {
    color: "bg-blue-900/70 text-white",
    icon: <ReactI className="size-5" />,
  },
  "Tailwind CSS": {
    color: "bg-blue-800 text-white",
    icon: <TailwindCSS className="size-5" />,
  },
  Astro: {
    color: "bg-orange-800/40 text-white",
    icon: <Astro className="size-5" />,
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="max-w-[920px] w-full md:w-[90%] flex flex-col gap-y-3 md:flex-row gap-x-8 bg-[#324ef0]/10 border p-3 md:p-6 rounded-xl border-blue-400/10 shadow-md shadow-[#324ef0]/5">
      <div className="relative md:min-w-[360px] h-[290px] md:h-[220px]">
        <Image
          src={project.image}
          alt={project.title}
          width={1100}
          height={700}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="text-white text-2xl font-bold mb-1">{project.title}</h2>
        <div className="mb-3 flex gap-2 flex-wrap mt-2 ">
          {project.technologies.map((tech) => {
            const techBadge = techBadgesMap[
              tech as keyof typeof techBadgesMap
            ] || {
              color: "bg-gray-500 text-white",
              icon: null,
            };

            return (
              <Badge
                key={tech}
                className={`${techBadge.color} font-semibold flex items-center gap-x-1 text-xs`}
              >
                {techBadge.icon}
                {tech}
              </Badge>
            );
          })}
        </div>

        <p className="text-blue-100">{project.description}</p>

        <div className="mt-4 gap-x-2 items-center flex flex-1">
          <a href={project.demo} target="_blank" rel="noreferrer">
            <Button
              size="sm"
              className="bg-gray-400/10 border border-gray-700 rounded-xl  hover:bg-gray-400/20 font-bold"
            >
              <IoIosBrowsers />
              Demo
            </Button>
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            <Button
              size="sm"
              className="bg-gray-400/10 border border-gray-700 rounded-xl  hover:bg-gray-400/20 font-bold"
            >
              <FaGithub />
              Repo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
