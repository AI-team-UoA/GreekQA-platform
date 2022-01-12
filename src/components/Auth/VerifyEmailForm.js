import { useVerifyEmail } from 'hooks/useVerifyEmail';
import { useLogout } from 'hooks/useLogout';

import { Button } from 'components/Shared/Button';
import { NavyLink } from 'components/Shared/NavyLink';

export function VerifyEmailForm() {
    const { verifyEmail, error: errorVerifyEmail, isPending: isPendingVerifyEmail } = useVerifyEmail();
    const { logout, isPending: isPendingLogout } = useLogout();

    return (
        <div>
            <h1 className="mt-6 text-3xl font-bold text-navy-400 select-none">Επιβεβαίωση διεύθυνσης email</h1>
            <div className="mt-8">
                <form onSubmit={() => verifyEmail()} className="space-y-6">
                    <p className="text-navy-700">
                        Σου έχουμε στείλει ένα email για να <b>επιβεβαιώσεις</b> την διεύθυνση email σου.
                        <br/><br/>
                        H αποστολή του email  <b>μπορεί να καθυστερήσει</b> μερικά λεπτά (συνήθως αποστέλλεται άμεσα).
                        <br/><br/>
                        <b>Αφού επιβεβαιώσεις</b> τον λογαριασμό σου, παρακαλώ <b>ανανεώσε</b> την παρούσα σελίδα.
                        <br/><br/>
                        Για <b>οποιοδήποτε πρόβλημα</b> επικοινώνησε μαζί μας στη διεύθυνση <NavyLink a href="mailto:sdi1600152@di.uoa.gr">sdi1600152@di.uoa.gr</NavyLink>
                    </p>
                    <Button disabled type="submit">{isPendingVerifyEmail ? 'Επαναποστολή email...' : 'Επαναποστολή email'}</Button>
                </form>
                {errorVerifyEmail && <div className="text-red-500 text-sm">{errorVerifyEmail}</div>}
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-navy-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-navy-900 select-none">Θες να αποσυνδεθείς;</span>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    {/* <button className="text-sm text-navy-400 hover:underline hover:text-gray-600" onClick={() => navigate(-1)}>Πήγαινε πίσω</button> */}
                    <Button link onClick={logout}>{isPendingLogout ? 'Αποσύνδεση από την εφαρμογή...' : 'Αποσύνδεση από την εφαρμογή'}</Button>
                </div>
            </div>
        </div>
    );
}