import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Home/Header'
import About from '../components/About/About'
import AOS from 'aos'
import BlogCd from '../components/Blog/BlogCd'
import Activity from '../components/Activity/Activity'
import 'aos/dist/aos.css'
import './styles/style.css'


function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div>
        <Header />
        <About />
        <section>
          <div className="section-items" data-aos= "fade-up">
            <div className="section-text">
              <div className="left">
                <h5>Beriverse Incorporation</h5>
                <h1>Beriverse solving major problems of our world</h1>
              </div>

              <div className="right">
                <p>From global problems to activities sectors problems,
                  we resolve many problems. 
                </p>
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <div className="top-card">
                  <div className="top-left">
                    <h3>Beriverse</h3>
                  </div>
                  <div className="top-right">
                    <h3>2025</h3>
                  </div>
                </div>

                <div className="bottom-card">
                  <div className="bottom-left">
                    <p>From global problems to activities sectors problems, we resolve many problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="teams">
          <div className="team">
            <div className="team-text">
              <h5>WHAT WE DO</h5>
              <h1>Let Us Embark You With Us</h1>
            </div>
            <div className='acts'>
              <Activity backgroundImage="act3.jpg" title="Software" content="" />
              <Activity backgroundImage="act1.jpg" title="Big Data & Artificial Intelligence" content="" />
              <Activity backgroundImage="act2.jpg" title="Cloud" content="" />
              <Activity backgroundImage="act4.jpg" title="Learning" content="" />
            </div>
          </div>
        </section>

        <section className='join-us'>
          <div className="join" data-aos="fade-up">
            <h1>Join Us Now</h1>
            <p>At Beriverse Incorporation, we aim to inspire and transform the 
            world with innovative technology, software, and games. As a team of
            passionate creators, we thrive on challenges, value collaboration, 
            and foster an environment where every voice matters. Join us to make
            an impact and shape the future together.</p>
            <Link to="/career"><button>Apply Now</button></Link>
          </div>
        </section>

        <section className='blog'>
          <div className="blog-items">
            <h1>Stay up to date on our latest projects</h1>
            <p>We regularly share updates about our company, the development of the Beriverse, and research to advance our mission of enhancing the world and human potential through innovative technology solutions.</p>
            <div className="blog-item">
              <BlogCd date="Febuary 1, 2025" title="Beriverse Introduce FLYSH, his first product" image="ai.jpg" />
              <BlogCd date="Febuary 25, 2025" title="Beriverse Academy is open" image="BA.jpg" />
              <BlogCd date="March 1, 2025" title="Discover our dream team" image="team.jpg" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home