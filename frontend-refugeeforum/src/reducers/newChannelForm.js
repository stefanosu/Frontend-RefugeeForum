const initialState = {
    name: ''
}


export default (state = initialState, action ) => {
  switch(action.type){
    case 'UPDATE_NEW_CHANNEL_FORM':
      return action.channelData
      // return {
      //   ...state, 
      //   [action.channelData.name]: action.channelData.value
      //   }
    case 'RESET_NEW_CHANNEL_FORM':
      return initialState
    default: 
      return state 
  }
}