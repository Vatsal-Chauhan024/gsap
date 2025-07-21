import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage, GsapTo, GsapFrom, GsapFromTo, GsapTimeLine, GsapStagger } from "@pages"
import { Layout } from "@layouts"

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App