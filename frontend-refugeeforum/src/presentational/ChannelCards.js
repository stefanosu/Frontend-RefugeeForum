import React from 'react'
// import '../App.css'


const ChannelCards = ({channel}) => {
    
    return(
        <div className='Channel-Card'>
            These are the Channels:
            <strong>{channel.name}</strong>
        </div>
    )
}


    export default ChannelCards 