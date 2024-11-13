import React from 'react'
import TransactionsImage from '../assets/images/transactions-img.png'

const Transactions = () => {
  return (
	<div className="transactions-container">
	<div className="transactions-text">
		<h2 className="transfer-title">Make your money <br/> transfer simple and clear </h2>
		<ul>
			<li>Banking transactions are free for you</li>
			<li>No monthly cash commission</li>
			<li>Manage payments and transactions online</li>
		</ul>
		<button className="learn-more-button">Learn more</button>
	</div>
	<img src={TransactionsImage} className="transactions-img" alt ="Transactions image"/>
	</div>

  )
}

export default Transactions