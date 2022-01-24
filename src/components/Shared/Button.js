export function Button(props) {
    if (!props.link) {
        return (
            <button onClick={props.onClick}
            className={`${props.green  ? 'bg-green-400 hover:bg-green-500' : (props.red ? 'bg-red-400 hover:bg-red-500' : 'bg-navy-400 hover:bg-navy-500')} 
                ${props.hidden  ? 'hidden' : 'flex'}
                items-center
                justify-center
                w-full
                px-10
                py-4
                text-base
                font-medium
                text-center
                text-white
                transition
                duration-200
                ease-in-out
                transform
                rounded-xl
                focus:outline-none
                disabled:bg-navy-200
                disabled:cursor-not-allowed
            `}>
                {props.children}
            </button>
        );
    }
    else {
        return (
            <button {...props} onClick={props.onClick} className={`text-sm text-navy-400 hover:underline hover:text-gray-600 ${props.className}`}>
                {props.children}
            </button>
        );
    }
}