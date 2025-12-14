import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const svgVariants = {
  initial : {rotate : -180},
  visible : {
    rotate : 0, 
    transition : { duration : 1}
  } 
}

const pathVariants = {
  initial : {
    opacity : 0,
    pathLength : 0 // 실제 svg path 길이. 즉 0 이면 안보인다는말. 
  },
  visible : {
    opacity : 1,
    pathLength : 1,
    transition : { 
      duration : 1.5,
      ease : 'easeInOut' 
    }
  }
}

// dragConstrains 의 값은 'svg 를 확 당기고 놓았을 때 다시 원래 자리로 돌아오는 최대 범위를 지정하는 것임.
const Header = () => {
  return (
    <header>
      <motion.div className="logo"
        drag  
        dragConstraints = {{ left: 0, right: 50, top: 0, bottom: 50 }}
        dragElastic = {0.2}
        //whileDrag 적용을 위해선 우선 '기준점'을 정해야함. 기준 = animate 속성
        // 뭐야 근데 whileDrag 적용이 안되는데? ㅡㅡ 
        animate = {{ scale: 1, rotate: 40}}
        whileDrag={{ scale: 1.2, rotate: 10}}
      >
        <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          variants={svgVariants}
          initial="initial"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
      </motion.div>
      <Link to="/">
        <motion.div className="title"
          initial={{ y: -250}}
          animate={{ y: -10 }}
          trainsition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
          <h1>Pizza Joint</h1>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header;