import React from 'react'

import {Collapse} from 'react-bootstrap'

import {FaRegCheckCircle} from 'react-icons/fa';

class OrdersList extends React.Component{
	constructor(props, context) {
		super(props, context);
		this.state = {
			open: false,
		};
	}

	render(){
		const { open } = this.state;
		
		return(
			<div>
				<div className="container-fluid mt-4 px-4">
					<div onClick={() => this.setState({ open: !open })}
						aria-controls="example-collapse-text"
						aria-expanded={open}><OrderHighlight/>
					</div>

					<Collapse in={this.state.open}><div ><OrderDetailsAdmin/></div></Collapse>
				</div>
					
				
			</div>
		)
	}
}

class OrderHighlight extends React.Component{
	render(){
		return(
			<div className="row rounded shadow-sm py-2">
				<div className="col-sm-1 text-center text-info">
					<FaRegCheckCircle/>
				</div>
				<div className="col-sm-3 text-info ml-n4">
					<h4>Service ordered</h4>
				</div>

				<div className="col-sm-4 text-secondary py-auto">
					<h5>Category</h5>
				</div>

				<div className="col-sm-2 text-right">
					<button type="button" className="btn btn-outline-danger">Decline Order</button>
				</div>

				<div className="col-sm-2">
					<button type="button" className="btn btn-success">Mark as completed</button>
				</div>
			</div>
		)
	}
}


class OrderDetailsAdmin extends React.Component{
	render(){
		return(
			<div className="shadow-sm mx-3 p-3">
				<div className="row">
					<div className="col-sm-4">
						<img src="http://placeimg.com/300/290/tech" alt="order" className="w-100 h-100"/>
					</div>

					<div className="col-sm-8">

						<div className="row">
							<div className="col-sm-3 shadow-sm bg-dark text-white mr-4 ml-3 mb-2 pt-2 px-3">
								<h5>Order details</h5>
								<ul className="custom-list">
									<li>Location</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
									<li>Lorem ipsum</li>
								</ul>
							</div>

							<div className="col-sm-8 shadow-sm bg-dark text-white mb-2 pt-2 px-3">
								<h5>Client's message</h5>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
						</div>

						<div className="row mt-2">
							<div className="col-sm-6 shadow-sm bg-dark text-white pt-2 px-3">
								<h5 className="text-center">Client details</h5>
								<ul className="custom-list ">
									<li>Name: John Doe</li>
									<li>Address: Accra, Ghana</li>
									<li>Phone: +123 456 7890</li>
									<li>Email: johndoe@thismail.extension</li>
								</ul>
							</div>
							<div className="col-sm-6 mx-auto">
								<div className="shadow-sm bg-dark text-white py-2 px-3 mb-2">
									<p>Order Date:</p>
									<p>Delivery date:</p>
								</div>
								<div className="shadow-sm bg-dark text-white py-2 px-3 mt-3">
									<h5>Other</h5>
								</div>
							</div>
						</div>
					</div>					
				</div>
			</div>
		)
	}
}

export default OrdersList