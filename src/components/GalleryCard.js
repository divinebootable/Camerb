import React from 'react'
import {Card} from 'react-bootstrap'

class GalleryCard extends React.Component{
	render(){
		return(

			<div className="col-sm-3 mx-0 my-3">
				<Card className="text-center shadow-sm border border-light rounded">
					<Card.Img src="http://placeimg.com/400/300/arch" variant="One service"/>
					<Card.ImgOverlay className="align-text-bottom">
						<Card.Title className="text-white ">Card title</Card.Title>
					</Card.ImgOverlay>
				</Card>
			</div>
		)
	}
}

export default GalleryCard