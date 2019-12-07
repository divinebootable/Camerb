import React from 'react'

import eventCategoriesData from '../resources/eventCategories'

class Categories extends React.Component{
	render(){
		const eventCategoriesElements = eventCategoriesData.map(eventCategory => <CategoryComponent
			key={eventCategory.id}
			label={eventCategory.label}
			image={eventCategory.imageUrl}
			alternative={eventCategory.alternative}
		/>)

		return(
			<div className="container-fluid">
				<h1>CATEGORIES</h1>
				<div className="row" style={{width:"100%"}}>
					{eventCategoriesElements}
				</div>

			</div>
		)
	}
}

function CategoryComponent (props){
	return(
		<div className="text-center mb-5" style={{width:"20%"}} >
			{/*<img src="http://placeimg.com/100/100/arch" />*/}
			<img
				src={props.image}
				alt={props.alternative}
				style={{width:"100px", height:"100px" }}
				className="img-responsive"
			/>
			<h5 className="mt-3">{props.label}</h5>
		</div>
	)
}

export default Categories