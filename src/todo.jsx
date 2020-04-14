import React from 'react';
import TodoItem from './todoItem';
import UpdateTodo from './updateTodo';

export default props => (
    <li className="list-group-item success">
        { !props.todo.editEnabled
            ? <TodoItem
                todo={ props.todo }
                handleEdit={ props.handleEdit }
                handleDelete={ props.handleDelete }
                handleCheckbox={ props.handleCheckbox }
            />
            : <UpdateTodo
                todo={ props.todo }
                handleUpdateSubmit={ props.handleUpdateSubmit }
            />
        } 
    </li>
)