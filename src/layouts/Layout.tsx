import { CommonButton } from "@/components"
import { English } from "@/helpers"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Layout = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-8 h-screen overflow-y-auto scroll_container" >
      <CommonButton  text={English.E4} onClick={() => {
        navigate(-1)
      }} className="sticky top-0 z-50 bg-slate-400 text-white" />
      <Outlet />
    </div>
  )
}

export default Layout