import React from 'react'
import "./NavBar.scss"
import Sidebar from '../SideBar/Sidebar'

const NavBar = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar/>
        {/* MenuBar */}
        <div className="wrapper">
          
            <img src="M.Dedited.png" alt="" />
            <div className="social">
            <i class="fa fa-linkedin-square" id='linkedin' onClick={()=>(window.open("https://www.linkedin.com/in/m-dawood00/", "_blank"))}></i>
            <i class="fa fa-instagram" id='insta' onClick={()=>(window.open("", "_blank"))}></i>
            <i class="fa fa-github" id='github' onClick={()=>(window.open("", "_blank"))}></i>
            </div>
        </div>
    </div>
  )
}

export default NavBar
