import React, {useRef} from 'react'
import './Services.scss'
import {motion, useInView} from 'framer-motion'
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
          <motion.span variants={Variants}>Our company specializes in providing high-quality laser, leather, and steel cutting services. With state-of-the-art machinery and a team of skilled professionals, we deliver precise and efficient cutting solutions for a wide range of materials. Whether you need intricate designs on leather products, precise metal components, or custom laser-cut patterns, we have the expertise and technology to meet your requirements.</motion.span>
        </motion.div>
        <motion.div ref={ref} className="servicesCards" variants={cardVariants} initial="initial" animate={isInView && "animate"}>

          <motion.div className="cards" variants={cardVariants}>
            <motion.img src="/Images/gray.jpg" alt="" />
            <motion.h3>Laser Cutting Services</motion.h3>
            <motion.span>We offer laser cutting services for various materials, including metal, wood, acrylic, and more. Our advanced laser technology ensures accurate and clean cuts, allowing for intricate designs and precise shapes.</motion.span>
          </motion.div>

          <motion.div className="cards"variants={cardVariants}>
            <motion.img src="/Images/gray.jpg" alt="" />
            <motion.h3>Leather Cutting Services</motion.h3>
            <motion.span>Our leather cutting services provide precise and clean cuts for leather products, such as bags, shoes, and accessories. We can create intricate patterns and designs to enhance the visual appeal of your leather goods.</motion.span>
          </motion.div>

          <motion.div className="cards"variants={cardVariants}>
            <motion.img src="/Images/gray.jpg" alt="" />
            <motion.h3>Steel Cutting Services</motion.h3>
            <motion.span>With our steel cutting services, we can accurately cut steel sheets and components for various applications. Our cutting-edge machinery ensures precise and clean cuts, meeting the highest quality standards.</motion.span>
          </motion.div>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
