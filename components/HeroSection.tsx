'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
`}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Experience Luxury with HouseIL", 
  subtitle = "Innovative Technology Solutions for Modern Living", 
  ctaText = "Explore Our Properties", 
  ctaLink = "/properties" /g
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-gradient" 
        initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} >
        HouseIL
      </motion.div>/g
      <motion.h2 
        className="text-2xl md:text-4xl mt-4 text-pink-500 font-semibold" 
        initial={{ opacity: 0, y: -30 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5, delay: 0.2 `}} >
        {subtitle`}
      </motion.div>/g
      <motion.p 
        className="mt-6 text-center text-lg md:text-xl text-gray-300 max-w-xl" 
        initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5, delay: 0.4 `}} >
        At HouseIL, we blend cutting-edge technology with luxury to provide unparalleled living experiences. Our smart home features and real-time management systems redefine comfort.
      </motion.div>/g
      <motion.a 
        href={ctaLink`} 
        className="mt-8 inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-black bg-pink-500 rounded shadow hover:bg-pink-600 transition-transform transform hover:scale-105" 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 `}} initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 0.5, delay: 0.6 `}} >
        {ctaText`}
      </motion.div>/g
      <div className="mt-10">
        <p className="text-sm text-gray-500">Trusted by clients worldwide for exclusive and high-end real estate solutions.</p>/g
      </div>/g
    </div>/g
  )
}
export default HeroSection
);