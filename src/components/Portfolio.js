import React from 'react'
import {Card} from 'react-bootstrap'

class Porfolio extends React.Component{
	render(){
		return(
			<div className="row w-auto d-flex">
				<ul>
					<li> <PortfolioCard/> </li>
					<li> <PortfolioCard/> </li>
					<li> <PortfolioCard/> </li>
					<li> <PortfolioCard/> </li>
					<li> <PortfolioCard/> </li>
				</ul>
			</div>
		)
	}
}

class PortfolioCard extends React.Component{
	render(){
		return(
			<div>
				<Card className="bg-light text-white shadow-sm" border="light">
					<Card.Img src="http://placeimg.com/220/280/tech" alt="Card image" />

					<Card.Footer className="py-1 ">
						<PorfolioCardFooter/>
					</Card.Footer>
				</Card>
			</div>
		)
	}
}

 class PorfolioCardFooter extends React.Component{
 	render(){
 		return(
 			<div className="row" >
 				<div className="col-sm-s1 pt-2 pl-1">
 					<img className="img-circle img-xs ml-2" src="http://placeimg.com/400/400/people" alt="CalmerLogo"/>
 				</div>

 				<div className="col-sm-s11 m-auto">
 					<Card.Title className="text-dark m-auto">Service name</Card.Title>
 					<p className="text-dark m-auto"><small>Category</small></p>
 				</div>
 			</div>
 		)
 	}
 }
 
export default Porfolio