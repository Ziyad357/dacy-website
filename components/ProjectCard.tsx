"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <article className="group relative h-full rounded-2xl border border-border bg-surface-2 overflow-hidden card-hover flex flex-col">
      {project.images && project.images[0] && (
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/20 to-transparent" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-text mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-accent/5 border border-accent/20 text-accent text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 rounded-md bg-surface border border-border text-muted text-xs">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-accent text-xs font-medium hover:gap-2.5 transition-all"
          >
            {tr.view_project}
            <ArrowRight size={13} />
          </Link>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 flex items-center justify-center rounded-lg border border-border text-muted hover:text-text hover:border-accent/30 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 flex items-center justify-center rounded-lg border border-border text-muted hover:text-text hover:border-accent/30 transition-all"
                aria-label="Live demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
