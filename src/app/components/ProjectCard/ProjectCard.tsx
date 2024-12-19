import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa6";

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

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="max-w-[920px] w-[90%] flex gap-x-12 bg-[#324ef0]/10  border  p-6 rounded-xl border-blue-400/10 shadow-md shadow-[#324ef0]/5">
      <div className="relative min-w-[340px] h-[220px]">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="text-white text-2xl font-bold mb-1">{project.title}</h2>
        <div className="mb-4">
          <Badge className="bg-black text-white font-normal">Next.js</Badge>
        </div>

        <p className="text-blue-100">{project.description}</p>

        <div className="mt-4 gap-x-2 items-center flex flex-1">
          <Button
            size="sm"
            className="bg-gray-400/10 border border-gray-700 rounded-xl  hover:bg-gray-400/20 font-bold"
          >
            <FaLinkedin />
            Demo
          </Button>
          <Button
            size="sm"
            className="bg-gray-400/10 border border-gray-700 rounded-xl  hover:bg-gray-400/20 font-bold"
          >
            <FaLinkedin />
            Repo
          </Button>
        </div>
      </div>
    </div>
  );
};
