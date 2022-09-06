import React from 'react'
import { Helmet } from 'react-helmet'

const HomeScreen = () => {
  return (
    <>
      <Helmet>
        <title>
          {' '}
          PennyTree - Lifestyle and Finance are not Mutually Exclusive
        </title>
      </Helmet>
      <main>
        <section className='hero linear-bg'>
          <div className='row'>
            <div className='col-lg-6 b1'>
              <div className='captions'>
                <h1>
                  Your Finance and <br />
                  Lifestyle in One App
                </h1>
                <p>Finance and lifestyle are mutually inclusive.</p>
                <h3>DOWNLOAD NOW</h3>
                <div className='stores-logo'>
                  <a href='https://apps.apple.com/app/id1602953102'>
                    <img
                      src='assets/images/AppStore.png'
                      height='50px'
                      alt='App Store'
                    />
                  </a>
                  <a href='https://play.google.com/store/apps/details?id=com.pennysafe.pennytree'>
                    <img
                      src='assets/images/PlayStore.png'
                      height='50px'
                      alt='Google Play Store'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 b1'>
              <div className='hero-img'>
                <img src='assets/images/hero.png' alt='PennyTree' />
              </div>
            </div>
          </div>
        </section>

        <section className='partners'>
          <div className='row'>
            <div className='col-lg-3'>
              <h5>Our Partners</h5>
            </div>
            <div className='col-lg-3'>
              <div className='partner-logo mb-4 mb-md-0'>
                <img src='assets/images/paystack.png' alt='paystack' />
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='partner-logo mb-4 mb-md-0'>
                <img src='assets/images/flutterwave.png' alt='flutterwave' />
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='partner-logo mb-4 mb-md-0'>
                <img
                  src='assets/images/smile-identity.png'
                  alt='smile identity'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='features'>
          <div className='row'>
            <div className='col-lg-4 or-2'>
              <div className='feature-group'>
                <div className='feature bg-green'>
                  <img src='assets/images/SAVINGS.png' alt='' />
                  <p>Gamified Savings Culture</p>
                </div>
                <div className='feature'>
                  <img src='assets/images/GROW YOUR MONEY.png' alt='' />
                  <p>Grow your Money</p>
                </div>
                <div className='feature'>
                  <img src='assets/images/BILS.png' alt='' />
                  <p>Pay Bills</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 or-1'>
              <div className='features-img'>
                <img
                  src='assets/images/GAMIFIED SAVINGS.png'
                  alt='PennyTree Gamified Savings'
                />
              </div>
            </div>
            <div className='col-lg-4 or-3'>
              <div className='feature-group'>
                <div className='feature'>
                  <img src='assets/images/TRANSFER.png' alt='' />
                  <p>Penn-2-Penn Free Wallet Transfer</p>
                </div>
                <div className='feature'>
                  <img src='assets/images/FIN TARGET.png' alt='' />
                  <p>Hit your Financial Target</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='press'>
          <h3>PennyTree in the Press</h3>
          <div className='press-logos'>
            <img src='assets/images/THIS DAY NEWSPAPER.png' alt='' />
            <img src='assets/images/VANGUARD.png' alt='' />
            <img src='assets/images/BUSINESSDAY.png' alt='' />
            <img src='assets/images/CHANNELS.png' alt='' />
            <img src='assets/images/CRUNCHBASE.png' alt='' />
          </div>
        </section>
      </main>
    </>
  )
}

export default HomeScreen
