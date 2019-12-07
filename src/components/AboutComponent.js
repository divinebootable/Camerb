import React from 'react'

import { SocialIcon } from 'react-social-icons';

class AboutComponent extends React.Component{
	render(){
		return(
			<div className="container-fluid">
				<h1>Meet the Team</h1>

				<TeamLeft/>

				<TeamRight/>

				<TeamLeft/>

				<TeamRight/>
			</div>
		)
	}
}

class TeamLeft extends React.Component{
	render(){
		return(
			<div className="row my-5">
				<div className="col-sm-9">
					<div className="row shadow-sm">
						<div className="col-sm-6 py-0 pl-0">
							<img
								src="http://placeimg.com/400/410/people"
								alt="person1"
								className="rounded-left h-100 w-100"/>
						</div>
						<div className="col-sm-6 p-4">
							<h4>Name</h4>
							<h5>Title</h5>
							<p className="text-justify">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a type
								specimen book. It has survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged.
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							</p>

							<div className="d-flex justify-content-sm-around mt-4">
								<ul>
									<li>
										<SocialIcon url="http://facebook.com"/>
									</li>
									<li>
										<SocialIcon url="http://twitter.com"/>
									</li>
									<li>
										<SocialIcon url="http://pinterest.com"/>
									</li>
									<li>
										<SocialIcon url="http://linkedin.com"/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm-3">
					<section class="stage">
						<figure class="ball bubble"></figure>
					</section>
				</div>
			</div>
		)
	}
}

class TeamRight extends React.Component{
	render(){
		return(
			<div className="row my-5">
					<div className="col-sm-3"> </div>

					<div className="col-sm-9">
						<div className="row shadow-sm">
							<div className="col-sm-6 p-4">
								<h4>Name</h4>
								<h5>Title</h5>
								<p className="text-justify">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but also the leap into
									electronic typesetting, remaining essentially unchanged.
								</p>

								<div className="d-flex justify-content-sm-around mt-3">
									<ul>
										<li>
											<SocialIcon url="http://facebook.com"/>
										</li>
										<li>
											<SocialIcon url="http://twitter.com"/>
										</li>
										<li>
											<SocialIcon url="http://pinterest.com"/>
										</li>
										<li>
											<SocialIcon url="http://linkedin.com"/>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-sm-6 py-0 pr-0">
								<img
									src="http://placeimg.com/400/380/people"
									alt="person1"
									className="rounded-right h-100 w-100"/>
							</div>
						</div>
					</div>
				</div>
		)
	}
}

export default AboutComponent