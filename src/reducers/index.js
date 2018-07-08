
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const counterApp = combineReducers({
    count: counterReducer
})

export default counterApp;