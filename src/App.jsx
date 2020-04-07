import React, { Component } from 'react';
import Header from './header';
import AddNewTodoCard from './addNewTodoCard';
import ViewTodoCard from './viewTodoCard';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <AddNewTodoCard
            todoTitle="I want to..."
            priorityTitle="How much of a priority is this?"
          />
          <ViewTodoCard
            todoTitle="Description"
            priorityTitle="Priority"
          />
        </div>

      </div>
    );
  }
}

export default App;
