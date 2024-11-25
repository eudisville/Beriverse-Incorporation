import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Home/Header'
import About from '../components/About/About'
import AOS from 'aos'
import 'aos/dist/aos.css';
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
                    <h3>2024</h3>
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
              <h1>Let Us Embark With Us</h1>
            </div>
          </div>
        </section>

        <section className='join-us'>
          <div className="join" data-aos="fade-up">
            <h1>Join Us Now</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam optio vel recusandae ullam consequatur, minus, similique voluptates adipisci sequi odit, laudantium nostrum ratione temporibus placeat dignissimos ab accusamus veniam. Maxime.</p>
            <Link to=""><button>Apply Now</button></Link>
          </div>
        </section>

        <section className='blog'>
          <div className="blog-items">
            <h1>Stay up to date on our latest projects</h1>
            <p>We regularly share updates about our company, the development of the Beriverse, and research to advance our mission of enhancing the world and human potential through innovative technology solutions.</p>
            <div className="blog-item">

            </div>
          </div>
        </section>
    </div>
  )
}

export default Home