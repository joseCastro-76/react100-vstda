import React from 'react';

export default props => (
    <form>
        <div className="form-group">
            <label htmlFor="todo">{ props.todoTitle }</label>
            <textarea className="form-control" id="todo" rows="5"></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="priority">{ props.priorityTitle }</label>
            <select className="form-control" id="priority">
                <option selected disabled value="">Select a Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
        </div>
    </form>
);