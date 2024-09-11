import React, {useRef} from 'react'
import './TeamProfile.scss'
import {motion, useInView} from 'framer-motion'
const TeamProfile = () => {

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-300px"}) 
    const variants ={
        initial:{
            y:70,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.5,
                staggerChildren:0.2
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
            <motion.div className="leaderProfile">
                    <motion.div className="profiles" variants={variants}>
                        <motion.img src="/Images/O1.jpg" alt="" />
                        <motion.h4>Mr.Bhaurao Bachhav</motion.h4>
                        <motion.span>Director</motion.span>
                        <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                        <motion.div className="icons">
                            {/* icons */}
                        </motion.div>
                    </motion.div>
                    <motion.div className="profiles" variants={variants}>
                        <motion.img src="/Images/O2.jpg" alt="" />
                        <motion.h4>Mr.Sachin Mahajan</motion.h4>
                        <motion.span>Director</motion.span>
                        <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                        <motion.div className="icons">
                            {/* icons */}
                        </motion.div>
                    </motion.div>
            </motion.div>

            <motion.div className="teamCards" variants={variants}>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i1.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i2.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i3.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i4.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i5.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i6.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i7.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i8.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i9.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i10.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i11.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i12.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i13.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i14.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i15.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i16.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i17.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i18.jpg" alt="" />
                    <motion.h4>Prathamesh Bachhav</motion.h4>
                    <motion.span>Director</motion.span>
                    <motion.span>John is responsible for overseeing project execution and ensuring timely delivery.</motion.span>
                    <motion.div className="icons">
                        {/* icons */}
                    </motion.div>
                </motion.div>

                <motion.div className="profiles" variants={variants}>
                    <motion.img src="/Images/i19.jpg" alt="" />
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
