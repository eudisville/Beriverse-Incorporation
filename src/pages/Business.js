import React from 'react'
import NavAlpha from '../components/NavAlpha/NavAlpha'
import Head from '../components/Home/Head'
import './styles/business.css'

function Business() {
  return (
    <div className='business'>
        <NavAlpha />
        <Head 
          title="Accelerate Your Digital Transformation with Us" 
          description="Our tech experts help you tackle 
          strategic challenges in Cloud, Big Data, AI, 
          and Software Development." 
          background="fgf.jpg"
          />

          <div className="what">
            <h3>What Is Beriverse Consulting ?</h3>
          </div>

          <section className='consulting'>
            <div className="img"></div>
            <div className="img-infos">
              <div className="infos-text">

                <h1>We help businesses <br />to optimize
                  their processes.
                </h1>

                <p>
                At Beriverse Consulting, we help businesses 
                navigate the complexities of digital transformation
                by providing expert consulting in Cloud, Big Data,
                AI, Software Development, and Learning. 
                Our team of top-tier engineers and strategists 
                collaborates with enterprises and startups to 
                build scalable, innovative, and results-driven 
                solutions.
                </p>
              </div>
            </div>
          </section>

          <section className='consultant'>
            <div className="img-info">
              <div className="info-text">
                <h1>What We Do ?</h1>
                <p>
                We provide cutting-edge consulting services 
                in <strong>Cloud & Infrastructure</strong>, helping businesses 
                optimize, migrate, and secure their cloud 
                architecture on AWS or Azure. Our
                <strong> Big Data & AI</strong> expertise enables companies to unlock 
                the power of data through advanced analytics, 
                artificial intelligence, and machine learning. 
                In <strong>Software Development</strong>, we design and build 
                custom web and mobile applications with robust, 
                scalable architectures tailored to your needs. 
                Additionally, our <strong>Learning</strong> solutions empower 
                teams with expert-led training programs, 
                ensuring they stay ahead in the ever-evolving 
                tech landscape.
                </p>
              </div>
            </div>
            <div className="imgs"></div>
          </section>

          <div className='help'>
            <div className="help-text">
              <h1>How we help our clients ?</h1>
              <div className="line"></div>
              <p>At Beriverse Consulting, we provide end-to-end support to help businesses overcome challenges and achieve their goals. We start by analyzing your needs, then develop a strategic plan, implement scalable solutions, and ensure continuous optimization. Our expertise helps you maximize efficiency, drive innovation, and achieve sustainable growth. Let’s turn your vision into reality.</p>
            </div>
          </div>

          <div className="choose">
            <div className="choose-text">
              <h1>Why choose Us ?</h1>
              <p>
              Beriverse Consulting offers tailored solutions led by top-tier experts. We focus on delivering measurable impact with future-proof strategies that keep your business competitive. Our commitment to innovation and results makes us the trusted partner for your digital transformation.
              </p>
            </div>
          </div>
    </div>
  )
}

export default Business