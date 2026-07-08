import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export interface Project {
  title: string;
  thumbnail: string;
  landingpage: string;
  portal: string;
  source: string;
  description: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/40">
      <Link
        href={project.landingpage}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden"
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={400}
          height={compact ? 180 : 220}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
            compact ? "h-44" : "h-52"
          }`}
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium tracking-tight text-foreground">
            {project.title}
          </h3>
          <Link
            href={project.landingpage}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 shrink-0 text-muted transition-colors hover:text-accent"
            aria-label={`Visit ${project.title}`}
          >
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {(project.portal || project.source) && (
          <div className="flex gap-4 pt-1 text-sm">
            {project.portal && (
              <Link
                href={project.portal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                App →
              </Link>
            )}
            {project.source && (
              <Link
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                Code →
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
