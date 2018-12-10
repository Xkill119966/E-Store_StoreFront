import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'

import asyncReducer from './asyncReducer';

import modalReducer from '../components/misc/modalManager/modalReducer'



export const reducers = combineReducers({
        form: formReducer,
        user: userReducer,
        toastr: toastrReducer,
        async: asyncReducer,
        modal: modalReducer


})