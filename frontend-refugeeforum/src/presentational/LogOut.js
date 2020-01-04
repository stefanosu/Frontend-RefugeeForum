import React from 'react';
import { connect } from 'react-redux'
import {logout} from '../actions/currentUser.js'


const LogOut = (props) => {

const handleSubmit = (e) => {
    e.preventDefault()
    props.logout()
}

return ( 
    <form onSubmit={handleSubmit}> 
        <input type='submit' value='Log Out'/>
        </form>
        );
    }
    
    
const mapDispatchToProps = {
        logout
    }

export default connect(null, (mapDispatchToProps) ) (LogOut)