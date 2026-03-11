import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="container">
      {/* Navigation */}
      <div className="nav">
        <h2>Andy</h2>
        <div className="nav-links">
          <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/milk">Milk</NavLink>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Body */}
      <div className="body">
        <h1>Welcome</h1>
        <p>This is the body area</p>
      </div>

    </div>
  )
}

export default Dashboard
