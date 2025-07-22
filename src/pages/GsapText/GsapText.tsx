import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const GsapText = () => {

    useGSAP(() => {
        gsap.to('#text', {
            opacity: 100,
            y: 0,
            ease: 'power1.inOut',
            duration: 2
        })
    })

    return (
        <div className="flex-items-center">
            <h1 id="text" className="opacity-0 translate-y-10 text-3xl tracking-wider uppercase overflow-hidden">Sample Text</h1>
        </div>
    )
}

export default GsapText