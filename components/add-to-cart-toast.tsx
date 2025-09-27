"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

interface AddToCartToastProps {
  product: Product | null
  isVisible: boolean
  onClose: () => void
}

export function AddToCartToast({ product, isVisible, onClose }: AddToCartToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <AnimatePresence>
      {isVisible && product && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          className="fixed top-20 right-4 z-50 glass-card p-4 rounded-2xl neon-border max-w-sm neon-glow"
        >
          <div className="flex items-center space-x-3">
            <div className="glass-card p-2 rounded-lg bg-green-500/20 border-green-400/30">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm">Added to cart!</h4>
              <p className="text-xs text-muted-foreground truncate">{product.name}</p>
            </div>
            <Button size="sm" variant="outline" className="glass border-white/20 bg-transparent" onClick={onClose}>
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
