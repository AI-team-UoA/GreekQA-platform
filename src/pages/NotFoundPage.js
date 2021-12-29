import { ReactComponent as NotFoundSvg } from 'assets/notfound.svg'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="h-screen w-screen flex flex-col content-center place-content-center">
            <div className="mx-auto w-80"> 
                <NotFoundSvg />
            </div>
            <div className="mx-auto mt-20 text-3xl font-bold text-navy-800 text-center">Η σελίδα δεν βρέθηκε.</div>
            <Link to="/" className="mx-auto mt-2 text-lg text-navy-400 hover:underline hover:text-gray-600 text-center">Επιστροφή στην αρχική σελίδα.</Link>
        </div>
    )
}