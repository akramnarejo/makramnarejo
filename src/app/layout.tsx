import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Header from "./lib/components/header";
import Footer from "./lib/components/footer";
import { profile } from "./lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const description =
  "Senior frontend engineer building fast, accessible interfaces for complex products — AI platforms, fintech and logistics. Currently at Komut, previously AIREV and Trukkr.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://akramnarejo.github.io/makramnarejo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
    images: [{ url: "/images/profile.jpeg", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.role}`,
    description,
    images: ["/images/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-6 md:px-8">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
