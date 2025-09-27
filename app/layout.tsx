import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartSummary } from "@/components/cart-summary"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clep - Freshness & Hygiene Redefined",
  description: "Premium cleaning products for modern homes. Experience the perfect blend of effectiveness and care.",
  generator: "v0.app",
  keywords: "cleaning products, eco-friendly, home care, hygiene, premium cleaning solutions",
  authors: [{ name: "Clep Team" }],
  openGraph: {
    title: "Clep - Freshness & Hygiene Redefined",
    description: "Premium cleaning products for modern homes. Experience the perfect blend of effectiveness and care.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clep - Freshness & Hygiene Redefined",
    description: "Premium cleaning products for modern homes. Experience the perfect blend of effectiveness and care.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <PageTransition>{children}</PageTransition>
          <CartSummary />
          <ScrollToTop />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
