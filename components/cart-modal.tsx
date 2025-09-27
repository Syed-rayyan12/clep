"use client"

import type React from "react"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus, Trash2, CreditCard } from "lucide-react"
import { useCartStore } from "@/lib/store"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface CartModalProps {
  children: React.ReactNode
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function CartModal({ children, isOpen: externalIsOpen, onOpenChange }: CartModalProps) {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore()
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen
  const setIsOpen = onOpenChange || setInternalIsOpen

  const handleCheckout = () => {
    alert("Checkout functionality would be implemented here!")
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg glass-card border-white/20 neon-border">
        <SheetHeader className="space-y-4">
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5 text-sky-500 animate-pulse-slow" />
            <span>Shopping Cart</span>
            {items.length > 0 && <Badge className="bg-sky-500 text-white">{items.length} items</Badge>}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <AnimatePresence>
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <div className="glass-card p-8 rounded-2xl neon-border">
                    <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-bounce-slow" />
                    <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground text-sm">Add some products to get started!</p>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="glass-card p-4 rounded-xl neon-border"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Image
                            src={item.image || "/placeholder.svg?height=60&width=60&query=cleaning product"}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <Badge className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs">
                            {item.category}
                          </Badge>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold text-sky-600">${item.price}</span>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-8 h-8 p-0 glass border-white/20 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-8 h-8 p-0 glass border-white/20 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-t border-white/10 pt-6 space-y-4"
            >
              {/* Total */}
              <div className="glass-card p-4 rounded-xl neon-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Shipping:</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-white/10 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white neon-glow"
                  size="lg"
                >
                  <CreditCard className="w-5 h-5 mr-2 animate-pulse" />
                  Proceed to Checkout
                </Button>
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="w-full glass border-white/20 hover:border-red-300 hover:text-red-600 bg-transparent"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
