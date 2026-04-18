import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"


const GsapText = () => {

    useGSAP(() => {
        const splitText = SplitText.create('#text', {
            type: 'chars'
        })
        console.log(splitText)
        splitText.chars.forEach((character, index) => {
            gsap.fromTo(character, {
                x: index === 0 ? '-100vw' : index === splitText.chars.length - 1 ? '100vw' : 0,
                y: index === 1 ? '-100vh' : index === 2 ? '100vh' : 0
            }, {
                duration: 2,
                rotate: 360,
                x: 0,
                y: 0,
                ease: 'power2.inOut'
            })
        })
    })

    return (
        <div className="flex-items-center  overflow-hidden">
            <h1 id="text" className="text-3xl tracking-wider uppercase">HELL</h1>
        </div>
    )
}

export default GsapText