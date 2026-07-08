"use client";

import { projects, skillCategories } from "../lib/constants";
import Card from "../lib/components/card";

export default function WorkPage() {
  return (
    <div className="space-y-16 pb-8">
      <section className="space-y-5">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Work
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Projects & stack
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Over 5 years building responsive, production-grade web applications —
          from AI platforms and logistics marketplaces to financial calculators.
          I&apos;m especially interested in AI products and fintech, and I
          prioritize type safety, performance, and interfaces that hold up under
          real-world complexity.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-xl font-medium text-foreground">Skills</h2>
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

      <section className="space-y-8">
        <h2 className="text-xl font-medium text-foreground">All projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card data={project} key={project.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
