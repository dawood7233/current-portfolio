import React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "Services", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((items) => (
        <motion.a
          href={`#${items}`}
          key={items}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {items}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
