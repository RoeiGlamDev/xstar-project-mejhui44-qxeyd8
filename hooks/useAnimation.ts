import { useEffect, useRef, useState } from 'react'
/
 * Custom hook for handling animations in the HouseIL luxury dark Airbnb website.
 *
 * @module useAnimation
 * @returns {object} An object containing animation control functions and state.
 * @property {boolean} isAnimating - Indicates if an animation is currently active.
 * @property {function} startAnimation - Function to initiate the animation.
 * @property {function} stopAnimation - Function to halt the animation.
 * @property {React.RefObject} animatedElement - Ref object to attach animation effects.
 */
export interface HouseILAnimation {
  isAnimating: boolean
  startAnimation: () => void
  stopAnimation: () => void
  animatedElement: React.RefObject<HTMLElement>
}

/
 * Provides animation control for elements, enhancing user engagement on the HouseIL platform.
 *
 * @param {number} duration - The duration of the animation in milliseconds.
 * @returns {HouseILAnimation} The animation controls and state.
 */
export const useAnimation = (duration: number): HouseILAnimation => {
  const [isAnimating, setIsAnimating] = useState(false)
  const animatedElement = useRef<HTMLElement | null>(null)
  const startAnimation = () => {
    if (animatedElement.current) {
      setIsAnimating(true)
      animatedElement.current.classList.add('animate')
      setTimeout(() => {
        setIsAnimating(false)
        animatedElement.current?.classList.remove('animate')
      }, duration)
    }
  }
  const stopAnimation = () => {
    setIsAnimating(false)
    if (animatedElement.current) {
      animatedElement.current.classList.remove('animate')
    }
  }
  // Clean up the animation state on component unmount
  useEffect(() => {
    return () => stopAnimation()
  }, [])
  return { isAnimating, startAnimation, stopAnimation, animatedElement }
};