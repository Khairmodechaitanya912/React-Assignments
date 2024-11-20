import React from 'react'

const Info = (props) => {
    const {url,name,infos} = props
  return (
    <>
        <div className="card" style={{width: '18rem'}}>
            <img src={url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                 <p className="card-text">{infos}</p>
                <a href="#" className="btn btn-primary">Read More</a>
            </div>
        </div>
    </>
  )
}

export default Info