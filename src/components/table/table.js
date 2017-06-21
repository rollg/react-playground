import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Table} from 'react-bootstrap';
import TableRow from './row';
import ftoc from '../../utils/ftoc';

const WeatherTable = props => (
    <Table responsive>
        <thead>
        </thead>
        <tbody>
        {getRows(props.weather)}
        <tr className={ (getRows(props.weather).length > 0 ? 'hide' : 'show') }>
            <td><h1>Please select the city</h1><h3>from 'Change Location'</h3></td>
        </tr>
        </tbody>
    </Table>
);

function getRows(weather) {
    let rows = [];

    if (weather.hasOwnProperty('main')) {
        rows.push(<TableRow name={'Current Temperature'} value={ftoc(weather['main']['temp'])} key={Math.random()}/>);
        rows.push(<TableRow name={'Wind'} value={weather['wind']['speed'] + ' m/s'} key={Math.random()}/>);
        rows.push(<TableRow name={'Pressure'} value={weather['main']['pressure'] + ' hpa'} key={Math.random()}/>);
        rows.push(<TableRow name={'Humidity'} value={weather['main']['humidity'] + ' %'} key={Math.random()}/>);
        rows.push(<TableRow name={'Sunset'} value={new Date(weather['sys']['sunset']).getHours() + ':' + new Date(weather['sys']['sunset']).getMinutes()} key={Math.random()}/>);
        rows.push(<TableRow name={'Sunrise'} value={new Date(weather['sys']['sunrise']).getHours() + ':' + new Date(weather['sys']['sunrise']).getMinutes()} key={Math.random()}/>);
        rows.push(<TableRow name={'Geo coords'} value={'[ ' + weather['coord']['lon'] + ' , ' + weather['coord']['lat'] + ']'} key={Math.random()}/>);
    }

    return rows
}

const mapStateToProps = state => ({
    weather: state.weather.currentWeather
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherTable)
