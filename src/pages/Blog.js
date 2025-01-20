import React from 'react'
import Nav from '../components/Nav/Nav'
import BlogCd from '../components/Blog/BlogCd'
import './styles/blog.css'

function Blog() {
  return (
    <div>
      <Nav />
      <main className='blog'>
        <BlogCd date="Febuary 1, 2025" title="Beriverse Introduce FLYSH, his first product" image="ai.jpg" />
        <BlogCd date="Febuary 25, 2025" title="Beriverse Academy is open" image="BA.jpg" />
        <BlogCd date="March 1, 2025" title="Discover our dream team" image="team.jpg" />
      </main>
    </div>
  )
}

export default Blog