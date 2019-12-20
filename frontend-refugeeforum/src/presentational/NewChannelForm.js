import React from 'react'
import {updateNewChannelForm} from '../actions/newChannelForm'
import {connect} from 'react-redux'

const NewChannelForm = () => {
    
const handleChange = event => {
  event.preventDefault()
  const {name, value} = event.target
  updateNewChannelForm(name, value)
  }  

return ( 
  <div>
    <form>
    <input 
      name='name'
      onChange={handleChange}
      value={null}
      />
    </form>
  </div> );
}

  // const mapStateToProps = state => {
  //     state.newSubChannelForm
  // }

  // const mapDispatchToProps = {
  //     state: state.newSubChannelForm 
  // }

export default connect(NewChannelForm);