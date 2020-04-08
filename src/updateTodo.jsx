import React from 'react';

export default props => (
    <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="todo">Description</label>
                    <textarea id="todo" rows="5" className="form-control update-todo-text" />
                </div>
                <div className="form-group">
                    <select id="priority" className="form-control">
                        <option selected disabled>Select a Priority</option>
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>
                </div>
                <div className="d-flex justify-content-end">
                    <a href="#collapseOne"
                        className="btn btn-primary btn-lg"
                        data-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExapmle"
                        >Save
                    </a>
                </div>
            </form>
        </div>
    </div>
)