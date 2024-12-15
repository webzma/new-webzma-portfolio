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
    <div className="relative min-w-[350px] h-[230px]">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
  );
};
