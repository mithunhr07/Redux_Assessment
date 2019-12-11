import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
    LoginReducer, RegisterReducer, UsersReducer

});