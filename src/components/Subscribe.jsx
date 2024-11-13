import React from 'react'
import ClockIcon from '../assets/icons/notification.png'
import { useState } from 'react'

const Subscribe = () => {

	const [subscribeForm, setSubscribeForm] = useState({ email: ''})
	const [submitted, setSubmitted] = useState(false)
	const [errors, setErrors] = useState({});

	const validateField = (name, value) => {
		let error = ''

		if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
			error = "Must be a valid email (eg. username@example.com)"
		}


		setErrors(prevErrors => ({...prevErrors, [name]: error}))
	}


	const validateForm = () => {
		const newErrors = {}

		if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(subscribeForm.email)) {
			newErrors.email = "Must be a valid email (eg. username@example.com)"
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0;
	}



	const handleChange  = (e) => {
		const { name, value } = e.target
		setSubscribeForm({...subscribeForm, [name]: value})

		validateField(name, value)
	};

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (validateForm ()) {

		const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/subscribe',{
			method: 'post',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(subscribeForm)
		})

		if (res.ok) {
			setSubmitted(true)
			setSubscribeForm({ email: '' })
		}

		}
			
	};

	const handleOk = () => {
		setSubmitted(false)
	};
 
	if (submitted) {
		return (
			<div className="submitbox-home">
				<h1>You have now subscribed to our newsletter!</h1>
				<button className="submitted-button" onClick={handleOk}>OK</button>
			</div>
		)
	}

  return (
	<div id="subscribe">
	<section className="sub-flex">
		<img src={ClockIcon} className="sub-icon" alt="Clock icon"/>
		<p className="sub-title">Subscribe to our newsletter</p>
	</section>
	
	<form id="sub-text-box" onSubmit={handleSubmit} noValidate>
		<input type="email" id="subinput" placeholder="&#xf0e0; Your Email" name="email"
		value={subscribeForm.email} onChange={handleChange} required/>
		<button className="subscribe-button">Subscribe</button>
		{errors.email && <span className="validation-error">{errors.email}</span>}
		</form>
</div>

  )
}

export default Subscribe