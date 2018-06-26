import React, { Component } from 'react';

import axios from '../../axios';

import TableComponent from './../TableComponent/TableComponent';

class DataTasks extends Component {
    state = {
        tasks: [],
        newState: 'My state'
    }

    componentDidMount() {
        axios.get(`/tasks.json`)
            .then(res => {
                let tasks = res.data;
                let arr = Object.keys(tasks).map(
                    (k) => {console.log(k);
                        tasks[k].newId = k;
                        return tasks[k];
                    }
                );
                this.setState({ tasks: arr })
                console.log(this.state.tasks)
            })
    }

    render() {
        return (
            <div>
                {this.state.newState}
                <TableComponent tasks={this.state.tasks} name={this.state.newState} />
                <ul>
                    {this.state.tasks
                        .map(
                            (task) => <li key={task.id}>{task.name}</li>
                        )}
                </ul>
            </div>

        )
    }
}

export default DataTasks;