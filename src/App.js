import React, { Component } from 'react';
import './App.css';

import NewComponent from './NewComponent/NewComponent';
import Navigation from './components/Navigation/Navigation';
import Button from 'react-bootstrap/lib/Button';

import classes from './App.css';

import Auxiliary from './hoc/Auxiliary/Auxiliary';
import Modal from './components/Modal/Modal';
import DataTasks from './components/DataTasks/DataTasks';
import AddForm from './components/AddForm/AddForm';

class App extends Component {

  state= {
    addTask: false
  }

  clickHandler() {
    this.setState({addTask: true});
    console.log('add button');
  }

  render() {
    let tasks = []
    if (!this.state.addTask) {
      tasks = (
        <div className="App">
        <Navigation />
        <div className="container">
          <header className={classes.Header}>
            <div>
              <p>My Tasks</p>
            </div>
            <div>
              <Button bsStyle="primary" onClick={this.clickHandler.bind(this)}><i className="fa fa-plus"></i>Add New Task</Button>
            </div>
          </header>
          <DataTasks/>
        </div>
        <NewComponent name="John" />
      </div>
      )
    }
    return (
            <Auxiliary>
                <Modal show={this.state.addTask} modalClose={this.purchaseCancelHandler}>
                    <AddForm />
                </Modal>
                {tasks}
            </Auxiliary>
    );
  }
}

export default App;
