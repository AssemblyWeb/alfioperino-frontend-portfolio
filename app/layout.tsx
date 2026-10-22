import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alfio Perino | Frontend Designer',
  description:
    'Portfolio of Alfio Perino, frontend designer based in Buenos Aires. Digital product design, frontend development, accessibility, and UI engineering.',
  applicationName: 'Alfio Perino Portfolio',
  authors: [{ name: 'Alfio Perino' }],
  openGraph: {
    title: 'Alfio Perino | Frontend Designer',
    description:
      'Portfolio of Alfio Perino, frontend designer based in Buenos Aires. Digital product design, frontend development, accessibility, and UI engineering.',
    siteName: 'Alfio Perino Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Alfio Perino | Frontend Designer',
    description:
      'Portfolio of Alfio Perino, frontend designer based in Buenos Aires. Digital product design, frontend development, accessibility, and UI engineering.',
  },
}

// export const viewport: Viewport = {
//   colorScheme: 'light dark',
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
// }

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
