import React, { Component } from 'react';

import classes from './TableComponent.css'

import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';

import TableRow from './TableRow/TableRow';

class TableComponent extends Component {

    state = {
        tasks: []
    }
    ComponentWillReceiveProps(nextProps) {
        this.setState({tasks: nextProps.tasks});
    }
    render() {
        console.log(classes);
        console.log('PROPS tasks', this.props.tasks);
        console.log('STATE tasks', this.state.tasks);
        return (
            <div className={classes.TableComponent}>
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Task</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                    {this.props.tasks.map(task => (
                        <TableRow
                            id= {task.id}
                            name= {task.name}
                            task = {task.task}
                            description={task.description}  key={task.id}/>
                    ))}
{/*                         
                        <tr>
                            <td>2</td>
                            <td>
                            {this.props.tasks
                    .map(
                        (task) =><p key={task.id}>{task.name}</p>
                        )}</td>
                            <td>{this.props.name}</td>
                            <td><Button bsStyle="success">Edit</Button>
                                <Button bsStyle="danger">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Task 3</td>
                            <td>Table cell</td>
                            <td><Button bsStyle="success">Edit</Button>
                                <Button bsStyle="danger">Delete</Button></td>
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TableComponent;