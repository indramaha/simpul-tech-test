import { useState } from "react";
import IMessage from "../../../icons/IMessage";
import IThunder from "../../../icons/IThunder";
import ITodoList from "../../../icons/ITodoList";
import "./BtnComp.css"
import { useDispatch, useSelector } from "react-redux";
import { handleOpenMessage } from "../../../redux/action/btnAction/btnMessage";

const BtnComp = () => {
    const dispatch = useDispatch()
    const [isHover, setIsHover] = useState(false)
    const [isBtnClicked, setIsBtnClicked] = useState(false)
    const state = useSelector(rootReducers => rootReducers)
    // console.log(state);

    const chatOpen = state.btnState.isChatOpen
    const todoListOpen = state.btnState.isTodoListOpen

    const handleClickChat = () => {
        setIsBtnClicked(true)
        dispatch(handleOpenMessage())
    }

    const handleClicTodoList = () => {
        setIsBtnClicked(true)
        dispatch({
            type: "CLICK_TODOLIST",
            payload: {
                isChatOpen: false,
                isTodoListOpen: true
            }
        })
    }

    return (  
        <div className="chatbtn-section" onMouseLeave={() => setIsHover(false)}>
            <div className={todoListOpen ? "chatbtn-child-reverse":"chatbtn-child"} >
                <div className="chatbtn-child-bg" style={{opacity: isHover || isBtnClicked ? "1":"0"}}>
                    {isBtnClicked === false && <p>Task</p>}
                    <div className={todoListOpen ? "chatbtn-todolist-open":"chatbtn-todolist"} onClick={handleClicTodoList}>
                        <ITodoList fill={todoListOpen ? "#FFFFFF":"#F8B76B"}/>
                    </div>
                </div>
                <div className="chatbtn-child-bg" style={{opacity: isHover || isBtnClicked ? "1":"0"}}>
                    {isBtnClicked === false && <p>Inbox</p>}
                    <div className={chatOpen ? "chatbtn-message-open":"chatbtn-message"} onClick={handleClickChat}>
                        <IMessage fill={chatOpen ? "#FFFFFF":"#8885FF"}/>
                    </div>
                </div>
            </div>
            {
                isBtnClicked ? (<div className="chatbtn-btnchosen"></div>):(
                    <div onMouseEnter={() => setIsHover(true)} >
                        <div className="chatbtn-first">
                            <IThunder />
                        </div>
                    </div>
                )
            }
        </div>
    );
}
 
export default BtnComp;