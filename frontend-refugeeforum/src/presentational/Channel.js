import React from 'react';
import { connect } from 'react-redux'
import ChannelCards from './ChannelCards'



const Channel = ({currentUser}) => {
  let channelData 
  if(currentUser != null){
    channelData =  currentUser.user.channels.map(channel => 
      <ChannelCards channel={channel} key={channel.id}  />
      )
    // debugger
  }
  
  return (
    <div className="wrapper">
      <h1>Channels</h1>
      <li>{channelData}</li>
  </div>
  )
}

  const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps) (Channel)