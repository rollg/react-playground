import axios from 'axios';
// import * as weatherActions from '../actions/weather.actions';

export default {
    getWeather: (city, period) => {
        city = city || '';
        period = period || '';

        axios.get('https://crossorigin.me/http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=663bddc033b818069f6759c25e162841')
        .then((response) => {
            console.log(response);
            debugger;
            // weatherActions.setWeather(response);
        })
        .catch((error) => {
            // console.log(error);
            debugger;
        })
    }
}
