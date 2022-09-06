import React from 'react'

const Header = () => {
  const pathname = window.location.pathname
  return (
    <header className='home-header' id='home'>
      <div className='nav-header'>
        <a href='/'>
          <img
            className='logo'
            src='assets/images/PennyTree-Logo.png'
            height='35px'
            alt='PennyTree Logo'
          />
        </a>

        <nav>
          <a href='/'>Home</a>
          <a href='/about' class={pathname === '/about' ? 'active' : 'hidden'}>
            About Us
          </a>
          <a
            href='/features'
            class={pathname === '/features' ? 'active' : 'hidden'}
          >
            Features
          </a>
          <a
            href='/how-it-works'
            class={pathname === '/how-it-works' ? 'active' : 'hidden'}
          >
            How it Works
          </a>
          <a href='/blogs'>Blogs</a>
          <a href='/FAQ'>FAQ</a>
          <a href='/contact'>Contact Us</a>
        </nav>

        <div className='menu-icon'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
