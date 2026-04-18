import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"


const TextAnimation2 = () => {

    const mainBgRef = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLHeadingElement | null>(null)
    const ballRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const timeLine = gsap.timeline({
            defaults: {
                ease: 'power2.out'
            }
        })
        const splitText = SplitText.create(textRef.current, {
            type: 'words'
        })
        splitText.words.forEach((word) => {
            timeLine.set(word, { opacity: 0, y: 10 })
        })

        timeLine.fromTo(mainBgRef.current, {
            width: 0
        }, {
            width: '100%',
            backgroundColor: '#070738',
            duration: 1
        })
        timeLine.fromTo(ballRef.current, {
            opacity: 0,
            y: -100
        }, {
            opacity: 1,
            y: 0,
            repeat: -1,
            yoyo: true,
            duration: 1.3
        })
        splitText.words.forEach((word) => {
            timeLine.to(word, {
                opacity: 1,
                stagger: 0.3,
                y: 0
            })
        })
    })

    

    return (
        <>
            <div className="w-full h-full flex items-center relative" ref={mainBgRef}>
                <div className="w-20 h-20 bg-green-200 absolute right-5 rounded-full " ref={ballRef} />
                <h1 className="text-9xl uppercase text-green-500 font-bold tracking-wider" ref={textRef}>
                    get ready <br />
                    for exculsive <br />
                    Awesome <br />
                    Animations
                </h1>
            </div>

            
        </>
    )
}

export default TextAnimation2