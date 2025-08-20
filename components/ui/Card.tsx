'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  image: string
`}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <motion.div
      className="bg-black bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }} role="button"
      aria-label={View details for ${title`}} >
      <img src={image`} alt={title} className="rounded-lg mb-4" />/g
      <h3 className="text-pink-500 text-xl font-bold mb-2">{title`}</h3>/g
      <p className="text-white text-sm">{description}</p>/g
    </motion.div>/g
  )
}
export default Card
);