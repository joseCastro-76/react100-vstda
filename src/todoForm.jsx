import React from 'react';

export default props => (
    <form>
        <div className="form-group">
            <label htmlFor="todo">I want to...</label>
            <textarea className="form-control create-todo-text" id="todo" rows="5"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="priority">How much of a priotity is this?</label>
            <select className="form-control" id="priority">
                <option selected disabled>Select a Priority</option>
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
            </select>
        </div>
    </form>
);