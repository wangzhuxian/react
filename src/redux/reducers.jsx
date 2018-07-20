//多个组件的时候
import {combineReducers} from 'redux';
import {getRedirectPath} from '../utils';
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER
}
    from "./types";
const initUser = {
    username:'',
    type: '',
    msg:'',        // 需要返回错误的信息
    redirectTo: '' // 需要自动跳转的路由path
};
function user(state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            const user = action.data;
            return {...user,redirectTo: getRedirectPath(user.type, user.header)};
        case ERROR_MSG:
            return {...state,msg: action.data};
        case RECEIVE_USER:
            return action.data;
        case RESET_USER:
            return {...state,msg: action.data};
        default:
            return state;
    }
}

//同一暴露模块接口
export default combineReducers({
    user,
})