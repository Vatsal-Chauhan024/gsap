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
            }
        ]
    }, [])

    return (
        <div className="flex-items-center gap-5">
            <h1>{English.E1}</h1>
            <ul className="flex flex-col gap-5 ">
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