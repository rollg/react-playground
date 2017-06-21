import axios from 'axios';
import * as actionTypes from '../constants/ActionTypes';
import * as weatherConst from '../constants/weather';

export const getWeatherAsync = (city) => {
    return dispatch => {
        dispatch({
            type: actionTypes.GET_WEATHER_REQUEST
        });

        city = city || weatherConst.CITY;
        let url = `${weatherConst.PROXY}${weatherConst.WEATHER_URL}${city}&appid=${weatherConst.APP_ID}`;

        axios.get(url)
            .then(response => dispatch({
                type: actionTypes.SET_WEATHER,
                payload: response.data
            }))
            .catch(error => console.log(error));
    }
};
