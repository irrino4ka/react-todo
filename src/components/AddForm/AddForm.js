import React, { Component } from 'react';

import axios from 'axios';
import classes from './AddForm.css';

class AddForm extends Component {
    state= {
        task: {
            id: 0,
            name: '',
            task: '',
            description: ''
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }

      clickHandler() {
          console.log('heere');
          const task ={
              id: this.state.id,
              name: this.state.name,
              task: this.state.task,
              description: this.state.description
          }
        axios.post('https://todo-list-9adca.firebaseio.com/tasks.json', task)
        .then(response => {
            console.log('success')
            // this.setState({loading: false, purchasing: false});
        })
        .catch(error => 
            {
                console.log('error', error)
                // this.setState({loading: false, purchasing: false});
            }
        );
      }
    render () {
        return (
          <form className={classes.demoForm}>
            <h2>Add new Task</h2>
            <div className="form-group">
              <label htmlFor="id">id</label>
              <input type="text"
                     className="form-control"
                     name="id"
                     value={this.state.id}
                     onChange={this.handleUserInput} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" 
                     className="form-control"
                     name="name"
                     value={this.state.name}
                     onChange={this.handleUserInput} />
            </div>
            <div className="form-group">
              <label htmlFor="task">Task</label>
              <input type="text" 
                     className="form-control"
                     name="task"
                     value={this.state.task}
                     onChange={this.handleUserInput} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" 
                     className="form-control"
                     name="description"
                     value={this.state.description}
                     onChange={this.handleUserInput}  />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.clickHandler}>
               Add New Task
            </button>
          </form>
        )
      }
}

export default AddForm;