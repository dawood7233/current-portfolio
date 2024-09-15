import React from 'react'
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className='navbar'>
        {/* MenuBar */}
        <div className="wrapper">
            <span>M Dawood</span>
            <div className="social">
            <i class="fa fa-linkedin-square" id='linkedin'></i>
            <i class="fa fa-instagram" id='insta'></i>
            <i class="fa fa-github" id='github'></i>
            </div>
        </div>
    </div>
  )
}

export default NavBar
