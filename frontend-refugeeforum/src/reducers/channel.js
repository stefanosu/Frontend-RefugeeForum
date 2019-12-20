const initialState = {channels: []}

export default (state = initialState, action) => {
    switch(action.type){
        case  'GET_ALL_CHANNELS': 
            return action.channels
        default: 
                return state 
            }
        }