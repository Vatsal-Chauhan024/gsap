import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapTo = () => {

  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 150,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: 'elastic'
    })
  }, [])

  return (
    <div className="flex-items-center">
      <div className="bg-indigo-500 h-20 w-20 rounded" id="blue-box" />
    </div>
  )
}

export default GsapTo