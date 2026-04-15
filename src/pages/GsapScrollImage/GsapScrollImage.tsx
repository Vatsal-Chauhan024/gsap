import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useMemo } from "react"

gsap.registerPlugin(ScrollTrigger)
const GsapScrollImage = () => {

    const imgArray = useMemo(() => {
        return [{ imgLink: 'https://images.pexels.com/photos/31621101/pexels-photo-31621101.jpeg', text: 'Flower 1' }, { imgLink: 'https://images.pexels.com/photos/29234302/pexels-photo-29234302.jpeg', text: 'Flower 2' },
        { imgLink: 'https://images.pexels.com/photos/34742489/pexels-photo-34742489.jpeg', text: 'Flower 3' }
        ]
    }, [])

    useGSAP(() => {
        const elements: HTMLElement[] = gsap.utils.toArray('.slider .image')
        elements.forEach((element) => {
            gsap.fromTo(element, {
                clipPath: 'inset(0% 100% 0% 0%)'
            }, {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: 'top 98%',
                    end: 'top top',
                    scrub: true,
                    scroller: '.scroll_container'
                }
            })
        })
    }, [])


    return (
        <div className="bg-slate-950 py-[700px]">
            {imgArray.map((imgElement) => {
                const { imgLink, text } = imgElement
                return (
                    <div key={imgLink} className="slider flex border border-white/25">
                        <div className="w-[40%] text-4xl self-end p-5 text-white">
                            <h1>{text}</h1>
                        </div>
                        <div className="w-[60%] h-96">
                            <div className="image w-full h-full bg-cover bg-left" style={{ backgroundImage: `url(${imgLink})` }} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GsapScrollImage