import { Inter, Bungee_Inline } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import { STREAMLIT_ENABLE } from './settings'

import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const bungee = Bungee_Inline({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bungee',
  display: 'swap',
})

export const metadata = {
  title: 'Register | Acunetix 11.0',
  description: 'Register for Acunetix 11.0 events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#444444" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${inter.variable} ${bungee.variable} ${
          !STREAMLIT_ENABLE && 'bg-background'
        }`}
      >
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-LCPLRME260" />
      </body>
    </html>
  )
}
