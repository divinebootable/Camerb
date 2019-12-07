import React from 'react'

import {Form, Button} from 'react-bootstrap'

class Discussions extends React.Component{
	render(){
		return(
			<div className="container-fluid mb-5" >
				<h1>DISCUSSIONS</h1>

				<PostComment/>

				<OlderComments/>
			</div>
		)
	}
}

function PostComment(){
	return(
		<div className="col-sm-10 mx-auto mb-3">
			<Form className="mb-4">
				<Form.Group controlId="formBasicEmail">
					<div className="row">
						<div className="col-sm-6">
							<h3>Leave a Comment or Ask a Question</h3>
						</div>
						<div className="col-sm-6">
							<Form.Text className="text-muted text-right">
								You need to be logged in to add a comment or question
							</Form.Text>
						</div>
					</div>
					<Form.Control
						className="form-control-lg shadow-sm"
						placeholder="Your comment..."
						style={{height:"75px"}}
					/>
				</Form.Group>

				<div className="text-right">
					<Button variant="success">Post Comment</Button>
				</div>
			</Form>
		</div>
	)
}

class OlderComments extends React.Component{
	render(){
		return(
			<div className="col-sm-10 mx-auto mt-3">
				<div className="row">
					<div className="col-sm-3">
						<h4 className="mb-2">Older comments</h4>
					</div>
					<div className="col-sm-2">
						<p>8 Comments</p>
					</div>
					<div className="col-sm-7 text-right">
						<Button variant="link">Join the conversation</Button>
					</div>
				</div>
				<hr className="shadow-sm mt-n1"/>

				<Comment/>
			</div>	
		)
	}
}

function Comment(){
	return(	
		<div className="row px-auto mt-5 shadow-sm">
			<div className="col-sm-2 text-right">
				<img
					src="http://placeimg.com/150/150/people"
					alt="profile pic"
					className="img-circle img-medium mt-4"/>
			</div>
			<div className="col-sm-10 mt-3 pr-4">
				<h5 className="font-weight-bold">Jane Eyere</h5>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type
					specimen book.
				</p>

				<div className="row pt-n1">
					<div className="col-sm-3">
						<p className="text-muted">Posted on: Feb 12, 2019</p>
					</div>
					<div className="col-sm-2">
						<p className="text-muted">108 Comments</p>
					</div>
					<div className="col-sm-4 mt-n1">
						<Button variant="link">Reply</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Discussions