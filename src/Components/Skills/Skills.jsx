import React from "react";
import "./Skills.scss";
import {motion} from "framer-motion"

const Skills = () => {
  
  const variants = {
    initial: {
      x: -300, 
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  return (
    <motion.section className="skills" variants={variants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}>
      <h1>SKILLS</h1>
      <motion.div className="skills-grid" variants={variants} initial= "initial" whileInView="animate">
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
      </motion.div>
    </motion.section>
  );
};

export default Skills;
