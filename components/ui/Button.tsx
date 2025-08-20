'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
`}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, disabled }) => {
  const baseStyles = 'py-2 px-4 rounded transition-all duration-300 focus:outline-none focus:ring'
  const primaryStyles = 'bg-pink-600 text-black hover:bg-pink-500 focus:ring-pink-500'
  const secondaryStyles = 'bg-black text-pink-600 hover:bg-gray-800 focus:ring-gray-600'
  const styles = variant === 'primary' ? primaryStyles : secondaryStyles
  return (
    <motion.button
      className={`${baseStyles} ${styles``}} onClick={onClick`}
      disabled={disabled} initial={{ scale: 0.95 `}} animate={{ scale: 1 `}} whileHover={{ scale: 1.05 `}} whileTap={{ scale: 0.95 `}} aria-label={Button ${children`}} >
      {children`}
    </motion.div>/g
  )
}

export default Button
);