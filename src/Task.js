import React, { Component } from 'react'
import {
  Route,
  Link
} from "react-router-dom"
import axios from 'axios'

class Task extends Component{
  constructor(props){
    super(props)
    this.state={
      person: this.props.location.state.selectedPerson,
      newName: this.props.location.state.selectedPerson.name,
      newPhone: this.props.location.state.selectedPerson.phone
    }
  }
  nameChange(e) {
    this.setState({
      newName: e.target.value
    })
    console.log(this.state.newName)
  }
  phoneChange(e) {
    this.setState({
      newPhone: e.target.value
    })
    console.log(this.state.newPhone)
  }

  updatePerson(e){
    e.preventDefault()
    console.log(this.state.person.name)
    axios.post(`http://localhost:3001/${this.state.person.name}`,
    {name: this.state.newName, phone: this.state.newPrice})
    .then( response => {
      this.setState({
        person: response.data
      })
      console.log(response)
    })
    .then( err => console.error(err))
  }

  deletePerson(e){
    e.preventDefault()
    axios.post(`http://localhost:3001/${this.state.person.name}/delete`)
    //after clicking delete button, will take user back to homepage (or page where they came from before)
    this.props.history.goBack();
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
        <button onClick={(e) => this.deletePerson(e)} method='post'>Delete</button>
      </div>
    )
  }
}

export default Task
