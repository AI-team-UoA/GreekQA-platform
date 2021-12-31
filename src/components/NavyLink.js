import { Link } from "react-router-dom";

export default function NavyLink(props) {
    return (
        <Link {...props} className={"text-sm text-navy-400 hover:underline hover:text-gray-600 " + props.className}>
            {props.children}
        </Link>
    );
}