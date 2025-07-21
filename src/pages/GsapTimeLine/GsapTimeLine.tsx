import { CommonButton } from "@/components"
import { English } from "@/helpers"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapTimeLine = () => {

    const timeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 })
    useGSAP(() => {
        timeline.to('#blue-box', {
            x: 350,
            duration: 3,
            ease: 'power1.inOut',
            borderRadius: '100%'
        })
        timeline.to('#blue-box', {
            y: -350,
            duration: 3,
            ease: 'bounce.in',
            borderRadius: '0%'
        })
        timeline.to('#blue-box', {
            y: 0,
            duration: 3,
            ease: 'power1.inOut',
            borderRadius: '100%'
        })
        timeline.to('#blue-box', {
            x: 0,
            duration: 3,
            ease: 'power1.inOut',
            borderRadius: '0'
        })
    }, [])

    return (
        <div className="flex-items-center">
            <div className="bg-indigo-500 h-20 w-20 rounded" id="blue-box" />
            <CommonButton text={English.E7} onClick={() => {
                if (!timeline.paused()) {
                    timeline.pause()
                    return
                }
                timeline.play()
            }} />
            <CommonButton text={English.E8} onClick={() => {
                timeline.restart(true)
            }} />
        </div>
    )
}

export default GsapTimeLine