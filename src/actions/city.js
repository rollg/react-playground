import * as actionTypes from '../constants/ActionTypes';

export const setCurrentCity = (city) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_CURRENT_CITY,
            payload: city
        })
    }
};
