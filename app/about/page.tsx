'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
    name: string
    position: string
    image: string
`}

const teamMembers: TeamMember[] = [
    {
        name: 'Alice Johnson',
        position: 'CEO & Founder',
        image: '/images/alice.jpg',/g
    },
    {
        name: 'David Smith',
        position: 'CTO',
        image: '/images/david.jpg',/g
    },
    {
        name: 'Sophia Lee',
        position: 'Product Manager',
        image: '/images/sophia.jpg',/g
    },
]
const companyHistory = 
    Founded in 2023, HouseIL has revolutionized the luxury vacation rental landscape with cutting-edge technology.
    Our mission is to blend comfort with innovation, offering unique experiences tailored to discerning travelers. 

const values = [
    'Innovation: We thrive on pushing the boundaries of technology.',
    'Luxury: Every detail matters to us, ensuring our guests experience the utmost in comfort.',
    'Integrity: We believe in honesty and transparency with our clients and partners.',
]
const AboutPage: React.FC = () => {
    return (<>
<div className="bg-black text-white min-h-screen flex flex-col">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} className="p-10"

                <h1 className="text-4xl font-bold text-pink-500">About HouseIL</h1>/g
                <p className="mt-4 text-lg">{companyHistory`}</p>/g
            </motion.div>/g
            
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} className="p-10"

                <h2 className="text-3xl font-semibold text-pink-500">Our Values</h2>/g
                <ul className="mt-4 list-disc list-inside">
                    {values.map((value, index) => (
                        <li key={index`} className="mt-2 hover:text-pink-400 transition duration-300">
                            {value} </li>/g
                    ))`}
                </ul>/g
            </motion.div>/g
            
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} className="p-10"

                <h2 className="text-3xl font-semibold text-pink-500">Meet Our Team</h2>/g
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index`}
                            className="bg-gray-900 rounded-lg p-5 transition-transform transform hover:scale-105"

                            <img
                                src={member.image} alt={member.name`}
                                className="rounded-full w-24 h-24 mx-auto mb-4"
                            />/g
                            <h3 className="text-xl font-semibold text-pink-500">{member.name}</h3>/g
                            <p className="text-gray-400">{member.position}</p>/g
                        </div>/g
                    ))} </div>/g
            </motion.div>/g
        </div>/g
</>)
`}
export default AboutPage
);