import React from "react";
import { MdWeb } from "react-icons/md";

interface SectionProps {
  children: React.ReactNode;
  subtitle: string;
  id: string;
}

export const Section: React.FC<SectionProps> = ({ children, subtitle, id }) => {
  return (
    <section className="py-16" id={id}>
      <h2 className="text-3xl sm:text-4xl font-bold py-10 text-white flex items-center gap-x-2">
        <MdWeb /> {subtitle}
      </h2>
      {children}
    </section>
  );
};
