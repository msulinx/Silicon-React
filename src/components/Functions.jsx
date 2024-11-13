import React from 'react'
import Phone1 from '../assets/images/phone1.svg'
import Phone2 from '../assets/images/phone2.png'
import Phone2x from '../assets/images/phone2x.svg'
import Phone3 from '../assets/images/phone3.png'
import Phone3x from '../assets/images/phone3x.png'
import Phone4 from '../assets/images/phone4.svg'


const Functions = () => {
  return (
	<div id="functions">
	<h1 className="functions-title">How Does It Work?</h1>
	<div className="image-container">
		<img src={Phone1} className ="phoneimg" id="phone1" alt="Budget image"/>
		<img src={Phone2} className ="phoneimg" id="phone2" alt="Transactions image"/>
		<img src={Phone2x} className="phoneimg" id="phone2x" alt="Transactions image blur"/>
		<img src={Phone3} className ="phoneimg" id="phone3" alt="Balance image"/>
		<img src={Phone3x} className ="phoneimg" id="phone3x" alt="Balance image blur"/>
		<img src={Phone4} className ="phoneimg" id="phone4" alt="Transfer image"/>
	</div>
	<section className="functions-text-small">
		<h3>Transfers to people from your contact list</h3>
		<p>Proin volutpat mollis egestas. Nam luctus facilisis 
			ultrices. Pellentesque volutpat ligula est. Mattis
			fermentum, at nec lacus.</p>
	</section>
	<section className="functions-text-wide">
		<h3>Latest transaction history</h3>
		<p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
	</section>
</div>
  )
}

export default Functions