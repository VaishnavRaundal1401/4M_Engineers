import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <div className="footerContent">
                <div className="logo">
                    <h3>4M_Engineers</h3>
                </div>
                <div className="links">
                    <span>Services</span>
                    <span>About</span>
                    <span>Achievements</span>
                    <span>Contact</span>
                </div>
            </div>
            <hr />
            <span className='footerMark'>
                © 2024 4M_Engineers. All rights reserved.
            </span>
        </div>
    </div>
  )
}

export default Footer
