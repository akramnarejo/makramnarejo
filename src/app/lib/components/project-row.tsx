import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import type { Project } from "../constants";

interface ProjectRowProps {
  project: Project;
  index: number;
  expanded?: boolean;
}

export default function ProjectRow({
  project,
  index,
  expanded = false,
}: ProjectRowProps) {
  return (
    <article className="group border-b border-border py-9 last:border-b-0 md:py-11">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_14rem] md:gap-12">
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
              {String(index).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
              <Link
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors group-hover:text-accent"
              >
                {project.title}
              </Link>
            </h3>
          </div>

          <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-muted md:text-base">
            {expanded ? project.detail : project.summary}
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {project.focus.map((item) => (
              <li key={item} className="label">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 text-foreground underline decoration-border underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent/50"
              >
                {link.label}
                <FiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="224px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
