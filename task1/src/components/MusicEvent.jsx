import React from 'react'
import Events from './Events'
import './MusicEvents.css'
const MusicEvent = () => {
    const events = [
        {
            id:1,
            date:"Today",
            time:"21:00",
            title:"Swiftogeddon - The Taylor Swift Club Night",
            description:"Swiftogeddon - The Taylor Swift Club Night"
        },
        {
            id:2,
            date:"17 December",
            time:"22:00",
            title:"Lana Del Rave",
            description:"Swiftogeddon - The Taylor Swift Club Night"
        },
        {
            id:3,
            date:"19 December",
            time:"18:30",
            title:"MASSAOKE: XMAS LIVE at the Electric Ballroom",
            description:"Swiftogeddon - The Taylor Swift Club Night"
        },
        {
            id:4,
            date:"22 December",
            time:"19:00",
            title:"Eleni Tsaligopoulou full-band",
            description:"Swiftogeddon - The Taylor Swift Club Night"
        },
    ]
  return (
    <>
            <div className="music-container">
                <div className="music-title">
                    <h3>Music events</h3>
                    <p>in London, United Kingdom</p>
                </div>
                <div className="cards-events">
                    {
                        events.map(res => <Events
                            key = {res.id}
                            date = {res.date}
                            time = {res.time}
                            title = {res.title}
                            description = {res.description}
                        />)
                    }
                </div>
            </div>
    </>
  )
}

export default MusicEvent