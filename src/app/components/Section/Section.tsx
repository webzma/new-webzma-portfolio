import React, { JSX } from "react";
import { MdWeb, MdWorkOutline } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
type SectionIconKeys = "Experiencia" | "Proyectos" | "Tecnologías";

interface SectionProps {
  children: React.ReactNode;
  subtitle: SectionIconKeys;
  id: string;
}

const sectionIcon: Record<SectionIconKeys, JSX.Element> = {
  Experiencia: <MdWorkOutline />,
  Proyectos: <MdWeb />,
  Tecnologías: <SiWebpack />,
};

export const Section: React.FC<SectionProps> = ({
  children,
  subtitle,
  id,
}: SectionProps) => {
  return (
    <section className="py-16" id={id}>
      <h2 className="text-3xl sm:text-4xl font-bold py-10 text-white flex items-center gap-x-2">
        {sectionIcon[subtitle]} {subtitle}
      </h2>
      {children}
    </section>
  );
};
