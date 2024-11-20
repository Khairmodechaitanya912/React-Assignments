import React from 'react'
import Info from './Info'
import './Holidays.css'

const Holidays = () => {

    const Data = [
        {
            url: "https://www.irctc.co.in/nget/assets/images/exterior.jpg",
            name: "Maharajas' Express",
            infos: "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years."
        },
        {
            url: "https://www.irctc.co.in/nget/assets/images/Thailand.jpg",
            name: "International Packages",
            infos: "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience."
        },
        {
            url: "https://www.irctc.co.in/nget/assets/images/Kashmir.jpg",
            name: "Domestic Air Packages",
            infos: "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!"
        },
    ]

    return (
        <>
            <div className="holidays-container">
                <div className="heading">
                    <h1>Holidays</h1>
                </div>
                <div className="info-container">
                    {
                        Data.map((res, index) => <Info
                            key={index}
                            url={res.url}
                            name={res.name}
                            infos={res.infos}
                        />)
                    }
                </div>
            </div>
        </>
    )
}

export default Holidays