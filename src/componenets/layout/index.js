import ISearch from "../../icons/ISearch";
import Chat from "../popChatTodoList";
import "./style.css"

const LayoutComponent = (props) => {

    return (  
        <div className="layout">
            <div className="layout-sidebar"></div>
            <div className='layout-right'>
                <div className='layout-right-content'>
                    <div className='layout-right-content-navbar'>
                        <ISearch />
                    </div>
                    <div>
                        {props.children}
                    </div>
                </div>
                <Chat/>
            </div>
        </div>
    );
}
 
export default LayoutComponent;