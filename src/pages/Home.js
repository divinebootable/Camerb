import React from 'react'

import NavBar from '../components/NavBar'
import CalmerLanding from '../components/CalmerLanding'
import MainContent from '../components/MainContent'

class Home extends React.Component{
	render(){
		return(
			<div>
				<header>
					<NavBar/>
					<CalmerLanding/>
		        </header>

		        <main>
		        	<MainContent/>
		        </main>
		    </div>
		)
	}
}

export default Home