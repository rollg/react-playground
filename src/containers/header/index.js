import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './header.css';

const NavigationBar = props => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a onClick={() => props.changePage('/')}>Weather</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} onClick={() => props.changePage('/')}
                     active={props.location === '/'}>Home</NavItem>
            <NavItem eventKey={2} onClick={() => props.changePage('/change-location')}
                     active={props.location === '/change-location'}>Change Location</NavItem>
        </Nav>
    </Navbar>
);

const mapStateToProps = state => ({
    location: window.location.pathname
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (location) => push(location)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBar);
