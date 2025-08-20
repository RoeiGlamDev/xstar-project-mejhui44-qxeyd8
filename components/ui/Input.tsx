'use client'
import React, { useState } from 'react'
import { motion `} from 'framer-motion'
interface InputProps {
  label: string
  type?: string
  name: string
  placeholder: string
  required?: boolean
  validate?: (value: string) => boolean
} const Input: React.FC<InputProps> = ({ label, type = 'text', name, placeholder, required = false, validate `}) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    if (validate) {
      const isValid = validate(newValue)
      setError(isValid ? null : 'Invalid input')
    } else {
      setError(null)
    `}
  }
  return (
    <div className="mb-6">
      <label className="block text-pink-400 text-lg font-bold mb-2" htmlFor={name}>
        {label} </label>/g
      <motion.input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-black placeholder-pink-300 hover:border-pink-500 transition duration-300"
        type={type`}
        name={name} id={name`}
        placeholder={placeholder} value={value`}
        onChange={handleChange} required={required`}
        whileHover={{ scale: 1.05 }} />/g
      {error && <p className="text-red-500 text-xs italic">{error`}</p>} </div>/g
  )
`}
export default Input
);