import './App.css'
import HomePage from './container/HomePage.js';
import React from 'react'; 
import { connect } from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import LogIn from './presentational/LogIn'; 
import { Route } from 'react-router-dom'
import Channel from './presentational/Channel';
import SignUp from './presentational/SignUp'
import Logout from './presentational/LogOut'
import NewChannelForm from './presentational/NewChannelForm';


class App extends React.Component {

  componentDidMount()  {
    if (localStorage.token) {
      this.props.getCurrentUser()
      // this.props.checkUserLoggedIn()
    }
      // this.props.getCurrentUser() ? localStorage.token : null
  }
    

  render() { 
    const {loggedIn} = this.props
    console.log(loggedIn);
    
    return ( 
      <React.Fragment>
        {localStorage.token ? <Logout/> : null}
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/' render={()=> loggedIn ? <Channel/> : <HomePage/>}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/channel' component={Channel}/>
        <Route exact path='/new/ChannelForm' component={NewChannelForm}/>
      </React.Fragment> 
      );
    }
}

  const mapDispatchToProps =  {
        getCurrentUser
      // checkUserLoggedIn()
    }
    
  
  const mapStateToProps = state => {
    console.log('mapping state to props' , state)
    return {loggedIn: !!state.sessions.user   
        }
    }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);



