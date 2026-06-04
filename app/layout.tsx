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
  metadataBase: new URL("https://www.onrusaccommodation.co.za"),
  title: {
    default: "Self-Catering Holiday Homes in Onrus, Vermont, Sandbaai & Hermanus | Hermanus Homes",
    template: "%s | Hermanus Homes",
  },
  description:
    "Family-run self-catering holiday rentals in Onrus, Vermont, Sandbaai and Hermanus. Beach houses, cottages and family homes on the Whale Coast, walking distance to the sea.",
  keywords: [
    "Hermanus accommodation",
    "Onrus self catering",
    "Vermont holiday rental",
    "Sandbaai accommodation",
    "Hermanus holiday homes",
    "Whale Coast accommodation",
    "self catering Hermanus",
    "Onrus beach house",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.onrusaccommodation.co.za",
    siteName: "Hermanus Homes",
    title: "Self-Catering Holiday Homes in Onrus, Vermont, Sandbaai & Hermanus",
    description:
      "Family-run self-catering holiday rentals on the Whale Coast. Beach houses, cottages and family homes a short walk from the sea.",
    images: [
      {
        url: "/images/coastal-sunset-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Coastal sunset view of the Hermanus shoreline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Catering Holiday Homes in Onrus, Vermont, Sandbaai & Hermanus",
    description:
      "Family-run self-catering holiday rentals on the Whale Coast.",
    images: ["/images/coastal-sunset-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
