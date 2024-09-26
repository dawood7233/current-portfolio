import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Sidebar.scss";
import Togglebutton from "./ToggleButton/Togglebutton";
import Links from "./Links/Links";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <motion.div className="sidebar" ref={sidebarRef}>
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
