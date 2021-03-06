import {combineReducers} from 'redux';
import gamesReducer from './gamesReducer';
import detailsReducer from './detailsReducer';
const rootReducers = combineReducers({
    games : gamesReducer,
    details: detailsReducer
})

export default rootReducers;