import React, { Component } from 'react';

import {
  Link
} from "react-router-dom"

import axios from 'axios'

class Person extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      phone: '',
      people: [],
    }
    this.getPeople = this.getPeople.bind(this)
  }

 componentDidMount(){
    this.getPeople()
  }

  getPeople(){
    axios.get("http://localhost:3001").then((response) => {
      console.log(response)
      this.setState({
        people: response.data
      })
    })
  }

 getName(e) {
    this.setState({
      name: e.target.value
    })
    console.log( this.state.name )
  }
  getPhone(e) {
    this.setState({
      phone: e.target.value
    })
    console.log( this.state.phone )
  }

 newPerson(e){
    e.preventDefault()
    axios.post('http://localhost:3001',
    {name: this.state.name, phone: this.state.phone})
    .then( response => console.log(response))
    .then( err => console.error(err))
    .then(() => this.getPeople())
  }

 render() {
    let peopleRender = this.state.people.map((person) => {
      // PATHNAME HAS TO BE IN ALL LOWERCASE!!!!!!
      let pathname = `/${person.name}`
     return (
        <p key={person._id}>
          <Link to ={{pathname, state: {selectedPerson: person}}}>{person.name}</Link>
        </p>
      )
    })
    return (
    <div>
      <h2>Let's Get Started!</h2>
      <form onSubmit={ (e) => this.newPerson(e) } method='post'>
        <input onChange={ (e) => this.getName(e) } type='text' placeholder='Name' />
        <input onChange={(e) => this.getPhone(e)} type='text' placeholder='Phone'/>
        <button type='submit'>Add new person</button>
      </form>
        {peopleRender}
     </div>
    )
  }

}

export default Person
