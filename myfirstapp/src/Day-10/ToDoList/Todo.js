import React, { Component } from "react";

class ToDo extends Component {
  constructor() {
    super();
    this.state = { todo: "", list: [] };
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((a) => {
      // console.log(a.list)
      return {
        list: [...a.list, a.todo],
        todo: "",
      };
    });
  };

  handleEdit=(b)=>{
    const task=this.state.list[b]
    this.setState({todo:task})
    this.handleDelete(b)
  }

  handleDelete=(b)=>{
    this.setState((prevState)=>({
      list:prevState.list.filter((m,i)=>i!==b)
    }))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="ToDo"
            onChange={this.handleChange}
          />
          <input type="Submit" />
        </form>
        {this.state.list.map((a, b) => {
          return (
            <ul>
              <li key={b}>
                {a}
                <button onClick={()=>this.handleEdit(b)}>Edit</button>
                <button onClick={()=>this.handleDelete(b)}>Delete</button>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default ToDo;
