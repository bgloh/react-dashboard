import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './components/counter/counterDucks';
import quoteReducer from './components/quote/quoteDucks';
import userReducer from './components/user/userDucks';
import httpReducer from './components/http/httpDucks';
import authReducer from "./components/authRouter/authRouterDucks";

const reducer = combineReducers( { 
    counter : counterReducer, 
    quote : quoteReducer,
    user : userReducer,
    http : httpReducer,
    auth : authReducer,
 } );

const store = createStore(reducer, applyMiddleware(thunk));

export default store