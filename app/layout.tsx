import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

// ⚠️ AÇÃO NECESSÁRIA: substitua pela URL final do seu GitHub Pages
// Ex: "https://seu-usuario.github.io/FRONTEND-R86" ou domínio customizado
const BASE_URL = "https://rcvdigo.github.io/r86"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'R86 | Especialista em Ar-Condicionado Automotivo em Ibiúna — SP | Renan Camurça',
  description: 'Renan Camurça, especialista com +10 anos em ar condicionado automotivo. Higienização, recarga de gás, diagnóstico e manutenção preventiva em Ibiúna e região — SP. Atendimento humanizado pelo WhatsApp.',
  icons: {
    icon: '/r86/images/r86-logo.png',
    apple: '/r86/images/r86-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'R86 Ar Condicionado Automotivo',
    title: 'R86 | Especialista em Ar-Condicionado Automotivo em Ibiúna — SP | Renan Camurça',
    description: 'Renan Camurça, especialista com +10 anos em ar condicionado automotivo. Higienização, recarga de gás, diagnóstico e manutenção preventiva em Ibiúna e região — SP.',
    images: [
      {
        url: '/images/hero-car-ac.jpg',
        width: 1200,
        height: 630,
        alt: 'R86 Ar Condicionado Automotivo — Renan Camurça, Ibiúna SP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R86 | Especialista em Ar-Condicionado Automotivo | Renan Camurça',
    description: 'Renan Camurça, +10 anos em ar condicionado automotivo em Ibiúna — SP. Fale agora pelo WhatsApp.',
    images: ['/images/hero-car-ac.jpg'],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "R86 Ar Condicionado Automotivo",
  "description": "Especialista em ar condicionado automotivo com mais de 10 anos de experiência. Higienização, recarga de gás, diagnóstico e manutenção preventiva em Ibiúna e região — SP.",
  "url": BASE_URL,
  "telephone": "+5511971922305",
  "priceRange": "$$",
  "employee": {
    "@type": "Person",
    "name": "Renan Camurça",
    "jobTitle": "Especialista em Ar Condicionado Automotivo"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ibiúna",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.6569,
    "longitude": -47.2228
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Ibiúna" },
    { "@type": "City", "name": "Carapicuíba" },
    { "@type": "AdministrativeArea", "name": "Região Metropolitana de São Paulo" }
  ],
  "sameAs": [
    "https://wa.me/5511971922305"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
