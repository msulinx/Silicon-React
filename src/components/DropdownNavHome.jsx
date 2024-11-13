import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const DropdownHome = () => {

	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}


  return (
	< >
	<button className="dropdown-button">
		<i onClick={toggleDropdown} className="fa-regular fa-bars"></i>
	</button>
	{isOpen && (
		<ul className="dropdown-menu">
			<li>
				<Link to ="/contact">Contact</Link>
			</li>
			<li>
				<HashLink to="/#features">Features</HashLink>
			</li>
			<li>
				<HashLink to="/#functions">How Does It Work?</HashLink>
			</li>
			<li>
				<HashLink to="/#faq">FAQ</HashLink>
			</li>
			<li>
				<HashLink to="/#subscribe">Subscribe</HashLink>
			</li>
		</ul>
	)}
  </>
)}

export default DropdownHome