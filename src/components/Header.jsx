import React from 'react'
import AppStore from '../assets/images/appstore.png'
import GooglePlay from '../assets/images/googleplay.png'
import HeaderImage from '../assets/images/header-img.svg'

const Header = () => {
  return (
	<div className="header">
	<div className="header-text-box">
		<h1 className="header-title">Manage All Your <br className="phone-only-br"/> Money in One App</h1>
			<p className="header-text">We offer you a new generation of the mobile banking.<br className="tablet-only-br" /> Save, spend & manage money in your pocket.</p>
		<div className="markets">
			<img src={AppStore} className="appstore" alt = "AppStore"/>
			<img src={GooglePlay} className="googleplay" alt = "GooglePlay"/>
		</div>
		<div className="discover">
			<button className="discovericon">
				<i className="fa-sharp fa-thin fa-chevron-down"></i>
			</button>
			<p>Discover more</p>
		</div>
	</div>
	<img src={HeaderImage} className="header-img" alt ="Header image"/>
</div>
  )
}

export default Header