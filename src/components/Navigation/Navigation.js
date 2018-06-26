import React, { Component } from 'react';

import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import DropdownButton from 'react-bootstrap';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class Navigation extends Component {
    state = {
        i: 1
    }
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <span>My toDo List</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav navbar>
                            <NavItem>Tasks</NavItem>
                            <NavItem>Profile</NavItem>
                            <NavItem>
                                {/* <DropdownButton title="UserName"
                                id={`dropdown-basic-${this.state.i}`}
                                    // bsStyle={title.toLowerCase()}
                                    // title={title}
                                    // key={i}
                                    // id={`dropdown-basic-${i}`}
                                >
                                    <MenuItem eventKey="1">Action</MenuItem>
                                    <MenuItem eventKey="2">Another action</MenuItem>
                                    <MenuItem eventKey="3" active>
                                        Active Item
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey="4">Log Out</MenuItem>
                                </DropdownButton> */}
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <Grid>
          <HelloWorldPage />
        </Grid> */}
            </div>
        )
    }
}

export default Navigation;