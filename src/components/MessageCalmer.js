import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

class MessageCalmer extends React.Component{
	render(){
		return(
			<div>
				<div className="container shadow-sm my-3 p-2">
				<h1>Leave us a message</h1>
					<Form className="p-5">
						<Form.Group controlId="ControlTextarea1">
					    	<Form.Control as="textarea" rows="3" placeholder="Type your message here"/>
						</Form.Group>
						
						<Form.Group as={Row} controlId="formHorizontalEmail">
						    <Col>
						    	<Form.Control placeholder="First name" />
						    </Col>
						    <Col>
						    	<Form.Control placeholder="Last name" />
						    </Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalEmail">
						    <Col>
						    	<Form.Control type="email" placeholder="Email" />
						    </Col>
						</Form.Group>

						<Form.Group as={Row} controlId="formHorizontalPassword">
						    <Col>
							    <Form.Control type="tel" placeholder="Phone" />
						    </Col>
						</Form.Group>

						<div className="text-center">
							<Button type="submit" variant="success" size="lg">Send Message</Button>
						</div>
					</Form>
				</div>
			</div>
		)
	}
}

export default MessageCalmer