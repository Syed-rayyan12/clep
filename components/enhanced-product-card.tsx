"use client"

import Image from "next/image"
import { Star, ShoppingCart, Eye, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"
import { useCartStore } from "@/lib/store"
import { motion } from "framer-motion"
import { useState } from "react"
import { MagneticButton } from "./magnetic-button"

interface EnhancedProductCardProps {
  product: Product
  onQuickView?: (product: Product) => void
  index?: number
}

export function EnhancedProductCard({ product, onQuickView, index = 0 }: EnhancedProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 group hover:neon-border transition-all duration-500 relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-50/20 to-teal-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(32, 178, 170, 0.1))"
            : "linear-gradient(135deg, rgba(56, 189, 248, 0.05), rgba(32, 178, 170, 0.05))",
        }}
      />

      <div className="relative z-10">
        <div className="relative mb-4">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>

          <Badge className="absolute top-2 right-2 bg-sky-500 text-white animate-pulse-slow">{product.category}</Badge>

          {/* Like button */}
          <motion.button
            className="absolute top-2 left-2 glass-card p-2 rounded-full border-white/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </motion.button>

          {/* Quick View Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center"
          >
            <MagneticButton
              className="glass-card px-4 py-2 rounded-lg border-white/20 text-sm font-medium hover:neon-border transition-all duration-300"
              onClick={() => onQuickView?.(product)}
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick View
            </MagneticButton>
          </motion.div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <motion.h3 className="font-semibold text-lg" whileHover={{ color: "rgb(56, 189, 248)" }}>
              {product.name}
            </motion.h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-pulse-slow" />
              <span className="text-sm text-muted-foreground">{product.rating}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>

          <div className="flex items-center justify-between">
            <motion.span className="text-2xl font-bold text-sky-600" whileHover={{ scale: 1.05 }}>
              ${product.price}
            </motion.span>

            <MagneticButton
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg neon-glow transition-all duration-300 flex items-center space-x-2"
              onClick={() => addItem(product)}
            >
              <ShoppingCart className="w-4 h-4 animate-pulse" />
              <span>Add to Cart</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
