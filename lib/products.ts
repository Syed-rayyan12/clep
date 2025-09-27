export interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  category: string
  description: string
  featuresOne: string[]
  featuresTwo: string[]

}

export const products: Product[] = [
  {
    id: "1",
    name: "Hand Wash",
    price: 12.99,
    image: "/modern-hand-wash-bottle-blue-and-white-design-anti.jpg",
    rating: 4.8,
    category: "Personal Care",
    description: "Gentle yet effective hand wash with moisturizing formula",
    featuresOne: ["Antibacterial", "Moisturizing"],
    featuresTwo: ["Fresh Scent", "Eco-friendly"],
  },
  {
    id: "2",
    name: "Harpic",
    price: 8.99,
    image: "/harpic-toilet-bowl-cleaner-bottle-blue-design-bath.jpg",
    rating: 4.7,
    category: "Bathroom",
    description: "Powerful toilet bowl cleaner for deep cleaning",
    featuresOne: ["Kills 99.9% Germs", "Removes Stains"],
    featuresTwo: ["Fresh Fragrance", "Thick Formula"],
  },
  {
    id: "3",
    name: "Phenyl",
    price: 6.99,
    image: "/phenyl-floor-cleaner-bottle-green-pine-fresh-disin.jpg",
    rating: 4.6,
    category: "Floor Care",
    description: "Multi-surface disinfectant for floors and surfaces",
    featuresOne: ["Disinfectant", "Multi-surface"],
    featuresTwo: ["Long-lasting", "Pine Fresh"],
  },
  {
    id: "4",
    name: "Surf",
    price: 15.99,
    image: "/surf-laundry-detergent-powder-box-blue-white-moder.jpg",
    rating: 4.9,
    category: "Laundry",
    description: "Advanced laundry detergent for all fabric types",
    featuresOne: ["Stain Removal", "Color Protection"],
    featuresTwo: ["Fresh Scent", "All Fabrics"],
  },
  {
    id: "5",
    name: "Glass Cleaner",
    price: 9.99,
    image: "/glass-cleaner-spray-bottle-blue-streak-free-window.jpg",
    rating: 4.5,
    category: "Surface Care",
    description: "Streak-free glass and mirror cleaner",
    featuresOne: ["Streak-free", "Quick Dry"],
    featuresTwo: ["Ammonia-free", "Crystal Clear"],
  },
  {
    id: "6",
    name: "Dish Wash",
    price: 7.99,
    image: "/dish-wash.png",
    rating: 4.7,
    category: "Kitchen",
    description: "Concentrated dishwashing liquid with grease-cutting power",
    featuresOne: ["Grease Cutting", "Gentle on Hands"],
    featuresTwo: ["Concentrated", "Lemon Fresh"],
  },
  {
    id: "7",
    name: "Bleach",
    price: 5.99,
    image: "/bleach-bottle-white-blue-design-disinfectant-clean.jpg",
    rating: 4.4,
    category: "Disinfectant",
    description: "Multi-purpose bleach for whitening and disinfecting",
    featuresOne: ["Whitening", "Disinfectant"],
    featuresTwo: ["Multi-purpose", "Stain Removal"],
  },
]

export const categories = [
  "All Products",
  "Personal Care",
  "Bathroom",
  "Floor Care",
  "Laundry",
  "Surface Care",
  "Kitchen",
  "Disinfectant",
]
