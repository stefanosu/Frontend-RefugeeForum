import React from 'react'
import {updateNewChannelForm} from '../actions/newChannelForm.js'
import {connect} from 'react-redux'
import {makeChannel} from '../actions/channel.js'


const NewChannelForm = ({channelFormData, updateNewChannelForm, makeChannel, user_id}) => {
    
const handleChannelChange = event => {
  const {name, value} = event.target
  const updatedChannelInfo = {
      ...channelFormData,
      [name]: value 
    }
    console.log(updateNewChannelForm(updatedChannelInfo))
  }  

  const handleChannelSubmit = e => {
    e.preventDefault()
    // debugger
    makeChannel(channelFormData, user_id)
  }

return ( 
  <div>
    <form onSubmit={handleChannelSubmit}>
      <input placeholder='title'
        type='text'
        name='title'
        value={channelFormData.title}
        onChange={handleChannelChange}/>
      <input type='submit' value='Create Channel'/>
    </form>
      {console.log(channelFormData.title)}
  </div> );
  
}

  const mapStateToProps = state => {
    return {
      channelFormData: state.newChannelForm

    }
  }



export default connect(mapStateToProps, {updateNewChannelForm, makeChannel }) (NewChannelForm);