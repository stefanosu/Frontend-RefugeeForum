//sync action creators 

export const updateNewChannelForm = (name, value) => {
    return {
        type: 'UPDATE_NEW_CHANNEL_FORM', 
        formData: {name, value}
    }
}