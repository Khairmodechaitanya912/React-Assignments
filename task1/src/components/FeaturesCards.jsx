import React from 'react'
import './Features.css'
const FeaturesCards = (props) => {
    const {icon,title,info} = props
  return (
   <>
        <div className="f-cards">
            <div className="f-icons">
            <i className={icon}></i>
            </div>
            <div className="f-heading">
                <h4>{title}</h4>
            </div>
            <div className="f-info">
                <p>{info}</p>
            </div>
            <a href="">Learn More</a>
        </div>
   </>
  )
}

export default FeaturesCards