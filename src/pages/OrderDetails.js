import React from 'react'

import CalmerNavBar from '../components/CalmerNavBar'
import {Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegTrashAlt, FaShoppingCart, FaSmile } from 'react-icons/fa';

class OrderDetails extends React.Component{
	render(){
		return(
			<div>

			<header>
				<CalmerNavBar/>
			</header>

			<main  className="container-fluid px-5">
				<h1>ORDER SUMMARY</h1>

				<div className="text-right mt-n5 mr-5 mb-3">
					<CustomOrderBtn/>
				</div>

				<OrderSummary/>
				<OrderSummary/>

				<div className="col shadow-sm text-right py-2">
					<h4>Total Price: USD 1234</h4>
				</div>

				<div className="row mt-4">
					<div className="col-sm-6 text-right">
						<Button href="/services" className="btn-success btn-lg"> <FaShoppingCart/> Continue Shopping</Button>
					</div>

					<div className="col-sm-6">
						<Button href="/checkout" className="btn-success btn-lg"> <FaSmile/> Proceed to Checkout</Button>
					</div>
				</div>
			</main>

			</div>
		)
	}
}

class CustomOrderBtn extends React.Component{
	render(){
		return(
			<div className="text-right pt-n5 mt-n5 mr-5 mb-3">
				<Button className="btn-circle" variant="info"> Custom Order </Button>
			</div>
		)
	}
}

class OrderSummary extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="row shadow rounded border-light my-5">
					<div className="col-sm-3 py-2">
						<img src="http://placeimg.com/100/70/tech" alt="" className="rounded-left mx-auto w-100 h-100"/>
					</div>

					<div className="col-sm-9">
						<div className="row">
							<div className="col-sm-7 my-auto pt-3">
								<h4>Some important details about the order</h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
								<div className="row mt-3 ml-3">
									<ul className="golden-list">
										<li><h6>Delivery Date: dd/mm/yyy</h6></li>
										<li><h6>Delivery Mode</h6></li>
									</ul>
								</div>
							</div>

							<div className="col-sm-3  p-auto my-auto h-100 w-100">
								<h3 className="text-right">Item Price</h3>
								<h5 className="text-right">USD 1234</h5>
								<div className="text-muted ml-5 mt-3 pl-5">
									<ul className="ratings-list">
										<li>5.0</li>
									</ul>
									<p className="ml-n1 mt-n4"><small>100+ Reviews</small></p>
								</div>
							</div>

							<div className="col-sm-2 text-center my-auto">
								<Link className="mx-2"><FaRegHeart/></Link>
								<Link className="mx-2"><FaRegTrashAlt/></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default OrderDetails