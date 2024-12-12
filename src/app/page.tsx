import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración.",
    technologies: ["HTML", "CSS", "JavaScritp", "Tailwind CSS", "React"],
    image: "/countries.webp",
    demo: "https://ecommerce-demo.com",
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "App de gestión de tareas con colaboración en tiempo real y seguimiento de proyectos.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScritp",
      "Tailwind CSS",
      "Next.js",
      "Shadcn",
    ],
    image: "/pokedex.jpeg",
    demo: "https://taskmanager-demo.com",
    github: "https://github.com/yourusername/task-management-app",
  },
  {
    title: "Fitness Tracker",
    description:
      "App móvil para seguimiento de ejercicios y nutrición con sincronización en la nube.",
    technologies: ["React Native", "GraphQL", "AWS", "DynamoDB"],
    image: "/avatar.webp",
    demo: "https://fitnesstracker-demo.com",
    github: "https://github.com/yourusername/fitness-tracker",
  },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />

      <Section subtitle="Proyectos destacados">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
