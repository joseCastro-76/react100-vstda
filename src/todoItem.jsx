import React from 'react';

export default props => (
    <form className="form-inline">
        <div className="form-check mb-2 mr-sm-2">
            <input
                className="form-check-input mr-2"
                type="checkbox"
                id="todo"
                name="completed"
                checked={ props.todo.done }
                onChange={ (e) => props.handleCheckbox(props.todo.id, e) }
            />
            <label className="form-check-label" htmlFor="todo">
                { props.todo.todo }
            </label>
        </div>
        <div className="ml-auto">
            <button
                className="btn btn-success text-white mb-2 mr-1 edit-todo"
                onClick={ (e) => props.handleEdit(props.todo.id, e)}
                >Edit
            </button>

            <button
                className="btn btn-danger text-white mb-2 delete-todo"
                onClick={ (e) => props.handleDelete(props.todo.id, e)}
                >Delete
            </button>
        </div>
    </form>
)