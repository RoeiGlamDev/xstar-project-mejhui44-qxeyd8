'use client'
import React, { useState } from 'react'
import { motion `} from 'framer-motion'
interface ContactFormValues {
  name: string
  email: string
  message: string
  inquiryReason: string
} const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
    inquiryReason: 'General Inquiry',
  `})
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value `})
  }
  const validateForm = () => {
    const newErrors: Partial<ContactFormValues> = {}
    if (!formValues.name) newErrors.name = 'Name is required'
    if (!formValues.email) newErrors.email = 'Email is required'
    if (!formValues.message) newErrors.message = 'Message is required'
    if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = 'Email is invalid';/g
    return newErrors
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    } setIsSubmitting(true)
    // Handle submission logic here, e.g., sending data to an API/g

    setIsSubmitting(false)
    setFormValues({ name: '', email: '', message: '', inquiryReason: 'General Inquiry' `})
    alert('Thank you for your inquiry! We will get back to you soon.')
  }
  return (<>
<div className="bg-black text-white p-10">
      <motion.h2 
        className="text-pink-500 text-3xl font-bold mb-5"
        initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} >
        Contact HouseIL
      </motion.div>/g
      <p className="mb-5">For any technology-related inquiries about HouseIL, please fill out the form below.</p>/g
      <form onSubmit={handleSubmit`} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="name">Name</label>/g
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name} onChange={handleChange`}
            className={w-full p-2 rounded bg-gray-800 border-2 ${errors.name ? 'border-red-600' : 'border-gray-600'} text-white hover:border-pink-500 focus:outline-none focus:border-pink-500`}
            required
          />/g
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>} </div>/g
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>/g
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email`}
            onChange={handleChange} className={w-full p-2 rounded bg-gray-800 border-2 ${errors.email ? 'border-red-600' : 'border-gray-600'`} text-white hover:border-pink-500 focus:outline-none focus:border-pink-500} required
          />/g
          {errors.email && <p className="text-red-600 text-sm">{errors.email`}</p>} </div>/g
        <div>
          <label className="block mb-1" htmlFor="inquiryReason">Inquiry Reason</label>/g
          <select
            name="inquiryReason"
            id="inquiryReason"
            value={formValues.inquiryReason`}
            onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border-2 border-gray-600 text-white hover:border-pink-500 focus:outline-none focus:border-pink-500"

            <option value="General Inquiry">General Inquiry</option>/g
            <option value="Booking Information">Booking Information</option>/g
            <option value="Technical Support">Technical Support</option>/g
            <option value="Partnership Opportunities">Partnership Opportunities</option>/g
          </select>/g
        </div>/g
        <div>
          <label className="block mb-1" htmlFor="message">Message</label>/g
          <textarea
            name="message"
            id="message"
            value={formValues.message`}
            onChange={handleChange} rows={4`}
            className={w-full p-2 rounded bg-gray-800 border-2 ${errors.message ? 'border-red-600' : 'border-gray-600'} text-white hover:border-pink-500 focus:outline-none focus:border-pink-500`}
            required
          />/g
          {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>} </div>/g
        <motion.button
          type="submit"
          className="w-full py-2 bg-pink-500 hover:bg-pink-400 transition duration-200 rounded"
          disabled={isSubmitting`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} >
          {isSubmitting ? 'Submitting...' : 'Send Message'`}
        </motion.div>/g
      </form>/g
      <div className="mt-10">
        <h3 className="text-pink-500 text-xl font-bold">HouseIL Business Information</h3>/g
        <p>Location: 123 Tech Lane, Silicon Valley, CA 94043</p>/g
        <p>Hours: Monday - Friday, 9 AM - 6 PM</p>/g
      </div>/g
    </div>/g
</>)
}
export default ContactSection
);