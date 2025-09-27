"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartModal } from "./cart-modal"
import { useCartStore } from "@/lib/store"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems())
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/10">
      <div className="mx-auto px-34 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-8 h-8 bg-gradient-to-br from-sky-500 to-teal-500 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-lg">C</span>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
              Clep
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-sky-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-sky-500 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-foreground hover:text-sky-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-sky-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search products..." className="pl-10 w-64 glass border-white/20 focus:neon-border" />
            </div>

            {/* Cart */}
            <CartModal>
              <Button variant="ghost" size="icon" className="relative animate-pulse-slow hover:neon-border">
                <ShoppingCart className="w-5 h-5" />
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce neon-glow">
                    {totalItems}
                  </span>
                )}
              </Button>
            </CartModal>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-card p-4 rounded-lg neon-border"
          >
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-sky-500 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-foreground hover:text-sky-500 transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-foreground hover:text-sky-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-sky-500 transition-colors">
                Contact
              </Link>
              <div className="flex items-center space-x-2 pt-2">
                <Input placeholder="Search..." className="flex-1 glass border-white/20" />
                <CartModal>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {mounted && totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </CartModal>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
