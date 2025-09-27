"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Package, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useCartStore } from "@/lib/store"
import { products } from "@/lib/products"

const bundles = [
  {
    id: "kitchen-bundle",
    name: "Kitchen Essentials",
    description: "Complete kitchen cleaning solution",
    products: ["6", "5"], // Dish Wash + Glass Cleaner
    originalPrice: 17.98,
    bundlePrice: 14.99,
    savings: 2.99,
    icon: Package,
  },
  {
    id: "bathroom-bundle",
    name: "Bathroom Deep Clean",
    description: "Everything for a spotless bathroom",
    products: ["2", "1"], // Harpic + Hand Wash
    originalPrice: 21.98,
    bundlePrice: 18.99,
    savings: 2.99,
    icon: Sparkles,
  },
  {
    id: "complete-bundle",
    name: "Complete Home Care",
    description: "All-in-one cleaning solution",
    products: ["1", "2", "3", "4"], // Hand Wash + Harpic + Phenyl + Surf
    originalPrice: 43.96,
    bundlePrice: 35.99,
    savings: 7.97,
    icon: Package,
  },
]

export function ProductBundles() {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddBundle = (bundle: (typeof bundles)[0]) => {
    bundle.products.forEach((productId) => {
      const product = products.find((p) => p.id === productId)
      if (product) {
        addItem(product)
      }
    })
  }

  return (
    <section className="py-20  bg-gray-100">
      <div className=" mx-auto px-34">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-clep-black bg-clip-text ">
              Bundle & Save
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get more value with our carefully curated product bundles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bundles.map((bundle, index) => {
            const Icon = bundle.icon
            return (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className=" p-6 rounded-2xl border-gray-300 bg-white shadow-sm  hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  <div className=" p-4 rounded-full bg-primary w-16 h-16 mx-auto flex items-center justify-center ">
                    <Icon className="w-8 h-8 text-white  animate-pulse-slow" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{bundle.name}</h3>
                    <p className="text-muted-foreground text-sm">{bundle.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm text-black line-through">${bundle.originalPrice}</span>
                      <Badge className="bg-primary text-white">Save ${bundle.savings}</Badge>
                    </div>
                    <div className="text-3xl font-bold text-black">${bundle.bundlePrice}</div>
                  </div>

                  <Button
                    onClick={() => handleAddBundle(bundle)}
                    className="w-full bg-primary text-white neon-glow"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2 animate-pulse" />
                    Add Bundle to Cart
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Promotional Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-white text-center shadow-sm"
        >
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-spin-slow" />
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-clep-black bg-clip-text">
              Free Shipping on Orders Over $25
            </span>
          </h3>
          <p className="text-muted-foreground">
            Get your cleaning essentials delivered right to your door at no extra cost
          </p>
        </motion.div>
      </div>
    </section>
  )
}
