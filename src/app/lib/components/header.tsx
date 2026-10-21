"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, profile } from "../constants";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          {profile.name}
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-5 text-sm sm:gap-7">
            {navLinks.map((link) => {
              const isActive = !link.external && pathname === link.href;

              if (link.external) {
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
