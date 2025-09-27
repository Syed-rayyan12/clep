"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { useState } from "react"
import { useCartStore, useProductsStore } from "../lib/store"
import { Button } from "./ui/button"
import { ChevronDown, ChevronLeft, ShoppingCart } from "lucide-react"
import { products } from "@/lib/products"
import { Badge } from "./ui/badge"

export default function HeroSection() {
  const addItem = useCartStore((state) => state.addItem)

  const [activeIndex, setActiveIndex] = useState(0)
  const handWashProduct = products.find(p => p.name === "Hand Wash")
  const phenylProduct = products.find(p => p.name === "Phenyl")

  return (
    <section className="relative w-full h-full flex bg-[#F8FAFC]
  justify-center  px-6" >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 py-20 w-11/12 max-w-7xl">

        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6 mt-2"
        >
          <h1 className="text-6xl font-extrabold text-slate-800 leading-18 drop-shadow">
            Clep The Future of Powerful & Eco-Friendly Cleaning
          </h1>
          <p className="text-lg text-slate-600">
            Experience the next generation of home care with Clep.
            Our advanced, eco-friendly cleaning solutions are designed to make
            every corner of your home shine while keeping your family safe
            and the environment protected.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Discover More
          </button>
        </motion.div>

        {/* Right Slider Box */}
        <div className="flex gap-4 ">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="rounded-2xl w-full h-full max-w-md relative overflow-hidden"
          >

            <Swiper

              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              slidesPerView={1}
              className="rounded-2xl"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // 👈 track active index
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="relative w-full h-[415px] rounded-2xl">
                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20  text-white p-4">
                     <div className="flex justify-between">

                      <Badge className=" bg-blue-600 text-white">
                        {product.name}

                      </Badge>

                      <Badge className=" bg-blue-600 text-white">
                        {product.price}$

                      </Badge>
                     </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Slide Numbering */}

              <button className="swiper-next absolute bottom-10 left-6 flex justify-center items-center  bg-blue-600 text-white p-2   hover:bg-blue-700 transition z-10">
               <ChevronLeft/>
              </button>
            </Swiper>


            {/* Right Arrow */}
            <div className="absolute -left-30 w-40 h-20 bg-red-400 rounded-tl-2xl rounded-bl-2xl top-77 x-10"></div>

          </motion.div>
          <div className="flex flex-col space-y-4 w-full">
            {/* Hand Wash Card */}
            {handWashProduct && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[200px] rounded-2xl overflow-hidden group bg-cover  bg-top-left"
                style={{
                  backgroundImage: "url('/modern-hand-wash-bottle-blue-and-white-design-anti.jpg')",
                  backgroundPosition:"center",
                }}              >

                <div className="absolute inset-0 bg-black/20 flex flex-col items-end justify-start text-center text-white p-2">
                  <Badge className=" bg-blue-600 text-white">
                    {handWashProduct.name}

                  </Badge>


                  {/* <Button
                    onClick={() => addItem(handWashProduct)}
                    size="sm"
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Buy
                  </Button> */}
                </div>
              </motion.div>
            )}

            {/* Phenyl Card */}
            {phenylProduct && (
              <motion.div
                initial={{ bottom: -100, opacity: 0 }}
                animate={{ bottom: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[200px] rounded-2xl overflow-hidden group">
                <Image
                  src={phenylProduct.image}
                  alt={phenylProduct.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col items-end justify-start text-center text-white p-2">
                  <Badge className=" bg-blue-600 text-white">
                    {phenylProduct.name}

                  </Badge>

                  {/* <Button
                    onClick={() => addItem(phenylProduct)}
                    size="sm"
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Buy
                  </Button> */}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
