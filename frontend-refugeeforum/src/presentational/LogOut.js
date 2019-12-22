import React from 'react';
import { connect } from 'react-redux'
import {logout} from '../actions/currentUser.js'


const LogOut = ({logout}) => {


return ( 
    <form onSubmit={logout}> 
        <input type='submit' value='Log Out'/>
        </form>
        );
    }
    
    


export default connect(null, {logout} ) (LogOut)