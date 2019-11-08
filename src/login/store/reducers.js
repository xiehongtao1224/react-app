import { combineReducers } from 'redux';

function loginState(state = false, action) {
    switch(action.type) {
        case 'SET_LOGIN':
            return action.state;
        default: 
            return state;
    }
}

export default combineReducers({
    loginState
});
