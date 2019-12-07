import React from 'react'
import AdminNavBar from '../sellerPagesComponents/AdminNavBar'
import {Modal} from 'react-bootstrap'
import OneServiceRow from '../sellerPagesComponents/OneServiceRow'
import ModalForm from '../sellerPagesComponents/ModalForm1';


class ServicesList extends React.Component{
     constructor(props, context) {
    	super(props, context);
    	this.state = {
    		show: false,
    		services: []
    	}

    	this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);

    	
	}

	


  getServices(){
    fetch('http://localhost:3001/services')
      .then(response => response.json())
      .then(services => this.setState({services}))
      .catch(err => console.log(err))
  }

  addServiceToState = (service) => {
    this.setState(prevState => ({
      services: [...prevState.services, service]
    }))
  }

  updateState = (service) => {
    const serviceIndex = this.state.services.findIndex(data => data.id === service.id)
    const newArray = [
    // destructure all services from beginning to the indexed service
      ...this.state.services.slice(0, serviceIndex),
    // add the updated service to the array
      service,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.services.slice(serviceIndex + 1)
    ]
    this.setState({ services: newArray })
  }

   deleteServiceFromState = (id) => {
    const updatedServices = this.state.services.filter(service=> service.id !== id)
    this.setState({ services: updatedServices })
  }

  componentDidMount(){
    this.getServices()
  }


	handleClose() {
    	this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render(){

		return(
			<div>
				<AdminNavBar/>

				<main className="container-fluid px-3">
					<div className="row mt-5 ml-2">
						<div className="col-sm-9">
							<h2>List of Calmer-B Services</h2>
							<h5>105 found</h5>
						</div>
					
					</div>

					<OneServiceRow services={this.state.services} updateState={this.updateState} deleteServiceFromState={this.deleteServiceFromState}/>
				</main>
                   
				<Modal
					aria-labelledby="contained-modal-title-vcenter"
					centered
					show={this.state.show}
					onHide={this.handleClose}
				>
		        	<Modal.Header className="bg-light" closeButton>
		        		<Modal.Title className="text-center">Add a service</Modal.Title>
		        	</Modal.Header>
		        	
		        	<Modal.Body>
		        		<ModalForm/>
		        	</Modal.Body>
		        </Modal> 
			</div>
		)
	}
}

export default ServicesList