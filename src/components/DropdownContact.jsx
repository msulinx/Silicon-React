import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { contextFunctions } from './ContextComponent';

const DropdownContact = () => {

	const { toggleDropdown, isOpen } = contextFunctions ();


  return (
	< >
	<button className="dropdown-button">
		<i onClick={toggleDropdown} className="fa-regular fa-bars"></i>
	</button>
	{isOpen && (
		<ul className="dropdown-menu">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<HashLink to="/contact/#consultation-form">Get Online Consultation</HashLink>
			</li>
			<li>
				<HashLink to="/contact/#map">Find Us</HashLink>
			</li>
		</ul>
	)}
  </>
)}


export default DropdownContact