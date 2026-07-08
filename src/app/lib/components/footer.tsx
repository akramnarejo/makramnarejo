import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border pt-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted">
            Open to senior frontend roles in AI and fintech.
          </p>
          <p className="text-sm text-muted">
            <Link
              href="mailto:makramnarejo@gmail.com"
              className="text-foreground transition-colors hover:text-accent"
            >
              makramnarejo@gmail.com
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-5">
          <SocialLink
            href="https://linkedin.com/in/akramnarejo"
            icon={<FaLinkedin className="h-4 w-4" />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/akramnarejo"
            icon={<FaGithub className="h-4 w-4" />}
            label="GitHub"
          />
        </div>
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
