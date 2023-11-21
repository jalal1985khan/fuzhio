import React from 'react'

import Header from '../common/Header';
import Footer from '../common/Footer';

import NoblePlastic from './NoblePlastic';
import NoblePlasticBanner from './NoblePlasticBanner';


const index = () => {
  return (
    <>
    <Header />
        <NoblePlasticBanner />
        <NoblePlastic />
    <Footer />
    </>
  )
}

export default index