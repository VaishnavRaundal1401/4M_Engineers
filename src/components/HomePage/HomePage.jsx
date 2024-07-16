import React from 'react'
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
  return (
    <motion.div className='homepage'>
      <div className="backgroundImage">
        <img src='/Images/homePage_Background.jpg' alt='About Background' />
      </div>
      <motion.div className="homeContainer" variants={Variants} initial="initial" animate="animate">
        <motion.h1 variants={Variants}>Providing Laser, Leather, and Steel Cutting Services</motion.h1>
        <motion.span variants={Variants}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur eum eligendi deserunt nesciunt qui doloremque quibusdam molestias, placeat quia obcaecati? Quibusdam incidunt repudiandae officiis, eius commodi praesentium, officia ut earum?</motion.span>
        <motion.button variants={Variants} className='contactbtn'>Contact Us</motion.button>
        <motion.button variants={Variants} className='servicesbtn'>Services</motion.button>
      </motion.div>
    </motion.div>
  )
}

export default HomePage
