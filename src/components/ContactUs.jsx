import React from 'react'
import PhoneIcon from '../assets/icons/phone-icon.png'
import MailIcon from '../assets/icons/mail-icon.png'

const ContactUs = () => {
  return (
	<div className="contact-container">
	<div className="contact-box">
	<img src={PhoneIcon} className="phone-icon" alt="Phone icon"/>
		<p className="phone-title">Still have questions?</p>
		<span className="phone-text">
			<p className="contact-phone">Contact us</p>
			<button className="fa-solid fa-arrow-right"></button>
		</span> 
	</div>
	<div className="contact-box">
		<img src={MailIcon} alt="Mail icon"/>
		<p className="mail-title">Don't like phone calls?</p>
		<span className="mail-text">
			<p className="mail-button">Contact us</p>
			<button className="fa-solid fa-arrow-right"></button>
		 </span>
	</div>
</div>
  )
}

export default ContactUs