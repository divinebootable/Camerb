import React from 'react'

import CalmerNavBar from '../components/CalmerNavBar'
import AboutComponent from '../components/AboutComponent'
import FAQs from '../components/FAQs'

class About extends React.Component{
	render(){
		return(
			<div>
				<header>
					<CalmerNavBar/>
				</header>

		        <main className="container-fluid text-center px-5">
					<h1>WHO WE ARE</h1>
					<p className="text-center">
						<i>Don’t know where to start? Easy, give us the stress and Grab a cup of coffee.
						This is event hotshot. Tell us your dream.</i>
					</p>
					<p  className="text-justify">
						CALMER B Is Africa’s number 1 online market for all your event and tourism services. <br/>
						When we first started out as event planners, finding suitable vendors, within budget and
						time frame was more challenging than convincing a client to run their events. Even with
						the growing network, we soon realized that we could only effectively carter for a particular
						class of events. Talk about stressful and time consuming, when you get to call 10vendors and
						attend 10 meetings just to decide which 1 vendor is suitable for your event and you have to
						do this for over 20services. Don’t even get me started on issues of no show vendors, last
						minute cancelation etc. yeah we feel your pain. <br/>
						But relax! We have created this amazing space where you can find a variety of all event and
						tourism services you need. You can sit in the very comfort of your home or office, with a
						cup of coffee and graciously browse through and with the help of our consultants, plan a
						fantastic event or trip anywhere in Africa.
					</p>
					<h1>CORE VALUES</h1>
					<p> Excellence, commitment, balance and awesomeness </p>
					<AboutComponent/>
					<FAQs/>
				</main>
			</div>
		)
	}
}

export default About