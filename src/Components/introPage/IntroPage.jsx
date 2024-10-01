import React from "react";
import "./introPage.scss";
import Typical from "react-typical";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat : Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const IntroPage = () => {
  return (
    <div className="intro">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>M DAWOOD</motion.h2>
          <div className="profileDetails">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "BS(IT) Graduate 🔴",
                    1000,
                    "Full Stack Dev 💻",
                    1000,
                    "MERN Stack Dev 😎",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                    "React Dev 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}> <a href="./DawoodResume.pdf" download="Resume" >Download Resume</a></motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate= "scrollButton" src="scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div variants={sliderVariants} initial= "initial" animate="animate"className="slidingText">Web Developer Designer</motion.div>
      <div className="img-container">
        <img src="MyPhoto.png" alt="" />
      </div>
    </div>
  );
};

export default IntroPage;
