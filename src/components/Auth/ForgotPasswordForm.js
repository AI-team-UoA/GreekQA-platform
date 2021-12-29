import { useNavigate } from 'react-router-dom'

export default function ForgotPasswordForm() {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-xl mx-auto lg:w-96 bg-emerald-500">
            <h1 className="mt-6 text-3xl font-bold text-navy-400 select-none">Επαναφορά Κωδικού</h1>
            <div className="mt-8">
                <form onSubmit="" className="space-y-6">
                    <span className="text-navy-700 ">Θα σου στείλουμε ένα email για να ορίσεις ένα <b>νέο συνθηματικό</b>, αν υπάρχει λογαριασμός με αυτό το email.</span>
                    <div>
                        <label htmlFor="email" className="block text-md font-medium text-navy-600">Διεύθυνση email</label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autoComplete="email" required placeholder="To email σου (*.uoa.gr)" className="
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
                                text-neutral-600
                                bg-gray-50
                                focus:border-transparent
                                focus:ring-white
                                focus:ring-offset-2
                                focus:ring-offset-navy-400
                            " />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="
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
                        ">Αποστολή</button>
                    </div>
                </form>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-navy-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-navy-900 select-none">Άλλαξες γνώμη;</span>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    <button className="text-sm text-navy-400 hover:underline hover:text-gray-600" onClick={() => navigate(-1)}>Πήγαινε πίσω</button>
                </div>
            </div>
        </div>
    );
}