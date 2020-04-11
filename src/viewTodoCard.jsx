import React from 'react';
import Todo from './todo'
import Welcome from './welcome';

export default props => (
    <div className="col-8">
        <div className="card">
            <div className="card-header">
                View Todo
            </div>
            { props.hasTodos 
                ? props.todoList.map(todo => <Todo todo={ todo } />)
                : <Welcome /> }
        </div>
    </div>
);