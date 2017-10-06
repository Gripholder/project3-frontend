import React, { Component } from 'react';
import axios from 'axios'

export default class Task extends Component{

  constructor(props){
    super(props)
    this.state = {
      person: this.props.location.state.selectedPerson,
      newName: this.props.location.state.selectedPerson.name,
      newPhone: this.props.location.state.selectedPerson.phone
    }
  }

  //gets new name
  nameChange(e){
    this.setState({
      newName: e.target.value
    })
  }

  //gets new phone number
  phoneChange(e){
    this.setState({
      newPhone: e.target.value
    })
  }

  //updates person's info
  updatePerson(e){
    e.preventDefault()
    axios.put(`http://localhost:3000:/${this.state.person.name}`,
    {name: this.state.newName}, {price: this.state.newPhone})
    .then(response => {
      this.setState({
        person: response.data
      })
    })
    .then(err => console.log(err))
  }

  //deletes person
  deletePerson(e){
    e.preventDefault()
    axios.post(`http://localhost:3001/${this.state.person.name}/delete`)
    this.props.history.goBack()
  }

  render(){
    return(
        <div>
          <h1>{this.state.person.name}</h1>
          <h1>{this.state.person.phone}</h1>
          <h2>Update Person</h2>
        <form onSubmit={(e) => this.updatePerson(e)} method='put'>
          <input onChange={(e) => this.nameChange(e)} type='text' value={this.state.newName} />
          <input onChange={(e) => this.phoneChange(e)} type='text' value={this.state.newPhone} />
          <button type='submit'>Update</button>
        </form>
        <button onClick={(e) => this.deletePerson(e)} method='post'>Delete Person</button>
        </div>
    );
  }
}
