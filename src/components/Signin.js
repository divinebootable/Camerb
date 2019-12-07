import React from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
//import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
//import swal from 'sweetalert';

class Signin extends React.Component{

	constructor(props){
       super(props);
       this.state={
       	signInEmail:"",
       	signInPassword:""	
    

         }
        
	}

	

	onEmailChange = (event)=>{

		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event)=>{
		this.setState({signInPassword: event.target.value})
	}
	

	onSubmitSignIn =()=>{
      fetch('http://localhost:3001/auth/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      	email:this.state.signInEmail,
      	password:this.state.signInPassword
       
      })
    })
      .then(response => response.json())
      .then(user => {
      	if(user.usertype === 'seller'){
      		let path = `/adminDashBoard`;
            this.props.history.push(path);
      	}else {
           let path = `/orderdetails`;
            this.props.history.push(path);
          }

         
      	    
      });
      
    }

		keyPressed(event) {
            if (event.key === "Enter") {
               this.onSubmitSignIn()
                }
         }
         
      
render(){
	      const { signInEmail, signInPassword } = this.state;
	      const enabled =signInEmail.length > 0 && signInPassword.length > 0;

		return(
			<div className="px-5 py-3">
				<Form action='./sellerPages/AdminDashBoard'>
					<Form.Group as={Row} controlId="formHorizontalUserName">
					    <Col>
					    	<Form.Control type="email" autocomplete="off" placeholder="Email" onKeyPress={this.keyPressed.bind(this)} value={this.state.input}  onChange={this.onEmailChange} />
					    </Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formHorizontalPassword">
					    <Col>
						    <Form.Control type="password" placeholder="Password" value={this.state.input} onKeyPress={this.keyPressed.bind(this)}  onChange={this.onPasswordChange} />
					    </Col>
					</Form.Group>
					<Button variant="primary" disabled={!enabled}  onClick={this.onSubmitSignIn}>
		            	Login
		        	</Button>
				</Form>
			</div>
		)
	}

}




export default withRouter(Signin)