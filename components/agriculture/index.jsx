import React from 'react'

import Header from '../common/Header';
import Footer from '../common/Footer';

import Agriculture from './Agriculture';
import AgriBanner from './AgriBanner';

const index = () => {
  return (
    <>
    <Header />
        <AgriBanner />
        <Agriculture />
    <Footer />
    </>
    
  )
}

export default index