import React, { Component } from 'react';


export default class Task extends Component{

  constructor(props){
    super(props)
    this.state = {
      title: "",
      status: "",
      duedate: "",
      currentdate: "",
      daysleft: ""

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);

  }



  handleInput(e){
    this.setState({

    })
  }



  handleSubmit(e){
    this.setState({

    })
  }

  render(){
    return(
        <div>
          <h1>Create your task and enter the date below!</h1>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Enter your task" onInput={this.handleInput}/>
            <input type="date" id="date" onInput={this.handleInput} />
            <input type="submit" value="Submit" onSubmit={this.handleSbmit}/>
          </form>
        </div>
    );
  }

}
