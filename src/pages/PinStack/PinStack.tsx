import { useGSAP } from "@gsap/react"
import Earth from "../../assets/earth.svg"
import Fire from "../../assets/fire.svg"
import Square from "../../assets/square.svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
const PinStack = () => {

    const cardsArray = [
        {
            title: 'Card 1',
            id: 1,
            icon: Earth,
            description: 'Lorem ipsum there hello there....'
        },
        {
            title: 'Card 2',
            id: 2,
            icon: Fire,
            description: 'Lorem ipsum there hello there....'
        },
        {
            title: 'Card 3',
            id: 3,
            icon: Square,
            description: 'Lorem ipsum there hello there....'
        }
    ]

    useGSAP(() => {
        const timeLine = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: '.cards-wrapper',
                    start: 'top top',
                    end: 'bottom top',
                    pin: true,
                    scrub: 1,
                }
            }
        )

        timeLine.to('.card', {
            height: 130,
            stagger: 0.5
        })
        const cards: HTMLElement[] = gsap.utils.toArray('.card')
        cards.forEach((item) => {
            const title = item.querySelector('.card-title')
            const timeLine2 = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 1
                }
            })
            timeLine2.fromTo(title, { opacity: 0, scale: 0 }, {
                opacity: 1,
                scale: 2,
                rotate: 360,
                duration: 4,
                ease: 'power2.inOut'
            })
            timeLine2.to(title, { scale: 1, duration: 2, delay: 0.5, rotate: -360, ease: 'power2.inOut' })
        })

    })

    return (
        <div className="cards-wrapper min-h-screen overflow-hidden p-16 bg-slate-950 text-white">
            {cardsArray?.map((card) => {
                const { description, icon, title } = card
                return (
                    <div className="card  p-6 border-b border-white/25 overflow-hidden" key={title}>
                        <div className="flex gap-4 items-center h-32">
                            <h1 className="card-title">{title}</h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xl max-w-[450px] w-full opacity-70 text-white/90">{description}</p>
                            <div className="max-h-56 max-w-56 size-full">
                                <img src={icon} className="size-full object-cover" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PinStack