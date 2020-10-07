import React, { useRef, useEffect, useState } from 'react'
import { Starter, Gold, Diamond } from './PricingData'
import PricingEach from './PricingEach'
import './Pricing.scss'
import * as ScrollMagic from 'scrollmagic'
import { gsap, ScrollTrigger, TimelineMax, TweenLite, Linear } from 'gsap/all'

function Pricing() {
  let PriceBoxContainer = useRef()

  const [scrollMagic, setScrollMagic] = useState({
    controller: new ScrollMagic.Controller(),
    tl: new TimelineMax(),
  })
  const { controller, tl } = scrollMagic

  useEffect(() => {
    var scene = new ScrollMagic.Scene({
      triggerElement: PriceBoxContainer,
      duration: '50%',
      triggerHook: 0.25,
    })
      .addIndicators({
        name: 'Box Timeline',
        colorTrigger: 'white',
        colorStart: 'white',
        colorEnd: 'white',
      })
      .setTween(tl)
      .addTo(controller)
  }, [])
  return (
    <div className='pricing__section'>
      <div className='container'>
        <h1>Pricing</h1>
        <div
          ref={(el) => {
            PriceBoxContainer = el
          }}
          className='pricing__container'
        >
          <PricingEach {...Starter} />
          <PricingEach {...Gold} />
          <PricingEach {...Diamond} />
        </div>
      </div>
    </div>
  )
}

export default Pricing
