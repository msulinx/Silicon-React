import React from 'react'
import Logo1 from '../assets/images/logo1.png'
import Logo2 from '../assets/images/logo2.png'
import Logo3 from '../assets/images/logo3.png'
import Logo4 from '../assets/images/logo4.png'
import Logo5 from '../assets/images/logo5.png'
import Logo6 from '../assets/images/logo6.png'

const Logos = () => {
  return (
	<div className="logos">
	<div className="logo-container">
		<div className="logo" id="logo1">
			<img src={Logo1} alt="Logo"/>
		</div>
		<div className="logo" id="logo2">
			<img src={Logo2} alt="Logo"/>
		</div>
		<div className="logo" id="logo3">
			<img src={Logo3} alt="Logo"/>
		</div>
		<div className="logo" id="logo4">
			<img src={Logo4} alt="Logo"/>
		</div>
		<div className="logo" id="logo5">
			<img src={Logo5} alt="Logo"/>
		</div>
		<div className="logo" id="logo6">
			<img src={Logo6} alt="Logo"/>
		</div>
	</div>
</div>
  )
}

export default Logos