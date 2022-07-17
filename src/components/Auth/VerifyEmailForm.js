import { useVerifyEmail } from 'hooks/useVerifyEmail';
import { useLogout } from 'hooks/useLogout';

import { Button } from 'components/Shared/Button';
import { NavyLink } from 'components/Shared/NavyLink';

export function VerifyEmailForm() {
    const { verifyEmail, error: errorVerifyEmail, isPending: isPendingVerifyEmail } = useVerifyEmail();
    const { logout, isPending: isPendingLogout } = useLogout();

    return (
        <div>
            <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-navy-400 select-none">Επιβεβαίωση διεύθυνσης email</h1>
            <div className="mt-8">
                <form onSubmit={() => verifyEmail()} className="space-y-6">
                    <div className="text-navy-700 space-y-4">
                        <p>
                            Σας έχουμε στείλει ένα email για να <b>επιβεβαιώσετε</b> την διεύθυνση email σας. H αποστολή του email <b>μπορεί να καθυστερήσει</b> μερικά λεπτά (συνήθως αποστέλλεται άμεσα).
                        </p>
                        <p>
                        <b>Αφού επιβεβαιώσετε</b> τον λογαριασμό σας, παρακαλώ <b>ανανεώστε</b> την παρούσα σελίδα. Για οποιοδήποτε πρόβλημα επικοινωνήστε μαζί μας στο <NavyLink className="font-bold" a="true" href="mailto:greekqa.di.uoa@gmail.com">greekqa.di.uoa@gmail.com</NavyLink>
                        </p>
                    </div>
                    <Button disabled="true" type="submit">{isPendingVerifyEmail ? 'Επαναποστολή email...' : 'Επαναποστολή email'}</Button>
                </form>
                {errorVerifyEmail && <div className="text-red-500 text-sm">{errorVerifyEmail}</div>}
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-navy-300" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 bg-white text-navy-900 select-none">Θέλετε να αποσυνδεθείτε;</span>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    {/* <button className="text-sm text-navy-400 hover:underline hover:text-gray-600" onClick={() => navigate(-1)}>Πήγαινε πίσω</button> */}
                    <Button link="true" onClick={logout}>{isPendingLogout ? 'Αποσύνδεση από την εφαρμογή...' : 'Αποσύνδεση από την εφαρμογή'}</Button>
                </div>
            </div>
        </div>
    );
}