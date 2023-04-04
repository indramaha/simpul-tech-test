import { useDispatch, useSelector } from "react-redux";
import IArrowBack from "../../../../icons/IArrowBack";
import IClose from "../../../../icons/IClose";
import "./MessageTwo.css"
import { handleGetCommnetbyPost } from "../../../../redux/action/stepMessage/messageStep";
import { useEffect } from "react";

const MessageTwo = () => {
    const dispacth = useDispatch()
    const state = useSelector(rootReducers => rootReducers)
    console.log(state);

    useEffect(() => {
        onHandleGetCommentbyPost()
        // eslint-disable-next-line
    },[])

    const onHandleGetCommentbyPost = () => {
        dispacth(handleGetCommnetbyPost())
    }
    return (  
        <div className="messagetwo-section">
            <div className="messagetwo">
                <div className="messagetwo-header">
                    <div className="messagetwo-header-inner">
                        <div onClick={() => dispacth({type: "VERIF_STEP_ONE", payload: {listPostData: state.messageState.listPostData, isMessageOneDone : false,}})}>
                            <IArrowBack />
                        </div>
                        <div>
                            <p className="text-blue">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN] </p>
                            <p>3 Participants</p>
                        </div>
                    </div>
                    <IClose />
                </div>
                <div className="messagetwo-body">
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                    
                </div>
                <div className="messagetwo-inputfield">
                    <input placeholder="Type a new message"/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}
 
export default MessageTwo;