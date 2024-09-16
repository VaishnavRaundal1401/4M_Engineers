import React, {useState} from 'react'
import './HomePage.scss'; 
import {motion} from 'framer-motion'
const HomePage = () => {
  const Variants = {
    initial:{
      x:-300,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.2
      }   
    }
  }
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div className='homepage'>
      <div 
        className={`backgroundImage ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(true)}>
        <img src='/Images/homepage.jpg' alt='About Background' />
      </div>
      <motion.div className="homeContainer" variants={Variants} initial="initial" animate="animate">
          <motion.h1 variants={Variants}>Part Development along with all Kinds of Laser Cutting, Punching, Bending, Grinding, CNC,VMC Serives </motion.h1>
          <motion.span variants={Variants}>At 4M Engineers, we excel in creating custom mechanical components   and offer a comprehensive range of services including laser cutting for precise, clean edges, punching for accurate hole and shape creation, bending to meet exact specifications, and grinding for smooth finishes and precise dimensions. Our CNC and VMC machining capabilities ensure complex parts are produced with exceptional precision and versatility. We are dedicated to delivering high-quality results and innovative solutions for every project.</motion.span>
        <div className="homebuttons">
          <motion.button variants={Variants} className='contactbtn'>Contact Us</motion.button>
          <motion.button variants={Variants} className='servicesbtn'>Services</motion.button>  
        </div> 
      </motion.div>
    </motion.div>
  )
}

export default HomePage
