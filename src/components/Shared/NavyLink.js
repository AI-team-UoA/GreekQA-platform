import { Link } from 'react-router-dom';

export function NavyLink(props) {
    if (!props.a) {
        return (
            <Link {...props} className={`text-navy-400 hover:underline hover:text-gray-600 ${props.className}`}>
                {props.children}
            </Link>
        );
    } 
    else {
        return(
            <a {...props} className={`text-navy-400 hover:underline hover:text-gray-600 ${props.className}`}>
                {props.children}
            </a>
        );
    }
}