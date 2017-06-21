import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import * as weatherActions from '../../actions/weather.actions';
import { getWeatherAsync } from '../../modules/weather'
import {Button, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

const Location = props => (
    <Grid>
        <Row>
            <Col xs={12} md={8}>
                <h1>Change location view</h1>
                <p>Please select one of the available locations:</p>
            </Col>
            <Col xs={12} md={8}>
                <ListGroup>
                    <ListGroupItem>Lviv</ListGroupItem>
                    <ListGroupItem>London</ListGroupItem>
                    <ListGroupItem>New York</ListGroupItem>
                </ListGroup>
            </Col>
        </Row>

        <p>Current weather: { JSON.stringify(props.weather) }</p>
        <p><button onClick={() => props.changePage()}>Go to home page via redux</button></p>
        <Button bsStyle="primary" bsSize="large"
                onClick={props.getWeatherAsync}
                disabled={props.isGetting}>{props.isGetting ? 'Loading...' : 'Get Weather'}</Button>
    </Grid>
);

const mapStateToProps = state => ({
    weather: state.weather.weather,
    isGetting: state.weather.isGetting
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getWeatherAsync,
    changePage: () => push('/'),
    getWeather: () => weatherActions.setWeather('test')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Location);

// 663bddc033b818069f6759c25e162841
// http://samples.openweathermap.org/data/2.5/weather?q=Lviv&appid=663bddc033b818069f6759c25e162841
