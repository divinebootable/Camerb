import React from 'react'


class ServiceImages extends React.Component{
	render(){
		return(
			<div className="row m-1">
				<img src="https://placeimg.com/1400/1500/tech"
				alt="Product name" className="shadow-sm border border-light rounded"/>
			
				<div className="d-flex flex-row justify-content-around ml-2">
					<div className="col-sm-3">
						<ServiceImageItem/>
					</div>
					<div className="col-sm-3">
						<ServiceImageItem/>
					</div>
					<div className="col-sm-3">
						<ServiceImageItem/>
					</div>
					<div className="col-sm-3">
						<ServiceImageItem/>
					</div>
				</div>
			</div>
		)
	}
}

class ServiceImageItem extends React.Component{
	render(){
		return(
			<div className="row mt-4 mx-auto">
				<img
					className="image-container img-6065"
					src="https://placeimg.com/600/650/tech"
					alt="Product name"
				/>
			</div>
		)
	}
}

export default ServiceImages