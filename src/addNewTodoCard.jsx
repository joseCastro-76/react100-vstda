import React from 'react';

export default props => (
    <div className="col-4">
        <div className="card">
            <div className="card-header">
                Add New Todo
            </div>
            <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="todo">I want to...</label>
                    <textarea
                        className="create-todo-text form-control"
                        id="todo"
                        name="todo"
                        rows="5"
                        value={ props.todo }
                        onChange={ props.handleInputChange }>
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="formPriority">How much of a priotity is this?</label>
                    <select
                        className="create-todo-priority form-control"
                        id="priority"
                        name="priority"
                        value={ props.priority }
                        onChange={ props.handleInputChange }>
                            <option value="0" disabled>Select a Priority</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                    </select>
                </div>
            </form>
            </div>
            <div className="card-footer">
                <button
                    className="create-todo btn btn-primary btn-lg btn-block"
                    onClick={ props.handleSubmit }>
                    Add Todo
                </button>
            </div>
        </div>
    </div>
);