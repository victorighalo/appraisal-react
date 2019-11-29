import { createStore, applyMiddleware } from "redux";
import rootReducer from "redux/reducers";
import {loadState,saveState} from "localStorage";
import {throttle} from 'lodash/throttle';
import thunk from 'redux-thunk'


const configureStore = ()=>{
const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe( ()=>{
    saveState({
        data: store.getState()
    })
})
return store;
}

export default configureStore;