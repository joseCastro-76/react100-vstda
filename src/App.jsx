import React, { Component } from 'react';
import Jumbotron from './jumbotron';
import AddNewTodoCard from './addNewTodoCard';
import ViewTodoCard from './viewTodoCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
        id: 0,
        todo: '',
        priority: 0,
        todoList: [],
      }

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Button fired!!!!!')

    const formData = {
      id: this.state.id ++,
      todo: this.state.todo,
      priority: this.state.priority,
    }

    this.setState(prevState => ({
      todo: '',
      priority: 0,
      todoList: [...prevState.todoList, formData],
    }));

  }

  
  render() {
    let renderWelcome = !this.state.todoList.length == 0;
    return (
      <div className="container">
        <Jumbotron />
        <div className="row">
          <AddNewTodoCard
            handleInputChange={ this.handleInputChange }
            handleSubmit={ this.handleSubmit }
            todo={ this.state.todo }
            priority={ this.state.priority }
          />
          <ViewTodoCard 
            hasTodos={ renderWelcome }
            todoList={ this.state.todoList }
          />
        </div>
      </div>
    );
  }
}

export default App;
