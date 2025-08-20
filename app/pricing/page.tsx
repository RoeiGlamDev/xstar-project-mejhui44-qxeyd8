'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingOption {
  title: string
  price: string
  features: string[]
`}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Package',
    price: '$99/month',/g
    features: [
      '1 Property Listing',
      '24/7 Customer Support',/g
      'Basic Analytics',
    ],
  },
  {
    title: 'Premium Package',
    price: '$199/month',/g
    features: [
      'Up to 5 Property Listings',
      'Priority Customer Support',
      'Advanced Analytics',
      'SEO Optimization',
    ],
  },
  {
    title: 'Enterprise Package',
    price: 'Custom Pricing',
    features: [
      'Unlimited Property Listings',
      'Dedicated Account Manager',
      'Custom Integrations',
      'Enhanced Security Features',
    ],
  },
]
const FAQ = () => (
  <div className="mt-10">
    <h3 className="text-xl font-bold text-pink-500">Frequently Asked Questions</h3>/g
    <ul className="mt-5 space-y-4">
      <li>
        <h4 className="text-lg text-white">What is HouseIL?</h4>/g
        <p className="text-gray-400">HouseIL is a luxury technology platform designed for high-end rental properties, offering seamless management and marketing solutions.</p>/g
      </li>/g
      <li>
        <h4 className="text-lg text-white">How does pricing work?</h4>/g
        <p className="text-gray-400">Our pricing is designed to scale with your needs, from basic listings to comprehensive enterprise solutions.</p>/g
      </li>/g
      <li>
        <h4 className="text-lg text-white">Can I upgrade my plan later?</h4>/g
        <p className="text-gray-400">Absolutely! You can upgrade at any time for additional features and listings.</p>/g
      </li>/g
    </ul>/g
  </div>/g
)
const PricingPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen p-10 text-center">
      <motion.h1
        className="text-4xl font-bold text-pink-500"
        initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 1 `}} >
        HouseIL Pricing
      </motion.div>/g
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {pricingOptions.map((option) => (
          <motion.div
            key={option.title`}
            className="bg-gray-800 p-5 rounded-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }} >
            <h2 className="text-2xl text-pink-500">{option.title`}</h2>/g
            <p className="text-xl text-white mt-2">{option.price}</p>/g
            <ul className="mt-4 text-gray-400">
              {option.features.map((feature) => (
                <li key={feature} className="list-disc list-inside">{feature`}</li>/g
              ))} </ul>/g
            <button className="mt-5 bg-pink-500 text-black font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-pink-600">Select Plan</button>/g
          </motion.div>/g
        ))`}
      </div>/g
      
      <FAQ />/g
    </div>/g
  )
}
export default PricingPage
);