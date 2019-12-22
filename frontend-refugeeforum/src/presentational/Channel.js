import React from 'react';
import { connect } from 'react-redux'
// import ChannelCards from './ChannelCards'
// import '../App.css'


const Channel = ({currentUser}) => {
// if(currentUser != null){
//     // console.log(currentUser.data.attributes.channels)
        
// let ChannelCards = currentUser.data.attributes.channels.map(channel => <ChannelCards channel={channel} key={channel.id} />)
// }

return (
  <div className="wrapper">
    <h1>Channels</h1>
  </div>
    ) 
}

    const mapStateToProps = ({currentUser}) => {
        return {
            currentUser
        }
    }


export default connect(mapStateToProps) (Channel)