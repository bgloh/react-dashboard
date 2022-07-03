import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './components/counter/counterDucks';
import quoteReducer from './components/quote/quoteDucks';
import userReducer from './components/user/userDucks';
import httpReducer from './components/http/httpDucks';
import controllerReducer from "./pages/controllerDucks";

const reducer = combineReducers( { 
    counter : counterReducer, 
    quote : quoteReducer,
    user : userReducer,
    http : httpReducer,
    controller : controllerReducer,
 } );

const store = createStore(reducer, applyMiddleware(thunk));

export default store