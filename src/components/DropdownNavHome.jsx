import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { contextFunctions } from './ContextComponent';

const DropdownHome = () => {


	const { toggleDropdown, isOpen } = contextFunctions ();


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