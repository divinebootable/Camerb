import React from 'react'

import icon from '../images/icon.png'

class AddressCard extends React.Component{
	render(){
		return(						
			<div className="shadow-sm text-center mt-5 mb-3">
				<h4>Calmer-B Event Planning Services</h4>

				<div className="row">
					<div className="col-sm-2 my-auto ">
						<img src={icon} alt="logo" className="img-medium ml-5"/>
					</div>

					<div className="col-sm-10">
						<ul className="no-bullet-list">
							<li>Street, City, Country</li>
							<li>PO Box</li>
							<li>Tel: +123 456 7890</li>
							<li>Fax: +123 456 7890</li>
							<li>Email: email@email.com</li>
						</ul>
					</div>
				</div>
			</div>
			
		)
	}
}


export default AddressCard