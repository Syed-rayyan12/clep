"use client"

import Image from "next/image"
import { Star, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"
import { useCartStore } from "@/lib/store"
import { motion } from "framer-motion"
import { useState } from "react"

interface ProductCardProps {
  product: Product
  onQuickView?: (product: Product) => void
  onCartOpen?: () => void,
  extraClasses?: string;
}

export function ProductCard({ product, onQuickView, onCartOpen, extraClasses  }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    onCartOpen?.()
  }

  return (
    <motion.div
      className={`border border-gray-300 rounded-2xl p-4 group transition-all duration-300  *${extraClasses}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image || "/placeholder.svg?height=200&width=200&query=cleaning product bottle modern design"}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-60 object-cover transition-all duration-300 "
        />
        <Badge className="absolute top-2 right-2 bg-blue-600 text-white">{product.category}</Badge>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.9 : 0 }}
          className="absolute inset-0 bg-black/20 h-60 pb-4  flex items-center justify-center transition-all duration-300"
        >
          <Button
            size="sm"
         
            className="bg-blue-600 border border-gray-200 text-white hover:bg-blue-700"
            onClick={() => onQuickView?.(product)}
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </motion.div>
      </div>

      <div className="space-y-4 py-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl text-clep-black">{product.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-clep-black">${product.price}</span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700  text-white transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
