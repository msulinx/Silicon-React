import React from 'react'
import { useState } from 'react'
import '/src/assets/css/Contact.css';
import ContactNavbar from '../src/components/ContactNavbar'
import Hero from '../src/components/Hero'
import ConsultationForm from '../src/components/ConsultationForm'
import Map from '../src/components/Map'
import Socials from '../src/components/Socials'
import Footer from '../src/components/Footer'
import { contextFunctions } from '../src/components/ContextComponent'

const ContactPage = () => {

  const { theme } = contextFunctions ();

  return (
    <div id="content-wrap" data-theme={theme}>
	    <ContactNavbar/>
      <Hero />
      <ConsultationForm />
      <Map />
      <Socials />
      <Footer />
    </div>
  )
}

export default ContactPage