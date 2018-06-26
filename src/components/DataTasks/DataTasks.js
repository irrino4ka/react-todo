import React, { Component } from 'react';

import axios from 'axios';

import TableComponent from './../TableComponent/TableComponent';

class DataTasks extends Component {
    state = {
        tasks: [],
        newState: 'My state'
    }

    componentDidMount() {
        axios.get(`https://todo-list-9adca.firebaseio.com/tasks.json`)
            .then(res => {
                // this.setState({tasks: res.data})
                // const tasks = res.data;
                // console.log(tasks);
                // this.setState({ ...tasks });
                let tasks = res.data;
                // for (var key in res.data) {
                //     var obj = res.data[key];
                //     for (var prop in obj) {
                //        if(obj.hasOwnProperty(prop)){
                //          console.log(prop + " = " + obj[prop]);
                //        }
                //     }
                //  }

                 let arr = Object.keys(tasks).map((k) => tasks[k]);
                 this.setState({tasks: arr})
               console.log(this.state.tasks)
            })
    }

    render() {
        return (
            <div>
                {this.state.newState}
                <TableComponent tasks= {this.state.tasks} name={this.state.newState}/>
            <ul>
                {this.state.tasks
                    .map(
                        (task) =><li key={task.id}>{task.name}</li>
                        )}
                </ul>
            </div>

        )
    }
}

export default DataTasks;