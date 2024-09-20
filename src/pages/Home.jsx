import React from 'react'
import HeaderHome from '../components/HeaderHome'
import Hero from '../components/Hero'
import Partners from "../components/Partners"
import Services from "../components/Services"
import Quality from "../components/Quality"
import Connexion from "../components/Connexion"
import Reserve from "../components/Reserve"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className='container'>
        <HeaderHome />
        <Hero />
        <Partners />
        <Services />
        <Quality />
        <Connexion />
        <Reserve />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home
