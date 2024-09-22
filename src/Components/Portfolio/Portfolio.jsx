import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const itemsP = [
  {
    id: 1,
    title: "Personal Portfolio",
    img: "./personalPortfolio.png",
    description:
      "Developed a dynamic personal portfolio using React.js for a smooth, responsive user experience and SCSS for modern, modular styling. The portfolio showcases my skills, projects, and professional journey, integrated with animated transitions and a clean, minimalist design to reflect a professional yet creative approach.",
  },
  {
    id: 2,
    title: "E-commerce",
    img: "./e-commerce.png",
    description:
      "MegaMart is an e-commerce website developed using simple HTML, CSS, and JavaScript. The project focuses on providing a clean and intuitive user interface for online shopping. It includes features such as product listings, shopping cart functionality, and responsive design, ensuring a seamless experience across devices.",
  },
  {
    id: 3,
    title: "Vital Fit",
    img: "./VitalFit.png",
    description:
      "VitalFit is a fitness-focused website designed to help users track their fitness journey. Built using simple HTML, CSS, and JavaScript, the site features a user-friendly interface with workout tracking, health tips, and progress monitoring tools. The responsive design ensures accessibility across devices, making it easy for users to stay on top of their fitness goals.",
  },
  {
    id: 4,
    title: "Guess Number",
    img: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {itemsP.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
