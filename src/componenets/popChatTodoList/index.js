import { useSelector } from "react-redux";
import BtnComp from "../popChatTodoList/Btn/BtnComp"
import Message from "./form/message/Message";
import TodoList from "./form/todoList/TodoList";

const Chat = () => {
    const state = useSelector(rootReducers => rootReducers)
    const chatOpen = state.btnState.isChatOpen
    const todoListOpen = state. btnState.isTodoListOpen
    return (  
        <div>
            {(() => {
                if (chatOpen === true) {
                    return(
                        <Message />
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