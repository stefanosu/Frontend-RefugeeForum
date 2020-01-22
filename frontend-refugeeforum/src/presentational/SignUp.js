import React from 'react';
import { connect } from 'react-redux'
import {updateSignupForm} from '../actions/signUpForm.js'
import {signup} from '../actions/currentUser.js'


const SignUp = ({signupFormData, updateSignupForm, signup, history}) => {

  const handleInputChange = event => {
    const {name, value} = event.target
    const updatedFormInfo = {
      ...signupFormData, 
      [name]: value
    }
      updateSignupForm(updatedFormInfo)
  } 

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

return ( 
  <form onSubmit={handleSubmit}> 
    <input placeholder='username'  type='text' name='username' value={signupFormData.username} onChange={handleInputChange}/>
      <input placeholder= 'password' type='text' name='password' value={signupFormData.password} onChange={handleInputChange}/>
      <input type='submit' value='Sign Up'/>
  </form>
  );
}
    
  const mapStateToProps = state => {
    return {
      signupFormData: state.signupForm
    }
  }

export default connect(mapStateToProps, {updateSignupForm, signup} ) (SignUp)