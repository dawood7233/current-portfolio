import React from 'react'
import "./Services.scss"
import {motion} from "framer-motion"

const variants ={
    initial:{
        x: -800,
        y:100,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial = "initial" whileInView= "animate">
        <motion.div className="textContainer">
            <p>
            Bringing your vision to life with innovative solutions
            <br /> that drive progress and success.
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <h1><b>Tailored </b>Development</h1>
            </div>
            <div className="title">
                <h1>for Your <b>Project</b></h1>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <motion.div className="box"whileHover={{background: "lightgrey", color: "black"}}>
                <h2>Full-Stack Web Development </h2>
                <p>I build dynamic web applications using the MERN stack (MongoDB, Express, React, Node.js), offering end-to-end solutions from intuitive front-ends to scalable back-ends.</p>
                <button><a href="https://www.fiverr.com/dawood098765" target='_blank'>Get Services</a></button>
            </motion.div>
            <motion.div className="box"whileHover={{background: "lightgrey", color: "black"}}>
                <h2>Graphic Designing</h2>
                <p>I provide professional graphic design services, including branding, UI/UX design, and marketing materials. My experience with tools like Adobe Photoshop, Illustrator, and Canva ensures visually appealing designs that align with your brand identity.</p>
                <button><a href="https://www.fiverr.com/dawood098765" target='_blank'>Get Services</a></button>
            </motion.div> 
            <motion.div className="box"whileHover={{background: "lightgrey", color: "black"}}>
                <h2>Front-End Development</h2>
                <p>I create responsive, interactive UIs with React.js, using CSS frameworks like SASS and Tailwind CSS for visually stunning and user-friendly designs.</p>
                <button><a href="https://www.fiverr.com/dawood098765" target='_blank'>Get Services</a></button>
            </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
