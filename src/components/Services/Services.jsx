import React from 'react'
import './Services.scss'
const Services = () => {
  return (
    <div className='services'>
      <div className="servicesContainer">
        <div className="servicesInfo">
          <h1>Precision Cutting Services for Various Materials</h1>
          <span>Our company specializes in providing high-quality laser, leather, and steel cutting services. With state-of-the-art machinery and a team of skilled professionals, we deliver precise and efficient cutting solutions for a wide range of materials. Whether you need intricate designs on leather products, precise metal components, or custom laser-cut patterns, we have the expertise and technology to meet your requirements.</span>
        </div>
        <div className="servicesCards">
          <div className="cards">
            <img src="/Images/gray.jpg" alt="" />
            <h3>Laser Cutting Services</h3>
            <span>We offer laser cutting services for various materials, including metal, wood, acrylic, and more. Our advanced laser technology ensures accurate and clean cuts, allowing for intricate designs and precise shapes.</span>
          </div>
          <div className="cards">
            <img src="/Images/gray.jpg" alt="" />
            <h3>Leather Cutting Services</h3>
            <span>Our leather cutting services provide precise and clean cuts for leather products, such as bags, shoes, and accessories. We can create intricate patterns and designs to enhance the visual appeal of your leather goods.</span>
          </div>
          <div className="cards">
            <img src="/Images/gray.jpg" alt="" />
            <h3>Steel Cutting Services</h3>
            <span>With our steel cutting services, we can accurately cut steel sheets and components for various applications. Our cutting-edge machinery ensures precise and clean cuts, meeting the highest quality standards.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
