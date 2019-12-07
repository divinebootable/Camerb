import React from 'react'
import {Button, Form, Col} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Logo from '../images/Logo.png'

class ServiceNavbar extends React.Component{
	constructor(props, context) {
    	super(props, context);

    	this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);

    	this.state = {
    		show: false,
    	};
	}

	handleClose() {
    	this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render(){
		return(
			<div className="py-n5">
				<nav className="navbar navbar-expand-lg navbar-light bg-light py-n1">
				    <div className="d-flex flex-grow-1">
				        <span className="w-100 d-lg-none d-block"></span>
				        <Link className="navbar-brand d-none d-lg-inline-block" to="/">
				            <img src={Logo} alt="CalmerLogo" className="logo"/>
				        </Link>
				        <Link className="navbar-brand-two mx-auto d-lg-none d-inline-block" to="/">
				            <img src="//placehold.it/40?text=LOGO" alt="logo"/>
				        </Link>
				        <div className="w-100 text-right">
				            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
				                <span className="navbar-toggler-icon"></span>
				            </button>
				        </div>
				    </div>

				    <div className="d-flex flex-grow-1  my-auto">
						<Form className="ml-n5" style={{width:"100%"}} >
							<Form.Row>
								<Col xs={10}>
									<Form.Control
										className="mr-n5 ml-1"
										id="textNavBarSearchCalmer"
										placeholder="Find a service" />
								</Col>
								<Col xs={2}>
									<Button
									className="mr-1 ml-n3 mb-2"
									id="buttonNavBarSearchCalmerHome"
									variant="secondary"
									>
						            	Search
						        	</Button>
								</Col>
							</Form.Row>
						</Form>
					</div>
				    
				    <div className="collapse navbar-collapse flex-grow-1 text-right" id="calmerNavbar">
				        <ul className="navbar-nav ml-auto flex-nowrap">""
					      
							{/*change <a> to <Link>*/}
				           
				            {/*<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle m-2 menu-item" to="/services" id="navbarDropdown"
								role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Services
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" href="/services">Events</Link>
									<Link className="dropdown-item" href="/services">Tourism</Link>
								</div>
			            	</li>*/}
			          
				            <li className="nav-item">
				                <Link className="nav-link m-2 menu-item" to="/ourworks"><small>Gallery</small></Link>
				            </li>
				            <li className="nav-item">
				                <Link className="nav-link m-2 menu-item" to="/about"><small>About</small></Link>
				            </li>
				            <li className="nav-item">
				                <Link className="nav-link m-2 menu-item" to="/contact"><small>Contact</small></Link>
				            </li>
				            <li className="nav-item">
				            	<Button className="nav-link m-2 menu-item" variant="outline-success" size="sm">
				            		LogOut
				            	</Button>
				            </li>
				            
				        </ul>
				    </div>
				</nav>

				<ServiceNavbarCategories/>

			</div>
		);
	}
}

class ServiceNavbarCategories extends React.Component{
	render(){
		return(
			<div id="navBarCategories" className="d-flex c-flex justify-content-sm-around">
				<ul>
					<li><small>BabyShowers</small></li>
					<li><small>Baptisms</small></li>
					<li><small>Birthdays</small></li>
					<li><small>Campaigns</small></li>
					<li><small>Fund raisers</small></li>
					<li><small>Graduations</small></li>
					<li><small>Launches</small></li>
					<li><small>Seminars</small></li>
					<li><small>Weddings</small></li>
				</ul>
			</div>
		)
	}
}
export default ServiceNavbar