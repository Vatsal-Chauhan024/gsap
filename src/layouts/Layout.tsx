import { CommonButton } from "@/components"
import { English } from "@/helpers"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Layout = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-8">
      <CommonButton text={English.E4} onClick={() => {
        navigate(-1)
      }} />
      <Outlet />
    </div>
  )
}

export default Layout