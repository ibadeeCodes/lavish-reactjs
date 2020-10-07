import React from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Service from './components/pages/Service'
import Product from './components/pages/Product'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Service} />
        <Route exact path='/products' component={Product} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
