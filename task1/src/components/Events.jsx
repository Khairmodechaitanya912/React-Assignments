import React from 'react'
import './MusicEvents.css'
const Events = (props) => {
    const {date,time,title,description,buy} = props
  return (
    <>
        <div className="events-cards">
            <div className="card-event">
                <div className="date-time">
                    <p>{date}</p>
                    <h3>{time}</h3>
                </div>
                <div className="event-title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
                <div className="buy-btn">
                    <button>Buy a Ticket</button>
                </div>
        </div>
        
    </>
  )
}

export default Events