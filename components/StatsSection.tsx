'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Stats {
  title: string
  count: number
  description: string
`}

const achievements: Stats[] = [
  { title: 'Properties Managed', count: 1500, description: 'High-end properties across prime locations' },
  { title: '5-Star Reviews', count: 3000, description: 'Our commitment to luxury and comfort' },
  { title: 'Global Reach', count: 50, description: 'Servicing clients in over 50 countries' },
  { title: 'Tech Solutions', count: 200, description: 'Innovative and seamless booking experiences' },
]
const StatsSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 py-20 px-5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">HouseIL Achievements</h2>/g
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {achievements.map((stat, index) => (
            <motion.div
              key={stat.title} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 `}} animate={{ opacity: 1, y: 0 `}} transition={{ delay: index * 0.1 `}} >
              <h3 className="text-5xl font-extrabold mb-2">{stat.count`}</h3>/g
              <p className="text-lg font-medium">{stat.title}</p>/g
              <p className="text-sm text-gray-400 mt-1">{stat.description}</p>/g
            </motion.div>/g
          ))} </div>/g
      </div>/g
    </section>/g
  )
`}
export default StatsSection
);