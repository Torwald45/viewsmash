import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ViewSmash — Open Source Web Development, APIs & Integrations",
  description:
    "⚡ We build fast, scalable web apps, APIs, and self-hosted solutions that put you in full control of your stack. Open source first — from bold MVPs to production-ready systems.",
  openGraph: {
    title: "ViewSmash — Open Source Web Development, APIs & Integrations",
    description:
      "We build fast, scalable web apps, APIs, and self-hosted solutions that put you in full control of your stack. Open source first — from bold MVPs to production-ready systems.",
    url: "https://viewsmash.com",
    siteName: "ViewSmash",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://viewsmash.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ViewSmash — Open Source Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ViewSmash — Open Source Web Development, APIs & Integrations",
    description:
      "We build fast, scalable web apps, APIs, and self-hosted solutions that put you in full control of your stack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}