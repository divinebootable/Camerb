import React from 'react'
import AdSense from 'react-adsense';

import {Jumbotron} from 'react-bootstrap'

import '../styles/adbanner.css';

class AdBanner extends React.Component{
	render(){
		return(
			<div>
				<Jumbotron className="container-fluid adbanner">
					<div className="jumbotronHeader">
						<h2> THIS WEEK'S PROMOTIONAL DEALS</h2>
					</div>


					<div className="row container-fluid jumbotronBody">
						<div className="col-sm-10">
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a type
								specimen book. It has survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. 
							</p>
						</div>

						<div className="col-sm-2 text-left">
							<img src="http://placeimg.com/100/100/arch" variant="One service" className="img-circle" alt="adimage"/>
						</div>
					</div>
					
				</Jumbotron>
			</div>
		)
	}
}

export default AdBanner