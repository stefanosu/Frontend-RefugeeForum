import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import Channel from './reducers/channel.js' 
import signupForm from './reducers/signUpForm.js'
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