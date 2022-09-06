import React from 'react'
import { Helmet } from 'react-helmet'

const AboutScreen = () => {
  return (
    <>
      <Helmet>
        <title>
          {' '}
          About US | PennyTree - Lifestyle and Finance are not Mutually
          Exclusive
        </title>
      </Helmet>
      <main>
        <section className='about-hero linear-bg'>
          <div className='row'>
            <div className='col-lg-6 b1'>
              <div className='hero-img'>
                <img src='assets/images/about-hero.png' alt='PennyTree' />
              </div>
            </div>
            <div className='col-lg-6 b1'>
              <div className='about-caption'>
                <h1>About PennyTree</h1>
                <p>
                  PennyTree is a SuperApp that caters to people's needs by
                  integrating Lifestyle with Finance, making it easy and fun to
                  build wealth, spend wisely and interact with digital habitual
                  activities and utilities on their mobile phones in real time
                  as they live & interact.
                </p>
                <p>We make financial discipline fun, enjoyable and easy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='vision bg-blue'>
          <h3>Our Vision</h3>
          <p>To make humanity seamless through finance.</p>
        </section>
        <section className='vision bg-orange'>
          <h3>Our Mission</h3>
          <p>We are integrating finance and lifestyle as one-component.</p>
        </section>
        <section className='values'>
          <h3>Our Core Values</h3>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 offset-lg-2'>
                <div className='row'>
                  <div className='col-md-4'>
                    <div
                      className='value-box'
                      style={{ background: 'rgba(246, 139, 31, 0.1)' }}
                    >
                      <div className='value'>
                        <div
                          className='value-icon'
                          style={{ background: '#f68b1f' }}
                        >
                          <img
                            src='assets/images/excellence.png'
                            alt='Service Excellence | PennyTree'
                          />
                        </div>
                        <h5>Service Excellence</h5>
                        <p>
                          We provide premium value and service by ensuring our
                          work is up to par.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div
                      className='value-box'
                      style={{ background: 'rgba(20, 184, 166, 0.1)' }}
                    >
                      <div className='value'>
                        <div
                          className='value-icon'
                          style={{ background: '#14b8a6' }}
                        >
                          <img
                            src='assets/images/people-centric.png'
                            alt='People-Centric | PennyTree'
                          />
                        </div>
                        <h5>People-Centric</h5>
                        <p>
                          It starts with us; We honor commitments to our
                          customers and to one another.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div
                      className='value-box'
                      style={{ background: 'rgba(27, 114, 191, 0.1)' }}
                    >
                      <div className='value'>
                        <div
                          className='value-icon'
                          style={{ background: '#1b72bf' }}
                        >
                          <img
                            src='assets/images/innovation.png'
                            alt='Innovation | PennyTree'
                          />
                        </div>
                        <h5>Innovation</h5>
                        <p>
                          Innovation is the core value on which the PennyTree
                          App is built. Our Penn Rules product has been a
                          path-breaking innovation that has simplified savings
                          for everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default AboutScreen
