import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.scss'
import { IconContext } from 'react-icons/lib'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [navbar, setNavbar] = useState(true)

  const onClickHandle = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  const blurNavbar = () => {
    if (window.scrollY > 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('resize', showButton)

  window.addEventListener('scroll', blurNavbar)

  useEffect(() => {
    showButton()
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <div className='navbar-container container'>
            <Link
              to='/'
              className={navbar ? 'navbar-logo active' : 'navbar-logo'}
              onClick={closeMobileMenu}
            >
              <MdFingerprint
                className={navbar ? 'navbar-icon active' : 'navbar-icon'}
              />
              LAVISH
            </Link>
            <div className='menu-icon' onClick={onClickHandle}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/'
                  className={navbar ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className={navbar ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className={navbar ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle={
                        navbar ? 'btn--outline active' : 'btn--outline'
                      }
                    >
                      SIGN UP
                    </Button>
                  </Link>
                ) : (
                  <Link to='/sign-up' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
