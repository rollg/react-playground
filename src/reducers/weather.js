import * as actionTypes from '../constants/ActionTypes';

const initialState = {
    currentWeather: {},
    isGetting: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_WEATHER:
            return {
                ...state,
                currentWeather: action.payload,
                isGetting: !state.isGetting
            };
        case actionTypes.GET_WEATHER_REQUEST:
            return {
                ...state,
                isGetting: true
            };
        default:
            return state
    }
}
