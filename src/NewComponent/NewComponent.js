import React, { Component } from 'react';

class NewComponent extends Component {
    // constructor(props) {
    //     super(props)
    // }
  render() {
    return (
       <div>Hello World from {this.props.name}!</div>
    )
  }
};

export default NewComponent;