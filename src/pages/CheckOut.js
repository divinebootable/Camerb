import React from 'react'

import CalmerNavBar from '../components/CalmerNavBar'
import CheckOutForm from '../components/CheckOutForm'
import OrderSummaryCard from '../components/OrderSummaryCard'

class CheckOut extends React.Component{
	render(){
		return(
			<div>
				<header>
					<CalmerNavBar/>
				</header>

				<main  className="container-fluid px-5">
					<h1>CheckOut details</h1>
					<div className="row">
						<div className="col-sm-7">
							<CheckOutForm/>
						</div>

						<div className="col-sm-5">
							<OrderSummaryCard/>
						</div>
					</div>
				</main>
				
			</div>
		)
	}
}

export default CheckOut