import React, { Component } from 'react';

export class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }

  handleChange=(event)=>{
      this.setState({
          text:event.target.value
      });
  }

  render() {
    return (
 
          <form onSubmit={(event)=>this.props.handleSubmit(event,this.state.text)}>
              <input className="create-task" placeholder="Create a new task" onChange={this.handleChange} value={this.state.text} type="text" />
          </form>

    )
  }
}

export default AddTodo;
