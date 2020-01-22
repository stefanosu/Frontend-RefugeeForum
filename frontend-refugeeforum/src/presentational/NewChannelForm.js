import React from 'react'
import {updateNewChannelForm} from '../actions/newChannelForm'
import {connect} from 'react-redux'
import {makeChannel} from '../actions/channel.js'


const NewChannelForm = ({channelFormData, updateNewChannelForm, makeChannel, history}) => {
    
const handleChannelChange = event => {
  const {name, value} = event.target
  const updatedChannelInfo = {
      ...channelFormData,
      [name]: value 
    }
    updateNewChannelForm(updatedChannelInfo)
  }  

  const handleChannelSubmit = e => {
    e.preventDefault()
    makeChannel(channelFormData, history)
  }

return ( 
  <div>
    <form onSubmit={handleChannelSubmit}>
    <input placeholder='title'
      type='text'
      name='title'
      value={channelFormData.title}
      onChange={handleChannelChange}
      />
      <input type='submit' value='Create Channel'/>
    </form>
  </div> );
}

  const mapStateToProps = state => {
    return {
      channelFormData: state.newChannelForm
    }
  }

  // const dispatchToProps = dispatch => {
      
    
  // }

export default connect(mapStateToProps, {updateNewChannelForm, makeChannel }) (NewChannelForm);