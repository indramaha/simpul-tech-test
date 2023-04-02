const IUser = (props) => {
    return (  
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 12 12"
            >
            <path
                fill={props?.fill ? props.fill:"#fff"}
                fillRule="evenodd"
                d="M6 0a3 3 0 100 6 3 3 0 100-6zm1.5 3c0-.825-.675-1.5-1.5-1.5S4.5 2.175 4.5 3 5.175 4.5 6 4.5 7.5 3.825 7.5 3zm3 7.5C10.35 9.967 8.025 9 6 9c-2.018 0-4.327.96-4.5 1.5h9zM0 10.5c0-1.995 3.998-3 6-3s6 1.005 6 3V12H0v-1.5z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}
 
export default IUser;