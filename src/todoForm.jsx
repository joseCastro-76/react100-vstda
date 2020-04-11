import React, { Component } from 'react';

export default props => (
    <form>
        <div className="form-group">
            <label htmlFor="todo">I want to...</label>
            <textarea
                className="form-control create-todo-text"
                id="todo"
                name="todo"
                rows="5"
                value={ props.todo }
                onChange={ props.handleInputChange }>
            </textarea>
        </div>
        <div className="form-group">
            <label htmlFor="priority">How much of a priotity is this?</label>
            <select
                className="form-control"
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
);