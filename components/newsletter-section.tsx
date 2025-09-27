"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <section className="relative h-[500px] bg-white" style={{ backgroundImage: "url('/make.jpg')", backgroundSize: 'cover', backgroundPosition: 'center ' }}>
       <div className="absolute top-0 bg-black/30 inset-0 z-0"></div>
      <div className="container flex mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mx-auto text-center"
        >
          <div className="p-12">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-6 animate-spin-slow" />

            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              <span className="text-white bg-clip-text">
                Stay Fresh & Clean
              </span>
            </h2>

            <p className="text-xl text-gray-200 mb-8 text-pretty">
              Get exclusive offers, cleaning tips, and be the first to know about new products
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 glass border-white/50  text-center sm:text-left"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-black neon-glow"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 animate-pulse" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>

            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 mt-4 font-medium"
              >
                Thank you for subscribing! Check your email for exclusive offers.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
