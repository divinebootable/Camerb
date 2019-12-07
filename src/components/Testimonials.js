import React from 'react'

import clientTestimonials from '../resources/clientTestimonials'

class Testimonials extends React.Component{
	render(){
		const clientTestimonialElements = clientTestimonials.map(testimonial => <TestimonialCard
			key={testimonial.id}
			name={testimonial.name}
			imageUrl={testimonial.imageUrl}
			testimony={testimonial.testimony}
			city={testimonial.city}
			country={testimonial.country}
		/>)

		return(
			<div className="container-fluid text-center">
				<h1>OUR CLIENTS SAY</h1>
				<div className="row pl-4">
					{clientTestimonialElements}
				</div>
			</div>
		)
	}
}

function TestimonialCard (props){
	return(
		<div className="calmer-box mx-3 my-3" style={{width:"30%"}}>
			<div className="col-sm-12m-auto">
				<p>
					{props.testimony}
				</p>
			</div>

			<div className="row pl-4">
				<div className="col-sm-2 mx-0 my-auto p-n1">
					<img
						src={props.imageUrl}
						alt={props.name}
						className="img-circle img-tiny ml-3"/>
				</div>

				<div className="col-sm-8">
					<h5> {props.name} </h5>
					<p className="font-weight-light mt-n1">{props.city}, {props.country}</p>
				</div>
			</div>
			
		</div>
	)
}

export default Testimonials