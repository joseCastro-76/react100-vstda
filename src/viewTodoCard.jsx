import React from 'react';
import TodoItem from './todoItem'

export default props => (
    <div className="col-8">
        <div className="card">
            <div className="card-header">
                View Todo
            </div>
            <TodoItem
                todoTitle={ props.todoTitle }
                priorityTitle={ props.priorityTitle }
            />
            <TodoItem
                todoTitle={ props.todoTitle }
                priorityTitle={ props.priorityTitle }
            />
            <TodoItem
                todoTitle={ props.todoTitle }
                priorityTitle={ props.priorityTitle }
            />
            
        </div>
    </div>
);