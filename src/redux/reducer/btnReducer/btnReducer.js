const initialState = {
    isChatOpen: false,
    isTodoListOpen: false,
    isLoading:false
}

export const btnReducers = (state = initialState, action) => {
    switch (action.type) {
        case "CLICK_CHAT":
            return {
                ...initialState,
                isChatOpen: action.payload.isChatOpen,
                isTodoListOpen: action.payload.isTodoListOpen,
                isLoading: action.payload.isLoading
            }
        case "CLICK_TODOLIST":
            return {
                ...initialState,
                isChatOpen: action.payload.isChatOpen,
                isTodoListOpen: action.payload.isTodoListOpen
            }
        default:
            return state
    }
}