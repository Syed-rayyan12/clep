"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, X, Check } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCartStore } from "@/lib/store"
import { motion } from "framer-motion"
import Image from "next/image"

interface QuickViewModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onCartOpen?: () => void
}

export function QuickViewModal({ product, isOpen, onClose, onCartOpen }: QuickViewModalProps) {
  const addItem = useCartStore((state) => state.addItem)

  if (!product) return null

  const handleAddToCart = () => {
    addItem(product)
    onCartOpen?.()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl  border-white/20 neon-border bg-white">
        <DialogHeader>
          <DialogTitle className="sr-only">Product Details</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4 z-10" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="glass-card p-4 rounded-2xl neon-border bg-transparent">
              <Image
                src={
                  product.image || "/placeholder.svg?height=400&width=400&query=cleaning product bottle modern design"
                }
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <Badge className="absolute top-6 right-6 bg-sky-500 text-white">{product.category}</Badge>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-balance">{product.name}</h2>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.rating} out of 5)</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground text-pretty">{product.description}</p>

            <span className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                ${product.price}
              </span>
            <div className="space-y-3 mt-8">
              <h3 className="font-semibold text-lg">Key Features:</h3>
              <ul className="grid grid-cols-2 gap-4">
                {[...product.featuresOne, ...product.featuresTwo].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <Check className="w-4 h-4 text-teal-500 animate-pulse-slow" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end pt-6 border-t border-white/10">
             
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
