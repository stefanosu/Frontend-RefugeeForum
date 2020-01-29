import React from 'react';
import { connect } from 'react-redux'
import {updateLogInForm} from '../actions/loginForm.js'
import {login} from '../actions/currentUser.js'


const LogIn = ({loginFormData, updateLogInForm, login, history}) => {

    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginFormData, 
            [name]: value
        }
        updateLogInForm(updatedFormInfo)
    } 

    const handleSubmit = event => {
        event.preventDefault()
        // console.log(loginFormData, history)
        login(loginFormData, history)
    }

return ( 
    <form onSubmit={handleSubmit}> 
    <input placeholder='username'  type='text' name='username'
    value={loginFormData.username} onChange={handleInputChange}/>
        <input placeholder= 'password' type='password' name='password' value={loginFormData.password} onChange={handleInputChange}/>
        <input type='submit' value='Log In'/>
        </form>
        );
    }
    
    const mapStateToProps = state => {
        return {
            loginFormData: state.loginForm
        }
    }
    


export default connect(mapStateToProps, {updateLogInForm, login} ) (LogIn)