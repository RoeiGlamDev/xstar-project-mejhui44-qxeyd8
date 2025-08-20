import { useRef, useEffect } from 'react'
import * as THREE from 'three'
// Interface for the 3D object properties specific to HouseIL
interface HouseILObject {
    position: THREE.Vector3
    rotation: THREE.Euler
    scale: THREE.Vector3
}

// Custom hook for handling 3D interactions in HouseIL
const use3DInteraction = (objectProps: HouseILObject) => {
    const meshRef = useRef<THREE.Mesh>(null)
    useEffect(() => {
        const mesh = meshRef.current
        if (!mesh) return
        // Apply initial properties based on the provided object properties
        mesh.position.copy(objectProps.position)
        mesh.rotation.copy(objectProps.rotation)
        mesh.scale.copy(objectProps.scale)
        // Add event listeners for 3D interactions
        const handleMouseEnter = () => {
            mesh.scale.set(1.1, 1.1, 1.1); // Scale up on hover
        }
        const handleMouseLeave = () => {
            mesh.scale.set(1, 1, 1); // Scale back on leave
        }
        mesh.addEventListener('mouseenter', handleMouseEnter)
        mesh.addEventListener('mouseleave', handleMouseLeave)
        // Clean up event listeners on component unmount
        return () => {
            mesh.removeEventListener('mouseenter', handleMouseEnter)
            mesh.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [objectProps])
    return { meshRef }
}
// Export the custom hook for use in other components
export default use3DInteraction;