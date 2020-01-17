import React from 'react';
import { connect } from 'react-redux'
import ChannelCards from './ChannelCards'
// import '../App.css'


const Channel = ({user}) => {
  if(user != null){
    console.log(user.data.attributes.channels)
    debugger
    var ChannelCard = user.data.attributes.channels.map(channel => <ChannelCards channel={channel} key={channel.id} />)
  }
  
  return (
    <div className="wrapper">
      <h1>Channels</h1>
      <li> Hello</li>
      {ChannelCard}
  </div>
    ) 
}

  const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }


export default connect(mapStateToProps) (Channel)