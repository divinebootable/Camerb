import React from 'react'

import { Link } from "react-router-dom";

//import icon from '../images/icon.png'


class AdminNavBar extends React.Component{
	render(){
		return(
			<div>
				<nav id="AdminNavBar" className="navbar navbar-expand-lg navbar-dark bg-dark">
				    <div className="d-flex flex-grow-1">
				        <span className="w-100 d-lg-none d-block"></span>
				        <Link className="navbar-brand d-none d-lg-inline-block" to="/adminDashBoard">
				          Home
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

				    <div className="collapse navbar-collapse flex-grow-1 text-right" id="AdminNavBar">
				        <ul className="navbar-nav ml-auto flex-nowrap">						
			            	<li className="nav-item">
				                <Link className="nav-link mx-2 menu-item text-white" to="/serviceslist"><small>Services</small></Link>
				            </li>
				            <li className="nav-item">
				                <Link className="nav-link mx-2 menu-item text-white" to="/calmerOrders"><small>Orders</small></Link>
				            </li>
				            
				            <li className="nav-item border border-light rounded">
				                <Link className="nav-link mx-2 menu-item text-white" to="/">LogOut</Link>
				            </li>
				        </ul>
				    </div>
				</nav>
			</div>
		)
	}
}

export default AdminNavBar