import { English } from "@/helpers"
import { useMemo } from "react"
import { Link } from "react-router-dom"


const LandingPage = () => {

    const LinksData = useMemo(() => {
        return [
            {
                title: English.E2,
                link: 'gsap-to'
            },
            {
                title: English.E3,
                link: 'gsap-from'
            },
            {
                title: English.E5,
                link: "gsap-fromTo"
            },
            {
                title: English.E6,
                link: "gsap-timeline"
            },
            {
                title: English.E9,
                link: 'gsap-stagger'
            },
            {
                title: English.E10,
                link: 'gsap-scroll-stagger'
            },
            {
                title: English.E12,
                link: 'gsap-text'
            },
            {
                title: English.E13,
                link: 'gsap-image-scroll-animation'
            },
            {
                title: English.E14,
                link: 'mouse-trail'
            },
            {
                title: English.E15,
                link: 'scroll-reveal'
            },
            {
                title: English.E16,
                link: 'pin-stack'
            },
            {
                title: English.E17,
                link: 'text_animation_2'
            },
            {
                title: English.E18,
                link: 'text_animations'
            },
            {
                title: English.E19,
                link: 'particles_animation'
            },
            {
                title: English.E20,
                link: 'card_animations'
            },
            {
                title: English.E21,
                link: 'scroller_animation'
            },
            {
                title: English.E22,
                link: '3d_animation'
            },
            {
                title: 'Transition Grid Page One',
                link: 'page-one'
            },
              {
                title: 'Transition Grid Page Two',
                link: 'page-two'
            }, 
             {
                title: 'Transition Grid Page Three',
                link: 'page-three'
            },
        ]
    }, [])

    return (
        <div className="flex-items-center gap-5 py-5 ">
            <h1>{English.E1}</h1>
            <ul className="flex flex-col gap-5 h-[calc(100vh-50px)] overflow-y-auto">
                {LinksData.map((item) => {
                    return (
                        <Link to={item.link} className="text-2xl underline-offset-1 underline text-indigo-400 hover:text-indigo-500 transition-all ease-linear duration-200 capitalize bg-slate-200 hover:bg-slate-300 rounded p-5">
                            <li>{item.title}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default LandingPage