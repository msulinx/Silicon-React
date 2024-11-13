import React from 'react'
import ContactsImage from '../assets/images/contacts.png'
import CardIcon from '../assets/icons/creditcard.png'
import WalletIcon from '../assets/icons/wallet.png'


const RecievePayment = () => {
  return (
	<div className="recieve-payment">
	<img src={ContactsImage} className="contacts-img" alt="Contacts image"/>
	<h2>Receive payment from <br className="desktop-only-br"/> international bank details</h2>
		<div className="textbox-container">
			<div className="text-box-1">
				<img src={CardIcon} alt="Credit card icon"/>
				 <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
				 <button className="learn-more-button">Learn more</button>
			</div>
			<div className="text-box-2">
				<img src={WalletIcon} alt="Wallet icon"/>
				<p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
			</div>
		</div>
</div>

  )
}

export default RecievePayment