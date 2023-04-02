const initialState = {
    listPostData: []
}

export const messageReducer = (state= initialState, action) => {
    switch (action.type) {
        case "GET_POST_LIST":
            return {
                ... initialState,
                listPostData: action.payload.listPostData
            }
        default:
            return state
    }
}