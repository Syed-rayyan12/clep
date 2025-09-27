"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Heart, Leaf, Star, ShoppingCart } from "lucide-react"
import { useRef } from "react"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"], // start when visible, end when bottom reaches viewport
  })

  // 3D transforms for content
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 0]) // text rotation
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]) // scale effect

  // 3D transforms for images
  const rotateXImg = useTransform(scrollYProgress, [0, 1], [20, 0])
  const rotateYImg = useTransform(scrollYProgress, [0, 1], [-20, 0])

  return (
    <section ref={ref} className="relative py-28 bg-gradient-to-br from-white via-[#f0f9ff] to-[#e0f2fe] overflow-hidden">
      {/* Fresh SVG Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="fresh-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1"/>
            </linearGradient>
            <pattern id="fresh-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="3" fill="#3b82f6" opacity="0.3"/>
              <path d="M20 20 Q50 10 80 20 Q90 50 80 80 Q50 90 20 80 Q10 50 20 20" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.2"/>
              <polygon points="50,10 60,40 90,40 65,55 75,85 50,70 25,85 35,55 10,40 40,40" fill="#f59e0b" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fresh-gradient)"/>
          <rect width="100%" height="100%" fill="url(#fresh-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-34">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ rotateY, scale }}
            className="space-y-8 origin-left [transform-style:preserve-3d]"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                <span className="text-slate-800">Why Choose Clep</span>
              </h2>
              <p className="text-lg text-slate-600 text-pretty">
                We believe cleaning should be effective, safe, and sustainable. Our products are crafted with care for
                your family and the environment.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  title: "Proven Effectiveness",
                  desc: "Our formulas are scientifically tested to eliminate 99.9% of germs and bacteria.",
                },
                {
                  icon: <Heart className="w-6 h-6 text-white" />,
                  title: "Family Safe",
                  desc: "Gentle on skin and safe around children and pets, without compromising on power.",
                },
                {
                  icon: <Leaf className="w-6 h-6 text-white" />,
                  title: "Eco-Conscious",
                  desc: "Biodegradable ingredients and recyclable packaging for a cleaner planet.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div
            style={{ rotateX: rotateXImg, rotateY: rotateYImg, scale }}
            className="grid grid-cols-1 gap-8 [transform-style:preserve-3d]"
          >
          
              <Image
                src="/rider.png"
                alt="Modern cleaning products"
                width={500}
                height={300}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Premium Quality
              </div>
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}
