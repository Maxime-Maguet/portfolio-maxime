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

export const metadata: Metadata = {
  title: 'Maxime Maguet — Développeur Fullstack JS',
  description:
    'Portfolio de Maxime Maguet, développeur fullstack JavaScript (Next.js, Node.js, DevOps). Disponible en alternance à Toulouse, septembre 2026.',
  authors: [{ name: 'Maxime Maguet' }],
  openGraph: {
    title: 'Maxime Maguet — Développeur Fullstack JS',
    description:
      'Portfolio de Maxime Maguet, développeur fullstack JavaScript. Disponible en alternance à Toulouse, septembre 2026.',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maxime Maguet — Développeur Fullstack JS',
    description:
      'Portfolio de Maxime Maguet, développeur fullstack JavaScript. Disponible en alternance à Toulouse, septembre 2026.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
