import React from 'react';
import TodoForm from './todoForm'


export default props => (
    <div className="col-4">
        <div className="card">
            <div className="card-header">
                Add New Todo
            </div>
            <div className="card-body">
                <TodoForm />
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary btn-lg btn-block">Add Todo</a>
            </div>
        </div>
    </div>
);