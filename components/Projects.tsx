"use client";

import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

export default function Projects() {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-4">
            <span className="text-xs font-medium tracking-widest text-accent uppercase">
              {tr.projects_label}
            </span>
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <ScrollReveal delay={0.1}>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-text leading-tight">
              {tr.projects_heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-muted text-base max-w-xs sm:text-right leading-relaxed">
              {tr.projects_sub}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
