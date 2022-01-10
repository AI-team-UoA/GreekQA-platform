// import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { NavyLink } from 'components/NavyLink';

export function ForgotPasswordForm() {
    // const navigate = useNavigate();
    return (
        <div>
            <h1 className="mt-6 text-3xl font-bold text-navy-400 select-none">Επαναφορά Κωδικού</h1>
            <div className="mt-8">
                <form onSubmit="" className="space-y-6">
                    <span className="text-navy-700 ">Θα σου στείλουμε ένα email για να ορίσεις ένα <b>νέο συνθηματικό</b>, αν υπάρχει λογαριασμός με αυτό το email.</span>
                    <Input label="Διεύθυνση email" id="email" name="email" type="email" autoComplete="email" placeholder="To email σου (*.uoa.gr)" />
                    <Button type="submit">Αποστολή</Button>
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
                    {/* <button className="text-sm text-navy-400 hover:underline hover:text-gray-600" onClick={() => navigate(-1)}>Πήγαινε πίσω</button> */}
                    <NavyLink to="/login">Είσοδος στην εφαρμογή (μόνο με email του ΕΚΠΑ)</NavyLink>
                </div>
            </div>
        </div>
    );
}