import React,{useRef} from "react";
import "./Parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion"

const Parallax = ({type}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["start start", "end start"],
    })

    const yBg = useTransform(scrollYProgress,[0,1],["0%","50%"])
    const stars = useTransform(scrollYProgress,[0,1],["0%","100%"])
    const moon = useTransform(scrollYProgress, [0,1],["0%","-100%"])
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #000000, #1c1c23)"
            : "linear-gradient(180deg, #000000, #dece99)"
      }}
    >
      <motion.h1 style={{y:yBg}}>{type === "services" ? "My Services" : "What I Served?"}</motion.h1>
      <motion.div className="desert"></motion.div>
      <motion.div style={{x:stars, backgroundImage:`url(${type === "services"?"stars.png":""})`}} className="stars"></motion.div>
      <motion.div style={{y:moon, backgroundImage: `url(${type=== "services"? "moon.png": "sun.png"})`}} className="moon"></motion.div>
    </div>
  );
};

export default Parallax;
