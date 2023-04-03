import { combineReducers } from "redux";
import { btnReducers } from "./reducer/btnReducer/btnReducer";
import { messageReducer } from "./reducer/messageReducer/messageReducer";

const rootReducers = combineReducers({
    btnState: btnReducers,
    messageState: messageReducer
})

export default rootReducers