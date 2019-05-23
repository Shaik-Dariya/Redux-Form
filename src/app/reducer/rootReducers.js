import { createHashHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

export const  history = createHashHistory();


function Name(state={}, action){
    return state;
}


const reducers = {
    router: connectRouter(history),
    form: formReducer,
    callMe: Name
};

const combinedReducer = combineReducers(reducers);

export default combinedReducer;