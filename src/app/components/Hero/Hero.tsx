import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaEarthAmericas, FaGithub, FaLinkedin } from "react-icons/fa6";

export function Hero() {
  return (
    <section className="flex flex-col gap-y-6 pt-44">
      <div className="grid  grid-cols-[1fr,180px] gap-x-20 ">
        <div>
          <div className="bg-green-800/60 flex justify-center items-center backdrop-blur-lg border border-green-500 py-1 px-4 rounded-2xl text-green-300 text-sm max-w-[200px]">
            Disponible para trabajar
          </div>

          <h1 className="text-[65px] font-extrabold text-white">
            Wilberk Ledezma
          </h1>

          <p className="text-3xl text-blue-200 -mt-2">
            Software Engineer & Frontend Developer
          </p>

          <div className="mt-4 flex items-center flex-wrap gap-x-3">
            <Button
              size="sm"
              className="bg-gray-400/10 border border-gray-700 rounded-xl  hover:bg-gray-400/20 font-bold"
            >
              <FaLinkedin />
              Linkedin
            </Button>
            <Button
              size="sm"
              className="bg-gray-400/10 border border-gray-700 rounded-xl  hover:bg-gray-400/20 font-bold"
            >
              <FaGithub />
              GitHub
            </Button>
            <Button
              size="sm"
              className="bg-gray-400/10 border border-gray-700 rounded-xl  hover:bg-gray-400/20 font-bold"
            >
              <FaLinkedin />
              Descargar CV
            </Button>
          </div>

          <p className="text-blue-200 mt-4 text-xl ">
            Habilidad comprobada en la construcción de aplicaciones web
            escalables utilizando ReactJS, Next.js y Astro.{" "}
            <span className=" font-medium text-yellow-200">
              💼 Constante aprendizaje y búsqueda de nuevas soluciones para
              mejorar la experiencia del usuario en entornos reales.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-y-4">
          <Image
            src="/avatar.webp"
            width={500}
            height={500}
            alt="webzma avatar"
            className="rounded-full size-[150px] object-cover border-gray-900"
          />
          <p className="flex items-center gap-x-1 text-gray-300">
            <FaEarthAmericas size={18} />
            America/Venezuela
          </p>

          <div className="flex gap-x-2">
            <Badge className="px-4 py-1 bg-gray-400/10 border border-gray-700 rounded-xl">
              Español
            </Badge>
            <Badge className="px-4 py-1 bg-gray-400/10 border border-gray-700 rounded-xl">
              Inglés
            </Badge>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-[700px] -translate-y-[610px] w-[500px] h-[500px] bg-[#324ef0] rounded-full blur-[90px] opacity-20 -z-10"></div>
    </section>
  );
}
