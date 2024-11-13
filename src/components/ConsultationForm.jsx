import React from 'react'
import { useState } from "react";

const ConsultationForm = () => {

	const [options, setOptions] = useState([{ id: 1, text: "1" }, { id: 2, text: "2" }, { id: 3, text: "3" }])
	const [formData, setFormData] = useState({ fullName: '', email: '', specialist: options[0].id, });
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);


	const validateField = (name, value) => {
		let error = ''

		if (name === "fullName" && !/^[A-Öa-ö\s-]{2,}$/.test(value)) {
			error = "Your name must be at least 2 characters long. No numbers"
		} else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
			error = "Must be a valid email (eg. username@example.com)"
		}


		setErrors(prevErrors => ({...prevErrors, [name]: error}))
	}


	const validateForm = () => {
		const newErrors = {}

		if (!/^[A-Öa-ö\s-]{2,}$/.test(formData.fullName)) {
			newErrors.fullName = "Your name must be at least 2 characters long. No numbers"
		}

		if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
			newErrors.email = "Must be a valid email (eg. username@example.com)"
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0;
	}



	const handleChange  = (e) => {
		const { name, value } = e.target
		setFormData({...formData, [name]: value})

		validateField(name, value)
	};

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (validateForm ()) {

		const res = await fetch ('https://win24-assignment.azurewebsites.net/api/forms/contact',{
			method: 'post',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})

		if (res.ok) {
			setSubmitted(true)
			setFormData({ fullName: '', email: '', specialist: '' })
		}

		}
			
	};

	const handleOk = () => {
		setSubmitted(false)
	};
 
	if (submitted) {
		return (
			<div className="submitbox-contact">
				<h1>You have now booked an appointment!</h1>
				<p>A confirmation has been sent to your email</p>
				<button className="submitted-button" onClick={handleOk}>OK</button>
			</div>
		)
	}

  return (

	<div id="consultation-form">
	<h2>Get Online Consultation</h2>

	<form onSubmit={handleSubmit} noValidate className="appointment-form">

		<div className="form-input">
			<p className="form-label">Full Name</p>
			<input type="text" 
			name="fullName" 
			value={formData.fullName} 
			onChange={handleChange} 
			required 
			className="input-box"/> 
			{errors.fullName && 
			<span className="validation-error">{errors.fullName}</span>}
		</div>

		<div className="form-input">
			<p className="form-label">Email address</p>
			<input type="email" 
			name="email" 
			value={formData.email} 
			onChange={handleChange} 
			required 
			className="input-box"/> 
			{errors.email && 
			<span className="validation-error">{errors.email}</span>}
		</div>

		<div className="form-input">
		<p className="form-label">Specialist</p>
		<select id="customSelect" 
		name="specialist" 
		value={formData.specialist} 
		onChange={handleChange} 
		required>
			{ options.map(option => (
				<option key={option.id}
				 value={option.id}>
				{option.text}</option>))}
		</select>
		</div>
		</form>

	<button className="appointment-button">Make an appointment</button>
	</div>
  )
}

export default ConsultationForm