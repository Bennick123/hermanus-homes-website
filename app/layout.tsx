import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ScrollAnimations from "@/components/ScrollAnimations"
import ScrollToTop from "@/components/ScrollToTop"
import { Playfair_Display, Inter } from "next/font/google"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hermanus Homes Solutions - Luxury Holiday Rentals",
  description:
    "Discover luxury holiday rentals in Onrus & Vermont near Hermanus. Unwind on the beautiful Hermanus Coast with our premium accommodation.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollAnimations />
        <ScrollToTop />
      </body>
    </html>
  )
}
