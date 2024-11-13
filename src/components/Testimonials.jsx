import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';
import CommentCard from './CommentCard'


const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
  
	useEffect(() => {
	  const fetchTestimonials = async () => {
		try {
		  const response = await axios.get('https://win24-assignment.azurewebsites.net/api/testimonials');
		  setTestimonials(response.data);
		} catch (err) {
		  setError(err);
		} finally {
		  setLoading(false);
		}
	  };
  
	  fetchTestimonials();
	}, []);

  return (
	<>
	<div className="client-review">
		<h1>Clients are <br className="desktop-only-br"/>Loving Our App</h1>
	{testimonials.map(({ id, author, avatarUrl, comment, jobRole, starRating }) => (
	  <CommentCard key={id} author={author} avatarUrl={avatarUrl} comment={comment} jobRole={jobRole} starRating={starRating} />
	))}
  </div>
  </>
  )
}


export default Testimonials