import React from 'react'
import {Dropdown, ButtonGroup, Button, Pagination} from 'react-bootstrap'

import CalmerNavBar from '../components/CalmerNavBar'
import ServiceCard from '../components/ServiceCard'
import ServiceSideBar from '../components/ServiceSideBar'

class Services extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
		services: []

    	}

	}

	getServices(){
    fetch('http://localhost:3001/services')
      .then(response => response.json())
      .then(services => this.setState({services}))
      .catch(err => console.log(err))
  }

   componentDidMount(){
    this.getServices()
  }


	render(){
		/*Pagination*/
		let active = 1;
		let items = [];
		for (let number = 1; number <= 3; number++) { items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>,
		);
		}

		return(
			<div>
				<header>
					<CalmerNavBar/>
		        </header>

		        <main className="px-4">

		        	{/*introduction*/}
			        <div className="text-center mb-5">
			        	<h1>OUR SERVICES</h1>
						<p className="h5">

			        		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
			        		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
						</p>
			        </div>

					{/*body header*/}
					<div className="row mt-5">
						<div className="col-sm-7">
							<h5>Calmer services</h5>
						</div>
						<div className="col-sm-3 text-right">
							<h5>Sort By:</h5>
						</div>

						<div className="col-sm-2">
							<Dropdown as={ButtonGroup}>
								<Button variant="success">Category</Button>

								<Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

								<Dropdown.Menu>
									<Dropdown.Item hred="#/action-1">Category</Dropdown.Item>
									<Dropdown.Item hred="#/action-2">Most Recent</Dropdown.Item>
									<Dropdown.Item hred="#/action-3">Most Popular</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>

					<hr className=" mt-1" />

					{/*body main*/}
		        	<div className="row mt-2 py-3 ">

		        		{/*sidebar*/}
		        		<div className="col-sm-3 ml-1 mr-n4">
		        			<ServiceSideBar/>
		        		</div>

		        		{/*main content*/}
		        		<div className="col-sm-9 ml-2 mr-1">

					        <div className="row ">
					        	<ServiceCard services={this.state.services}/>
					        	<ServiceCard />
					        	<ServiceCard/>
					        	<ServiceCard/>
					        	<ServiceCard/>
					        	<ServiceCard/>
					        	<ServiceCard/>
					        	<ServiceCard/>
					        	<ServiceCard/>
					        	<ServiceCard/>
					        	<ServiceCard/>
					        	<ServiceCard/>
					        </div>
		        		</div>
		        	</div>

		        	<div className="row justify-content-center mt-5">
			        	<Pagination >
			        		<Pagination.Item disabled>Previous</Pagination.Item>
			        		{items}
			        		<Pagination.Item>Next</Pagination.Item>
			        	</Pagination>
			        </div>
		        </main>
			</div>
		)
	}
}

export default Services
