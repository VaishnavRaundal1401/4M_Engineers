import React, {useRef} from 'react'
import './TeamProfile.scss'
import {motion, useInView} from 'framer-motion'
const TeamProfile = () => {

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-300px"}) 
    const variants ={
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                duration:2,
                staggerChildren:0.1
            }
        }
    }
  return (
    <motion.div className='team'>
        <motion.div className="teamContainer" ref={ref} variants={variants} initial="initial" animate={isInView && "animate"}>
            <motion.div className="heading" variants={variants}>
                <motion.span>Experienced</motion.span>
                <motion.h1>Meet Our Team</motion.h1>
                <motion.span>Our team is comprised of skilled professionals with diverse expertise.</motion.span>
            </motion.div>
            <motion.div className="teamCards" variants={variants}>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/gray.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/gray.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/gray.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/gray.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/gray.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/gray.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default TeamProfile
