///sync action creators 
export const createUserChannel = channels => {
    return {
        type: 'CREATE_USER_CHANNEL', 
        channels 
    }
}

///sync action creators 
export const getAllChannels = channels => {
    return {
        type: 'GET_ALL_CHANNELS', 
        channels 
    }
}
///Should all the CRUD actions pertaining to
// Channel be in the same action file??? maybe 2 actions per file?  


//async action creators CRUD ACTIONS: 
//create action to make post request to backend to persist Channel to database.
    export const makeChannel = (updateChannelData) => {
        console.log('new channel created', updateChannelData)
        return dispatch => {
            return fetch('http://localhost:3000/api/v1/makeChannel',{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(updateChannelData)
            })
            .then(resp => resp.json())
            .then(channels => {
                if(channels.error) {
                    alert(channels.error)
                } else {
                    dispatch(createUserChannel(channels.data))
                }
            })
            .catch(console.log)
        }
    }


///get request to read channel from db.
    export const getCurrentChannel = () => {
        console.log('Dispatching current channel')
        return dispatch => {
            return fetch('http://localhost:3000/api/v1/getCurrentChannel',{
                credentials: 'include',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            // .then(console.log)
            .then(channels => {
                if(channels.error){ 
                    alert(channels.error)
                }else {
                    console.log(channels.data)
                    dispatch(getAllChannels(channels.data))
                }
            })
            .catch(console.log)
        }
    }
