import React from 'react';
import { connect } from 'react-redux'
import ChannelCards from './ChannelCards'



const Channel = ({currentUser}) => {
  if(currentUser != null){
    debugger
  console.log(currentUser)
  let channelData = currentUser.user.channels.map(channel => <ChannelCards channel={channel} key={channel.id} />)
  } 

  return (
    <div className="wrapper">
      <h1>Channels</h1>
      <li>{}</li>
  </div>
    ) 
}

  const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps) (Channel)