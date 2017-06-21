import { combineReducers } from 'redux'
import weather, * as fromWeather from './weather'

const rootReducer = combineReducers({
    weather
});

export default rootReducer
