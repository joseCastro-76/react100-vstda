import React from 'react';
import Todo from './todo'
import Welcome from './welcome';

export default props => {
    const todoList = props.todoList.map((todo) => (
            <Todo
                key={ todo.id }
                todo={ todo }
                handleInputChange={ props.handleInputChange }
                handleEdit={ props.handleEdit }
                handleUpdateSubmit={ props.handleUpdateSubmit }
                handleDelete={ props.handleDelete }
                handleCheckbox={ props.handleCheckbox }
            />
    ));
    let renderWelcome = !props.todoList.length == 0;

    return (
        <div className="col-8">
            <div className="card">
                <div className="card-header">
                    View Todo
                </div>
                <ul className="list-group">
                    { renderWelcome 
                        ? todoList
                        : <Welcome /> }
                </ul>
            </div>
        </div>
    );
};