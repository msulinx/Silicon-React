import React from 'react'
import MapImage from '../assets/images/map.svg'

const Map = () => {
  return (
	<div id="map">
	<img src={MapImage} className="map-image" alt="Map image"/>
	<div className="medical-info">
		<section className="medical-one">
			<h2>Medical center 1</h2>
			<p className="address">4517 Washington Ave. Manchester, Kentucky 39495</p>
			<a href="#" className="number">(406) 555-0120</a>
			<p className="opening-hours"><b>Mon - Fri:</b> 9:00 am - 22:00 am
				<span><b>Sat - Sun:</b> 9:00 am - 20:00 am</span></p>
		</section>
		<section className="medical-two">
			<h2>Medical center 2</h2>
			<p className="address">2464 Royal Ln. Mesa, New Jersey 45463</p>
			<a href="#" className="number">(406) 544-0123</a>
			<p className="opening-hours"><b>Mon - Fri: </b> 00 am - 22:00 am
				<span><b>Sat - Sun:</b> 9:00 am - 20:00 am</span></p>
		</section>
	</div>
</div>
  )
}

export default Map