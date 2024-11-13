import React from 'react'
import LetterIcon from '../assets/icons/letter.svg'
import CareerIcon from '../assets/icons/career-icon.svg'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
	<div className="hero-container">
	<section className="breadcrumb">
		<i className="fa-regular fa-house"></i>
		<NavLink className="home-link" to="/">Homepage</NavLink>
		<i className="fa-regular fa-chevrons-right"></i>
		<p className="contact">Contact</p>
	</section>
	<div className="hero-content">
		<h1>Contact Us</h1>
	<div className="text-container">
		<section className="email">
			<div className="heading">
				<div className="circle">
					<img src={LetterIcon} className="email-icon" alt="Email icon"/>
				</div>
				<h2>Email us</h2>
			</div>
			<p className="contact-info-text">Please feel free to drop us a line. We will respond as soon as possible.</p>
			<button className="hero-button">Leave a message</button>
		</section>
		<section className="careers">
			<div className="heading">
				<div className="circle">
					<img src={CareerIcon} className="career-icon" alt="Career icon"/>
				</div>
				<h2>Careers</h2>
			</div>
			<p className="contact-info-text">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
			<button className="hero-button">Send an application</button>
		</section>
	</div>
	</div>
	</div>
  )
}

export default Hero