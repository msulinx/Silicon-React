import React from 'react'
import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import Header from '../src/components/Header'
import Logos from '../src/components/Logos'
import Features from '../src/components/Features'
import Functions from '../src/components/Functions'
import Transactions from '../src/components/Transactions'
import RecievePayment from '../src/components/RecievePayment'
import Testimonials from '../src/components/Testimonials'
import FAQ from '../src/components/FAQ'
import Subscribe from '../src/components/Subscribe'
import Footer from '../src/components/Footer'
import { useTheme } from '../src/components/ThemeContext'

const Home = () => {

  const {theme} = useTheme ();


  return (
      <div id="content-wrap" data-theme={theme}>
        <Navbar/>
        <Header />
        <Logos />
        <Features />
        <Functions />
        <Transactions />
        <RecievePayment />
        <Testimonials />
        <FAQ />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home