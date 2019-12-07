import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaHeart, FaUndo } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';
//import { UncontrolledAlert } from 'reactstrap';
import swal from 'sweetalert';


class ServiceCard extends React.Component{

	constructor(props) {
 		super(props);
 		this.state = {
 			isFlipped: false,
 			services: []

 			
 		};
 		this.handleClick = this.handleClick.bind(this);
 	}
 	

 	handleClick(e) {
 		e.preventDefault();
 		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
 	}

	render(){

		 const serviceCard = this.state.services.map((service)=>{

			      return(
			              <div key={ service.id } className="col-sm-4 my-3 ml-n1">
				<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
					<div key="front">
						<Card  className="shadow-sm border rounded">
							<Card.Img src="http://placeimg.com/400/217/tech" variant="One service"/>
							
							<Card.Body className="mb-0 pb-0">
								<div className="row mt-n3">
									<div className="col-sm-4 text-muted">
										<ul className="ratings-list">
											<li>5.0</li>
										</ul>
										<p className="ml-n1 mt-n4"><small>100+ Reviews</small></p>
									</div>

									<div className="col-sm-8">
										<h6>{console.log(service.service_name)}</h6>
										<h6 className="mt-n1">{service.service_category}</h6>
									</div>
								</div>

								<div className="row mt-n2 ml-1">
									<p>
										{service.service_detials}
										<span className="text-info" onClick={this.handleClick}> more...</span>
									</p>
								</div>
							</Card.Body>

							<Card.Footer className="bg-white py-1">
								<ServiceCardFooter/>
							</Card.Footer>
						</Card>						
					</div>

					
				</ReactCardFlip>
			              </div>
		                )
			      })  

		 return(
                 <div className="col-sm-4 my-3 ml-n1">

                 {serviceCard}
                 </div>



		 	)
           


			
	}
}

class ServiceCardFooter extends React.Component{
	onSubmitSignIn =()=>{
           swal("Please", "Login to order", "alert") 
    }
	
	render(){
		return(
			<div className="row">
				<div className="col-sm-2">
					<IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
						<div>
							<FaHeart/>									
						</div>
					</IconContext.Provider>
				</div>

				<div className="col-sm-10 text-right">
					<Button variant="outline-success" onClick={this.onSubmitSignIn} size="sm">Order now</Button>
				</div>
			</div>
		)
	}
}
export default ServiceCard