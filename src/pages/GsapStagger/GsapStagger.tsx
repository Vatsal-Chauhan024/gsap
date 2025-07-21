import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GsapStagger = () => {

    useGSAP(() => {
        gsap.to('.divItem', {
            y: 300,
            yoyo: true,
            repeat: -1,
            duration: 1,
            stagger: {
                amount: 1.5,
                axis: 'y',
                grid: [3, 1],
                from: 'start'
            }
        })
    }, [])

    return (
        <div className="flex-items-center gap-3.5 !flex-row">
            {Array.from({ length: 8 }).map((_, index) => {
                return (
                    <div className={`h-20 w-20 rounded-md bg-indigo-400 divItem`} key={`div_${index.toString()}`} />
                )
            })}
        </div>
    )
}

export default GsapStagger