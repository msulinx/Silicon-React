import React from 'react'
import LogoType from '../assets/icons/siliconlogo.svg'
import { NavLink } from 'react-router-dom'
import DropdownContact from './DropdownContact'
import { useTheme } from './ThemeContext';

const ContactNavbar = () => {

	const {toggleTheme} = useTheme();

  return (
	<nav aria-labelledby="main-navigation">
	<div className="contact-navbar">
		<div className="navbar-left">
			<section className="silicon-logo">
				<img src={LogoType} alt="Silicon logo"/>
				<p>Silicon</p>
			</section>
			<NavLink className="features-link" to="/features">Features</NavLink>
			<NavLink className="contact-link" to="/contact">Contact</NavLink>
		</div>
		<div className="navbar-right">
			<p className="dark-mode-text">Dark Mode</p>
			<label className="switch">
				<input type="checkbox" id="checkbox"/>
				<span onClick={toggleTheme} className="slider round"></span>
			</label>
			<button className="signin-btn">Sign in / up</button>
			<DropdownContact />
		</div>  
	</div>
</nav>
  )
}

export default ContactNavbar