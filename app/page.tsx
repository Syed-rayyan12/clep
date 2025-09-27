import { Header } from "@/components/header"

import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProductBundles } from "@/components/product-bundles"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/hero-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialsSection />
      <ProductBundles />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
