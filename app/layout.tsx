import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Modern portfolio showcasing full-stack development skills, projects, and creative work.',
  keywords: ['portfolio', 'full-stack', 'developer', 'nextjs', 'react'],
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inconsolata">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}