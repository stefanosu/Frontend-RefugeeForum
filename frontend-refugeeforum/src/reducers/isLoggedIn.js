const initialState = {
    isLoggedIn: false 
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'CHECK_USER_LOGGED_IN': 
        return true
      case 'CHECK_USER_LOGGED_OUT': 
        return false 
      default: 
        return state 
    }
}