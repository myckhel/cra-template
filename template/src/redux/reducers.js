import { combineReducers } from 'redux';
import auth from './auth';

const appReducer = combineReducers({
    auth,
});

const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        // for all keys defined in your persistConfig(s)
        // localStorage.clear()
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
