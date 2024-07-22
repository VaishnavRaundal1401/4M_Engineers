import React from 'react'
import './Contact.scss';
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contactContainer">
            <div className="contactHeading">
                <span>Reliable</span>
                <h1>Get in Touch</h1>
                <h6>For any inquiries, please feel free to contact us.</h6>
            </div>
            <div className="contactDetails">

                <div className="detailsCard">
                    <p><MdMailOutline /></p>
                    <h2>Email</h2>
                    <span>Send us an email and we'll get back to you promptly.</span>
                    <span>hello@gmail.com</span>
                </div>

                <div className="detailsCard">
                    <p><FiPhone /></p>
                    <h2>Phone</h2>
                    <span>Give us a call and our team will assist you.</span>
                    <span>0000000000</span>
                </div>

                <div className="detailsCard">
                    <p><GrLocation /></p>
                    <h2>Office</h2>
                    <span>Visit our office for any further assistance.</span>
                    <span>Nashik, Maharashtra, 422101</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact
