import React, { useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import AOS from 'aos'
import './styles/blog.css'

function Career() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <Nav />
      <main>
        <div className="career" data-aos= "fade-up">
          <p className='careers'>
            We currently don't have any open positions, but we are always on the lookout for passionate and talented individuals who believe they can make a difference.
          </p>
          <button>Send us an email</button>
        </div>
      </main>
    </div>
  )
}

export default Career