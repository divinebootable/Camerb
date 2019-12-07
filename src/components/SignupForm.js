import React from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';




class SignupForm extends React.Component{
	constructor(props){
       super(props);
       this.state={
       	first_name:"",
        last_name:"",
       	email:"",
       	password:"",
       	confirmPassword:"",
       	mobile_number:"",
       	usertype:'select'

         }

        
	}



     onFirstNameChange = (event)=>{
     	this.setState({first_name:event.target.value})
     }

     onLastNameChange = (event)=>{
     	this.setState({last_name:event.target.value})
     }

	 onEmailChange = (event)=>{
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event)=>{
		this.setState({password: event.target.value})
	}

	onconfirmPasswordChange =(event)=>{
		this.setState({confirmPassword:event.target.value})
	}

	onPhoneNumberChange = (event)=>{
		this.setState({mobile_number: event.target.value})
	}
	 handleChange(event){
    this.setState({
      usertype: event.target.value
    })
  }

  validateUser = () =>{

  }



	onSubmitSignIn =()=>{
          
	  fetch('http://localhost:3001/auth/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      	first_name:this.state.first_name,
      	last_name:this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        mobile_number: this.state.mobile_number,
        usertype:this.state.usertype
      })
    })
      .then(response => response.json())
      .then(user =>{
      	  if (user){
      	  	let path = `/ServiceDetails`;
            this.props.history.push(path);
                 swal("Good job", "Registration successful", "success") 
                  
              
      	  }
      });
      
        
  }
	render(){
		
            const { first_name,last_name,email,password,mobile_number,usertype } = this.state;
	      const enabled =first_name.length > 0 && last_name.length > 0 && email.length>0 && password.length>0 && mobile_number.length > 0 && usertype.length > 0;

		return(
			<div className="px-5 py-3">
				<Form>
					<Form.Group as={Row} controlId="formHorizontalName">
					    <Col>
					    	<Form.Control onChange={this.onFirstNameChange} autocomplete="off" placeholder="First name" />
					    </Col>
					    <Col>
					    	<Form.Control onChange={this.onLastNameChange} autocomplete="off" placeholder="Last name" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalEmail">
					    <Col>
					    	<Form.Control onChange={this.onEmailChange} autocomplete="off" type="email" placeholder="Email" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
					    <Col>
						    <Form.Control onChange={this.onPasswordChange} autocomplete="off"  type="password" placeholder="Password" />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
					    <Col>
						    <Form.Control onChange={this.onconfirmPasswordChange} autocomplete="off" type="password" placeholder="Confirm Password" />
					    </Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalPhone">
					    <Col>
						    <Form.Control onChange={this.onPhoneNumberChange} autocomplete="off" type="Number" placeholder="Enter Phone Number" />
					    </Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalPhone">
					    <Col>
						     <select id="lang" onChange={this.handleChange.bind(this)} value={this.state.tech}>
                                 <option value="select">Select usertype</option>
                                 <option value="buyer">buyer</option>
                                 <option value="seller">seller</option>
                            </select>
					    </Col>
					</Form.Group>
					<Button variant="primary" disabled={!enabled} onKeyPress={this.keyPressed} onClick={this.onSubmitSignIn}>
		            	Create Account
		        	</Button>
				</Form>
			</div>
		)
	}
}

export default withRouter(SignupForm)