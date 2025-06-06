import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Shiv Desai | Program Planning & Controls Specialist',
  description: 'Program Planning and Controls Specialist at Blue Origin with expertise in aerospace, financial analysis, and business intelligence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 