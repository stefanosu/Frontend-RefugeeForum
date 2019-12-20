import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/Users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/LoginForm.js'
import Channel from './reducers/Channel.js' 
import signupForm from './reducers/signupForm.js'
import newChannelForm from './reducers/newChannelForm.js'

const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm, 
    Channel,
    signupForm, 
    newChannelForm
}) 


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))




export default store 