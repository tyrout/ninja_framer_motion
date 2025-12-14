import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const buttonVariants = {
  visible : {
    // keyframe
    x : [0, -20, 20, 0],
    transition: { duration: 0.8 }
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    textShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { yoyo: Infinity, duration: 0.3 }
  } 
}


const Home = () => {
  return (
    <motion.div className="home container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ delay: 0, duration: 2}}
    >
      <motion.h2 
        animate={{}}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;