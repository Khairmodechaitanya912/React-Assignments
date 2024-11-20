import React from 'react'
import './Features.css'
import FeaturesCards from './FeaturesCards'

const Features = () => {

  const data = [
    {
      icon:"fa-solid fa-cart-plus",
      title:"E-commerce Features",
      info:"Support for online transactions, shopping carts. and secure payment gateways if you plan to run an online store."
    },
    {
      icon:"fa-solid fa-hard-drive",
      title:"Disk Space",
      info:"The amount of storage space provided for your website files, emails, databases, etc."
    },
    {
      icon:"fa-solid fa-server",
      title:"Server Location",
      info:"The physical location of the server hosting your website, which can affect page load times and SEO."
    },
    {
      icon:"fa-solid fa-computer-mouse",
      title:"One-Click Installers",
      info:"Tools like Softaculous or Fantastico that simplify the installation of popular web applications like WordPress. Joomla, or Drupal."
    },
    {
      icon:"fa-regular fa-file-lines",
      title:"Script Support",
      info:"Support for programming languages and scripts such as PHP, Python, Perl, and Ruby on Rails."
    },
    {
      icon:"fa-solid fa-tv",
      title:"Domain Hosting",
      info:"The ability to host one or more domain names on the same hosting account."
    },
  ]
  return (
    <>
        <div className="feature-title">
            <h4>Features</h4>
            <h1>Our Web Hosting Features</h1>
        </div>
        <div className="features-cards">
            {
        
              data.map((res,index)=> <FeaturesCards
                key={index}
                icon = {res.icon}
                title = {res.title}
                info = {res.info}
              />)    
              
            }
        </div>
    </>
  )
}

export default Features