import axios from 'axios';

export const SET_WEATHER = 'weather/SET_WEATHER';
export const GET_WEATHER_REQUEST = 'weather/GET_WEATHER_REQUEST';

const initialState = {
    currentWeather: {},
    isGetting: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.payload,
                isGetting: !state.isGetting
            };
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                isGetting: true
            };
        default:
            return state
    }
}

export const getWeatherAsync = () => {
    return dispatch => {
        dispatch({
            type: GET_WEATHER_REQUEST
        });

        axios.get('https://cors-anywhere.herokuapp.com/http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=663bddc033b818069f6759c25e162841')
            .then(response => dispatch({
                type: SET_WEATHER,
                payload: response.data
            }))
            .catch(error => console.log(error));
    }
};
