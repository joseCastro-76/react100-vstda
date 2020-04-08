import React, { Component } from 'react';
import Jumbotron from './jumbotron';
import AddNewTodoCard from './addNewTodoCard';
import ViewTodoCard from './viewTodoCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasTodos: true,
      todos: [],
    }
  }

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <div className="row">
          <AddNewTodoCard />
          <ViewTodoCard 
            hasTodos={ this.state.hasTodos }
          />
        </div>
      </div>
    );
  }
}

export default App;
