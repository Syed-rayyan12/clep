"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@clep.com",
    description: "Get in touch for any questions or support",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Clean Street, New York, NY 10001",
    description: "Our headquarters and main office",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 9AM-6PM EST",
    description: "Weekend support via email",
  },
]

const faqs = [
  {
    question: "Are Clep products safe for children and pets?",
    answer:
      "Yes! All our products are formulated with family safety in mind. They're non-toxic, gentle on skin, and safe to use around children and pets when used as directed.",
  },
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer:
      "We offer special pricing for bulk orders and wholesale customers. Contact our sales team at wholesale@clep.com for custom pricing and minimum order requirements.",
  },
  {
    question: "What makes Clep products eco-friendly?",
    answer:
      "Our products use biodegradable ingredients, recyclable packaging, and are manufactured using sustainable processes. We're committed to reducing environmental impact without compromising effectiveness.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days. We offer free shipping on orders over $25. Express shipping options are available for faster delivery.",
  },
  {
    question: "Can I return products if I'm not satisfied?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, contact us for a full refund or exchange.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 15 countries worldwide. International shipping rates and delivery times vary by location. Check our shipping page for specific details.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50/20 to-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-sky-500 text-white mb-4">Get in Touch</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have questions about our products? Need support? We're here to help! Reach out to our friendly team and
              we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl neon-border text-center hover:neon-glow transition-all duration-300"
                >
                  <div className="glass-card p-3 rounded-lg neon-border w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-sky-500 animate-pulse-slow" />
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="font-semibold text-sky-600 mb-1">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                    Send us a Message
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="glass border-white/20 focus:neon-border"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="glass border-white/20 focus:neon-border"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="glass border-white/20 focus:neon-border"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="glass border-white/20 focus:neon-border resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white neon-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 animate-pulse" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent">
                    Find Us
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Visit our headquarters or reach out through any of the channels below.
                </p>
              </div>

              <div className="glass-card p-4 rounded-2xl neon-border">
                <div className="aspect-video bg-gradient-to-br from-sky-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-sky-500 mx-auto mb-4 animate-bounce-slow" />
                    <h3 className="font-bold text-lg mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      123 Clean Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl neon-border text-center">
                  <MessageCircle className="w-8 h-8 text-teal-500 mx-auto mb-2 animate-pulse-slow" />
                  <h4 className="font-semibold mb-1">Live Chat</h4>
                  <p className="text-sm text-muted-foreground">Available 9AM-6PM EST</p>
                </div>
                <div className="glass-card p-4 rounded-xl neon-border text-center">
                  <HelpCircle className="w-8 h-8 text-sky-500 mx-auto mb-2 animate-spin-slow" />
                  <h4 className="font-semibold mb-1">Help Center</h4>
                  <p className="text-sm text-muted-foreground">Self-service support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Quick answers to common questions about our products and services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card rounded-2xl neon-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-sky-500 animate-bounce-slow" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-sky-500 animate-pulse-slow" />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? "auto" : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground text-pretty">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
