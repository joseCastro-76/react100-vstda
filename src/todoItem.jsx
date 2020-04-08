import React from 'react';

export default props => (
    <div className="card-header" id="headingOne">
        <form className="form-inline">
            <div className="form-check mb-2 mr-sm-2">
                <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                <label className="form-check-label" htmlFor="inlineFormCheck">
                Todo item will go here
                </label>
            </div>
            <div className="ml-auto">
                <a  role="button"
                    className="btn btn-success text-white mb-2 mr-1 edit-todo"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >Edit</a>
                <a  role="button"
                    className="btn btn-danger text-white mb-2 delete-todo"
                >Delete</a>
            </div>
        </form>
    </div>
)