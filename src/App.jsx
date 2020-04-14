import React, { Component } from 'react';
import Jumbotron from './jumbotron';
import AddNewTodoCard from './addNewTodoCard';
import ViewTodoCard from './viewTodoCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    
    this.state = {
        id: 0,
        todo: '',
        priority: 0,
        completed: false,
        editEnabled: false,
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

    const formData = {
      id: this.state.id ++,
      todo: this.state.todo,
      priority: this.state.priority,
      completed: this.state.completed,
      editEnabled: this.state.editEnabled,
    }

    this.setState(prevState => ({
      todo: '',
      priority: 0,
      todoList: [...prevState.todoList, formData],
    }));

  }

  handleEdit(id) {
    const todos = [...this.state.todoList];
    const objIndex = todos.findIndex((obj => obj.id == id));
    todos[objIndex].editEnabled = true;
    this.setState({ todolist: todos });
  }

  handleUpdateSubmit(updatedState){
    const todos = [...this.state.todoList];
    const objIndex = todos.findIndex((obj => obj.id == updatedState.id));
    todos[objIndex] = updatedState;
    this.setState({ todoList: todos });
  }

  handleDelete(id) {
    const todos = [...this.state.todoList];
    const objIndex = todos.findIndex((obj => obj.id == id));
    todos.splice(objIndex, 1);
    this.setState({ todoList: todos });
  }

  handleCheckbox(id) {
    console.log('checkbox firing');
    const todos = [...this.state.todoList];
    const objIndex = todos.findIndex((obj => obj.id == id));
    todos[objIndex].done = !todos[objIndex].done;
    this.setState({ todoList: todos });
  }

  render() {
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
            todoList={ this.state.todoList }
            handleInputChange={ this.handleInputChange }
            handleEdit={ this.handleEdit }
            handleUpdateSubmit={ this.handleUpdateSubmit }
            handleDelete={ this.handleDelete }
            handleCheckbox={ this.handleCheckbox }
          />
        </div>
      </div>
    );
  }
}

export default App;
