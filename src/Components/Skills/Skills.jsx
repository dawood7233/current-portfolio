import React from "react";
import "./Skills.scss";
import {motion} from "framer-motion"

const Skills = () => {
  
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
  return (
    <motion.section className="skills" variants={variants} initial="initial" whileInView="animate">
      <h1>SKILLS</h1>
      <div className="skills-grid">
        <div className="row">
          <span>✓ HTML</span>
          <span>✓ CSS</span>
          <span>✓ JavaScript</span>
          <span>✓ Git</span>
        </div>
        <div className="separator"></div>
        <div className="row">
          <span>✓ Mongo DB</span>
          <span>✓ Express JS</span>
          <span>✓ React JS</span>
          <span>✓ Node JS</span>
        </div>
        <div className="separator"></div>
        <div className="row">
          <span>✓ BootStrap</span>
          <span>✓ SaaS CSS</span>
          <span>✓ Tailwind CSS</span>
        </div>
        <div className="separator"></div>
        <div className="row">
          <span>✓ Canva</span>
          <span>✓ PhotoShop</span>
          <span>✓ Figma</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
