import ISearch from "../../../../icons/ISearch";
import "./Message.css"
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import IDoubleUser from "../../../../icons/IDoubleUser";
// import 'moment/locale/id'
import moment from "moment/moment";

const Message = () => {
    const dispatch = useDispatch()
    const state = useSelector(rootReducers => rootReducers)
    // console.log(state);

    const postListData = state.messageState.listPostData

    const handleSelectStpOne = (props) => {
        localStorage.setItem("idPost", props)
        dispatch({
            type: "VERIF_STEP_ONE",
            payload: {
                listPostData: postListData,
                isMessageOneDone : true,
            }
        })
    }

    return (  
        <div className="message-section">
            <div className="message">
                <div className="message-search-field">
                    <input placeholder="Search"/>
                    <ISearch fill={"#333333"}/>
                </div>
                <div className="message-content-bg">
                    {
                        postListData.length ? postListData.map((item, i) => {
                            // console.log(item);
                            return(
                                <div key={i} className="message-content-section" onClick={() => handleSelectStpOne(item.id)}>
                                    <div>
                                        <div className="message-content-blue-icon">
                                            <IDoubleUser />
                                        </div>
                                    </div>
                                    <div className="message-content-body">
                                        <div className="message-content-body-title">
                                            <h2>{`${item.owner.title} ${item.owner.firstName} ${item.owner.lastName}`}</h2>
                                            <p>{moment(item.publishDate).format('MMMM Do YYYY, h:mm')}</p>
                                        </div>
                                        <p><span>{item.owner.lastName}</span>:</p>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )
                        }):(
                            <div className="message-loading">
                                <CircularProgress />
                                <p>Loading Chats...</p>
                            </div>
                        )
                    }
                    {/* {(() => {
                        if (!postListData.length){
                            return(
                                <div className="message-loading">
                                    <CircularProgress />
                                    <p>Loading Chats...</p>
                                </div>
                            )
                        } else if (postListData.length){
                            {
                                postListData.map((item,i) => {
                                    return(
                                        <div key={i} className="message-content-section" onClick={handleSelectStpOne}>
                                            <div>
                                                <div className="message-content-blue-icon">
                                                    <IDoubleUser />
                                                </div>
                                            </div>
                                            <div className="message-content-body">
                                                <div className="message-content-body-title">
                                                    <h2>{`${item.owner.title} ${item.owner.firstName} ${item.owner.lastName}`}</h2>
                                                    <p>{moment(item.publishDate).format('MMMM Do YYYY, h:mm')}</p>
                                                </div>
                                                <p><span>{item.owner.lastName}</span>:</p>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        }
                    })()} */}
                </div>
            </div>
        </div>
    );
}
 
export default Message;