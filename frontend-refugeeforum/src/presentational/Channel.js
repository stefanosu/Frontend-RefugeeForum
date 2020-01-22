import React from 'react';
import { connect } from 'react-redux'
import ChannelCards from './ChannelCards'
import NewChannelForm from './NewChannelForm';



const Channel = ({sessions}) => {
  let channelData; 
  if(sessions.user){
    channelData = sessions.user.channels.map(channel => 
      <ChannelCards channel={channel} key={channel.id}/>
      )
    }
    const addNewChannel = (e) => {
        console.log('adding channel', e);
    }
  
  return (
    <React.Fragment> 
        <h1>Channels</h1>
        <button onClick={addNewChannel}>Add New Channel:</button>
      <div className="channel-wrapper">
        {channelData} <NewChannelForm/>
      </div> 
    </React.Fragment>
  )
}

  const mapStateToProps = ({sessions}) => {
    return {
      sessions
    }
  }


export default connect(mapStateToProps) (Channel)