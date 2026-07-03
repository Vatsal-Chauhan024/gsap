import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const ThreeDAnimation = () => {

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.imageBoard',
        pin: true,
        start: 'top top',
        end: '+=300%',
        scrub: 0.8
      },
      defaults: {
        ease: 'none'
      }
    }).set(document.body, {
      backgroundColor: 'red'
    }).to(document.body, {
      delay: .3,
      backgroundColor: '#f0f0f0'
    }, 'start').to(".upper-container h1", {
      scale: 5
    }, 'start').to('.upper-container h1', {
      opacity: 0
    }, 'start').to('#scaleableImg1', {
      scale: 10,
      rotate: 360,
      opacity: 0
    }).to('#scaleableImg2', {
      scale: 10,
      rotate: 360,
      opacity: 0
    }).to('#scaleableImg3', {
      scale: 10,
      rotate: 360,
      opacity: 0
    }).to('#scaleableImg4', {
      scale: 10,
      rotate: 360,
      opacity: 0
    }).to('.cardImage', {
      delay: 0.2,
      scale: 5
    }).to('.cardImage', {
      delay: 0.2,
      opacity: 1,
    })
  })

  return (
    <>
      <div className="upper-container fixed w-full h-screen justify-center flex flex-col font-light uppercase">
        <h1 className="font-semibold leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat, fugiat omnis ducimus perspiciatis odit eligendi eveniet exercitationem veritatis veniam qui obcaecati deleniti molestias quae! Aliquid quis officia obcaecati dolorem debitis laborum dicta perferendis repudiandae rerum soluta deleniti repellendus quasi beatae quia in alias eum doloribus, a minus voluptates quam tenetur aliquam reiciendis at. Repudiandae debitis fugiat autem nemo. Neque quisquam rerum a labore pariatur necessitatibus soluta, repellendus quae magni ex quibusdam provident accusantium sapiente eum excepturi perspiciatis reiciendis unde ab, dolor veritatis, cumque fuga nostrum illo aspernatur? Quisquam accusantium natus nihil animi culpa adipisci alias dolores consectetur optio perferendis. Accusamus maiores provident modi assumenda quibusdam, velit, illo quo consectetur ea esse magnam sint est delectus facere, perspiciatis cumque vero fuga? Possimus quae ipsum pariatur dolores asperiores temporibus iure tempora accusamus minima dolor, excepturi autem optio blanditiis veritatis totam omnis cumque magnam nostrum adipisci sapiente aspernatur distinctio quia alias reiciendis? Cumque facilis animi provident laboriosam odit, modi ipsa quam distinctio quos in sint dolor minus tempore nobis aliquam eos sunt reprehenderit. Tempora et id beatae aliquam nobis vero, dolorem rem, laborum voluptates est, similique eum quod temporibus? Similique atque, eveniet voluptate, neque et inventore vero velit obcaecati deserunt facilis autem sit nostrum quidem assumenda eligendi! Voluptas consequuntur, porro rerum veniam omnis maxime corrupti tempore atque adipisci tempora iure possimus dolores. Odit dolore, in tenetur rem itaque ratione reprehenderit doloribus sint qui debitis saepe molestias distinctio nobis cum velit necessitatibus iusto asperiores sapiente ea incidunt illum laboriosam nostrum laudantium corporis! Itaque inventore velit nostrum earum ratione illum accusantium atque unde consequuntur aliquam assumenda minima corporis quisquam quos explicabo illo autem, nulla quasi? Sint iusto ducimus cumque, soluta quos maiores sit voluptatem impedit nihil officia nulla sunt! Aperiam sunt unde ipsa temporibus magnam quasi possimus voluptates, voluptatibus error delectus? Excepturi, facilis maiores.</h1>
      </div>
      <div className="imageBoard relative flex items-center justify-center h-screen w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" id="scaleableImg1" className="scaleableImg" />
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="" id="scaleableImg2" className="scaleableImg" />
        <img src="https://images.unsplash.com/photo-1494526585095-c41746248156" alt="" id="scaleableImg3" className="scaleableImg" />
        <img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455" alt="" id="scaleableImg4" className="scaleableImg" />
        <div className="cardImage opacity-0  h-screen flex  items-center justify-center absolute w-full font-bold text-3xl">
          WE PLAY TO WIN
        </div>
      </div>
    </>
  )
}

export default ThreeDAnimation