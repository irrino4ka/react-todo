import React from 'react';
import Button from 'react-bootstrap/lib/Button';

// import classes from './BuildControl.css';

const tableRow = (props) => (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.task}</td>
        <td>{props.description}</td>
        <td><Button bsStyle="success"><i className="fa fa-pencil"></i>Edit</Button>
            <Button onClick={() => alert('yo')} bsStyle="danger"><i className="fa fa-trash"></i>Delete</Button></td>
    </tr>

)


export default tableRow;




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