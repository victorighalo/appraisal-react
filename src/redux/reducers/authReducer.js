import {SIGN_IN,SIGN_OUT,PROCESSING_AUTH} from 'redux/action_types';

const INITIAL_STATE = {
    isSignedIn: null,
    processing_auth:false,
    user:{}
};

export default (state =INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN:
        return { ...state, isSignedIn: true}

        case SIGN_OUT:
            return { ...state, isSignedIn: false}

        case PROCESSING_AUTH:
                return { ...state, processing_auth: action.payload}

        default: return state;
    }
}