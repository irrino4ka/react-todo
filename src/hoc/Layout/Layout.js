import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    SideDraweToggledHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Auxiliary>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed = {this.SideDrawerClosedHandler} />
                <Toolbar drawerToggleClicked={this.SideDraweToggledHandler}/>
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;