import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';



const initState = {
    data: ''
}

const middleware = [thunk]
let googleMiddleware = a => a;
googleMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || googleMiddleware;

const store = createStore(rootReducer, 
    initState, 
    compose(
        applyMiddleware(...middleware), 
        googleMiddleware
    )
    )

export default store