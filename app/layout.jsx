import { Inter, Bungee_Inline } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import { STREAMLIT_ENABLE } from './settings'

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
        <link rel="icon" href="/assets/acunetix-logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${bungee.variable} ${
          !STREAMLIT_ENABLE && 'bg-background'
        }`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
