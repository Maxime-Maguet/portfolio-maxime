import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const baseUrl = "https://maxime-maguet.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Maxime Maguet — Développeur Fullstack JS",
  description:
    "Portfolio de Maxime Maguet, développeur fullstack JavaScript spécialisé en React, Next.js, Node.js et TypeScript. Disponible en CDI ou CDD à Toulouse dès maintenant.",
  authors: [{ name: "Maxime Maguet" }],
  keywords: [
    "développeur fullstack",
    "développeur JavaScript",
    "développeur React",
    "développeur Next.js",
    "développeur Node.js",
    "TypeScript",
    "DevOps",
    "Docker",
    "Toulouse",
    "CDI",
    "CDD",
  ],
  openGraph: {
    title: "Maxime Maguet — Développeur Fullstack JS",
    description:
      "Portfolio de Maxime Maguet, développeur fullstack JavaScript. Disponible en CDI ou en CDD à Toulouse dès maintenant.",
    url: baseUrl,
    siteName: "Maxime Maguet",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxime Maguet — Développeur Fullstack JS",
    description:
      "Portfolio de Maxime Maguet, développeur fullstack JavaScript. Disponible en CDI ou en CDD à Toulouse dès maintenant.",
  },
  alternates: {
    canonical: baseUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maxime Maguet",
  url: baseUrl,
  jobTitle: "Développeur Fullstack JavaScript",
  description:
    "Développeur Fullstack JavaScript spécialisé en React, Next.js, Node.js et TypeScript. Disponible en CDI ou CDD à Toulouse dès maintenant.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    addressCountry: "FR",
  },
  sameAs: [
    "https://github.com/Maxime-Maguet",
    "https://linkedin.com/in/maximemaguet-dev",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "CI/CD",
    "DevOps",
  ],
  email: "maxime.maguet@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
