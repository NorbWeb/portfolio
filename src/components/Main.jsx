import './Styles/Main.scss'
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Main = () => {
  return (
    <div className="box-main">
    <Navbar />
    <div className="page">
      <Outlet />
    </div>
  </div>
  )
}

export default Main
