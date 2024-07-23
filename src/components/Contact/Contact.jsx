import React, { useRef } from 'react'
import './Contact.scss';
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import {motion, useInView} from 'framer-motion'

const Contact = () => {

    const ref = useRef();
    const isInView = useInView(ref, {margin:"-100px"});

    const variants={
        initial:{
            y:70,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.5,
            }
        }
    }
  return (
    <div className='contact'>
        <div className="contactContainer">
            <motion.div ref={ref} className="contactHeading" variants={variants} initial='initial'  animate={isInView && "animate"}>
                <motion.span variants={variants}>Reliable</motion.span>
                <motion.h1 variants={variants}>Get in Touch</motion.h1>
                <motion.h6 variants={variants}>For any inquiries, please feel free to contact us.</motion.h6>
            </motion.div>
            <div className="contactDetails">

                <div ref={ref} className="detailsCard">
                    <svg viewBox="0 0 24 24" fill="none">
                        <motion.path 
                            strokeWidth={0.2}
                            fill='none'
                            initial={{pathLength:0}}
                            animate={isInView && {pathLength:1}}
                            transition={{duration:4}}
                        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <motion.h2 variants={variants} initial='initial' animate='animate'>Email</motion.h2>
                    <motion.span variants={variants} initial='initial' animate='animate'>Send us an email and we'll get back to you promptly.</motion.span>
                    <motion.span variants={variants} initial='initial' animate='animate'>hello@gmail.com</motion.span>
                </div>

                <div className="detailsCard">
                    <svg viewBox="0 0 24 24" fill="none">
                        <motion.path 
                            strokeWidth={0.2}
                            fill='none'
                            initial={{pathLength:0}}
                            animate={isInView && {pathLength:1}}
                            transition={{duration:4}}
                        d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <motion.h2 variants={variants} initial='initial' animate='animate'>Phone</motion.h2>
                    <motion.span variants={variants} initial='initial' animate='animate'>Give us a call and our team will assist you.</motion.span>
                    <motion.span variants={variants} initial='initial' animate='animate'>0000000000</motion.span>
                </div>

                <div className="detailsCard" fill="none">
                    <svg viewBox="0 0 24 24">
                        <motion.path 
                            strokeWidth={0.2}
                            fill='none'
                            initial={{pathLength:0}}
                            animate={isInView && {pathLength:1}}
                            transition={{duration:4}}
                        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <motion.path
                          strokeWidth={0.2}
                          fill='none'
                          initial={{pathLength:0}}
                          animate={isInView && {pathLength:1}}
                          transition={{duration:4}}                          
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <motion.h2 variants={variants} initial='initial' animate='animate'>Office</motion.h2>
                    <motion.span variants={variants} initial='initial' animate='animate'>Visit our office for any further assistance.</motion.span>
                    <motion.span variants={variants} initial='initial' animate='animate'>Nashik, Maharashtra, 422101</motion.span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact
