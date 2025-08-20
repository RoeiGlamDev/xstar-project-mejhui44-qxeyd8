'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ContactFormProps {
  name: string
  email: string
  message: string
`}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Implement form submission logic here/g
  }
  return (
    <div className="min-h-screen bg-black text-pink-500 flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} >
        Contact HouseIL
      </motion.div>/g
      
      <motion.form
        className="mt-8 w-full max-w-lg"
        onSubmit={handleSubmit`}
        initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 `}} transition={{ duration: 0.5 `}} >
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>/g
          <input
            type="text"
            className="mt-1 block w-full p-3 border border-pink-500 bg-black text-white rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            required
          />/g
        </div>/g
        
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>/g
          <input
            type="email"
            className="mt-1 block w-full p-3 border border-pink-500 bg-black text-white rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            required
          />/g
        </div>/g
        
        <div className="mb-4">
          <label className="block text-sm font-medium">Message</label>/g
          <textarea
            className="mt-1 block w-full p-3 border border-pink-500 bg-black text-white rounded-lg focus:outline-none focus:ring focus:ring-pink-500"
            required

        </div>/g
        
        <motion.button
          type="submit"
          className="w-full p-3 bg-pink-500 text-black font-bold rounded-lg hover:bg-pink-400 transition duration-200"
          whileHover={{ scale: 1.05 `}} >
          Send Message
        </motion.div>/g
      </motion.div>/g

      <div className="mt-12 text-center">
        <motion.h2
          className="text-2xl font-semibold mb-2"
          initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} >
          Office Location
        </motion.div>/g

        <p className="mb-2">123 Technology Blvd, Suite 456</p>/g
        <p className="mb-2">Tech City, TX 12345</p>/g

        <motion.h3
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} >
          Business Hours
        </motion.div>/g
        <p>Monday - Friday: 9 AM - 5 PM</p>/g
        <p>Saturday: 10 AM - 4 PM</p>/g
        <p>Sunday: Closed</p>/g
      </div>/g
    </div>/g
  )
`}
export default ContactPage
);