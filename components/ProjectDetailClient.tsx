"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Presentation, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { Project } from "@/data/projects";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <main className="min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors mb-10 group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          {tr.back_projects}
        </Link>

        {project.images && project.images[0] && (
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-10 border border-border">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        )}

        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text leading-tight mb-4">
          {project.title}
        </h1>

        <p className="text-muted text-lg leading-relaxed mb-8 border-l-2 border-accent pl-5">
          {project.shortDescription}
        </p>

        {project.investor && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium mb-6">
            <BadgeCheck size={13} />
            {tr.backed_by} {project.investor}
          </div>
        )}

        <div className="mb-3">
          <span className="text-xs font-medium tracking-widest text-muted uppercase">
            {tr.tech_stack}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg border border-accent/20 bg-accent/5 text-accent text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-text text-sm font-medium hover:border-accent/40 hover:bg-surface transition-all"
            >
              <GithubIcon size={15} />
              {tr.github_button}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-background text-sm font-semibold hover:bg-accent-dim transition-all shadow-glow-accent"
            >
              <ExternalLink size={15} />
              {tr.demo_button}
            </a>
          )}
          {project.presentationUrl && (
            <a
              href={project.presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-text text-sm font-medium hover:border-accent/40 hover:bg-surface transition-all"
            >
              <Presentation size={15} />
              {tr.presentation_button}
            </a>
          )}
        </div>

        <div className="border-t border-border pt-10">
          <h2 className="font-display font-semibold text-xl text-text mb-4">
            {tr.about_project}
          </h2>
          <p className="text-text/80 text-base leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </p>
        </div>

        {project.images && project.images.length > 1 && (
          <div className="mt-12">
            <h2 className="font-display font-semibold text-xl text-text mb-6">
              {tr.screenshots}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-xl overflow-hidden border border-border"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 pt-10 border-t border-border">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text text-sm font-medium hover:border-accent/40 hover:bg-surface transition-all group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            {tr.back_projects}
          </Link>
        </div>
      </div>
    </main>
  );
}
