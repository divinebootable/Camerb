import React from 'react'
import {Card} from 'react-bootstrap'

class OrderSummaryCard extends React.Component{
	render(){
		return(
			<div className="container-fluid">
				<Card>
					<Card.Header className="text-center">
						<Card.Title>Order Summary</Card.Title>
					</Card.Header>
					<Card.Body>
						<div className="row">
							<div className="col-sm-3">
								<img src="http://placeimg.com/110/175/arch" variant="One service" alt="sample"/>
							</div>

							<div className="col-sm-9">
								<Card.Title>Some important details about the order</Card.Title>
								<Card.Text>Price: USD 125</Card.Text>
								<Card.Text>Address: Street, City, Country</Card.Text>
								<Card.Text>Delivery date: dd/mm/yy</Card.Text>
							</div>
						</div>
					</Card.Body>
					<Card.Footer className="text-center">
						<Card.Text>Total: USD 125</Card.Text>
					</Card.Footer>
				</Card>
			</div>
		)
	}
}

export default OrderSummaryCard
