import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const baseUrl = 'https://maxime-maguet.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Maxime Maguet — Développeur Fullstack JS',
  description:
    'Portfolio de Maxime Maguet, développeur fullstack JavaScript (Next.js, React, Node.js, DevOps). Disponible en alternance contrat de professionnalisation à Toulouse, septembre 2026.',
  authors: [{ name: 'Maxime Maguet' }],
  keywords: [
    'développeur fullstack',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'DevOps',
    'alternance',
    'Toulouse',
    'contrat de professionnalisation',
  ],
  openGraph: {
    title: 'Maxime Maguet — Développeur Fullstack JS',
    description:
      'Portfolio de Maxime Maguet, développeur fullstack JavaScript. Disponible en alternance à Toulouse, septembre 2026.',
    url: baseUrl,
    siteName: 'Maxime Maguet',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxime Maguet — Développeur Fullstack JS',
    description:
      'Portfolio de Maxime Maguet, développeur fullstack JavaScript. Disponible en alternance à Toulouse, septembre 2026.',
  },
  alternates: {
    canonical: baseUrl,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maxime Maguet',
  url: baseUrl,
  jobTitle: 'Développeur Fullstack JavaScript',
  description:
    'Développeur fullstack JS en formation à La Capsule (RNCP Niveau 6). Spécialisation DevOps. Disponible en alternance à Toulouse dès septembre 2026.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toulouse',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://github.com/Maxime-Maguet',
    'https://linkedin.com/in/maximemaguet-dev',
  ],
  knowsAbout: ['React', 'Next.js', 'Node.js', 'MongoDB', 'DevOps', 'TypeScript'],
  email: 'maxime.maguet@gmail.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
  )
}
