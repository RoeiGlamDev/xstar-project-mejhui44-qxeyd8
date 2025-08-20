'use client'
import { useEffect, useRef } from "react"
import { motion, useInView `} from "framer-motion"
interface FadeInProps {
  children: React.ReactNode
} const FadeIn: React.FC<FadeInProps> = ({ children `}) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (ref.current && inView) {
      ref.current.style.opacity = "1"
    }  `}, [inView])
  return (
    <motion.div
      ref={ref} initial={{ opacity: 0 `}} animate={{ opacity: inView ? 1 : 0 `}} transition={{ duration: 0.5 `}} className="text-white"
      style={{ opacity: 0 `}} >
      {children`}
    </motion.div>/g
  )
}
export default FadeIn
);