import React from 'react'
import {Form, Col, Row, Button} from 'react-bootstrap';


const divStyle = {

   fontWeight: '800',
   color: '#404040',
   margin: '0px'
};

class SearchCalmer extends React.Component{
	render(){
		return(
			<div class="container pa3 pa5-ns" style={{ position: 'absolute', left: '45%', top: '40%', transform: 'translate(-50%, -50%)'}} >
                <div className="row">
                    <div className="col-lg-7">
                        <div className="header-hero-content">
                            <h1 className="hero-title wow fadeInUp" style={{color:'black', textAlign:'left'}} data-wow-duration="1s" data-wow-delay="0.2s"><b>Your</b> <span style={{color:'#F25848'}}> Event Consultancy</span> Partner for <b>Growth.</b></h1>
                            <p className="text wow fadeInUp" style={{color:'black', textAlign:'left'}} data-wow-duration="1s" data-wow-delay="0.5s"><b>Plan for the unplannable with Africa's most collaborative events platform.</b></p>
                            <div className="header-singup wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
														<Button outline
															className="nav-link mx-2 menu-item text-white"
															variant="success"
															onClick ={this.handleShowSignup}
															size="lg">
																Create free account
														</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)

}


}

export default SearchCalmer
