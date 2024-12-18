import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa6";

const projects = [
  {
    title: "Countries App",
    description:
      "Aplicación web para buscar y filtrar países. Información detallada de cada país.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
    image: "/countries.jpeg",
    demo: "https://webzma.github.io/countries-app/",
    github: "https://github.com/webzma/countries-app",
  },
  {
    title: "Todo App",
    description:
      "Aplicación web para gestionar tareas. Filtrar por estado y fecha de creación.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
    image: "/todoapp.jpeg",
    demo: "https://webzma-todoapp.vercel.app/",
    github: "https://github.com/webzma/todo-app",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Juego de tres en raya. Juega contra la computadora o contra un amigo.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/tictactoe.jpeg",
    demo: "https://webzma-todoapp.vercel.app/",
    github: "https://github.com/webzma/todo-app",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Juego de tres en raya. Juega contra la computadora o contra un amigo.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/github-user.jpeg",
    demo: "https://webzma-todoapp.vercel.app/",
    github: "https://github.com/webzma/todo-app",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Juego de tres en raya. Juega contra la computadora o contra un amigo.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "/pokedex.jpeg",
    demo: "https://webzma-todoapp.vercel.app/",
    github: "https://github.com/webzma/todo-app",
  },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />

      <Section subtitle="Experiencia laboral">
        <article className="relative text-white max-w-[730px] border  p-6 rounded-xl border-blue-400/10 shadow-md shadow-[#324ef0]/5 bg-[#324ef0]/10">
          <div className="mb-4">
            <header className="flex justify-between text-white">
              <span className="text-2xl font-bold">Seriesly</span>
              <span>8 meses / España</span>
            </header>
            <p className="text-yellow-200 font-semibold">Frontend Developer</p>
          </div>
          <ul className="list-disc pl-10 text-blue-100 flex flex-col gap-y-4 text-md">
            <li>
              <b className="font-bold text-blue-50">Maquetación: </b>
              Implementación de la estructura y diseño visual del sitio web
              utilizando HTML y CSS (TailwindCSS).
            </li>
            <li>
              <b className="font-bold text-blue-50">Desarrollo Frontend: </b>
              Implementación de la estructura y diseño visual del sitio web
              utilizando HTML y CSS (TailwindCSS). Se complementó para darle
              vida al proyecto con Alpine.js
            </li>
            <li>
              <b className="font-bold text-blue-50">Optimización: </b>
              Asegurar un rendimiento óptimo del sitio web en diferentes
              navegadores y dispositivos.
            </li>
            <li>
              <b className="font-bold text-blue-50">Mantenimiento: </b>
              Corrección de errores y actualización del código para garantizar
              el buen funcionamiento del sitio web
            </li>
          </ul>

          <div className="flex gap-x-4 [&>img]:rounded-2xl mt-12">
            <img
              src="/x.jpeg"
              alt="project image"
              className="w-full h-[230px]"
            />
            <img
              src="/y.jpeg"
              alt="project image"
              className="w-full h-[230px]"
            />
          </div>
        </article>
      </Section>

      <Section subtitle="Proyectos destacados">
        <div className="grid grid-cols-1 gap-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="max-w-[920px] w-[90%] flex gap-x-12 bg-[#324ef0]/10  border  p-6 rounded-xl border-blue-400/10 shadow-md shadow-[#324ef0]/5"
            >
              <ProjectCard project={project} />

              <div className="flex flex-col">
                <h2 className="text-white text-2xl font-bold mb-1">
                  {project.title}
                </h2>
                <div className="mb-4">
                  <Badge className="bg-black text-white font-normal">
                    Next.js
                  </Badge>
                </div>

                <p className="text-blue-100">
                  Biblioteca de logos SVG de las marcas más populares. +10k
                  visitas al mes. +2K svgs descargados. Creado desde cero con
                  Next.js, React y Tailwind CSS.
                </p>

                <div className="mt-4 flex gap-x-2 items-center">
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
          ))}
        </div>
      </Section>
    </div>
  );
}
