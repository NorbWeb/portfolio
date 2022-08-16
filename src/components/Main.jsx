import './Styles/Main.scss'
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Main = () => {
  return (
    <div className="box-main">
    <Navbar />
    <div className="page">
      <Outlet />
      <div className='floating-tag'>&lt;body&gt;</div>
      <div className='floating-tag'>&lt;/body&gt;</div>
      <div className='floating-tag'>&lt;div&gt;</div>
      <div className='floating-tag'>&lt;/div&gt;</div>
      <div className='floating-tag'>&lt;console.log()&gt;</div>
    </div>
  </div>
  )
}

export default Main
