import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alfio Perino | Frontend Designer',
  description:
    'Portfolio de Alfio Perino, frontend designer en Buenos Aires. Proyectos de diseño y desarrollo frontend, accesibilidad y productos digitales.',
  applicationName: 'Alfio Perino Portfolio',
  authors: [{ name: 'Alfio Perino' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Alfio Perino | Frontend Designer',
    description:
      'Portfolio de Alfio Perino, frontend designer en Buenos Aires. Proyectos de diseño y desarrollo frontend, accesibilidad y productos digitales.',
    siteName: 'Alfio Perino Portfolio',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Alfio Perino | Frontend Designer',
    description:
      'Portfolio de Alfio Perino, frontend designer en Buenos Aires. Proyectos de diseño y desarrollo frontend, accesibilidad y productos digitales.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
