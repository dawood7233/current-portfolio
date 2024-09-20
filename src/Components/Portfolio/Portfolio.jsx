import React,{useRef} from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";


const items = [
  {
    id: 1,
    title: "Personal Portfolio",
    img: "https://www.pexels.com/photo/white-butterfly-perching-on-a-yellow-blooming-flower-14261218/",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    title: "e-commerce",
    img: "https://www.pexels.com/photo/white-butterfly-perching-on-a-yellow-blooming-flower-14261218/",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    title: "Bank Site",
    img: "https://www.pexels.com/photo/white-butterfly-perching-on-a-yellow-blooming-flower-14261218/",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 4,
    title: "Guess Number",
    img: "https://www.pexels.com/photo/white-butterfly-perching-on-a-yellow-blooming-flower-14261218/",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];
const Single = ({ item }) => {

    const ref = useRef()
  return <section ref={ref}>
    <div className="container">
        <img src={item.img} alt="" />
        <div className="textContainer"></div>
    </div>
  </section>;
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX= useSpring(scrollYProgress, {
    stiffness:100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX:scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
