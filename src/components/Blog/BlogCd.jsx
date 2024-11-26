import React, { useEffect } from 'react'
import AOS from 'aos'
import './BlogCd.css'

function BlogCd() {

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, [])

  return (
    <div className='blog-card' data-aos="fade-up">
        <h5 className="date">November 1, 2024</h5>
        <h2 className="title">Beriverse project to be futur engine of AI</h2>
        <div className="container"><img src="cd.jpg" alt="" /></div>
    </div>
  )
}

export default BlogCd