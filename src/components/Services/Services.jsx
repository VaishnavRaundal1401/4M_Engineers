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
        <div className="welcomeSection">
            <div className="textSection">
                <h1>Welcome to our Laser Cutting Services</h1>
                <ul>
                  <li>Our laser cutting services deliver precise and high-quality results for various metal applications.</li>
                  <li>2D Laser Cutting: We specialize in cutting stainless steel (SS), alloy steel (RS), and mild steel (MS) with high accuracy.</li>
                  <li>This process allows for intricate designs and clean edges in flat metal sheets.</li>
                  <li>3D Laser Cutting: Our 3D laser cutting capabilities enable the creation of complex, three-dimensional metal components.</li>
                  <li> This technique is ideal for producing detailed geometries and contours in SS, RS, and MS.</li>
                  <li>Utilizing advanced technology, we ensure superior precision and finish in every metal cutting project.</li>
                </ul>
            </div>
            <div className="imgSection">
              <img src='/Images/laser.jpg' alt='About Background' />
            </div>
        </div>

        <div className="Quality">
          <div className="qText">
            <h1>CNC and VMC Work</h1>
            <p>Our CNC and VMC machining services are designed to deliver unparalleled precision and versatility for metal components. Using cutting-edge technology, we expertly handle complex designs and tight tolerances in stainless steel (SS), alloy steel (RS), and mild steel (MS).</p>
            <br />
            <p> CNC machining ensures detailed and accurate results for intricate parts, while VMC machining provides flexibility for a wide range of geometries and advanced operations. Together, these services guarantee top-quality outcomes for every project.</p>
            <div className="typesOfServices">
                <div className="serviceCards">
                  <span><HiCube /></span>
                  <h4>CNC</h4>
                  <p>We utilize computer-controlled machines to create complex parts from stainless steel (SS), alloy steel (RS), and mild steel (MS). </p>
                  {/* Our CNC technology ensures high accuracy and repeatability for intricate designs and tight tolerances. */}
                </div>
                <div className="serviceCards">
                  <span><HiCube /></span>
                  <h4>VMC</h4>
                  <p>Our Vertical Machining Centers (VMC) offer versatile machining solutions for various metal components. With the ability to handle complex geometries and multi-axis operations, VMC machining is ideal for detailed and precise metalwork.</p>
                </div>
            </div>
          </div>
          <div className="qImg">
            <img src='/Images/cnc.jpg' alt='About Background' />
          </div>
        </div>


        <motion.div ref={ref} className="customerSatisfaction">

          <motion.div className="servicesInfo" variants={Variants} initial="initial" animate={isInView && "animate"}>
              <motion.h1 variants={Variants}>Precision and Customer Satisfaction</motion.h1>
              <motion.span variants={Variants}>Our services are designed to provide the highest level of quality, precision, and customer satisfaction. With state-of-the-art equipment and a team of skilled professionals, we ensure that every project is completed to perfection.</motion.span>
          </motion.div>
          <motion.div className="servicesCards" variants={cardVariants} initial="initial" animate={isInView && "animate"}>

            <motion.div className="cards" variants={cardVariants}>
              <motion.img src="/Images/bending.jpg" alt="" />
              <motion.h3>Bending</motion.h3>
              <motion.span>We offer a wide range of punching and grinding services, utilizing advance techniques to deliver precise results.</motion.span>
            </motion.div>

            <motion.div className="cards"variants={cardVariants}>
              <motion.img src="/Images/gray.png" alt="" />
              <motion.h3>Punching</motion.h3>
              <motion.span>Experience the power of laser cutting with our cutting-edge technology and expert craftsmanship.</motion.span>
            </motion.div>

            <motion.div className="cards"variants={cardVariants}>
              <motion.img src="/Images/gray.png" alt="" />
              <motion.h3>Grinding</motion.h3>
              <motion.span>Our products are known for their exceptional quality and durability, meeting the highest industry standards.</motion.span>
            </motion.div>

          </motion.div>
        </motion.div>

        <div className="gridCards">
          {/* <h1>Precision Steel Cutting Services</h1>
          <span>We offer a range of precision steel cutting services.</span> */}

            <div className="leftSection">

                <div className="punchingServices">
                  <div className="PStext">
                    <h2>High-Quality Punching Services</h2>
                    <span>Our punching services are known for their precision and efficiency.</span>
                  </div>
                  <img src="/Images/gray.png" alt="" />
                </div>

                <div className="servicesTypes">
                  <div className="grinding">
                    <p><HiCube /></p>
                    <h3>Grinding Services</h3>
                    <span>We provide professional grinding services for various steel products.</span>
                  </div>
                  <div className="laser">
                    <p><HiCube /></p>
                    <h3>Laser Cutting</h3>
                    <span>Experience the precision of our laser cutting services.</span>
                  </div>
                </div>

            </div>

            <div className="rightSection">

                <div className="steelFabrication">
                  <img src="/Images/gray.png" alt="" />
                  <div className="SFtext">
                    <h2>Custom Steel Fabrication</h2>
                    <span>We offer custom steel fabrication services to meet your specific needs.</span>
                  </div>
                </div>

                <div className="punchingServices">
                  <div className="PStext">
                    <h2>High-Quality Punching Services</h2>
                    <span>Our punching services are known for their precision and efficiency.</span>
                  </div>
                  <img src="/Images/gray.png" alt="" />
                </div>
                
                
            </div>

          </div>

      </motion.div>
    </motion.div>
  )
}

export default Services
