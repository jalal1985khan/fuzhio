import React from 'react'

import Header from '../common/Header'
import Footer from '../common/Footer'

import HeroBanner from './AboutBanner'
import About from './About'
import FuzhioTeam from './OurTeam'
import Partners from './Partners'

import BootstrapScript from '../Style-Script'


const index = () => {
  return (
    <>
    <Header />
    <HeroBanner />
    <About />
    <FuzhioTeam />
    <Partners />
    <Footer />
    </>
  )
}

export default index