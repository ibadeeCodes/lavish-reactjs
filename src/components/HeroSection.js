import React, { useRef, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './HeroSection.scss'
import { gsap, TweenMax } from 'gsap/all'

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  let headlineRef = useRef(null)
  let descriptionRef = useRef(null)
  let mainImg = useRef(null)
  useEffect(() => {
    //instantiate a TimelineLite
    var tl = gsap.timeline()
    gsap.from(mainImg, {
      autoAlpha: 0,
      duration: 1.2,
      y: '-35%',
      ease: 'bounce',
    })
    //add a from() tween at the beginning of the timline
    tl.from(headlineRef, 0.5, {
      autoAlpha: 0,
      x: 200,
      opacity: 0,
      delay: 0.2,
    })

    //add another tween immediately after
    tl.from(descriptionRef, 0.5, { autoAlpha: 0, x: -100, opacity: 0 })
  }, [])
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <Container>
          <Row
            style={{
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <Col md={6}>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1
                  ref={(el) => (headlineRef = el)}
                  className={lightText ? 'heading' : 'heading dark'}
                >
                  {headline}
                </h1>
                <p
                  ref={(el) => (descriptionRef = el)}
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/signup'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <div className='home__hero-img-wrapper'>
                <img
                  ref={(el) => {
                    mainImg = el
                  }}
                  src={img}
                  alt={alt}
                  className='home__hero-img'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HeroSection
