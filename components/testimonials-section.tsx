"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homemaker",
    content:
      "Clep products have transformed my cleaning routine. They're powerful yet gentle, and I love that they're safe for my kids.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Restaurant Owner",
    content:
      "We use Clep in our commercial kitchen. The effectiveness is unmatched, and our health inspector always compliments our cleanliness.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Working Mom",
    content:
      "Finally found cleaning products that work fast and smell amazing. Clep saves me time and gives me peace of mind.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=ED",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 bg-clep-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-clep-black">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied customers who trust Clep for their cleaning needs
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex
              const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length
              const isNext = index === (activeIndex + 1) % testimonials.length

              let transform = "translateX(100%) rotateY(45deg) scale(0.8)"
              let zIndex = 1
              let opacity = 0.5

              if (isActive) {
                transform = "translateX(0%) rotateY(0deg) scale(1)"
                zIndex = 3
                opacity = 1
              } else if (isPrev) {
                transform = "translateX(-100%) rotateY(-45deg) scale(0.8)"
                zIndex = 2
                opacity = 0.7
              } else if (isNext) {
                transform = "translateX(100%) rotateY(45deg) scale(0.8)"
                zIndex = 2
                opacity = 0.7
              }

              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute w-full max-w-md"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="border border-gray-300 hover:border-primary/40 transation-all duration-300 p-8 rounded-2xl">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-lg mb-6 text-pretty">{testimonial.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300 hover:border-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
