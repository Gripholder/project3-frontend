import React, { Component } from 'react';


export default class Task extends Component{

  constructor(props){
    super(props)
    this.state = {
      title: "Hello",
      status: "",
      duedate: "",
      currentdate: "",
      daysleft: ""

    }



    render(){
      return(
        <div>
          <h1>Create your task and enter the date below!</h1>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Enter your task"/>
            <input type="date" id="date" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }

}
