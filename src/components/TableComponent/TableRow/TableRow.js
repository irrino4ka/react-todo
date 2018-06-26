import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

import axios from '../../../axios';
import classes from './TableRow.css';

class TableRow extends Component {
    constructor() {
        super();
        this.deletePostHandler = this.deletePostHandler.bind(this);
        this.editPostHandler = this.editPostHandler.bind(this);

    }
    deletePostHandler = () => {
        console.log(this.props.id, this.props.newId);
        axios.delete('/tasks/' + this.props.newId)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error));
    }

    editPostHandler = () => {
        console.log(this.props.id, this.props.newId);
        axios.get('/tasks/' + this.props.newId)
            .then(response => {
                console.log(response)
            });
        // axios.get('/tasks/',{params: {id:  this.props.newId}})
        // .then( response => {
        //    console.log(response);
        // })
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.task}</td>
                <td>{this.props.description}</td>
                <td className={classes.VertAligned}><Button bsStyle="success" onClick={this.editPostHandler} className={classes.Button}><i className="fa fa-pencil"></i>Edit</Button></td>
                <td className={classes.VertAligned}><Button className={classes.Button} onClick={this.deletePostHandler} bsStyle="danger"><i className="fa fa-trash"></i>Delete</Button></td>
            </tr>
        )
    }
}

export default TableRow;




{/* <div className = {classes.BuildControl}>
<div className = {classes.Label}>{props.label}</div>
<button 
    className = {classes.Less}
    onClick={props.removed}
    disabled={props.disabled}>
        Less
</button>
<button 
    className = {classes.More}
    onClick={props.added}>
        More
</button>
</div> */}