import React from 'react'
import "./NavBar.scss"
import Sidebar from '../SideBar/Sidebar'

const NavBar = () => {
  return (
    <div className='navbar'>
      {/* sidebar will be conditionally rendered based on screen size */}
      <div className="sidebar-container">
        <Sidebar />
      </div>
      
      {/* MenuBar */}
      <div className="wrapper">
        <img src="M.Dedicated.png" alt="Logo" />
        <div className="list">
          <ul>
            <li><a href="#HomePage" key="HomePage">Home</a></li>
            <li><a href="#Contact" key="Contact">Contact</a></li>
            <li><a href="#Services" key="Services">Services</a></li>
            <li><a href="#Portfolio" key="Portfolio">Portfolio</a></li>
          </ul>
        </div>
        <div className="social">
          <i className="fa fa-linkedin-square" id="linkedin" onClick={() => window.open("https://www.linkedin.com/in/m-dawood00/", "_blank")}></i>
          <i className="fa fa-instagram" id="insta" onClick={() => window.open("https://instagram.com/dawoodyunas", "_blank")}></i>
          <i className="fa fa-github" id="github" onClick={() => window.open("https://github.com/dawood7233", "_blank")}></i>
        </div>
      </div>
    </div>
  )
}

export default NavBar
