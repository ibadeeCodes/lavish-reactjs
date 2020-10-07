import React, { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import './Service.scss'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { Power2, Power4, gsap } from 'gsap/all'

import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'

function Service() {
  let container = useRef(null)
  let image = useRef(null)
  //cards..
  let serviceCard1 = useRef(null)
  let serviceCard2 = useRef(null)
  let serviceCard3 = useRef(null)
  let serviceCard4 = useRef(null)

  let intersectionSpecs = {
    root: null, // w.r.t to viewport.
    rootMargin: '0px',
    threshold: 0.5, // It means 80% screen jab visible hogi ,tb effect chalega!
  }

  let intersection1 = useIntersection(serviceCard1, intersectionSpecs)
  let intersection2 = useIntersection(serviceCard2, intersectionSpecs)
  let intersection3 = useIntersection(serviceCard3, intersectionSpecs)
  let intersection4 = useIntersection(serviceCard4, intersectionSpecs)

  let fadeIn = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: -60,
      ease: 'Power4.out',
      stagger: {
        amount: 0.3, // It tells how much delay should the very next element have.
      },
    })
  }

  let fadeOut = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: 'Power4.out',
    })
  }

  // determine the position w.r.t viewport
  intersection1 && intersection1.isIntersecting < 0.8
    ? fadeOut('.fadeIn1')
    : fadeIn('.fadeIn1')
  // determine the position w.r.t viewport
  intersection2 && intersection2.isIntersecting < 0.8
    ? fadeOut('.fadeIn2')
    : fadeIn('.fadeIn2')
  // determine the position w.r.t viewport
  intersection3 && intersection3.isIntersecting < 0.8
    ? fadeOut('.fadeIn3')
    : fadeIn('.fadeIn3')
  // determine the position w.r.t viewport
  intersection4 && intersection4.isIntersecting < 0.8
    ? fadeOut('.fadeIn4')
    : fadeIn('.fadeIn4')

  let ImageReveal = CSSRulePlugin.getRule('.img__container::after')

  let tl = gsap.timeline()
  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } })
      .to(ImageReveal, 1.8, {
        width: '0%',
        ease: Power2.easeInOut,
      })
      .to(image, 1.4, { scale: '1.0', ease: ' Power2.easeInOut', delay: -1.6 })
  }, [])
  return (
    <>
      <div className='main'>
        <div className='container' ref={(el) => (container = el)}>
          <h3
            style={{
              transform: 'rotate(-90deg)',
              letterSpacing: '8px',
              textTransform: 'uppercase',
            }}
          >
            Services
          </h3>
          <>
            <div className='img__container'>
              <img
                ref={(el) => (image = el)}
                src='images/services.webp'
                alt=''
              />
            </div>
          </>
        </div>
      </div>
      <div className='services__box'>
        <Container>
          <Row>
            <Col md={6}>
              <div ref={serviceCard1} className='services__each'>
                <h1 className='service__heading fadeIn1'>
                  <FaFire />
                  We Promise
                </h1>
                <p className='service__description fadeIn1'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  doloribus nihil amet harum sed, deleniti ea optio quas
                  quisquam saepe quis blanditiis maiores vel sapiente cum, est
                  magni explicabo temporibus! Labore assumenda quia facere, aut
                  totam ullam nesciunt aperiam reprehenderit ut libero
                  distinctio repudiandae numquam incidunt culpa repellendus,
                  vero amet?
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div ref={serviceCard2} className='services__each'>
                <h1 className='service__heading fadeIn2'>Our Values</h1>
                <p className='service__description fadeIn2'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  doloribus nihil amet harum sed, deleniti ea optio quas
                  quisquam saepe quis blanditiis maiores vel sapiente cum, est
                  magni explicabo temporibus! Labore assumenda quia facere, aut
                  totam ullam nesciunt aperiam reprehenderit ut libero
                  distinctio repudiandae numquam incidunt culpa repellendus,
                  vero amet?
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div ref={serviceCard3} className='services__each'>
                <h1 className='service__heading fadeIn3'>Our Policies</h1>
                <p className='service__description fadeIn3'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  doloribus nihil amet harum sed, deleniti ea optio quas
                  quisquam saepe quis blanditiis maiores vel sapiente cum, est
                  magni explicabo temporibus! Labore assumenda quia facere, aut
                  totam ullam nesciunt aperiam reprehenderit ut libero
                  distinctio repudiandae numquam incidunt culpa repellendus,
                  vero amet?
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div ref={serviceCard4} className='services__each'>
                <h1 className='service__heading fadeIn4'>Our Gaurantee</h1>
                <p className='service__description fadeIn4'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                  doloribus nihil amet harum sed, deleniti ea optio quas
                  quisquam saepe quis blanditiis maiores vel sapiente cum, est
                  magni explicabo temporibus! Labore assumenda quia facere, aut
                  totam ullam nesciunt aperiam reprehenderit ut libero
                  distinctio repudiandae numquam incidunt culpa repellendus,
                  vero amet?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Service
