import React from 'react';
import { connect } from 'react-redux';
// import { createTodo } from '../actions/todo_actions';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { id: 4, title: "", body: "", done: false };
    this.submit = this.submit.bind(this);

  }

  submit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
  }

  handleChange(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <form onSubmit={ this.submit }>
        <label>Create a Todo!</label>
        <input onChange={this.handleChange('title')}/>
        <input onChange={this.handleChange('body')}/>

        <input type="submit" value="Make Todo!"></input>
      </form>
    );
  }
}

export default TodoForm;
