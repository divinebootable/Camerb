import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import ModalForm from '../sellerPagesComponents/ModalForm';
import DataTable from '../sellerPagesComponents/DataTable';
import { CSVLink } from "react-csv"

import AdminNavBar from '../sellerPagesComponents/AdminNavBar'

class AdminDashBoard extends React.Component{

	state = {

    users: []
  }


  getUsers(){
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
      .catch(err => console.log(err))
  }

  addUserToState = (user) => {
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }))
  }

  updateState = (user) => {
    const userIndex = this.state.users.findIndex(data => data.id === user.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.users.slice(0, userIndex),
    // add the updated item to the array
      user,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.users.slice(userIndex + 1)
    ]
    this.setState({ users: newArray })
  }

   deleteUserFromState = (id) => {
    const updatedUsers = this.state.users.filter(user=> user.id !== id)
    this.setState({ users: updatedUsers })
  }

  componentDidMount(){
    this.getUsers()
  }

   


	render(){
		return(
			<div>
				<AdminNavBar/>
				<Container className="App">
        <Row>
          <Col>
            
            <div className="mt-5 ml-2 px-4">
						<h1>Calmer-B Users</h1>
						
					</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable users={this.state.users} updateState={this.updateState} deleteUserFromState={this.deleteUserFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary"
              data={this.state.users}>
              Download CSV
            </CSVLink>
            <ModalForm buttonLabel="Add user" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
			</div>
		)
	}
}

export default AdminDashBoard