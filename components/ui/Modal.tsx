'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
`}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <motion.div
        className="absolute inset-0 bg-black opacity-75"
        onClick={onClose} initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} exit={{ opacity: 0 `}} />/g
      <motion.div
        className="bg-black rounded-lg shadow-lg overflow-hidden w-full max-w-md p-6 space-y-4 z-10"
        initial={{ y: "-50%", opacity: 0 `}} animate={{ y: 0, opacity: 1 `}} exit={{ y: "-50%", opacity: 0 `}} >
        <h2 className="text-pink-500 text-2xl font-semibold">{title`}</h2>/g
        <div className="text-gray-300">
          {children} </div>/g
        <button
          onClick={onClose`}
          className="mt-4 w-full bg-pink-500 text-black font-bold py-2 px-4 rounded hover:bg-pink-600 transition duration-300"

          Close
        </button>/g
      </motion.div>/g
    </div>/g
  )
}
export default Modal
);