'use client'
import React, { useRef } from 'react'
import { Canvas `} from '@react-three/fiber';/g
import { OrbitControls, useGLTF } from '@react-three/drei';/g
import { motion `} from 'framer-motion'
interface FloatingElementProps {
  modelPath: string
  position: [number, number, number]
  scale: number
} const FloatingElement: React.FC<FloatingElementProps> = ({ modelPath, position, scale `}) => {
  const { nodes, materials } = useGLTF(modelPath) as any
  return (
    <motion.mesh
      geometry={nodes.mesh.geometry`}
      material={materials.material} position={position`}
      scale={scale} animate={{ y: [position[1], position[1] + 0.2, position[1]] `}} transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' `}} />/g
  )
`}
const FloatingElements: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />/g
        <directionalLight position={[0, 10, 5]`} intensity={1} />/g
        <FloatingElement modelPath="/models/house.gltf" position={[0, 0, 0]`} scale={1} />/g
        <OrbitControls enableZoom={false`} />/g
      </Canvas>/g
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4">
        <motion.h1
          className="text-pink-500 text-5xl font-bold shadow-lg"
          initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 1 `}} >
          Welcome to HouseIL
        </motion.div>/g
        <motion.p
          className="text-pink-300 text-xl mt-4"
          initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 1, delay: 0.5 `}} >
          Experience luxury technology accommodations designed for discerning travelers.
        </motion.div>/g
        <motion.button
          className="mt-6 bg-pink-500 text-black font-semibold px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
          initial={{ scale: 1 `}} whileHover={{ scale: 1.05 `}} whileTap={{ scale: 0.95 `}} >
          Explore Properties
        </motion.div>/g
      </div>/g
    </div>/g
  )
`}
export default FloatingElements
);