
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers';
import { combineReducers } from 'redux';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ConfigureStore = () => {

    const middlewares = [
        thunkMiddleware,
    ];
    const reducersArr = combineReducers({
        user:userReducer
    })

    
    const store =  createStore(
        reducersArr, composeEnhancer(applyMiddleware(...middlewares))     
    )
    return store;
    
};

export default ConfigureStore;