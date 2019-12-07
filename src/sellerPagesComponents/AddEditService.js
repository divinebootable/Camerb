import React from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditService extends React.Component{
	state = {
    id: 0,
    service_name: '',
    service_category: '',
    image: '',
    details: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3001/services', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_name: this.state.service_name,
        service_category: this.state.service_category,
        image: this.state.image,
        details: this.state.details
       })
    })
      .then(response => response.json())
      .then(service => {
        if(Array.isArray(service)) {
          this.props.addServiceToState(service[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3001/services', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        service_name: this.state.service_name,
        service_category: this.state.service_category,
        image: this.state.image,
        details: this.state.details
       
      })
    })
      .then(response => response.json())
      .then(service => {
        if(Array.isArray(service)) {
          // console.log(service[0])
          this.props.updateState(service[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if service exists, populate the state with proper data
    if(this.props.service){
      const { id, service_name, service_category, image,details} = this.props.service
      this.setState({ id, service_name, service_category, image,details})
    }
  }

	render(){
		return(
			<div>
				<Form onSubmit={this.props.service ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="first">ServiceName</Label>
          <Input type="text" name="service_name" id="service_name" onChange={this.onChange} value={this.state.service_name === null ? '' : this.state.service_name} />
        </FormGroup>
        <FormGroup>
          <Label for="last">ServiceCategory</Label>
          <Input type="text" name="service_category" id="service_category" onChange={this.onChange} value={this.state.service_category === null ? '' : this.state.service_category}  />
        </FormGroup>
        <FormGroup>
          <Label for="email">Image</Label>
          <Input type="" name="Image" id="Image" onChange={this.onChange} value={this.state.image === null ? '' : this.state.image}  />
        </FormGroup>
        
        <FormGroup>
          <Label for="location">Details</Label>
          <Input type="text" name="details" id="details" onChange={this.onChange} value={this.state.details === null ? '' : this.state.details}   />
        </FormGroup>
  
        <Button>Submit</Button>
      </Form>
			</div>
		)
	}
}

export default AddEditService