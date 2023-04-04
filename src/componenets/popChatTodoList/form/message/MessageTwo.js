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
                <div>
                    <div>
                        <IArrowBack />

                    </div>
                    <IClose />
                </div>
            </div>
        </div>
    );
}
 
export default MessageTwo;