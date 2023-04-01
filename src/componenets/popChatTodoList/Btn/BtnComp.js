import { useState } from "react";
import IMessage from "../../../icons/IMessage";
import IThunder from "../../../icons/IThunder";
import ITodoList from "../../../icons/ITodoList";
import "./BtnComp.css"

const BtnComp = () => {
    const [isHover, setIsHover] = useState(false)

    return (  
        <div className="chatbtn-section" onMouseLeave={() => setIsHover(false)}>
            <div className="chatbtn-child" >
                <div className="chatbtn-child-bg" style={{opacity: isHover ? "1":"0"}}>
                    <p>Task</p>
                    <div className="chatbtn-todolist">
                        <ITodoList />
                    </div>
                </div>
                <div className="chatbtn-child-bg" style={{opacity: isHover ? "1":"0"}}>
                    <p>Inbox</p>
                    <div className="chatbtn-message">
                        <IMessage />
                    </div>
                </div>
            </div>
            <div className="" 
                onMouseEnter={() => setIsHover(true)} >
                <div className="chatbtn-first">
                    <IThunder />
                </div>
            </div>
        </div>
    );
}
 
export default BtnComp;