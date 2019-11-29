import {SIGN_IN} from 'redux/action_types';

export const login = data => (dispatch)=>{
        dispatch({
            type: SIGN_IN,
            payload:data
        })
}