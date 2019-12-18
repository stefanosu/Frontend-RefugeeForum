import HomePage from './container/HomePage.js';
import React from 'react'; 
import { connect } from 'react-redux'
import {getCurrentUser} from './actions/CurrentUser.js'
import LogIn from './presentational/LogIn'; 
import { Route } from 'react-router-dom'
import SubChannel from './container/SubChannel';
import SignUp from './container/SignUp'
import Logout from './presentational/LogOut'
import NewSubChannelForm from './container/NewSubChannelForm';



class App extends React.Component {
    
    componentDidMount() {
      // debugger
      // this.props.getCurrentUser()
      // this.props.getCurrentChannel() 
    }
    
  
    render() { 
      const {loggedIn} = this.props
      return ( 
      <React.Fragment>
        {loggedIn ? <Logout/> : null}
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/' render={()=> loggedIn ? <SubChannel/> : <HomePage/>}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/subchannel' component={SubChannel}/>
        <Route exact path='/new/subChannelForm' component={NewSubChannelForm}/>
      </React.Fragment> 
        );
    }
  }
  
  
  const mapDispatchToProps = {
      getCurrentUser
  }
  
  
  const mapStateToProps = state => ({
      loggedIn: !!state.currentUser 
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);