import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { profile } from "../constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border md:mt-28">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-foreground">{profile.status}</p>
            <p className="text-sm text-muted">
              <Link
                href={`mailto:${profile.email}`}
                className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent/50"
              >
                {profile.email}
              </Link>
            </p>
            <p className="text-sm text-muted">
              {profile.location} · {profile.timezone}
            </p>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <SocialLink
              href={profile.links.github}
              icon={<FaGithub className="h-4 w-4" />}
              label="GitHub"
            />
            <SocialLink
              href={profile.links.linkedin}
              icon={<FaLinkedin className="h-4 w-4" />}
              label="LinkedIn"
            />
            <SocialLink
              href={profile.links.medium}
              icon={<span className="font-mono text-xs">MD</span>}
              label="Writing"
            />
          </div>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} {profile.name}. Built with Next.js, TypeScript and Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted transition-colors hover:text-foreground"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
