import React, { Component } from 'react'
import axios from 'axios'
import './css/materialize.css'
import './App.css'
import Login from './Login.js'
import Person from './Person.js'

class Task extends Component{
  constructor(props){
    super(props)
    this.state={
      person: '',
      people: '',
      name: '',
      phone: '',
      email: this.props.match.params.name,
      newName: '',
      newPhone: '',
      tasks: [],
      newTask: '',
      duedate: ''
    }
    this.nameChange = this.nameChange.bind(this)
    this.phoneChange = this.phoneChange.bind(this)
    this.updatePerson = this.updatePerson.bind(this)
    this.deletePerson = this.deletePerson.bind(this)
    this.newTask = this.newTask.bind(this)
    this.newDate = this.newDate.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  componentWillMount(){
    axios.get(`https://idid-it.herokuapp.com/${this.state.email}`).then(response => {
      this.setState({
        person: response.data,
        tasks: response.data.tasks,
        name: response.data.name,
        phone: response.data.phone
      })
    }).catch(err => {
      console.log(this.props.match.params.email)
      console.log('error:', err)
    })
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
    console.log(this.state.person.name)
    axios.post(`https://idid-it.herokuapp.com/${this.state.email}`,
    {name: this.state.newName, phone: this.state.newPhone})
    .then(response => {
      console.log('success:', response)
      this.setState({
        person: response.data
      })
    }).catch(err => {
      console.log('error:', err)
    })
  }

 deletePerson(e){
    e.preventDefault()
    axios.post(`https://idid-it.herokuapp.com/${this.state.email}/delete`)
    //after clicking delete button, will take user back to homepage (or page where they came from before)
    this.props.history.goBack();
  }

//WHERE I"M ADDING A NEW TASK
   newTask(e){
     this.setState({
       newTask: e.target.value
     })
     console.log("new title is " + this.state.newTask)
   }

  newDate(e){
     this.setState({
       duedate: e.target.value
     })
     console.log("new date is " + this.state.duedate)
   }

  addTask(e){
     console.log(this.state.person.tasks)
     axios.post(`https://idid-it.herokuapp.com/${this.state.email}/addTask`,
       {tasks: { title: this.state.newTask, date: this.state.duedate }})
     .then(response => {
       this.setState({
         person: response.data
       })
       console.log(response)
     })
     .then(err => console.error(err))
   }

   updateRender(){
     document.getElementById("update").style.visibility = "visible";
   }

   newTaskRender(){
     document.getElementById("newTask").style.visibility = "visible";
   }

 render(){
   console.log(this.props.auth)
    let tasksRender = this.state.tasks.map((task) => {
      // PATHNAME HAS TO BE IN ALL LOWERCASE!!!!!!
      console.log(task)
     return (
        <p key={task._id}>
          Task Name: {task.title}
          <br/>
          End Date: {task.date}
          <br/>
          <button onClick={(e) => axios.post(`https://idid-it.herokuapp.com/${this.state.email}/${task.title}/remove`).then(response => {
                 this.setState({
                   person: response.data
                 })
                 console.log(response)
               }).catch(err => console.error(err))} method='post'>Delete Task</button>
        </p>
      )
    })

    return(
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.phone}</h1>
        <p>{tasksRender}</p>
        {/* <p>{this.tasksRender()}</p> */}
        <button onClick={this.updateRender}>Update</button>
{/*FORM FOR ADDING A NEW TASK  */}
        <div id="newTask">
        <form class="new-task" onSubmit={(e) => this.addTask(e)} method='put'>
          <div id="task-form">
          <input onChange={(e) => this.newTask(e)} type='text' placeholder="task name"/>
          <input onChange={(e) => this.newDate(e)} type='date' />
        </div>
          <button type='submit'>New Task</button>

        </form>
      </div>
      <button onClick={this.newTaskRender}>Add Task</button>
        <button onClick={(e) => this.deletePerson(e)} method='post'>Delete</button>
        <div id="update">
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
        </div>
    </div>
    )
  }
}

export default Task
