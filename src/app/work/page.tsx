import type { Metadata } from "next";
import Link from "next/link";

import ProjectRow from "../lib/components/project-row";
import Section from "../lib/components/section";
import { openSource, projects, stack } from "../lib/constants";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Akram Narejo — AI platforms, logistics marketplaces, financial tooling and open source, built as a senior frontend engineer.",
};

export default function WorkPage() {
  return (
    <div className="pt-14 md:pt-24">
      <section>
        <p className="label">Work</p>
        <h1 className="mt-6 max-w-3xl text-balance text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
          Products I have shipped, and the problems behind them.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
          Most of my work lives in dense, high-stakes interfaces — agentic
          workflows, operational dashboards, payment and financial tooling.
          These are the ones I can talk about in detail.
        </p>
      </section>

      <div className="mt-20">
        <Section index="01" label="Projects" title="Everything shipped">
          <div className="mt-8 border-t border-border">
            {projects.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={index + 1}
                expanded
              />
            ))}
          </div>
        </Section>

        {/* <Section
          index="02"
          label="Open source"
          title="Things I publish in the open"
          description="Small, self-contained builds — most of them written to understand a problem properly."
        >
          <ul className="mt-8">
            {openSource.map((repo) => (
              <li
                key={repo.name}
                className="grid gap-x-10 gap-y-1 border-t border-border py-5 md:grid-cols-[minmax(0,1fr)_auto]"
              >
                <div className="min-w-0">
                  <Link
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-foreground underline decoration-border underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent/50"
                  >
                    {repo.name}
                  </Link>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                    {repo.description}
                  </p>
                </div>
                <p className="label md:pt-1">{repo.language}</p>
              </li>
            ))}
          </ul>
        </Section> */}

        <Section
          index="03"
          label="Stack"
          title="Tools I reach for"
          description="Chosen for how well they scale with a team, not for how they look in a tutorial."
        >
          <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((group) => (
              <div key={group.label}>
                <p className="label">{group.label}</p>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
