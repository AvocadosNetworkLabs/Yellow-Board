import { GEt_POST } from '../types';
import {HYDRATE} from "next-redux-wrapper";

const initialState={
    data: [],
}

const postReducer = (state=initialState, action)=>{
    switch(action.type){
        case HYDRATE:
            return {...state};

        case GEt_POST:
            return{
                ...state,
                data: action.payload,
            }

        default:
            return state;
    }
}

export default postReducer;