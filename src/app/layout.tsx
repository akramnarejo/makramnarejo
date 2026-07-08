import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./lib/components/header";
import Footer from "./lib/components/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammad Akram — Senior Frontend Engineer",
  description:
    "Senior frontend engineer building performant, accessible interfaces. Currently at Airev on On-Demand. Focused on AI products and fintech — intelligent platforms, payments, and high-trust product surfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto w-full max-w-3xl px-6 py-8 md:px-8 md:py-12 ${inter.variable} font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
