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
                <h6>Beriverse Incorporation</h6>
                <h1>Bringing great experiences to a large number of people.</h1>
              </div>

              <div className="right">
                <p>
                Beriverse addresses critical global challenges by providing
                innovative solutions across various sectors, from global issues
                to industry-specific problems. 
                </p>
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <div className="top-card">
                  <div className="top-left">
                    {/* <h3>Beriverse</h3> */}
                  </div>
                  <div className="top-right">
                    {/* <h3>2025</h3> */}
                  </div>
                </div>

                <div className="bottom-card">
                  <div className="bottom-left">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="teams">
          <div className="team">
            <div className="team-text" data-aos="zoom-in">
              <h5>WHAT WE DO</h5>
              <h1>Let Us Embark You With Us</h1>
            </div>
            <div className='acts' data-aos="fade-up">
              <Activity backgroundImage="act3.jpg" title="Technology" content="" />
              <Activity backgroundImage="cons.jpg" title="Consulting" content="" />
              <Activity backgroundImage="act4.jpg" title="Education" content="" />
            </div>
          </div>
        </section>

        <section className='join-us'>
          <div className="join" data-aos="fade-up">
            <h1>Join Us Now</h1>
            <p>At Beriverse, we’re building more than just products. We’re creating experiences that matter.
              Whether you're a visionary, a builder, a storyteller, or a changemaker, there's a place for you here.
              Join us and help shape the future of tech, education, and entertainment from Africa to the world.
              Let’s create something extraordinary together.</p>
            <Link to="/career"><button>Apply Now</button></Link>
          </div>
        </section>

        <section className='blog-home'>
          <div className="blog-items">
            <h1 data-aos="zoom-in">Stay up to date on our latest projects</h1>
            <p data-aos="zoom-in">We share regular updates on Beriverse’s growth across technology, education and audiovisual.</p>
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