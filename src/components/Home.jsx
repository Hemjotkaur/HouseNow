import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Section from './Section'
import Platform from './Platform'
import About from './About'
import CareerPage from './CareerPage'
import Location from './Location'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section/>
      <Platform/>
      <About/>
      <CareerPage/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default Home
