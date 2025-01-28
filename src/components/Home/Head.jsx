import React from 'react'
import './Head.css'

function Head({ title, description, background }) {
  return (
    <header
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})` }}
    >
        <div className="header-props">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </header>
  )
}

export default Head