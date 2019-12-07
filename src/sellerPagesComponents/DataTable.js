import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './ModalForm.js';

class DataTable extends Component {

  deleteUser = id => {
    let confirmDelete = window.confirm('Delete user forever?')
    if(confirmDelete){
      fetch('http://localhost:3001/users', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(user => {
        this.props.deleteUserFromState(id)
      })
      .catch(err => console.log(err))
    }

  }

  render() {

    const users = this.props.users.map(user => {
      return (
        <tr key={user.id}>
          <th scope="row">{user.id}</th>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>{user.mobile_number}</td>
          <td>{user.usertype}</td>
          
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={user} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteUser(user.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <div className="container-fluid">
      <Table className="responsive hover table shadow-sm shadow-sm mt-1 px-2">
        <thead className="border bg-light">
          <tr className="border">
            <th>ID</th>
            <th>First_name</th>
            <th>Last_name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Usertype</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </Table>
      </div>
    )
  }
}

export default DataTable