import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Section from "../lib/components/section";
import {
  contact,
  experience,
  principles,
  profile,
} from "../lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Akram Narejo is a senior frontend engineer in Dubai building fast, accessible interfaces for complex products across AI, fintech and logistics.",
};

export default function AboutPage() {
  return (
    <div className="pt-14 md:pt-24">
      <section>
        <p className="label">About</p>
        <h1 className="mt-6 max-w-3xl text-balance text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
          I am a frontend engineer who likes the hard part of the problem.
        </h1>

        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="max-w-2xl space-y-5 text-pretty text-lg leading-relaxed text-muted">
            <p>
              I am {profile.name}, a senior frontend engineer based in{" "}
              {profile.location}. For the last seven years I have built web
              products where the interface is the product — AI platforms,
              logistics marketplaces, financial tooling — and where a slow or
              confusing screen has a real cost.
            </p>
            <p>
              I started as a frontend developer shipping booking flows at
              Trukkr, then moved into senior work building agentic AI products
              at AIREV. Today I build product end-to-end at{" "}
              <Link
                href="https://komut.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/50"
              >
                Komut
              </Link>
              , a social commute platform, from discovery with design through
              to production.
            </p>
            <p>
              The through-line is craft. I care about bundle size, keyboard
              paths, semantic markup, type-safe contracts and design systems
              that stay coherent after the tenth sprint. The last 10% is where
              products are won or lost.
            </p>
          </div>

          <aside className="space-y-4">
            <div className="relative aspect-square w-28 overflow-hidden rounded-full border border-border">
              <Image
                src="/images/profile.jpeg"
                alt={profile.name}
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="label">Role</dt>
                <dd className="mt-1 text-foreground">{profile.role}</dd>
              </div>
              <div>
                <dt className="label">Location</dt>
                <dd className="mt-1 text-foreground">
                  {profile.location}
                  <span className="text-muted"> · {profile.timezone}</span>
                </dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd className="mt-1 text-foreground">{profile.status}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div className="mt-20 md:mt-28">
        <Section
          index="01"
          label="Principles"
          title="How I work"
          description="The rules I keep applying, because they keep paying off."
        >
          <ol className="mt-8">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid gap-x-10 gap-y-1 border-t border-border py-6 md:grid-cols-[2rem_minmax(0,1fr)]"
              >
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          index="02"
          label="Experience"
          title="Roles and teams"
          description="Where I have worked, and what I was responsible for."
        >
          <div className="mt-8">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="grid gap-x-10 gap-y-3 border-t border-border py-6 md:grid-cols-[minmax(0,1fr)_auto]"
              >
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-foreground">
                    {item.role}
                    <span className="mx-2 text-muted-foreground">·</span>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/50"
                    >
                      {item.company}
                    </Link>
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm leading-relaxed text-muted"
                      >
                        <span className="mr-2 text-accent">—</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="label md:pt-1">{item.period}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section index="03" label="Contact" title={contact.heading}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted">
            {contact.body}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-md bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-85"
            >
              {profile.email}
            </Link>
            <Link
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent/50"
            >
              LinkedIn
            </Link>
            <Link
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent/50"
            >
              GitHub
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
}
