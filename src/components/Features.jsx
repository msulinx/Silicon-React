import React from 'react'
import FeaturesImage from '../assets/images/featuresimage.png'

const Features = () => {


  return (
	<div id="features">
	<img src={FeaturesImage} alt="Features image"/>
	<div className="features-text-box">
		<h2 className="features-title">App Features</h2>
		<p className="features-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
			Proin volutpat mollis egestas. Nam luctus facilisis 
			ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
	</div>
   <section className="features-list">
	<ul>
		<li id="f1">Easy payments</li>
			<p>Id mollis consectetur congue egestas egestas suspendisse
				blandit justo.</p>
		<li id="f2">Cost Statistics</li>
			<p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
		<li id="f3">Regular Cashback</li>
			<p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
		<li id="f4">Data Security</li>
			<p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
		<li id="f5">Support 24/7</li>
			<p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
		<li id="f6">Top Standards</li>
			<p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
	</ul>
	</section>
</div>
  )
}

export default Features