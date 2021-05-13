import { combineReducers } from 'redux';

function loginState(state = { login: false }, action) {
    switch(action.type) {
        case 'SET_LOGIN':
            return {
                login: action.data
            };
        default: // 在初始化store的时候会返回默认的state
            return state;
    }
}

export default combineReducers({
    loginState
});
