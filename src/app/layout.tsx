import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./lib/components/header";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio: Akram Narejo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full md:w-8/12 mx-auto px-8 md:px-0 py-10 box-border ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
