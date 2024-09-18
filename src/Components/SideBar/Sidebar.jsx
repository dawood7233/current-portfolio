import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Sidebar.scss";
import Togglebutton from "./ToggleButton/Togglebutton";
import Links from "./Links/Links";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const sidebarVariants = {
    open: {
      clipPath: "circle(2000px at 40px 40px)", 
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 45px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar">
      <motion.div
        className="bg"
        variants={sidebarVariants}
        initial={false}
        animate={open ? "open" : "closed"}
      >
        <Links />
      </motion.div>
      <Togglebutton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;
