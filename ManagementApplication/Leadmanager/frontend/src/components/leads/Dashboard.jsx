import React from 'react'

const Dashboard = () => {
  return (
    <div className="container">

      {/* Navigation */}
      <div className="nav">
        <h2>My App</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
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
