import React from "react";
import { MdWeb } from "react-icons/md";

interface SectionProps {
  children: React.ReactNode;
  subtitle: string;
}

export const Section: React.FC<SectionProps> = ({ children, subtitle }) => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold py-10 text-white flex items-center gap-x-2">
        <MdWeb /> {subtitle}
      </h2>
      {children}
    </section>
  );
};
