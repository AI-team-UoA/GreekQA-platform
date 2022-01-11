import { ReactComponent as NotFoundSvg } from 'assets/notfound.svg';

import { NavyLink } from 'components/Shared/NavyLink';

export function NotFoundPage() {
    return (
        <div className="h-screen w-screen flex flex-col content-center place-content-center">
            <div className="mx-auto w-80"> 
                <NotFoundSvg />
            </div>
            <div className="mx-auto mt-20 text-3xl font-bold text-navy-800 text-center">Η σελίδα δεν βρέθηκε.</div>
            <NavyLink to="/" className="mx-auto mt-2 text-lg text-center">Επιστροφή στην αρχική σελίδα.</NavyLink>
        </div>
    )
}