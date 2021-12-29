import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <div action="#" method="POST" className="pt-6 max-w-3xl space-y-6">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-600">Όνομα</label>
                    <div className="mt-1">
                        <input id="firstname" name="firstname" type="text" autoComplete="given-name" disabled value="ΕΥΣΤΑΘΙΟΣ" className="
                            block
                            w-full
                            px-5
                            py-3
                            text-base
                            placeholder-gray-300
                            transition
                            duration-300
                            ease-in-out
                            border-transparent
                            rounded-lg
                            text-navy-600
                            bg-gray-50
                            focus:border-transparent
                            focus:ring-white
                            focus:ring-offset-2
                            focus:ring-offset-navy-400
                            disabled:bg-gray-200
                            disabled:text-gray-400
                            cursor-not-allowed
                        " />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-navy-600">Επώνυμο</label>
                    <div className="mt-1">
                        <input id="firstname" name="firstname" type="text" autoComplete="family-name" disabled value="ΣΙΑΤΡΑΣ" className="
                            block
                            w-full
                            px-5
                            py-3
                            text-base
                            placeholder-gray-300
                            transition
                            duration-300
                            ease-in-out
                            border-transparent
                            rounded-lg
                            text-navy-600
                            bg-gray-50
                            focus:border-transparent
                            focus:ring-white
                            focus:ring-offset-2
                            focus:ring-offset-navy-400
                            disabled:bg-gray-200
                            disabled:text-gray-400
                            cursor-not-allowed
                        " />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-600">Διεύθυνση Email</label>
                <input id="email" name="email" type="email" autoComplete="email" disabled value="sdi1600152@di.uoa.gr" className="
                        block
                        w-full
                        px-5
                        py-3
                        text-base
                        placeholder-gray-300
                        transition
                        duration-300
                        ease-in-out
                        border-transparent
                        rounded-lg
                        text-navy-600
                        bg-gray-50
                        focus:border-transparent
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-navy-400
                        disabled:bg-gray-200
                        disabled:text-gray-400
                        cursor-not-allowed
                    " />
            </div>
            <div>
                <Link to="/forgot-password" className="
                    flex
                    items-center
                    justify-center
                    w-full
                    px-10
                    py-4
                    text-base
                    font-medium
                    text-center text-white
                    transition
                    duration-300
                    ease-in-out
                    bg-navy-400
                    rounded-3xl
                    hover:bg-navy-500
                    focus:outline-none
                ">Επαναφορά συνθηματικού</Link>
            </div>
        </div>
    );
}
