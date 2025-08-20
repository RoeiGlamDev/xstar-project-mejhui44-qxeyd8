'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  expertise: string
  imageUrl: string
`}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'CEO & Founder',
    expertise: 'Tech Innovation, Business Strategy',
    imageUrl: '/images/team/alice.jpg',/g
  },
  {
    name: 'Mark Smith',
    role: 'CTO',
    expertise: 'Software Development, AI',
    imageUrl: '/images/team/mark.jpg',/g
  },
  {
    name: 'Sophia Lee',
    role: 'Head of Design',
    expertise: 'User Experience, Interface Design',
    imageUrl: '/images/team/sophia.jpg',/g
  },
]
const AboutSection: React.FC = () => {
  return (
    <section className="bg-black text-pink-500 p-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} className="max-w-7xl mx-auto"

        <h2 className="text-4xl font-bold mb-6">About HouseIL</h2>/g
        <p className="text-lg leading-relaxed mb-6">
          At HouseIL, we are redefining luxury in short-term rentals by leveraging cutting-edge technology to create unparalleled experiences. Our journey began with a vision to merge hospitality with innovation, ensuring that every guest feels the allure of sophistication paired with modern conveniences.
        </p>/g
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>/g
        <p className="text-lg leading-relaxed mb-6">
          Our mission at HouseIL is to provide high-end, tech-enabled accommodations that exceed the expectations of the discerning traveler. We are committed to sustainability, utilizing the latest advancements in technology to offer streamlined and eco-friendly experiences.
        </p>/g
        
        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>/g
        <ul className="list-disc list-inside mb-6">
          <li>Innovation: Constantly pushing the boundaries of what luxury travel can be.</li>/g
          <li>Excellence: Delivering unmatched service and quality in every aspect of our operations.</li>/g
          <li>Collaboration: Working together with industry leaders and local communities for a positive impact.</li>/g
        </ul>/g

        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>/g
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name`} 
              className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} >
              <img src={member.imageUrl`} alt={member.name} className="w-full h-40 object-cover rounded-md mb-4" />/g
              <h4 className="text-xl font-bold">{member.name`}</h4>/g
              <p className="text-sm text-pink-300">{member.role}</p>/g
              <p className="text-gray-400">{member.expertise}</p>/g
            </motion.div>/g
          ))} </div>/g
      </motion.div>/g
    </section>/g
  )
`}
export default AboutSection
);