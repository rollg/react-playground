import * as types from '../constants/ActionTypes'

const receiveWeatherObject = weather => ({
    type: types.RECEIVE_WEATHER_OBJECT,
    weather: weather
});

const getWeatherObject = location => ({
    type: types.GET_WEATHER_OBJECT,
    location: location
});

export const setWeather = (weather) => dispatch => {
    dispatch(receiveWeatherObject(weather));
};

export const getWeather = () => dispatch => {
    dispatch(getWeatherObject('Lviv'));
};
