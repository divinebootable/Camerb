import React from 'react'

import AdminNavBar from '../sellerPagesComponents/AdminNavBar'
import OrdersList from '../sellerPagesComponents/OrdersList'

class CalmerOrders extends React.Component{
	render(){
		return(
			<div>
				<AdminNavBar/>
				<main className="container-fluid px-4">
					<div className="mt-5 ml-2">
						<h2>Calmer-B Orders</h2>
						<h5>659 found</h5>
					</div>

					<OrdersList/>
					<OrdersList/>
					<OrdersList/>
					<OrdersList/>
					<OrdersList/>
					<OrdersList/>
					<OrdersList/>
				</main>
				
			</div>
		)
	}
}

export default CalmerOrders