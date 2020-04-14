import React, { Component } from 'react';

class UpdateTodo extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = { 
            id: props.todo.id,
            todo: props.todo.todo,
            priority: props.todo.priority,
            completed: props.todo.completed,
            editEnabled: false,
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            // <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="todo">Description</label>
                        <textarea
                            id="todo"
                            rows="5"
                            className="form-control update-todo-text"
                            name="todo"
                            value={ this.state.todo }
                            onChange={ this.handleInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <select
                            className="form-control"
                            id="priority"
                            name="priority"
                            value={ this.state.priority }
                            onChange={ this.handleInputChange }>
                                <option value="0" disabled>Select a Priority</option>
                                <option value="1">High</option>
                                <option value="2">Medium</option>
                                <option value="3">Low</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            className="btn btn-primary update-todo"
                            role="button"
                            onClick={ (e) => this.props.handleUpdateSubmit(this.state, e)}
                            >Update
                        </button>
                    </div>
                </form>
            // </div>
        )
    }
}

export default UpdateTodo;