"use client"

import { products } from "@/lib/products"
import { ProductCard } from "./product-card"
import { QuickViewModal } from "./quick-view-modal"
import { motion } from "framer-motion"
import { useState } from "react"
import type { Product } from "@/lib/products"

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCartOpen = () => {
    setIsCartOpen(true)
  }

  return (
    <section className="py-20 bg-clep-white">
      <div className=" mx-auto px-34">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-slate-800">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our most popular cleaning solutions, trusted by thousands of homes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
          {featuredProducts.map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}

            >
              <ProductCard
                product={product}
                onQuickView={handleQuickView}
                onCartOpen={handleCartOpen}

              />
            </motion.div>

          ))}

        </div>

        <QuickViewModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCartOpen={handleCartOpen}
        />
      </div>
    </section>
  )
}
