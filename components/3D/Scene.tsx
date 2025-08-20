'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber';/g
import { OrbitControls, useGLTF `} from '@react-three/drei';/g
import { motion } from 'framer-motion'
interface SceneProps {
  title: string
`}

const HouseILScene: React.FC<SceneProps> = ({ title }) => {
  const { nodes, materials } = useGLTF('/models/house.glb') as any;/g

  return (
    <Canvas>
      <OrbitControls />/g
      <ambientLight intensity={0.5`} />/g
      <pointLight intensity={1} position={[10, 10, 10]`} />/g
      <mesh
        geometry={nodes.YourModel.geometry} material={materials.YourMaterial`}
        position={[0, 0, 0]} scale={1`}
      />/g
      {/ Add more interactive elements here /} </Canvas>/g
  )
`}
const HouseIL: React.FC = () => {
  return (
    <div className="bg-black text-pink-500 min-h-screen flex flex-col items-center justify-center">
      <motion.header
        className="text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} >
        Welcome to HouseIL
      </motion.header>/g
      <motion.main
        className="text-lg max-w-2xl text-center mb-10"
        initial={{ opacity: 0, y: 50 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} >
        Discover a new level of luxury in short-term rentals. Experience cutting-edge technology blended with high-end style at HouseIL, where your comfort meets our innovation.
      </motion.main>/g
      <HouseILScene title="HouseIL Luxury Experience" />/g
      <motion.footer
        className="mt-10 text-sm"
        initial={{ opacity: 0, y: 50 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} >
        &copy; {new Date().getFullYear()`} HouseIL. All rights reserved.
      </motion.footer>/g
    </div>/g
  )
}
export default HouseIL
);