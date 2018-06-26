import React, { Component } from 'react';

import axios from '../../axios';
import classes from './AddForm.css';

class AddForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            id: '',
            name: '',
            task: '',
            description: ''
        }
    }

    handleSubmit(event) {
        // event.preventDefault();
        const task = {
            id: this.state.id,
            name: this.state.name,
            task: this.state.task,
            description: this.state.description
        }

        console.log(task);
        axios.post('/newTasks', task)
            .then(response => {
                console.log('success', response)
            })
            .catch(error => {
                console.log('error', error)
            }
            );
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={classes.demoForm}>
                <h2>Add new Task</h2>
                <div className="form-group">
                    <label htmlFor="id">id</label>
                    <input type="text"
                        className="form-control"
                        name="id"
                        value={this.state.id}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="task">Task</label>
                    <input type="text"
                        className="form-control"
                        name="task"
                        value={this.state.task}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                </div>
                <button className="btn btn-primary">
                    Add New Task
            </button>
            </form>
        )
    }
}

export default AddForm;