import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import ProjectCard from "./lib/components/project-card";
import {
  expertise,
  featuredProjects,
  skillCategories,
} from "./lib/constants";

export default function Home() {
  return (
    <div className="space-y-24 pb-8 md:space-y-32">
      {/* Hero */}
      <section className="space-y-8">
        <div className="space-y-6 opacity-0 animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Product Engineer
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Engineering scalable frontends that turn complex workflows into
            converting experiences.
          </h1>
        </div>

        <div className="max-w-2xl space-y-5 opacity-0 animate-fade-up-delay-1">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m Akram — a product engineer with 7+ years shipping
            responsive, scalable web applications. Currently at{" "}
            <Link
              href="https://airev.ai/"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
            >
              Airev
            </Link>
            , building{" "}
            <Link
              href="https://on-demand.io"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/40"
            >
              On-Demand
            </Link>
            , an AI platform for managing complex product workflows.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m focused on building AI products and fintech — intelligent
            platforms, agentic workflows, payments, financial data, and
            regulated surfaces where clarity, performance, and accessibility
            aren&apos;t optional. I care about the craft of frontend:
            architecture, design systems, and the details that make complex
            products feel effortless.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up-delay-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View selected work
            <FiArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:makramnarejo@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Expertise */}
      <section className="space-y-10">
        <SectionHeader
          label="Expertise"
          title="What I bring to product teams"
        />
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="space-y-2 bg-background p-6 md:p-8"
            >
              <h3 className="text-base font-medium text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="space-y-10">
        <SectionHeader label="Stack" title="Tools I work with daily" />
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.label} className="space-y-3">
              <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {category.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border px-3 py-1.5 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="space-y-10">
        <div className="flex items-end justify-between gap-4">
          <SectionHeader
            label="Work"
            title="Selected projects"
            className="mb-0"
          />
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            View all
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} compact />
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  label,
  title,
  className = "",
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <p className="text-xs font-medium uppercase tracking-widest text-accent">
        {label}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
