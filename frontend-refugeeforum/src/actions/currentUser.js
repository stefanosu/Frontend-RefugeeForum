import {resetLoginForm} from './loginForm.js'
import { getAllChannels } from './channel.js'
import {resetSignupForm} from './signUpForm.js'


///sync action creators
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
} 

export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}


///async action creators 
export const login = (credentials, history) => {
  console.log('credentials are here', credentials);
  return dispatch => {
        // const token = localStorage.token 
    return fetch("http://localhost:3000/api/v1/login", {
        // credentials: "include", 
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer${token}`
        }, 
          body: JSON.stringify(credentials)
      })
      .then(resp => resp.json())
      .then(user =>{
          if(user.error) {
              alert(user.error)
          } else {
              // console.log(user.data)
              dispatch(setCurrentUser(user))
              localStorage.setItem("token", user.token)
              dispatch(resetSignupForm())
              dispatch(getAllChannels(user.data))
              history.push('/')
          }
      })
      .catch(console.log)
  }
}

//create new user
export const signup = (credentials, history) => {
    console.log('credentials are here', credentials);
    return dispatch => {
        // debugger
        // const token = localStorage.token 
        return fetch("http://localhost:3000/api/v1/signup", {
        // credentials: "include",
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
            }, 
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user =>{
            if(user.error) {
                alert(user.error)
            } else {
                // console.log(user.data)
                localStorage.setItem('token', user.jwt)
                dispatch(setCurrentUser(user))
                dispatch(resetLoginForm())
                // dispatch(getAllChannels(user.data))
                history.push('/') 
            }
        })
        .catch(console.log)
    }
}


export const logout = () => {
    console.log('loggedOut!!!')
    return dispatch => { 
        dispatch(clearCurrentUser())
        localStorage.clear()
    }
}

export const getCurrentUser = () => {
    // let token = localStorage.token
    console.log('DISPATCHING GET CURRENT USER');
    return dispatch => {
        // debugger 
        return fetch("http://localhost:3000/api/v1/persist", {
        // credentials: "include",    
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json', 
            Authorization: `Bearer ` + localStorage.token 
            },
        })
        .then(resp => resp.json())
        .then(user =>{
            // debugger
            if(user.error) {
                alert(user.error)
            } else {
                console.log(user)
                localStorage.setItem("token", user.token)
                dispatch(setCurrentUser(user))
                dispatch(getAllChannels(user.data))
            }
        })
        .catch(console.log)
    }
}