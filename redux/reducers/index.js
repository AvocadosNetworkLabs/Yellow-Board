import UserData from './UsderData';
import IsLogged from './IsLogged';
import { postReducer } from './postReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    UserData,
    // IsLogged,
    postReducer,
})

// export default allReducers;