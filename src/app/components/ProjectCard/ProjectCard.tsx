import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PiGithubLogoFill } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    <Card className="overflow-hidden">
      <div className="relative h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-x-4 items-center pt-3">
          <Button size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <PiGithubLogoFill className="mr-1 h-4 w-4" />
              Repo
            </a>
          </Button>
          <Button size="sm" asChild variant="outline">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <PiGithubLogoFill className="mr-1 h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
