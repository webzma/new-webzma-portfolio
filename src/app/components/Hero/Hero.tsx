import Image from "next/image";
import { Button } from "../ui/Button";
import { FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";
import { PiGithubLogoFill } from "react-icons/pi";

export function Hero() {
  return (
    <section className="grid grid-cols-2 pt-60 ">
      <div className="flex items-center justify-center">
        <Image
          src="/avatar.webp"
          alt="avatar image"
          width={500}
          height={500}
          className="relative size-[350px] rounded-3xl shadow-2xl shadow-zinc-900 object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-3 justify-center pt-12">
        <h1 className="text-6xl font-extrabold text-zinc-900">
          Wilberk Ledezma
        </h1>
        <h3 className="text-3xl text-zinc-500 font-semibold">
          Desarrollador Full-Stack
        </h3>
        <p className="text-pretty text-lg w-[490px]">
          Creando experiencias digitales únicas con código limpio y diseño
          intuitivo. Transformando ideas en realidad, una línea de código a la
          vez.
        </p>

        <div className="flex flex-wrap gap-4 pt-6">
          <Button type="LINKEDIN">
            Conectemos en LinkedIn
            <FaLinkedin size={22} />
          </Button>
          <Button type="CV">
            Descargar CV
            <PiReadCvLogoBold size={22} />
          </Button>

          <Button type="GITHUB">
            Visita mi GitHub
            <PiGithubLogoFill size={22} />
          </Button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c7c7c7] rounded-full blur-3xl opacity-30 animate-pulse -z-10"></div>
    </section>
  );
}
