import React from 'react';
import TodoForm from './todoForm';

export default props => (
    <div className="accordion" id="accordionExample">
        <div className="card">
            <div className="card-header" id="headingOne">
                <form className="form-inline">
                    <div className="form-check mb-2 mr-sm-2">
                        <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                        <label className="form-check-label" htmlFor="inlineFormCheck">
                        Todo item will go here
                        </label>
                    </div>
                    {/* Turn button into an icon */}
                    <button
                        type="button"
                        className="btn btn-primary mb-2"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        >Edit
                    </button>
                </form>
            </div>
            <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
                {/* Pass props to change the titles */}
                <TodoForm 
                    todoTitle={ props.todoTitle }
                    priorityTitle={ props.priorityTitle }
                />
                <div className="d-flex justify-content-end">
                <a href="#collapseOne"
                    className="btn btn-primary btn-lg"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExapmle"
                    >Save</a>
                </div>
            </div>
            </div>
        </div>
    </div>
)