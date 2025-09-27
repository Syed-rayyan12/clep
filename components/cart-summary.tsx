"use client"

import { useCartStore } from "@/lib/store"
import { ShoppingCart, Truck } from "lucide-react"
import { motion } from "framer-motion"

export function CartSummary() {
  const { items, getTotalItems, getTotalPrice } = useCartStore()

  if (items.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-40 glass-card p-4 rounded-2xl neon-border max-w-sm"
    >
      <div className="flex items-center space-x-3">
        <div className="glass-card p-2 rounded-lg neon-border">
          <ShoppingCart className="w-5 h-5 text-sky-500 animate-pulse-slow" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{getTotalItems()} items</span>
            <span className="font-bold text-sky-600">${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Truck className="w-3 h-3" />
            <span>Free shipping on orders over $25</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
