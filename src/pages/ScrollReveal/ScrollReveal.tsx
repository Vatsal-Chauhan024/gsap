
import { useGSAP } from "@gsap/react"
import HeadPhone from "../../assets/headphone.png"
import HeadPhone2 from "../../assets/headphone2.png"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
const ScrollReveal = () => {

    useGSAP(() => {
        gsap.fromTo('.dark', {
            clipPath: 'inset(0% 100% 0% 0%)'
        }, {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: {
                trigger: '.dark',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                scroller: '.scroll_container'
            }
        })
    })

    return (
        <div className="relative">
            <div className="h-[200vh]"></div>
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center gap-16 bg-[#f2f2f2]">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-6xl font-bold text-slate-900">Made for <br />
                            Good Sound Quality
                        </h1>
                        <div className="w-4 h-56 bg-slate-900"></div>
                        <h1 className="text-6xl self-end font-bold text-slate-900">Made for <br />
                            Sound Gen Z
                        </h1>
                    </div>
                    <div>
                        <img src={HeadPhone} alt="headphone-img" />
                    </div>
                </div>

                <div className="dark absolute inset-0 flex items-center justify-center gap-16 bg-slate-900">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-6xl font-bold text-[#f2f2f2]">Made for <br />
                            Good Sound Quality
                        </h1>
                        <div className="w-4 h-56 bg-[#f2f2f2]"></div>
                        <h1 className="text-6xl self-end font-bold text-[#f2f2f2]">Made for <br />
                            Sound Gen Z
                        </h1>
                    </div>
                    <div>
                        <img src={HeadPhone2} alt="headphone-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollReveal