import React, { useRef, useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import './Pricing.scss'
import { gsap, ScrollTrigger, TimelineMax, TweenLite, Linear } from 'gsap/all'
import * as ScrollMagic from 'scrollmagic'

function PricingEach({
  logo,
  title,
  price,
  transactions,
  cashback,
  limit,
  isMiddle,
}) {
  //React supports Capital letter components..that why...
  const Icon = logo

  // GSAP..
  let pricingBox = useRef()

  useEffect(() => {
    TweenLite.defaultEase = Linear.easeNone
    var tl = new TimelineMax()
    tl.staggerFrom(pricingBox, 1.5, {
      scale: 0,
      cycle: {
        y: [-50, 50],
      },
      stagger: {
        from: 'center',
        amount: 0.75,
      },
    })
  }, [])

  return (
    <Link
      ref={(el) => {
        pricingBox = el
      }}
      to='/sign-up'
      className={
        !isMiddle
          ? 'pricing__container-card'
          : 'pricing__container-card isMiddle'
      }
    >
      <div className='pricing__container-cardInfo'>
        <div className='icon'>
          <Icon />
        </div>
        <h3>{title}</h3>
        <h4>${price}</h4>
        <p>per month</p>
        <ul className='pricing__container-features'>
          <li>{transactions} Transactions</li>
          <li>{cashback}% Cash Back</li>
          <li>${limit} Limit</li>
        </ul>
        <Button className='btn' buttonSize='btn--wide' buttonColor='primary'>
          Choose Plan
        </Button>
      </div>
    </Link>
  )
}

export default PricingEach
