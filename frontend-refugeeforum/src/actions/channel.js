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

export const updateNewChannelForm = channelData => {
    return {
        type: 'UPDATE_NEW_CHANNEL_FORM', 
        channelData 
    }
}

//async action creators CRUD ACTIONS: 
//create action to make post request to backend to persist Channel to database.
    export const makeChannel = (channels) => {
        console.log('new channel created', channels)
        return dispatch => {
            // debugger
            return fetch('http://localhost:3000/api/v1/makeChannel',{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer` + localStorage.token
                }, 
                body: JSON.stringify(channels)
            })
            .then(resp => resp.json())
            .then(channels => {
                if(channels.error) {
                    console.log(channels.error, 'error')
                    alert(channels.error)
                } else {
                    dispatch(updateNewChannelForm(channels))
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
