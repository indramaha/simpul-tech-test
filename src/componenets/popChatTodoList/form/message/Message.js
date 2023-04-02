import { useState } from "react";
import ISearch from "../../../../icons/ISearch";
import "./Message.css"
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";
import IUser from "../../../../icons/IUser";
import IDoubleUser from "../../../../icons/IDoubleUser";

const Message = () => {
    const state = useSelector(rootReducers => rootReducers)
    console.log(state);

    const loading = state.btnState.isLoading
    const postListData = state.messageState.listPostData

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
                            return(
                                <div key={i}>
                                    <div>
                                        <div className="message-content-blue-icon">
                                            <IDoubleUser />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2></h2>
                                        </div>
                                        <p><span></span>:</p>
                                        <p></p>
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
                </div>
            </div>
        </div>
    );
}
 
export default Message;