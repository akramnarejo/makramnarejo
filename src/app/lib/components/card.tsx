"use client";

import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

import type { Project } from "./project-card";

interface Props {
  data: Project;
}

export default function Card({ data }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/40"
    >
      <Link
        href={data.landingpage}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-64 overflow-hidden"
      >
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          src={data.thumbnail}
          alt={data.title}
          fill
        />
      </Link>

      <div className="space-y-3 p-5">
        <Link href={data.landingpage} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
            {data.title}
          </h3>
        </Link>
        <p className="text-sm leading-relaxed text-muted">{data.description}</p>
        <div className="flex gap-4 pt-1 text-sm">
          {data.portal && (
            <Link
              className="text-muted transition-colors hover:text-accent"
              href={data.portal}
              target="_blank"
              rel="noopener noreferrer"
            >
              App <GoArrowUpRight className="inline" />
            </Link>
          )}
          {data.source && (
            <Link
              className="text-muted transition-colors hover:text-accent"
              href={data.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <GoArrowUpRight className="inline" />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
