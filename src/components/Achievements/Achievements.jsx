import React, { useRef } from 'react'
import './Achievements.scss'
import { TiGroup } from "react-icons/ti";
import { motion, useInView } from 'framer-motion'

const Achievements = () => {

    const ref = useRef();
    const logoRef = useRef();
    const isInView = useInView(ref, { margin: "-200px" })
    const textVariants = {
        initial: {
            x: -90,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
            }
        }
    }

    const logosVariants = {
        initial: {
            x: -90,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.4,
            }
        }
    }

    return (
        <div className='achievements'>
            <div className="achievementsContainer">
                <div className="clients">
                    <h5>Trusted by industry-leading companies worldwide</h5>
                    <div className="clientLogo">
                        <p><TiGroup /></p>
                        <h4>WebFlow</h4>
                    </div>
                    <div className="clientLogo">
                        <p><TiGroup /></p>
                        <h4>WebFlow</h4>
                    </div>
                    <div className="clientLogo">
                        <p><TiGroup /></p>
                        <h4>WebFlow</h4>
                    </div>
                    <div className="clientLogo">
                        <p><TiGroup /></p>
                        <h4>WebFlow</h4>
                    </div>
                    <div className="clientLogo">
                        <p><TiGroup /></p>
                        <h4>WebFlow</h4>
                    </div>
                </div>

                <div className="Awards">
                    <motion.div ref={ref} className="textContainer" variants={textVariants} initial="initial" animate={isInView && "animate"}>
                        <motion.h1 variants={textVariants}>Recognitions and Awards</motion.h1>
                        <motion.h5 variants={textVariants}>We are proud to have received industry recognition for our exceptional work.</motion.h5>
                    </motion.div>
                    <motion.div ref={logoRef} className="logosContainer" variants={logosVariants} initial="initial" animate={isInView && "animate"}>
                        <motion.div variants={logosVariants} className="awardlogo">
                            <p><TiGroup /></p>
                            <h4>WebFlow</h4>
                        </motion.div>
                        <motion.div variants={logosVariants} className="awardlogo">
                            <p><TiGroup /></p>
                            <h4>WebFlow</h4>
                        </motion.div>
                        <motion.div variants={logosVariants} className="awardlogo">
                            <p><TiGroup /></p>
                            <h4>WebFlow</h4>
                        </motion.div>
                        <motion.div variants={logosVariants} className="awardlogo">
                            <p><TiGroup /></p>
                            <h4>WebFlow</h4>
                        </motion.div>
                        <motion.div variants={logosVariants} className="awardlogo">
                            <p><TiGroup /></p>
                            <h4>WebFlow</h4>
                        </motion.div>
                        <motion.div variants={logosVariants} className="awardlogo">
                            <p><TiGroup /></p>
                            <h4>WebFlow</h4>
                        </motion.div>
                        <motion.div variants={logosVariants} className="awardlogo">
                            <p><TiGroup /></p>
                            <h4>WebFlow</h4>
                        </motion.div>
                        <motion.div variants={logosVariants} className="awardlogo">
                            <p><TiGroup /></p>
                            <h4>WebFlow</h4>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Achievements
