import React, {useRef} from 'react'
import './Services.scss'
import {motion, useInView} from 'framer-motion'
import { HiCube } from "react-icons/hi";
const Services = () => {

  const ref = useRef()
  const isInView = useInView(ref, {margin:"-300px"}) 
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
      }
    }
  }

  const cardVariants = {
    initial:{
      y:300,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.8,
        staggerChildren:0.2,
      }
    }
  }
  return (
    <motion.div className='services'>
      <motion.div ref={ref} className="servicesContainer">

        <motion.div className="servicesInfo" variants={Variants} initial="initial" animate={isInView && "animate"}>
          <motion.h1 variants={Variants}>Precision Cutting Services for Various Materials</motion.h1>
          <motion.span variants={Variants}>Our company specializes in providing high-quality steel cutting services. With state-of-the-art machinery and a team of skilled professionals, we deliver precise and efficient cutting solutions for a wide range of materials. Whether you need  precise metal components we have the expertise and technology to meet your requirements.</motion.span>
        </motion.div>

        <div className="welcomeSection">
            <div className="textSection">
                <h1>Welcome to our Steel Cutting Services</h1>
                <p>We offer a wide range of steel cutting services, including punching, grinding, and laser cutting. Our team of experts ensures precise and efficient results for all your cutting needs.</p>
            </div>
            <div className="imgSection">
              <img src='/Images/gray.png' alt='About Background' />
            </div>
        </div>

        <div className="Quality">
          <div className="qText">
            <h1>Superior Steel Cutting Services for Precision Results</h1>
            <p>Our steel cutting services provide exceptional precision and quality, ensuring your projects are completed with accuracy and efficiency. With state-of-the-art equipment and a team of skilled professionals, we deliver superior results that meet your exact specifications.</p>
            <div className="typesOfServices">
                <div className="serviceCards">
                  <span><HiCube /></span>
                  <h4>Punching</h4>
                  <p>High-speed punching machines for precise hole placement and fast production turnaround.</p>
                </div>
                <div className="serviceCards">
                  <span><HiCube /></span>
                  <h4>Grinding</h4>
                  <p>Advanced grinding techniques for smooth edges and precise surface finishes on steel components.</p>
                </div>
            </div>
          </div>
          <div className="qImg">
            <img src='/Images/gray.png' alt='About Background' />
          </div>
        </div>


        <div className="customerSatisfaction">
          <motion.div className="servicesInfo" variants={Variants} initial="initial" animate={isInView && "animate"}>
              <motion.h1 variants={Variants}>Precision and Customer Satisfaction</motion.h1>
              <motion.span variants={Variants}>Our services are designed to provide the highest level of quality, precision, and customer satisfaction. With state-of-the-art equipment and a team of skilled professionals, we ensure that every project is completed to perfection.</motion.span>
          </motion.div>
          <motion.div ref={ref} className="servicesCards" variants={cardVariants} initial="initial" animate={isInView && "animate"}>

            <motion.div className="cards" variants={cardVariants}>
              <motion.img src="/Images/gray.png" alt="" />
              <motion.h3>Punching and Grinding</motion.h3>
              <motion.span>We offer a wide range of punching and grinding services, utilizing advanced techniques to deliver precise results.</motion.span>
            </motion.div>

            <motion.div className="cards"variants={cardVariants}>
              <motion.img src="/Images/gray.png" alt="" />
              <motion.h3>Laser Cutting</motion.h3>
              <motion.span>Experience the power of laser cutting with our cutting-edge technology and expert craftsmanship.</motion.span>
            </motion.div>

            <motion.div className="cards"variants={cardVariants}>
              <motion.img src="/Images/gray.png" alt="" />
              <motion.h3>High-Quality Products</motion.h3>
              <motion.span>Our products are known for their exceptional quality and durability, meeting the highest industry standards.</motion.span>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Services
