import * as actionTypes from '../constants/ActionTypes';

const initialState = {
    currentCity: 'Lviv'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CITY:
            return {
                ...state,
                currentCity: action.payload
            };
        default:
            return state;
    }
}
