import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage, GsapTo, GsapFrom, GsapFromTo, GsapTimeLine, GsapStagger, GsapScrollTrigger, GsapText } from "@pages"
import { Layout } from "@layouts"
import GsapScrollImage from "./pages/GsapScrollImage/GsapScrollImage"
import MouseTrail from "./pages/MouseTrail/MouseTrail"
import ScrollReveal from "./pages/ScrollReveal/ScrollReveal"
import PinStack from "./pages/PinStack/PinStack"
import TextAnimation2 from "./pages/TextAnimation2/TextAnimation2"
import TextAnimation3 from "./pages/TextAnimation/TextAnimation3"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/gsap-to" element={<GsapTo />} />
          <Route path="/gsap-from" element={<GsapFrom />} />,
          <Route path="/gsap-fromTo" element={<GsapFromTo />} />
          <Route path="/gsap-timeline" element={<GsapTimeLine />} />
          <Route path="/gsap-stagger" element={<GsapStagger />} />
          <Route path="/gsap-scroll-stagger" element={<GsapScrollTrigger />} />
          <Route path="/gsap-text" element={<GsapText />} />
          <Route path="/gsap-image-scroll-animation" element={<GsapScrollImage />} />
          <Route path="/mouse-trail" element={<MouseTrail />} />
          <Route path="/scroll-reveal" element={<ScrollReveal />} />
          <Route path="/text_animation_2" element={<TextAnimation2 />} />
        </Route>
        <Route path="/pin-stack" element={<PinStack />} />
        <Route path="/text_animations" element={<TextAnimation3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App