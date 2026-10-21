"use client";

import type { ReactNode } from "react";

import Reveal from "./reveal";

interface SectionProps {
  index: string;
  label: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export default function Section({
  index,
  label,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <Reveal>
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-[9rem_minmax(0,1fr)]">
          <p className="label pt-1">
            <span className="text-accent">{index}</span>
            <span className="mx-1.5 opacity-50">/</span>
            {label}
          </p>

          <div className="min-w-0">
            {title ? (
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-[1.75rem] md:leading-tight">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-[17px]">
                {description}
              </p>
            ) : null}
            {children}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
