import { ThemeHelper } from '@/components/ThemeHelper'
import { cn } from '@/utils/tailwind'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import './animations.css'
import './globals.css'
// import './utils.css'
import Topbar from '@/components/layout/Topbar'
import Navbar from '@/components/layout/Navbar'
import MegaMenu from '@/components/layout/MegaMenu'
import { ResponsiveHelper } from '@/components/ResponsiveHelper'
import Subscribe from '@/components/layout/Subscribe'
import Footer from '@/components/layout/Footer'
import Copybar from '@/components/layout/Copybar'

export const metadata: Metadata = {
  title: 'Marketa',
}

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" dir="ltr" className="no-scrollbars" data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body
        data-nextjs-scroll-focus-boundary
        translate="no"
        className={cn(
          // locale === 'fa' ? faSans.variable : enSans.variable,
          // locale === 'fa' ? faSerif.variable : enSans.variable,
          'notranslate min-h-screen w-screen overflow-x-hidden antialiased',
          { 'env-prod': process.env.NODE_ENV === 'production' }
        )}
      >
        <ThemeHelper />
        <header className="contents">
          <Topbar />
          <Navbar />
          <MegaMenu />
          <ResponsiveHelper />
        </header>
        <main className="contents">{children}</main>
        <footer className="contents">
          <Subscribe />
          <Footer />
          <Copybar />
        </footer>
      </body>
    </html>
  )
}
