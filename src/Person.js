import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom"

import axios from 'axios'

class Person extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      phone: '',
      people: []
    }
    this.getPerson = this.getPerson.bind(this)
  }

 componentDidMount(){
    this.getPerson()
  }

 getPerson(){
    axios.get("http://localhost:3001").then((response) => {
      console.log(response)
      this.setState({
        people: response.data
      })
    })
  }

 nameChange(e) {
    this.setState({
      name: e.target.value
    })
    console.log( this.state.name )
  }
  phoneChange(e) {
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
    .then(() => this.getPerson())
  }

 render() {
    let peopleRender = this.state.people.map(person => {
      // PATHNAME HAS TO BE IN ALL LOWERCASE!!!!!!
      let pathname = `/${person.name}`
     return (
       <Router>
        <p key={person._id}>
          <Link to ={{pathname, state: {selectedPerson: person}}}>{person.name}</Link>
        </p>
      </Router>
      )
    })
    return (
    <div>
      {peopleRender}
      <h2>Let's Get Started!</h2>
      <form onSubmit={ (e) => this.newPerson(e) } method='post'>
        <input onChange={ (e) => this.nameChange(e) } type='text' placeholder='Name' />
        <input onChange={(e) => this.phoneChange(e)} type='text' placeholder='Phone'/>
        <button type='submit'>add</button>
      </form>
     </div>
    )
  }

}

export default Person
