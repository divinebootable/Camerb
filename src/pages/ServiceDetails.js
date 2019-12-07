import React from 'react'
import {Card, Button, Carousel, ListGroup, ListGroupItem} from 'react-bootstrap'

import { Link } from "react-router-dom";

import ServiceNavbar from '../components/ServiceNavbar'
import ServiceImages from '../components/ServiceImages'
import ServiceCard from '../components/ServiceCard'
import Discussions from '../components/Discussions'


import {FaLongArrowAltLeft, FaCartPlus, FaSmile } from 'react-icons/fa';

class ServiceDetails extends React.Component{

	render(){
		return(
			<div >
				<header>
					<ServiceNavbar/>
		        </header>

		        <main className="container-fluid px-5">
					<h1>Service Details</h1>

					<div className="row">
						<div className="col-sm-1">
							<Link to="/services"><h5> <small><FaLongArrowAltLeft/></small>  Back</h5></Link>
						</div>
						<div className="col-sm-9">
							<h5>Service Category</h5>
						</div>
						<div className="col-sm-2">
							<ul className="ratings-list">
								<li>5.0 <small>(100+ Votes)</small></li>
							</ul>
						</div>
					</div>
					<hr className="mt-n2"/>

					<div className="row">
						{/*Left side bar*/}
						<div className="col-sm-4">
							<ServiceImages/>
						</div>

						{/*main content*/}
						<div className="col-sm-5">
							<ServiceCharacteristics/>
						</div>

						{/*right side bar*/}
						<div className="col-sm-3">
							<ServiceDetailsCard/>
							<OrderSummaryCard/>
						</div>
					</div>
				</main>

			 {/*pre-footer*/}
				<div className="container">
					<h1>RECOMMENDATIONS FOR YOU</h1>
					<div className="row">					
						<Carousel>
							<Carousel.Item>
								<SuggestedServices/>
							</Carousel.Item>

							<Carousel.Item>
								<SuggestedServices/>
							</Carousel.Item>

							<Carousel.Item>
								<SuggestedServices/>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>

				<Discussions/>
			</div>
		)
	}
}

class ServiceDetailsCard extends React.Component{
	render(){
		return(
			<div className="mx-2">
				<Card className="shadow-sm border border-light border-round">
					<Card.Body>
						<h4 className="text-center">Price: USD 1234</h4>
						<Card.Text className="text-justify">Lorem Ipsum is simply dummy text of the printing and type setting industry.</Card.Text>
						<Button variant="success" size="lg" block> <FaCartPlus/> Add to cart </Button>
						<hr />
						<Button variant="success" size="lg" block href="/orderdetails"><FaSmile/> Place order </Button>

					</Card.Body>
				</Card>
			</div>
		)
	}
}

class OrderSummaryCard extends React.Component{
	render(){
		return(
			<div className="mx-2 my-4">
				<Card className="shadow-sm border border-round bg-white">
					<Card.Header className="bg-white py-2">
						<Card.Title>Service highlights</Card.Title>
					</Card.Header>
					<ListGroup className="list-group-flush border m-2">
						<ListGroupItem>Lorem:</ListGroupItem>
						<ListGroupItem>Ipsum:</ListGroupItem>
						<ListGroupItem>Dolores:</ListGroupItem>
						<ListGroupItem>Sit amo:</ListGroupItem>
					</ListGroup>
				</Card>
			</div>
		)
	}
}

class ServiceCharacteristics extends React.Component{
	render(){
		return(
			<div className="text-justify border border-round border-white shadow-sm m-1 py-3 px-4">
				<h2 className="text-center">Product Name</h2>
				<h5 className="text-center"> Price: USD 1234 </h5>
				<p>
					Description Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
				</p>
				<ul className="golden-list">
					<li><b>Lorem ipsum:</b>	When an unknown printer took a galley of type and scrambled it to make a type
						specimen book. 
					</li>

					<li><b>Lorem ipsum:</b>	It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
					</li>

					<li><b>Lorem ipsum:</b>	It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
					</li>

					<li><b>Lorem ipsum:</b>	And more recently with desktop publishing software like Aldus PageMaker
						including versions of Lorem Ipsum.
					</li>

					<li><b>Lorem ipsum:</b>	Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</li>
					<li><b>Lorem ipsum:</b>	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					</li>

					<li><b>Lorem ipsum:</b>	It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
					</li>

					<li><b>Lorem ipsum:</b>	It was popularised in the 1960s with the release of Letraset sheets containing
						Lorem Ipsum passages,
					</li>
				</ul>
			</div>
		)
	}
}

class SuggestedServices extends React.Component{
	render(){
		return(
			<div className="row w-auto d-flex mx-auto">
				<ServiceCard/>
				<ServiceCard/>
				<ServiceCard/>
			</div>
		)
	}
}

export default ServiceDetails