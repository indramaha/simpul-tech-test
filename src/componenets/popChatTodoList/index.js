import { useSelector } from "react-redux";
import BtnComp from "../popChatTodoList/Btn/BtnComp"
import Message from "./form/message/Message";
import TodoList from "./form/todoList/TodoList";

const Chat = () => {
    const state = useSelector(rootReducers => rootReducers)
    console.log(state);
    const chatOpen = state.btnState.isChatOpen
    const todoListOpen = state. btnState.isTodoListOpen
    const messageOneDone = state.messageState.isMessageOneDone
    const messageTwoDone = false
    return (  
        <div>
            {(() => {
                if (chatOpen === true && messageOneDone === false ) {
                    return(
                        <Message />
                    )
                } else if (chatOpen === true && messageTwoDone === false){
                    return(
                        <div></div>
                    )
                } else if (todoListOpen === true){
                    return(
                        <TodoList />
                    )
                }
            })()}
            <BtnComp />
        </div>
    );
}
 
export default Chat;