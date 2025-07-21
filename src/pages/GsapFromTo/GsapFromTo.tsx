import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapFromTo = () => {

    useGSAP(() => {
        gsap.fromTo('#blue-box', {
            x: 0,
            rotation: 360,
            borderRadius: '0%',
        }, {
            x: 200,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'power1.inOut'
        })
    }, [])

    return (
        <div className="flex-items-center">
            <div className="bg-indigo-500 h-20 w-20 rounded" id="blue-box" />
        </div>
    )
}

export default GsapFromTo