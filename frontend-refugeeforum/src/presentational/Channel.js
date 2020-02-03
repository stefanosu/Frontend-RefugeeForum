import React from 'react';
import { connect } from 'react-redux'
import ChannelCards from './ChannelCards'
import NewChannelForm from './NewChannelForm';


const Channel = ({sessions}) => {
  const renderChannelCards = () => { 
    if(sessions.user){
      return sessions.user.channels.map(channel => { 
      return <ChannelCards channel={channel} key={channel.id}/>
      }) 
    }
  }
  
  const addNewChannel = (e) => {
      console.log('adding channel', e);
  }
  
  return (
    <React.Fragment> 
    <div className="channel-wrapper">
      <h1>Channels</h1>
      <button onClick={addNewChannel}>Add New Channel:</button>
      {renderChannelCards(sessions.user)}
      <NewChannelForm/>
    </div> 
    </React.Fragment>
  )
}

  const mapStateToProps = ({sessions}) => {
    return {
      sessions
    }
  }

  // const mapDispatchToProps = {
  //   makeChannel
  //   //dispatch create channel to store 
  // }  


export default connect(mapStateToProps) (Channel)