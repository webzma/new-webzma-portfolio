import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import JavaScript from "./components/TechIcons/JavaScript";
import TypeScript from "./components/TechIcons/TypeScript";
import ReactI from "./components/TechIcons/React";
import TailwindCSS from "./components/TechIcons/Tailwind";
import Nextjs from "./components/TechIcons/Next";
import Astro from "./components/TechIcons/Astro";
import Nodejs from "./components/TechIcons/Node";
import Expressjs from "./components/TechIcons/Express";
import MySQL from "./components/TechIcons/Mysql";
import PostgreSQL from "./components/TechIcons/Postgres";
import Git from "./components/TechIcons/Git";
import Github from "./components/TechIcons/GitHub";
import GitLab from "./components/TechIcons/GitLab";
import GitHubCopilot from "./components/TechIcons/Copilot";

const projects = [
  {
    id: 1,
    title: "Countries App",
    description:
      "Aplicación web para buscar y filtrar países. Información detallada de cada país, podrás ver la población, idioma, moneda y más.",
    technologies: ["Tailwind CSS", "React"],
    image: "/countries.jpeg",
    demo: "https://webzma.github.io/countries-app/",
    github: "https://github.com/webzma/countries-app",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "Aplicación web para gestionar tareas. Filtrar por estado, marcar como completada y eliminar tareas, está diseñada para ser utilizada en dispositivos móviles también.",
    technologies: ["React"],
    image: "/todoapp.jpeg",
    demo: "https://webzma-todoapp.vercel.app/",
    github: "https://github.com/webzma/todo-app",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description:
      "Juego de tres en raya. Juega contra la computadora o contra un amigo, este es uno de los juegos más populares y fáciles de jugar.",
    technologies: ["React"],
    image: "/tictactoe.jpeg",
    demo: "https://webzma.github.io/tic-tac-toe/",
    github: "https://github.com/webzma/tic-tac-toe",
  },
  {
    id: 4,
    title: "GitHub User",
    description:
      "Simple aplicación web para buscar usuarios de GitHub. Muestra la información del usuario y sus repositorios, puedes ver los detalles de cada repositorio.",
    technologies: ["Tailwind CSS", "Next.js"],
    image: "/github-user.jpeg",
    demo: "https://github.com/webzma/profile-users-github-app",
    github: "https://profile-users-github-app.vercel.app/",
  },
  {
    id: 5,
    title: "Pokedex",
    description:
      "Aplicación web para buscar y filtrar pokemones. Información detallada de cada pokemón, podrás ver su tipo, habilidades, debilidades y más.",
    technologies: ["Tailwind CSS", "Next.js"],
    image: "/pokedex.jpeg",
    demo: "https://pokedex-webzma.vercel.app/",
    github: "https://github.com/webzma/pokedex-webzma",
  },
  {
    id: 6,
    title: "Tesla Landing Page",
    description:
      "Landing page de Tesla, con animaciones y transiciones. Se utilizó Astro para la creación de la aplicación.",
    technologies: ["Tailwind CSS", "Astro"],
    image: "/tesla-landing.jpeg",
    demo: "https://tesla-landing-t6yd.vercel.app/",
    github: "https://github.com/webzma/tesla-landing",
  },
];

const tecnologies = {
  languages: ["JavaScript", "TypeScript"],
  frotend: ["React", "Next.js", "Tailwind CSS", "Astro", "Alpine.js"],
  backend: ["Node", "Express", "mySQL", "PostgreSQL"],
  others: ["Git", "GitHub", "GitLab", "Figma", "VS Code"],
};

export default function Home() {
  return (
    <main className="flex flex-col px-4 xl:p-0">
      <Hero />

      <Section subtitle="Experiencia" id="experience">
        <ExperienceCard />
      </Section>

      <Section subtitle="Proyectos" id="projects">
        <div className="grid grid-cols-1 gap-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section subtitle="Tecnologías" id="projects">
        <article className="rounded-xl p-6 flex gap-8 flex-wrap">
          <JavaScript className="size-20" />
          <TypeScript className="size-20" />
          <ReactI className="size-20" />
          <TailwindCSS className="size-20" />
          <Nextjs className="size-20" />
          <Astro className="size-20" />
          <Nodejs className="size-20" />

          <Expressjs className="size-20" />
          <MySQL className="size-20" />
          <PostgreSQL className="size-20" />
          <Git className="size-20" />
          <Github className="size-20" />
          <GitLab className="size-20" />
          <GitHubCopilot className="size-20" />
        </article>
      </Section>
    </main>
  );
}
