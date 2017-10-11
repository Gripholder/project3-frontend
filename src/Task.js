import React, { Component } from 'react'
import axios from 'axios'
import './css/materialize.css'
import './App.css'

class Task extends Component{
  constructor(props){
    super(props)
    this.state={
      person: this.props.location.state.selectedPerson,
      newName: this.props.location.state.selectedPerson.name,
      newPhone: this.props.location.state.selectedPerson.phone,
      tasks: this.props.location.state.selectedPerson.tasks,
      newTask: '',
      duedate: ''
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

//WHERE I"M ADDING A NEW TASK
   newTask(e){
     this.setState({
       newTask: e.target.value
     })
     console.log("new title is " +this.state.newTask)
   }

  newDate(e){
     this.setState({
       duedate: e.target.value
     })
     console.log("new date is " + this.state.duedate)
   }

  addTask(e){
     e.preventDefault()
     console.log(this.state.person.tasks)
     axios.post(`http://localhost:3001/${this.state.person.name}/addTask`,
       {tasks: { title: this.state.newTask, date: this.state.duedate }})
     .then(response => {
       this.setState({
         person: response.data
       })
       console.log(response)
     })
     .then(err => console.error(err))
   }

 render(){
    let tasksRender = this.state.person.tasks.map((task) => {
      // PATHNAME HAS TO BE IN ALL LOWERCASE!!!!!!
      console.log(task)
     return (
        <p key={task._id}>
          Task Name: {task.title}
          <br/>
          End Date: {task.date}
          <br/>
          <button onClick={(e) => axios.post(`http://localhost:3001/${this.state.person.name}/${task.title}/remove`).then(response => {
                 this.setState({
                   person: response.data
                 })
                 console.log(response)
               })
               .then(err => console.error(err))} method='post'>Delete Task</button>
        </p>
      )
    })
    return(
      <div>
        <h1>{this.state.person.name}</h1>
        <h1>{this.state.person.phone}</h1>
        <p>{tasksRender}</p>
        <h2>Update Person</h2>
        <form class="edit-person" onSubmit={(e) => this.updatePerson(e)} method='put'>
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input onChange={(e) => this.nameChange(e)} id="icon_prefix" type="text" class="validate" value={this.state.newName}/>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input onChange={(e) => this.phoneChange(e)} id="icon_telephone" type="tel" class="validate" value={this.state.newPhone}/>
            </div>
            <button type='submit'>Update</button>
          </div>
        </form>
{/*FORM FOR ADDING A NEW TASK  */}

        <form class="new-task" onSubmit={(e) => this.addTask(e)} method='put'>
          <div id="task-form">
          <input onChange={(e) => this.newTask(e)} type='text' placeholder="task name"/>
          <input onChange={(e) => this.newDate(e)} type='date' />
        </div>
          <button type='submit'>New Task</button>

        </form>
        <button onClick={(e) => this.deletePerson(e)} method='post'>Delete</button>
    </div>
    )
  }
}

export default Task
