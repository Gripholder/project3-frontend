import React, { Component } from 'react';
import {
  Link
} from "react-router-dom"
import axios from 'axios'
import './css/materialize.css'
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
    axios.get("http://localhost:3001/home").then((response) => {
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
    axios.post('http://localhost:3001/home',
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
      <div class="row">
        <h2>Let's Get Started!</h2>
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix">account_circle</i>
                <input onChange={ (e) => this.getName(e) } id="icon_prefix" type="text" class="validate"/>
                <label for="icon_prefix">First Name</label>
              </div>
              <div class="input-field col s6">
                <i class="material-icons prefix">phone</i>
                <input onChange={(e) => this.getPhone(e)} id="icon_telephone" type="tel" class="validate"/>
                <label for="icon_telephone">Telephone</label>
              </div>
            </div>
          </form>
          {peopleRender}
        </div>

    )
  }

}

export default Person
