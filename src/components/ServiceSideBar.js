import React from 'react'
import {Button} from 'react-bootstrap'

import readMore from '../javascript/readMore'

import heart from '../images/heart.jpg'

class ServiceSideBar extends React.Component{

	showMoreText(){
		readMore();
	}

	render(){
		return(
			<div>

				<div className="shadow-sm rounded mt-3 mb-4 mx-4 p-3">
					<h4 className="text-center">Events</h4>
					<ul className="custom-list">
						<li>Beauty and make up</li>
						<li>Cakes</li>
						<li>Catering services</li>
						<li>Cleaning services</li>
						<li>Decor</li>
						<li>Designer/ Fashion</li>
						<li>Digital design</li>
						<li>Drinks</li>
						<li>Entertainers</li>
						<li>Event planner</li>
						<span id="dots"></span> {/*Don't remove!!! This elemennt may seem useless, but trust me, it is not*/}
						<span id="more" style={{display:"none"}} >
							<li>Event venue</li>
							<li>Floral</li>
							<li>Gift items</li>
							<li>Honey moon destinations</li>
							<li>Hostess</li>
						</span>
						<Button
							id="moreBtn"
							variant="outline"
							onClick={this.showMoreText}>
							More...
						</Button>
					</ul>
				</div>

				<div className="col text-center">
					<img src={heart} alt="heart" style={{width:"30px", height:"30px"}} />
					<hr style={{marginTop:"-14px", width:"60px", backgroundColor:"black"}} />
				</div>
				

				<div className="shadow-sm rounded my-3 mb-4 mx-4 p-3">
					<h4 className="text-center">Tourism</h4>
					<ul className=" custom-list">
						<li>Accommodation</li>
						<li>Banks</li>
						<li>Car rentals</li>
						<li>Cinema theaters</li>
						<li>Cruise lines</li>
						<li>Domestic Servies</li>
						<li>Historical sites</li>
						<li>Hospitals</li>
						<li>Leisure sites</li>
						<li>Railway</li>
						<li>Travel agency</li>
						<span>More...</span>
					</ul>
				</div>
			</div>
		)
	}
}

export default ServiceSideBar