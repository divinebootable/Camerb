import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    usertype: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3001/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        mobile_number: this.state.mobile_number,
        usertype: this.state.usertype,
     
      })
    })
      .then(response => response.json())
      .then(user => {
        if(Array.isArray(user)) {
          this.props.addUserToState(user[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3001/users', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        mobile_number: this.state.mobile_number,
        usertype: this.state.usertype,
       
      })
    })
      .then(response => response.json())
      .then(user => {
        if(Array.isArray(user)) {
          // console.log(user[0])
          this.props.updateState(user[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if user exists, populate the state with proper data
    if(this.props.user){
      const { id, first_name, last_name, email,mobile_number,usertype} = this.props.user
      this.setState({ id, first_name, last_name, email,mobile_number,usertype })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.user ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="first">FirstName</Label>
          <Input type="text" name="first_name" id="first_name" onChange={this.onChange} value={this.state.first_name === null ? '' : this.state.first_name} />
        </FormGroup>
        <FormGroup>
          <Label for="last">LastName</Label>
          <Input type="text" name="last_name" id="last_name" onChange={this.onChange} value={this.state.last_name === null ? '' : this.state.last_name}  />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input type="text" name="phone" id="phone" onChange={this.onChange} value={this.state.mobile_number === null ? '' : this.state.mobile_number}  placeholder="ex. 555-555-5555" />
        </FormGroup>
        <FormGroup>
          <Label for="location">Usertype</Label>
          <Input type="text" name="usertype" id="location" onChange={this.onChange} value={this.state.usertype === null ? '' : this.state.usertype}  placeholder="user" />
        </FormGroup>
  
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm