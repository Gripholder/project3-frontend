import React, { Component } from 'react'
import axios from 'axios'

class Task extends Component{
  constructor(props){
    super(props)
    this.state={
      person: this.props.location.state.selectedPerson,
      newName: this.props.location.state.selectedPerson.name,
      newPhone: this.props.location.state.selectedPerson.phone,
      tasks: this.props.location.state.selectedPerson.tasks,
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

  getTasks(e){
    this.setState({
      tasks: e.target.value
    })
    console.log(this.state.tasks)
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

  newTask(e){
     e.preventDefault()
     axios.post(`http://localhost:3001/${this.state.person.name}/addTask`,
     {tasks: this.state.tasks})
     .then( response => console.log(response))
     .then( err => console.error(err))
     .then(() => this.getTasks())
   }
   deleteTask(e){
     e.preventDefault()
     axios.post(`http://localhost:3001/${this.state.person.name}/${this.state.person.tasks.title}/remove`)
   }

  render(){
    let tasksRender = this.state.person.tasks.map((task) => {
      // PATHNAME HAS TO BE IN ALL LOWERCASE!!!!!!
      console.log(task)
     return (
        <p key={task._id}>
          {task.title}
          <button onClick={(e) => axios.post(`http://localhost:3001/${this.state.person.name}/${task.title}/remove`)} method='post'>Delete Task</button>
        </p>
      )
    })
    return(
      <div>
        <h1>{this.state.person.name}</h1>
        <h1>{this.state.person.phone}</h1>
        <h1>{tasksRender}</h1>
        <h2>Update Person</h2>
        <form onSubmit={(e) => this.updatePerson(e)} method='put'>
          <input onChange={(e) => this.nameChange(e)} type='text' value={this.state.newName} />
          <input onChange={(e) => this.phoneChange(e)} type='text' value={this.state.newPhone} />
          <button type='submit'>Update</button>
        </form>
        <h2>New task</h2>
        <form onSubmit={(e) => this.newTask(e)} method='put'>
          <input onChange={(e) => this.getTasks(e)} type='text' placeholder='New Task' />
          <button type='submit'>New Task</button>
        </form>
        <button onClick={(e) => this.deletePerson(e)} method='post'>Delete</button>
      </div>
    )
  }
}

export default Task
