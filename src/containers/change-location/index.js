import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWeatherAsync } from '../../actions/weather'
import {setCurrentCity} from '../../actions/city';
import {Button, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './change-location.css';

const Location = props => (
    <Grid>
        <Row>
            <Col xs={12} md={10}>
                <h1>Change location view</h1>
                <p>Please select one of the available locations:</p>
            </Col>
            <Col xs={12} md={10}>
                <ListGroup>
                    <ListGroupItem onClick={() => props.setCurrentCity('Lviv')}>Lviv</ListGroupItem>
                    <ListGroupItem onClick={() => props.setCurrentCity('London')}>London</ListGroupItem>
                    <ListGroupItem onClick={() => props.setCurrentCity('New York')}>New York</ListGroupItem>
                </ListGroup>
            </Col>
        </Row>

        <Button bsStyle="primary" bsSize="large"
                onClick={props.getWeatherAsync}
                disabled={props.isGetting}>{props.isGetting ? 'Loading...' : 'Get Weather'}</Button>

        <p>current city: { props.currentCity }</p>
    </Grid>
);

const mapStateToProps = state => ({
    weather: state.weather.currentWeather,
    isGetting: state.weather.isGetting,
    currentCity: state.city.currentCity
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getWeatherAsync,
    setCurrentCity
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Location);

// http://samples.openweathermap.org/data/2.5/weather?q=Lviv&appid=663bddc033b818069f6759c25e162841
// http://samples.openweathermap.org/data/2.5/weather?q=Lviv&appid=4584721974c28d166ba11871ddc537fe
