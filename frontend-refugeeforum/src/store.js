import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users.js'
import sessions from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import Channel from './reducers/channel.js' 
import signupForm from './reducers/signUpForm.js'
import newChannelForm from './reducers/newChannelForm.js'
import isLoggedIn from './reducers/isLoggedIn.js'

const reducer = combineReducers({
    users: usersReducer,
    sessions,
    loginForm, 
    Channel,
    signupForm, 
    newChannelForm,
    isLoggedIn
}) 


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store 