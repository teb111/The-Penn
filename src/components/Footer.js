import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='row'>
          <div className='col-lg-3'>
            <img
              className='footer-logo'
              src='assets/images/PennyTree-footer-logo.png'
              alt='PennyTree Logo'
            />
            <p>
              PennyTree is a Lifestyle payment and savings application that
              helps you keep up with your savings habit and make payments.
            </p>
            <div className='social-icons'>
              <a href='https://pennytree.medium.com/'>
                <i className='fab fa-medium'></i>
              </a>
              <a href='https://www.instagram.com/mypennytree/'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='https://youtube.com/channel/UCfM3PTVbXvQoMp03ZnQd9_Q'>
                <i className='fab fa-youtube'></i>
              </a>
              <a href='https://twitter.com/mypennytree'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='https://www.linkedin.com/company/pennytree-services/'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='https://www.facebook.com/mypennytree/'>
                <i className='fab fa-facebook'></i>
              </a>
            </div>
          </div>
          <div className='col-lg-4'></div>
          <div className='col-lg-5'>
            <div className='row'>
              <div className='col-lg-4'>
                <h6>Company</h6>
                <ul>
                  <a href='#'>
                    <li>About Us</li>
                  </a>
                  <a href='#'>
                    <li>Terms of Use</li>
                  </a>
                  <a href='#'>
                    <li>Privacy Policy</li>
                  </a>
                </ul>
              </div>
              <div className='col-lg-4'>
                <h6>Products</h6>
                <ul>
                  <a href='#'>
                    <li>Penn Rules</li>
                  </a>
                  <a href='#'>
                    <li>Payment</li>
                  </a>
                  <a href='#'>
                    <li>Transfer</li>
                  </a>
                  <a href='#'>
                    <li>Targte Savings</li>
                  </a>
                  <a href='#'>
                    <li>Personal Vaults</li>
                  </a>
                </ul>
              </div>
              <div className='col-lg-4'>
                <h6>Contact Us</h6>
                <ul>
                  <a href='mailto:hello@mypennytree.com'>
                    <li>hello@mypennytree.com</li>
                  </a>
                  <a href='tel:+2349030266439'>
                    <li>+234-903-026-6439</li>
                  </a>
                  <a href='#'>
                    <li>9A, Oriwu Street, Lekki Phase 1 - Lagos, Nigeria</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className='copyright'>
            © Copyright 2022 PennyTree Business Limited.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
