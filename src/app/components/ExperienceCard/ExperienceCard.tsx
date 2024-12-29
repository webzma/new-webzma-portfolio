import Image from "next/image";

export default function ExperienceCard() {
  return (
    <article className="relative text-white max-w-[730px] border  p-6 rounded-xl border-blue-400/10 shadow-md shadow-[#324ef0]/5 bg-[#324ef0]/10">
      <div className="mb-4">
        <header className="flex justify-between text-white">
          <span className="text-2xl font-bold">Seriesly</span>
          <span>8 meses / España</span>
        </header>
        <p className="text-yellow-200 font-semibold">Frontend Developer</p>
      </div>
      <ul className="list-disc pl-4 md:pl-10 text-blue-100 flex flex-col gap-y-4 text-md">
        <li>
          <b className="font-bold text-blue-50">Maquetación: </b>
          Implementación de la estructura y diseño visual del sitio web
          utilizando HTML y CSS (TailwindCSS).
        </li>
        <li>
          <b className="font-bold text-blue-50">Desarrollo Frontend: </b>
          Implementación de la estructura y diseño visual del sitio web
          utilizando HTML y CSS (TailwindCSS). Se complementó para darle vida al
          proyecto con Alpine.js
        </li>
        <li>
          <b className="font-bold text-blue-50">Optimización: </b>
          Asegurar un rendimiento óptimo del sitio web en diferentes navegadores
          y dispositivos.
        </li>
        <li>
          <b className="font-bold text-blue-50">Mantenimiento: </b>
          Corrección de errores y actualización del código para garantizar el
          buen funcionamiento del sitio web
        </li>
      </ul>

      <div className="flex flex-col md:flex-row flex gap-4 [&>img]:rounded-2xl mt-12">
        <Image
          src="/x.jpeg"
          alt="project image"
          className="w-full h-[280px] md:h-[230px] object-cover"
          width={700}
          height={700}
        />
        <Image
          src="/y.jpeg"
          alt="project image"
          className="w-full h-[280px] md:h-[230px] object-cover"
          width={700}
          height={700}
        />
      </div>
    </article>
  );
}
