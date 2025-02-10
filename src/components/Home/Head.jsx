import React, { useEffect } from 'react'
import Aos from 'aos'
import './Head.css'

function Head({ title, description, background }) {

  useEffect(() => {
          Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className='head'
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})` }}
    >
        <div className="header-props" data-aos= "fade-up">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Head