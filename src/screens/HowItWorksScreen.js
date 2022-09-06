import React from 'react'
import { Helmet } from 'react-helmet'

const HowItWorksScreen = () => {
  return (
    <>
      <Helmet>
        <title>
          {' '}
          How it Works | PennyTree - Lifestyle and Finance are not Mutually
          Exclusive
        </title>
      </Helmet>
      <main>
        <section className='how-it-works linear-bg'>
          <h1>How it Works</h1>
          <div className='row'>
            <div className='col-lg-6 b2'>
              <img
                src='assets/images/iPhone.png'
                alt='PennyTree App Dashboard'
              />
            </div>
            <div className='col-lg-6 b2'>
              <div className='how-it-work'>
                <div className='works'>
                  <div className='count' style={{ background: '#14b8a6' }}>
                    1
                  </div>
                  <div className='tag'>
                    <h3 style={{ color: '#14b8a6' }}>Create an Account</h3>
                  </div>
                </div>
                <div className='works'>
                  <div className='count' style={{ background: '#1b72bf' }}>
                    2
                  </div>
                  <div className='tag'>
                    <h3 style={{ color: '#1b72bf' }}>Fund your Wallet</h3>
                  </div>
                </div>
                <div className='works'>
                  <div className='count' style={{ background: '#303030' }}>
                    3
                  </div>
                  <div className='tag'>
                    <h3 style={{ color: '#303030' }}>Start Saving</h3>
                  </div>
                </div>
                <div className='works'>
                  <div className='count' style={{ background: '#f68b1f' }}>
                    4
                  </div>
                  <div className='tag'>
                    <h3 style={{ color: '#f68b1f' }}>
                      Achieve your Savings Goals
                    </h3>
                  </div>
                </div>
                <div className='works'>
                  <div className='count' style={{ background: '#14b8a6' }}>
                    5
                  </div>
                  <div className='tag'>
                    <h3 style={{ color: '#14b8a6' }}>Pay Bills</h3>
                  </div>
                </div>
                <div className='works'>
                  <div className='count' style={{ background: '#1b72bf' }}>
                    6
                  </div>
                  <div className='tag'>
                    <h3 style={{ color: '#1b72bf' }}>Withdraw</h3>
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

export default HowItWorksScreen
