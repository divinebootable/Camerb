import React from 'react'
//import { Link } from "react-router-dom";
//import {FaRegTrashAlt} from 'react-icons/fa';
import ModalForm from './ModalForm1.js';
import {  Button } from 'reactstrap';

class OneServiceRow extends React.Component{
   
	deleteService = id => {
    let confirmDelete = window.confirm('Delete Service forever?')
    if(confirmDelete){
      fetch('http://localhost:3001/services', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(service => {
        this.props.deleteServiceFromState(id)
      })
      .catch(err => console.log(err))
    }

  }
	render(){
		 const services = this.props.services.map((service) => {
      return (
        <tr key={service.id}>
          <th scope="row">{service.id}</th>
          <td>{service.service_name}</td>
          <td>{service.service_category}</td>
          <td>{ console.log(service.image)}</td>
          <td>{service.details}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={service} updateState={this.props.updateState}/>

              {' '}
              <Button color="danger" onClick={() => this.deleteService(service.id)}>Del</Button>
            </div>
          </td> 
        </tr>
        )
      })
		return(
			<div className="container-fluid">	
				<table className="table shadow-sm shadow-sm mt-1 px-2">
						<thead className="border bg-light">
							<tr>
							  <th>ID</th>
								<td>Service Name</td>
								<td>Service Category</td>
								<td>Image</td>
								<td>Details</td>
								<td>Action</td>
							</tr>
						</thead>
						<tbody>
						   {services}	
						</tbody>
					</table>
			</div>
		)
	}
}

export default OneServiceRow