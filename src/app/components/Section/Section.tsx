import React from "react";

interface SectionProps {
  children: React.ReactNode;
  subtitle: string;
}

export const Section: React.FC<SectionProps> = ({ children, subtitle }) => {
  return (
    <section className="pt-80 pb-40">
      <h2 className="text-4xl font-bold py-10">{subtitle}</h2>
      {children}
    </section>
  );
};
