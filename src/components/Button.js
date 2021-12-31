export default function Button(props) {
    return (
        <button type="submit" onClick={props.onClick} 
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
            rounded-3xl
            hover:bg-navy-500
            focus:outline-none
        ">
            {props.children}
        </button>
    );
}