import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Task 1</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/holiday">Holidays</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/musicevent">Music Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/feature">Features</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navigation