"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Award, Users, Leaf, Shield, Heart, Sparkles, Target, Clock, Globe } from "lucide-react"
import Image from "next/image"

const milestones = [
  { year: "2018", title: "Company Founded", description: "Started with a vision to revolutionize home cleaning" },
  { year: "2019", title: "First Product Launch", description: "Introduced our signature eco-friendly hand wash" },
  { year: "2021", title: "100K+ Customers", description: "Reached our first major customer milestone" },
  { year: "2023", title: "Sustainability Award", description: "Recognized for environmental innovation" },
  { year: "2024", title: "Global Expansion", description: "Now serving customers in 15+ countries" },
]

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every product is rigorously tested to ensure it's safe for your family and pets.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "We're committed to sustainable practices and biodegradable formulations.",
  },
  {
    icon: Heart,
    title: "Family Care",
    description: "Gentle yet effective solutions that care for your loved ones and your home.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Premium ingredients and advanced formulations for superior cleaning power.",
  },
]

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former chemical engineer with 15+ years in sustainable product development.",
    image: "/placeholder.svg?height=200&width=200&text=SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of R&D",
    bio: "PhD in Chemistry, specializing in eco-friendly cleaning formulations.",
    image: "/placeholder.svg?height=200&width=200&text=MR",
  },
  {
    name: "Emily Johnson",
    role: "Sustainability Director",
    bio: "Environmental scientist dedicated to reducing our ecological footprint.",
    image: "/placeholder.svg?height=200&width=200&text=EJ",
  },
  {
    name: "David Kim",
    role: "Quality Assurance",
    bio: "Ensures every product meets our rigorous safety and effectiveness standards.",
    image: "/placeholder.svg?height=200&width=200&text=DK",
  },
]

const stats = [
  { icon: Users, value: "500K+", label: "Happy Customers" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Leaf, value: "100%", label: "Eco-Friendly" },
  { icon: Award, value: "25+", label: "Industry Awards" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50/20 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-sky-500 text-white">Our Story</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-balance">
                  <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                    Redefining
                  </span>
                  <br />
                  <span className="text-foreground">Clean Living</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty">
                  At Clep, we believe that effective cleaning shouldn't come at the cost of your family's health or our
                  planet's wellbeing. Since 2018, we've been crafting premium cleaning solutions that deliver powerful
                  results while staying true to our values of safety, sustainability, and care.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white neon-glow">
                  <Sparkles className="mr-2 w-5 h-5 animate-pulse" />
                  Our Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card border-white/30 hover:neon-border bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-3xl neon-border animate-glow">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Clep+Team+at+Work"
                  alt="Clep team at work"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center glass-card p-6 rounded-2xl neon-border"
                >
                  <Icon className="w-8 h-8 text-sky-500 mx-auto mb-4 animate-pulse-slow" />
                  <div className="text-3xl font-bold text-sky-600 mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From a small startup to a trusted global brand, here's how we've grown
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-1 glass-card p-6 rounded-2xl neon-border">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-teal-500 animate-pulse-slow" />
                    <Badge className="bg-teal-500 text-white">{milestone.year}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-teal-500 rounded-full mx-8 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-sky-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-2xl neon-border hover:neon-glow transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="glass-card p-3 rounded-lg neon-border">
                      <Icon className="w-6 h-6 text-sky-500 animate-pulse-slow" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-pretty">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The passionate people behind Clep's innovative cleaning solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl neon-border text-center hover:neon-glow transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <Badge className="bg-teal-500 text-white mb-3">{member.role}</Badge>
                <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="glass-card p-12 rounded-3xl neon-border animate-glow">
              <Target className="w-12 h-12 text-sky-500 mx-auto mb-6 animate-spin-slow" />
              <h2 className="text-4xl font-bold mb-4 text-balance">
                <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                  Ready to Experience the Difference?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Join thousands of satisfied customers who have made the switch to cleaner, safer, and more effective
                cleaning solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white neon-glow"
                >
                  <Sparkles className="mr-2 w-5 h-5 animate-pulse" />
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card border-white/30 hover:neon-border bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
