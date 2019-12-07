import React from 'react'
import {Button} from 'react-bootstrap'

function ServiceButton(props){
	return(
		<Button
			className="button calmer-shadowbutton mx-2"
			variant="outline-secondary"
			href="services"
			style={{margin:"5px"}} >
				{props.label}
			</Button>
	)
}

export default ServiceButton