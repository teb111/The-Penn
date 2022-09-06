import React from 'react'
import { Helmet } from 'react-helmet'

const FeatureScreen = () => {
  return (
    <>
      <Helmet>
        <title>
          {' '}
          Features | PennyTree - Lifestyle and Finance are not Mutually
          Exclusive
        </title>
      </Helmet>
      <main>
        <section className='features-page'>
          <div className='feature-box'>
            <div className='row'>
              <div className='col-lg-7 f1'>
                <h1>
                  <span>Gamified</span> Savings
                </h1>
                <p>
                  Take advantage of the next level of financial wellness by
                  gamifying your saving habit. Set your own rules with Penn
                  Rules - Live, spend, earn and interact while you save behind
                  the scenes. Connect your savings goal with Twitter, Instagram,
                  and so much more.
                </p>
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-4 f1'>
                <img className='br' src='assets/images/mask-group.png' alt='' />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='feature-box-2 bg-green-gradient'>
                <div className='feature-img'>
                  <img src='assets/images/target-savings.png' alt='' />
                </div>
                <h3>Target Savings</h3>
                <p>
                  Achieve your savings goal faster by automating your wealth and
                  being dedicated.
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='feature-box-2 bg-green-gradient'>
                <div className='feature-img'>
                  <img src='assets/images/vault.png' alt='' />
                </div>
                <h3>Vault</h3>
                <p>
                  Shun untimely withdrawal and impulse spending by locking away
                  funds for a fixed period of time in your Personal Vault. Earn
                  up to 12% P.A.
                </p>
              </div>
            </div>
          </div>
          <div className='feature-box'>
            <div className='row'>
              <div className='col-lg-7 f1'>
                <h1>
                  <span>Fast, Seamless and Reliable </span> Payments
                </h1>
                <p>
                  Achieve your savings goal faster by automating your wealth and
                  being dedicated.
                </p>
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-4 f1'>
                <img src='assets/images/mask-group-2.png' alt='' />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='feature-box-2 bg-blue-gradient'>
                <div className='feature-img'>
                  <img src='assets/images/free-transfer.png' alt='' />
                </div>
                <h3>Free Transfer</h3>
                <p>
                  Receive money from anyone, anywhere. Make transfers to your
                  friends and family on PennyTree via our Penn-to-Penn wallet
                  feature for free. Take advantage of our wallet system to avoid
                  unnecessary bank charges
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='feature-box-2 bg-blue-gradient'>
                <div className='feature-img'>
                  <img src='assets/images/pay-bills.png' alt='' />
                </div>
                <h3>Pay Bills</h3>
                <p>
                  Achieve your savings goal faster by automating your wealth and
                  being dedicated.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='reviews'>
          <h3>Customer Reviews</h3>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='review-box bg-orange'>
                  <h2 className='review-rate' style={{ color: '#f68b1f' }}>
                    5.0<span>/5</span>
                  </h2>
                  <p>
                    It is more than just a app. It gives you financial freedom
                    by stepping you up on how to make lucrative investments and
                    savings. You won't regret using this wonderful app. Just
                    choose a plan for yourself and be dedicated to it, the
                    outcome will be pleasant. I recommend this app to every
                    person out there. It is a must to have.{' '}
                    <span>- Sunny Akpochimara</span>
                  </p>
                  <div className='review-footer'>
                    <div className='review-stars'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <img
                      src='assets/images/PlayStore.png'
                      alt='Google PlayStore'
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='review-box bg-blue'>
                  <h2 className='review-rate' style={{ color: '#1b72bf' }}>
                    5.0<span>/5</span>
                  </h2>
                  <p>
                    Penny Tree app has helped improve my savings culture and has
                    made the payment of bills seamless for me. <br />
                    <span>- zainydammy</span>
                  </p>
                  <div className='review-footer'>
                    <div className='review-stars'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <img src='assets/images/AppStore.png' alt='AppStore' />
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='review-box bg-light-green'>
                  <h2 className='review-rate' style={{ color: '#14b8a6' }}>
                    5.0<span>/5</span>
                  </h2>
                  <p>
                    Fast and Efficient to use. But a customized invite link and
                    the app download link embedded with the referral code will
                    be nice, to ease marketing this product. Aside this, it's
                    fun and flexible to navigate around. I experienced instant
                    transfer, that's cool too. Highly recommended for anyone
                    looking forward to imbibe a savings lifestyle and Grow their
                    income.
                    <span>- Nseobong N. Nkereuwem</span>
                  </p>
                  <div className='review-footer'>
                    <div className='review-stars'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <img
                      src='assets/images/PlayStore.png'
                      alt='Google PlayStore'
                    />
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

export default FeatureScreen
