import { combineReducers } from 'redux';
import weatherFeeds from './weatherReducer';

const rootReducer = combineReducers({ weatherFeeds });

export default rootReducer;
