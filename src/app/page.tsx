import Link from "next/link";

import ProjectRow from "./lib/components/project-row";
import Reveal from "./lib/components/reveal";
import Section from "./lib/components/section";
import {
  capabilities,
  contact,
  experience,
  featuredProjects,
  hero,
  profile,
  stack,
} from "./lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pb-4 pt-14 md:pt-24">
        <Reveal>
          <p className="text-accent font-medium">{hero.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-[2.25rem] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {hero.intro}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <Link
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-md bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-85"
            >
              Get in touch
            </Link>
            <Link
              href="/work"
              className="text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent/50"
            >
              See selected work
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
            {hero.meta.map((item) => (
              <div key={item.label}>
                <dt className="label">{item.label}</dt>
                <dd className="mt-2 text-sm text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <div className="mt-20 md:mt-28">
        {/* Work */}
        <Section
          index="01"
          label="Work"
          title="Selected projects"
          description="Products I have designed and shipped in production — each one a different kind of interface problem."
        >
          <div className="mt-8 border-t border-border">
            {featuredProjects.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={index + 1}
              />
            ))}
          </div>
          <Link
            href="/work"
            className="mt-6 inline-block text-sm text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent/50"
          >
            All projects
          </Link>
        </Section>

        {/* Craft */}
        <Section
          index="02"
          label="Craft"
          title="What I optimise for"
          description="The parts of frontend work that decide whether a product feels good six months after launch."
        >
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.title} className="border-t border-border pt-5">
                <h3 className="text-[15px] font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section
          index="03"
          label="Experience"
          title="Where I have worked"
          description="Seven years across AI platforms, logistics marketplaces and financial tooling."
        >
          <div className="mt-8">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="grid gap-x-10 gap-y-2 border-t border-border py-6 md:grid-cols-[minmax(0,1fr)_auto]"
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
                </div>
                <p className="label md:pt-1">{item.period}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Stack */}
        <Section
          index="04"
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

        {/* Contact */}
        <Section index="05" label="Contact" title={contact.heading}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted">
            {contact.body}
          </p>
          <Link
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {profile.email}
          </Link>
        </Section>
      </div>
    </>
  );
}
