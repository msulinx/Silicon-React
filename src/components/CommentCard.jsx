import React from 'react'

const CommentCard = ({ author, avatarUrl, comment, jobRole, starRating }) => {

	const renderStars = (rating) => {
	  return Array.from({ length: 5 }, (_, index) => (
		<span key={index} style={{ color: index < rating ? 'gold' : 'gray' }}>
		  ★
		</span>
	  ));
	};

	return (
	  <div className="review-card">
		<div className="quote">
			<i className="fa-sharp fa-solid fa-quote-left"></i>
		</div>
		<div className="review-content">
		  <div>{renderStars(starRating)}</div>
		  <p className="reivew-comment">{comment}</p>
		  <img className="avatar"src={avatarUrl} alt={`${author}'s avatar`} />
		  <h3 className="title">{author}</h3>
		  <p className="jobrole">{jobRole}</p>
		</div>
	  </div>
	);
  };
  

export default CommentCard