const ITodoList = (props) => {
    return (  
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="20"
            fill="none"
            viewBox="0 0 26 20"
        >
            <path
            fill={props.fill}
            fillRule="evenodd"
            d="M3.111.667h20c1.222 0 2.222 1 2.222 2.222v14.444c0 1.223-1 2.223-2.222 2.223h-20c-1.222 0-2.222-1-2.222-2.223V2.89c0-1.222 1-2.222 2.222-2.222zm0 2.222v14.444H12V2.89H3.111zm20 14.444h-8.889V2.89h8.89v14.444zM22 6.778h-6.667v1.666H22V6.778zm-6.667 2.778H22v1.666h-6.667V9.556zM22 12.333h-6.667V14H22v-1.667z"
            clipRule="evenodd"
            ></path>
        </svg>
    );
}
 
export default ITodoList;