import React from 'react'

import CalmerNavBar from '../components/CalmerNavBar'
import Address from '../components/Address'
import MessageCalmer from '../components/MessageCalmer'
import AddressCard from '../components/AddressCard'

class Contact extends React.Component{
	render(){
		return(
			<div>
				<header>
					<CalmerNavBar/>
				</header>

				<main className="container-fluid px-5">
					<h1>Contact Us</h1>
					<Address/>
					<div className="row">
						<div className="col-sm-4 mt-4 mx-5">
							<h1>Why not pay us a visit?</h1>
							<p className="text-justify">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s. It has survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged.
							</p>
							<AddressCard/>
						</div>

						<div className="col-sm-7 px-5">
							<MessageCalmer/>
						</div>
					</div>
				</main>
			</div>
		)
	}
}

export default Contact