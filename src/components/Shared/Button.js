export function Button(props) {
    if (!props.link) {
        return (
            <button {...props} 
            className="
                flex
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
                bg-navy-400
                rounded-xl
                hover:bg-navy-500
                focus:outline-none
                disabled:bg-navy-200
                disabled:cursor-not-allowed
            ">
                {props.children}
            </button>
        );
    }
    else {
        return (
            <button {...props} className={`text-sm text-navy-400 hover:underline hover:text-gray-600 ${props.className}`}>
                {props.children}
            </button>
        );
    }
}