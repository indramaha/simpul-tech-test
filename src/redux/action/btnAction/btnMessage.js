import axios from "axios"

export const handleOpenMessage = () => (dispatch) => {
    dispatch({
        type: "CLICK_CHAT",
        payload: {
            isChatOpen: true,
            isTodoListOpen: false,
            isLoading: true
        }
    })
    const config = {
        headers: {
            "app-id" : "6426a4a0ac172ad8a49ae978",
        },
    }
    axios
        .get("https://dummyapi.io/data/v1/post", config)
        .then((res) => {
            console.log(res);
            dispatch({
                type: "GET_POST_LIST",
                payload: {
                    listPostData: res.data.data
                }
            })
            dispatch({
                type: "CLICK_CHAT",
                payload: {
                    isChatOpen: true,
                    isTodoListOpen: false,
                    isLoading: false
                }
            })
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: "CLICK_CHAT",
                payload: {
                    isChatOpen: true,
                    isTodoListOpen: false,
                    isLoading: false
                }
            })
        })
}