import React from 'react'
import {Form, Card, Col, Button} from 'react-bootstrap'

class CheckOutForm extends React.Component{
	render(){
		return(
			<div className="container-fluid">
				<Form>
					<Card>
						<Card.Header>
							<Card.Title>Delivery Address Details</Card.Title>
						</Card.Header>
						<Card.Body>
							<Form.Row>
								<Form.Group as={Col} controlId="formFirstName">
									<Form.Label>First Name</Form.Label>
									<Form.Control placeholder="Enter your first name" />
								</Form.Group>

								<Form.Group as={Col} controlId="formLastName">
									<Form.Label>Last Name</Form.Label>
									<Form.Control placeholder="Enter your last name" />
								</Form.Group>
							</Form.Row>

							<Form.Group controlId="formGridAddress1">
								<Form.Label>Address line 1</Form.Label>
								<Form.Control placeholder="Street, PO Box, Company name, C/O, etc" />
							</Form.Group>

							<Form.Group controlId="formGridAddress2">
								<Form.Label>Address line 2</Form.Label>
								<Form.Control placeholder="Apartment, studio, floor, etc" />
							</Form.Group>

							<Form.Row>
								<Form.Group as={Col} controlId="formGridCity">
									<Form.Label>City</Form.Label>
									<Form.Control />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridState">
									<Form.Label>State/Region</Form.Label>
									<Form.Control as="select">
										<option>Choose...</option>
										<option>...</option>
									</Form.Control>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridZip">
									<Form.Label>Zip</Form.Label>
									<Form.Control />
								</Form.Group>
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col} controlId="formCountryCode">
									<Form.Label>Country code</Form.Label>
									<Form.Control placeholder="e.g. +233" />
								</Form.Group>

								<Form.Group as={Col} controlId="formPhoneNumber" xs={9}>
									<Form.Label>Phone number</Form.Label>
									<Form.Control type="tel" placeholder="Enter your phone number" />
								</Form.Group>
							</Form.Row>

							 <Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>
						</Card.Body>
					</Card>

					<Card className="my-5 text-center">
						<Card.Header>
							<Card.Title>Payment Details</Card.Title>
						</Card.Header>

						<Card.Body>
						<Card.Title> Choose your preferred payment method</Card.Title>
							<Form.Group>
								<Button className="btn-lg" block> Mobile Money</Button>
							</Form.Group>

							<Form.Group>
								<Button className="btn-lg"  block> Orange Money</Button>
							</Form.Group>
						</Card.Body>
					</Card>					
				</Form>
			</div>
		)
	}
}

export default CheckOutForm