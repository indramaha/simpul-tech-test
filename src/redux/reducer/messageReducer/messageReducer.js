const initialState = {
    listPostData: [],
    isMessageOneDone : false
}

export const messageReducer = (state= initialState, action) => {
    switch (action.type) {
        case "GET_POST_LIST":
            return {
                ...initialState,
                listPostData: action.payload.listPostData,
                isMessageOneDone: action.payload.isMessageOneDone
            }
        case "VERIF_STEP_ONE":
            return{
                ...initialState,
                listPostData: action.payload.listPostData,
                isMessageOneDone: action.payload.isMessageOneDone
            }
        default:
            return state
    }
}