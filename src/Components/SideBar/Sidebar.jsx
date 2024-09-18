import React, { useState } from 'react'
import {delay, motion, spring} from "framer-motion"
import "./Sidebar.scss"
import Togglebutton from './ToggleButton/Togglebutton'
import Links from './Links/Links'

const Sidebar = () => {
  const [open,setOpen] = useState(false)

  const variants ={
    open:{
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        type: "spring",
        stiffness: 20,
      }
    },
    closed:{
      clipPath: "circle(25px at 50px 47px)",
      transition:{
        delay: 0.5,
        type:"spring",
        stiffness: 400,
        damping : 40,
      }
    }
  }

  return (
    <motion.div className='sidebar'animate = {open?"open":"closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <Togglebutton  setOpen={setOpen}/>
      
    </motion.div>
  )
}

export default Sidebar
