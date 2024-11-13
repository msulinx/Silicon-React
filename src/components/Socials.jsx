import React from 'react'
import FacebookIcon from '../assets/icons/facebook.svg'
import TwitterIcon from '../assets/icons/twitter.svg'
import InstagramIcon from '../assets/icons/instagram.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'

const Socials = () => {
  return (
	<div className="socials">
	<div className="socials-icon" id="icon1">
		<a href="#"><img src={FacebookIcon} alt="Facebook"/></a>
	</div>
	<div className="socials-icon" id="icon2">
		<a href="#"><img src={TwitterIcon} alt="Twitter"/></a>
	</div>
	<div className="socials-icon" id="icon3">
		<a href="#"><img src={InstagramIcon} alt="Instagram"/></a>
	</div>
	<div className="socials-icon" id="icon4">
		<a href="#"><img src={YoutubeIcon} alt="Youtube"/></a>
	</div>
</div>
  )
}

export default Socials