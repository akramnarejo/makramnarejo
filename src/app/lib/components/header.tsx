"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work", match: "/work" },
  { href: "https://akramnarejo.medium.com", label: "Writing", external: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 -mx-4 mb-10 border-b border-border/60 bg-background/80 px-4 backdrop-blur-md md:-mx-0 md:px-0">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image
            className="rounded-full ring-1 ring-border"
            src="/images/profile.jpeg"
            alt="Muhammad Akram"
            width={36}
            height={36}
          />
          <span className="hidden text-sm font-medium text-foreground sm:inline">
            Akram Narejo
          </span>
        </Link>

        <nav>
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => {
              const isActive =
                !link.external && pathname === link.match;

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
                    </Link>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <Link
                    href={pathname === "/" ? link.href : "/"}
                    className={`transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {pathname === "/" ? link.label : "Home"}
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
