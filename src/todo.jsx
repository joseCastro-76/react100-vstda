import React from 'react';
import TodoItem from './todoItem';
import UpdateTodo from './updateTodo';

export default props => (
    <div className="accordion" id="accordionExample">
        <div className="card">
            <TodoItem />
            <UpdateTodo />
        </div>
    </div>
)