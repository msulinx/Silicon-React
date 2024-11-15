import React, { useEffect } from 'react'
import { useState } from 'react'
import ContactUs from './ContactUs'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const FAQ = () => {

	const [faqs, setFaqs] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [openIndex, setOpenIndex] = useState(null);
  
	useEffect(() => {
		const fetchFaqs = async () => {
		  try {
			const response = await axios.get('https://win24-assignment.azurewebsites.net/api/faq');
			setFaqs(response.data);

		  } catch (err) {
			setError(err.message);
		  } finally {
			setLoading(false);
		  }
		};
	
		fetchFaqs();
	  }, []);

	  const handleToggle = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	  };

  return (
	<div id="faq">
	<div className="faq-title">
		<h2>Any Questions? <br className="tablet-only-br"/> 
			Check out <br className="phone-only-br"/>the FAQs</h2>
		<p className="contact-info">Still have unanswered questions and need <br className="phone-only-br"/> to get <br className="tablet-only-br" /> in touch?</p>
	</div>

	<div className="questions-container"> 
	<div className="questions">
	{faqs.map(({ id, title, content }, index) => (
		<div key={id}>
			<div className="faqs">
				<h3 className="question">{title}</h3>
				<button onClick={() => handleToggle(index)} id="chevron">
					<FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown}/>
				</button>
				{openIndex === index && <p className="answer">{content}</p>}
			</div>
		</div>
	))}
	</div>
	</div>
	
		<button className="contactbtn">Contact us now</button>

		<ContactUs />
		</div>
  )
}
export default FAQ