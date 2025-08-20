'use client'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
`}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants} transition={{ duration: 0.6 `}} className="bg-black text-pink-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"

      {children`}
    </motion.div>/g
  )
}
export default SlideUp
);