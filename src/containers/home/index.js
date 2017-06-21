import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap';
import WeatherTable from '../../components/table/table';

const Home = props => (
    <Grid>
        <Row>
            <Col xs={12} md={10}>
                <h1>Weather in { props.currentCity}</h1>
                <WeatherTable/>
            </Col>
        </Row>
    </Grid>
);

const mapStateToProps = state => ({
    currentCity: state.city.currentCity,
    weather: state.weather.currentWeather
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/change-location')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
