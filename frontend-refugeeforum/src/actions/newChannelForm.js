//sync action channels creators 

export const updateNewChannelForm = (channelData) => {
    return {
        type: 'UPDATE_NEW_CHANNEL_FORM', 
        channelData
    }
}


export const clearChannelForm = () => {
    return {
        type: 'CLEAR_CHANNEL_FORM', 
        
    }
}