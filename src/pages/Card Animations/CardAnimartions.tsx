import { useMemo } from "react"
import CardImageRendering from "./CardImageRendering"
import donut2 from "../../assets/donut2.jpg"
import donut3 from "../../assets/donut3.png"
import main_cut1 from "../../assets/main_cut1.jpg"
import main_cut2 from "../../assets/main_cut2.jpg"
import main_cut3 from "../../assets/main_cut3.jpg"
import square from "../../assets/square.svg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const CardAnimartions = () => {

  const imgsArray = useMemo(() => {
    return [
      [square],
      [donut2, donut3],
      [main_cut1, main_cut2, main_cut3]
    ]
  }, [])

  useGSAP(() => {
    const imgCards: HTMLElement[] = gsap.utils.toArray('.img_card')
    imgCards.forEach((item) => {
      gsap.fromTo(item, {
        clipPath: 'inset(0% 100% 0% 0%)'
      }, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 50%',
          markers: true,
          scrub: 1
        },
        clipPath: 'inset(0% 0% 0% 0%)'
      })
    })
  })

  return (
    <div className="space-y-5">
      <ul>
        {['First Slide', 'Second Slide', 'Third Slide'].map((item, index) => {
          return (
            <CardImageRendering imgsArray={imgsArray?.[index]} key={item} />
          )
        })}
      </ul>
    </div>
  )
}

export default CardAnimartions