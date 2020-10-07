import { FaFire } from 'react-icons/fa'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'

export const Starter = {
  logo: FaFire,
  title: 'Starter',
  price: 8.99,
  transactions: 100,
  cashback: 2,
  limit: 10000,
  isMiddle: false,
}

export const Gold = {
  logo: BsXDiamondFill,
  title: 'Gold',
  price: 29.99,
  transactions: 1000,
  cashback: 3.5,
  limit: 100000,
  isMiddle: true,
}

export const Diamond = {
  logo: GiCrystalize,
  title: 'Diamond',
  price: 99.99,
  transactions: 'Unlimited',
  cashback: 5,
  limit: 'Unlimited',
  isMiddle: false,
}
