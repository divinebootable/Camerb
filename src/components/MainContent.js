import React from 'react'
//import {Carousel} from 'react-bootstrap'
import ServiceButton from './ServiceButton'
import eventServicesData from '../resources/eventServices'
import tourismServiceData from '../resources/tourismServices'
//import Portfolio from './Portfolio'
import Categories from './Categories'
import StartNow from './StartNow'
import Testimonials from './Testimonials'
//import Discussions from './Discussions'
import whatwedo from '../images/whatwedo.png'
import calmer from '../images/calmer.png'
import heart from '../images/heart.jpg'

class MainContent extends React.Component{
	/*eventServiceElements and tourismServiceElement curently obtain their data from arrays in the files
	eventServices and tourismSerices respectively, both found in the resources folder. The receied data is
	passed to the ServiceButton element (file in "components" folder)*/

	render(){
	const eventServiceElements = eventServicesData.map(eventService => <ServiceButton
		key={eventService.id}
		label={eventService.label} />)
	const tourismServiceEvents = tourismServiceData.map(tourismService => <ServiceButton
		key={tourismService.id}
		label={tourismService.label}/>)

		return(
			<div className="container-fluid mx-auto">

				{/*INTRODUCTION*/}
				<div className="container-fluid">
					<div className="col-sm-12">
						<h1>WELCOME TO CALMER-B EVENT PLANNING</h1>
						<blockquote className="blockquote text-center">
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
								when an unknown printer took a galley of type and scrambled it to make a type
								specimen book. It has survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was popularised in
								the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing software like Aldus PageMaker
								including versions of Lorem Ipsum.
							</p>
							<footer className="blockquote-footer bg-white text-dark">
									Calmer-B Team
							</footer>
						</blockquote>

						{/*TINY IMAGE*/}
						<div className="col text-center">
							<img src={heart} alt="heart" className="img-tiny"/>
						</div>
					</div>
				</div>

				{/*PORTFOLIO*/}
				{/*<div className="col-sm-12">
					<h1 className="text-center">PORTFOLIO</h1>
						<Carousel>
							<Carousel.Item>
								<Portfolio/>
							</Carousel.Item>

							<Carousel.Item>
								<Portfolio/>
							</Carousel.Item>

							<Carousel.Item>
								<Portfolio/>
							</Carousel.Item>
						</Carousel>
				</div> */}

				{/*SERVICES*/}
				<div className="container-fluid">
					<div className="container-fluid">
						<h1>OUR SERVICES</h1>
						<p className="text-center">
							It is a long established fact that a reader will be distracted by the readable content
							of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop publishing packages and web page
							editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
							will uncover many web sites still in their infancy. Various versions have evolved over the
							years, sometimes by accident, sometimes on purpose (injected humour and the like).
						</p>
					</div>

					<div className="row px-3">
						<div className="col text-center rounded calmer-box" style={{marginRight:"15px"}} >
							<h2 className="mb-3">Event services</h2>
							{eventServiceElements}
						</div>

						<div className="col text-center rounded calmer-box" style={{marginLeft:"15px"}}>
							<h2 className="mb-3">Tourism services</h2>
							{tourismServiceEvents}
						</div>
					</div>
				</div>

				{/*TRUST CALMER*/}
				<div className="container-fluid">
					<h1>WHAT WE DO</h1>	
					<div className="row">
						<div className="col-sm-6 mx-auto">
							<h5><i>‘No matter how crazy your event fantasy is, try us: we will give it life’.</i></h5>
							<p>
								CALMER B Is Africa’s number 1 online market for all your event and tourism services.
								We are committed to giving you the most memorable experience ever. 

							</p>

							<ul className="custom-list text-justify">
								<li>
									<h5 className="font-weight-bold">Consultancy services</h5>
									<p>
										We understand that very important days could be very emotional and almost always
										filled with challenging decisions. Our team of consultants can guide you towards
										the right path. We will find just the right strategy to bring your dream to life.
									</p>
								</li>
								
								<li>
									<h5 className="font-weight-bold">Technical support</h5>
									<p>
										We assign an excellent team to design your entire event and manage all the technical
										aspects. We serve you by taking the stress so you can relax and have fun.
									</p>
								</li>

								<li>
									<h5 className="font-weight-bold">Our team of onsite coordinators</h5>
									<p>
										We have teams of trained event coordinators who can give your event a professional
										touch and keep your event environment balanced
									</p>
								</li>

								<li>
									<h5 className="font-weight-bold">Professional vendors</h5>
									<p>
										our Ecommerce site makes it possible for vendors of all categories and anywhere in
										Africa to showcase their events. We take our vendors through valid processes to ensure
										that they are competent and committed to serving you effectively.
									</p>
								</li>
							</ul>
						</div>

						<div className="col-sm-6">
							<img
								className="image-container"
								src={whatwedo} style={{borderRadius: '8px', width:'500px'}} alt="About calmer services"
							/>
						</div>
					</div>
				</div>

				<Categories/>

				<StartNow/>

				{/*HOW WE WORK*/}
				<div className="container-fluid">
					<h1>HOW IT WORKS</h1>
					<div className="row">
						<div className="col mx-auto">
							<p>
								When you come to us whether to manage your entire event/travel or
								to purchase just a single product/service someone will connect with
								you to schedule your first consultation meeting. We believe having
								a one on one conversation is important. It could be face to face,
								video calls or audio call. We will endeavor to have your first meeting
								as intimate as possible. We will set up chats to discuss your goals,
								budget, event/travel specific and ask questions which will help us uncover
								your event dream.
							</p>

							<ul className="custom-list two-columns">
								<li>
									<h5 className="font-weight-bold">Shop on CALMER B</h5>
									<p>
										If you already have you plan out and are ready to shop, it’s really
										easy. Follow the steps:
									</p>
									<ul className="no-bullet-list">
										<li>Click ……….</li>
										<li>Fill in your event type, event prospective date and event location.</li>
										<li>Then start shopping.</li>
										<li>You can start by selecting a category e.g cakes, suits, hotels, travel agents.</li>
										<li>You will be presented with variety of vendors and you can make your selection.</li>
										<li>When you are done, you can crosscheck your chart to be sure you have all you need.</li>
										<li>Fill in your delivery details and submit.</li>
										<li>Wait for our confirmation then</li>
										<li>Select a mode of payment and make your deposit. One of our agents will get in touch
										with you and finalize on delivery.</li>
									</ul>
								</li>

								<li>
									<h5 className="font-weight-bold">Hire our planning services</h5>
									<p>
										For events that we will completely cover, we will assign someone to you who
										will be in charge of your event/travel and will be our representative on the
										ground over the next month’s up to the time of your event. They will be your handler 
									</p>
									<ul className="no-bullet-list">
										<li>Checklist: your handler will go through your goals with you and will design tasks and
										assign their expected duration. Then he/she will draw a customized checklist for your event
										within your budget and do a thorough work breakdown structure for the office.</li>
										<li>Vendor selection.: from our vast network of vendors, you will get to select each item
										based on the prices on your checklist.</li>
										<li>Report: your handler will stay in touch with you continuously giving you feed back on
										the process as we progress </li>
										<li>Add in: if you forgot any desire or get a new idea along the line don’t worry, just let
										your handler know and we will make possible adjustments.</li>
										<li>Finalizing: we make sure everything on our checklist is in place and do final touches
										quite some time before the event/travel. Meanwhile at this point, you are expected to take
										rest and relaxation exercises. Beauty spa and nature relaxations are advised. </li>
										<li>Day of: set up is completed hours before the event and we provide site coordinator(s)
										to organize and maintain balance of the event environment. You show up and enjoy your event </li>
									</ul>
								</li>

								<li>
									<h5 className="font-weight-bold">Get in contact with us</h5>
									<p>
										An unknown printer took a galley of type and scrambled it to make a type
										specimen book.
									</p>
								</li>
									
							</ul>
						</div>
					</div>
				</div>

				{/*what makes us great*/}
				<div className="container-fluid">
					<h1>WHAT MAKES US GREAT</h1>
					<div className="row">
						<div className="col-sm-6">
							<img src={calmer} style={{borderRadius: '8px', width:'500px'}} alt=""/>
						</div>
						<div className="col-sm-6">
							<ul className="custom-list text-justify">
								<li>
									<h5 className="font-weight-bold">Our quality</h5>
									<p>Our consultants are long term industry experts who are committed to transforming client experiences from just a concluded event to a memorable moment that will be captured in their hearts forever.</p>
								</li>
								<li>
									<h5 className="font-weight-bold">Delivery and time</h5>
									<p>We value your time and make every minute count. We are punctual and intentional on the use of every assigned minute. We are strict with deadlines.</p>
								</li>
								<li>
									<h5 className="font-weight-bold">Awesomeness</h5>
									<p>We make it a point to be awesome and so will your events be. </p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/*<Testimonials/>*/}
				
				{/*<Discussions/>*/}

			</div>
		)
	}
}

export default MainContent