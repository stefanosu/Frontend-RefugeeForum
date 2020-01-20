import React from 'react';
import { connect } from 'react-redux'
import ChannelCards from './ChannelCards'



const Channel = ({sessions}) => {
  let channelData; 
  if(sessions.user){
    channelData = sessions.user.channels.map(channel => 
      <ChannelCards channel={channel} key={channel.id}/>
      )
    }
    // console.log(session);
  
  return (
    <div className="channel-wrapper">
      <h1>Channels</h1>

      {channelData}
  </div> 
  )
}

  const mapStateToProps = ({sessions}) => {
    return {
      sessions
    }
  }


export default connect(mapStateToProps) (Channel)