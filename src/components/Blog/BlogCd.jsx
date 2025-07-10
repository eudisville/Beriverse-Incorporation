import React, { useEffect } from 'react'
import AOS from 'aos'
import './BlogCd.css'

function BlogCd({ date, title, image }) {

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  return (
    <div className='blog-card' data-aos="fade-up">
      <div className="blog-card-items">
          <div className="container">
            <img src={image} alt="" />
          </div>
          <h5 className="date">{date}</h5>
          <h2 className="title">{title}</h2>
      </div>
    </div>
  )
}

export default BlogCd