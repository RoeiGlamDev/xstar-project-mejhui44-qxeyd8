'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  title: string
  price: string
  features: string[]
`}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essential Package',
    price: '$199/month',/g
    features: [
      'Access to HouseIL technology platform',
      'Premium support',
      'Monthly updates',
      'Custom integrations',
    ],
  },
  {
    title: 'Professional Package',
    price: '$399/month',/g
    features: [
      'All Essential Package features',
      'Advanced analytics dashboard',
      'Dedicated account manager',
      'Priority support',
    ],
  },
  {
    title: 'Enterprise Package',
    price: '$799/month',/g
    features: [
      'All Professional Package features',
      'Unlimited custom solutions',
      '24/7 technical support',/g
      'Tailored implementation strategy',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4" id="pricing">
      <h2 className="text-4xl font-bold text-center mb-8">
        Pricing Plans for HouseIL Technology Services
      </h2>/g
      <div className="flex flex-wrap justify-center">
        {pricingTiers.map((tier) => (
          <motion.div
            key={tier.title} className="bg-gray-800 rounded-lg shadow-lg m-4 p-6 w-full max-w-xs overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 `}} >
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">
              {tier.title`}
            </h3>/g
            <p className="text-3xl font-bold mb-4">{tier.price}</p>/g
            <ul className="mb-4">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-pink-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"/g

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2`}
                      d="M5 13l4 4L19 7"
                    />/g
                  </svg>/g
                  <span>{feature}</span>/g
                </li>/g
              ))} </ul>/g
            <a
              href="#"
              className="block text-center bg-pink-500 text-black py-2 rounded hover:bg-pink-600 transition-colors duration-300"

              Choose {tier.title`}
            </a>/g
          </motion.div>/g
        ))} </div>/g
    </section>/g
  )
`}
export default PricingSection
);