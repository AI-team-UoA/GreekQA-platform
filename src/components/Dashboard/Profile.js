import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuthContext } from 'hooks/useAuthContext';
import { useChangeDisplayName } from 'hooks/useChangeDisplayName';
import { useChangePassword } from 'hooks/useChangePassword';

import { Input } from 'components/Shared/Input';
import { Button } from 'components/Shared/Button';

export function Profile() {
    const { user } = useAuthContext();
    const [currentFirstname, currentLastname] = user.displayName.split(' ');

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => setPasswordShown(!passwordShown);
    const setPasswordNotShown = () => setPasswordShown(false);

    const [verifyPasswordShown, setVerifyPasswordShown] = useState(false);
    const toggleVerifyPasswordVisibility = () => setVerifyPasswordShown(!verifyPasswordShown);
    const setVerifyPasswordNotShown = () => setVerifyPasswordShown(false);

    const { changeDisplayName, error: errorChangeDisplayName, success: successChangeDisplayName, isPending: isPendingChangeDisplayName } = useChangeDisplayName();
    const { changePassword, error: errorChangePassword, success: successChangePassword, isPending: isPendingChangePassword } = useChangePassword();

    const { register: registerDisplayName, handleSubmit: handleSubmitDisplayName, formState: { errors: errorsDisplayName } } = useForm();
    const onSubmitDisplayName = (data, e) => {
        e.preventDefault();
        changeDisplayName(data.firstname, data.lastname);
    };

    const { register: registerPassword, watch: watchPassword, handleSubmit: handleSubmitPassword, formState: { errors: errorsPassword } } = useForm();
    const onSubmitPassword = (data, e) => {
        e.preventDefault();
        changePassword(data.password);
    };

    return (
        <div className="space-y-12">
            <form onSubmit={handleSubmitDisplayName(onSubmitDisplayName)} className="p-6 max-w-3xl space-y-6 shadow-lg rounded-lg">
                <h3 className="mb-6 text-xl font-medium text-navy-600 select-none">Τα στοιχεία μου</h3>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <Input label="Όνομα" id="firstname" name="firstname" type="text" autoComplete="given-name" placeholder="Το όνομά σας (π.χ. ΙΩΑΝΝΗΣ)" defaultValue={currentFirstname}
                        errors={errorsDisplayName.firstname} register={registerDisplayName("firstname", {   required: "Παρακαλώ συμπληρώστε το όνομά σας",
                                                                                                            pattern: {
                                                                                                                message: "Παρακαλώ συμπληρώστε το όνομα σας χωρίς κενά (διπλά ονόματα με παύλα)",
                                                                                                                value: /^[a-zA-Zα-ωΑ-ΩΆΈΊΌΎΏΫΏΪΫΏΩΏάέήίόύώϊϋϊϋΐΰΆΈΉΊΌΎΏΫΏΪΫΏΩΏάέήίόύώϊϋϊϋΐΰ]+$/
                                                                                                        }})}
                    />
                    <Input label="Επώνυμο" id="lastname" name="lastname" type="text" autoComplete="family-name" placeholder="Το επώνυμό σας (π.χ. ΠΑΠΑΔΟΠΟΥΛΟΣ)" defaultValue={currentLastname}
                        errors={errorsDisplayName.lastname} register={registerDisplayName("lastname", { required: "Παρακαλώ συμπληρώστε το επώνυμό σας",
                                                                                                        pattern: {
                                                                                                            message: "Παρακαλώ συμπληρώστε το επώνυμό σας χωρίς κενά (διπλά επώνυμα με παύλα)",
                                                                                                            value: /^[a-zA-Zα-ωΑ-ΩΆΈΊΌΎΏΫΏΪΫΏΩΏάέήίόύώϊϋϊϋΐΰΆΈΉΊΌΎΏΫΏΪΫΏΩΏάέήίόύώϊϋϊϋΐΰ]+$/
                                                                                                      }})}
                    />
                </div>
                    <Input label="Διεύθυνση email" id="email" name="email" type="email" autoComplete="email" value={user.email} disabled />
                    <Button type="submit">{isPendingChangeDisplayName ? 'Αποθήκευση Αλλαγών...' : 'Αποθήκευση Αλλαγών'}</Button>
                    {errorChangeDisplayName && <div className="text-red-500 text-sm">{errorChangeDisplayName}</div>}
                    {successChangeDisplayName && <div className="text-green-500 text-sm">Τα στοιχεία σας ενημερώθηκαν!</div>}
            </form>
            <form onSubmit={handleSubmitPassword(onSubmitPassword)} className="p-6 max-w-3xl space-y-8 shadow-lg rounded-lg">
                <h3 className="mb-6 text-xl font-medium text-navy-600 select-none">Αλλαγή συνθηματικού</h3>
                <Input label="Νέο Συνθηματικό" id="password" name="password" type="password" autoComplete="new-password" placeholder="To νέο συνθηματικό σας"
                        passwordShown={passwordShown} togglePasswordVisibility={togglePasswordVisibility}
                        errors={errorsPassword.password} register={registerPassword("password", {   required: "Παρακαλώ συμπληρώστε το νέο συνθηματικό σας",
                                                                                    pattern: {
                                                                                        message: "Παρακαλώ συμπληρώστε ένα νέο έγκυρο συνθηματικό",
                                                                                        value: /^(?=.*[A-Za-zΑ-Ωα-ω])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                                                                                }})}
                />
                <Input label="Επιβεβαίωση νέου συνθηματικού" id="passwordConfirm" name="passwordConfirm" type="password" autoComplete="new-password" placeholder="Τo νέο συνθηματικό σας ξανά"
                        passwordShown={verifyPasswordShown} togglePasswordVisibility={toggleVerifyPasswordVisibility}
                        errors={errorsPassword.passwordConfirm} register={registerPassword("passwordConfirm", { required: "Παρακαλώ συμπληρώστε ξανά το νέο συνθηματικό σας",
                                                                                                                validate: (value) => value === watchPassword('password') || "Τα συνθηματικά δεν ταιριάζουν"
                                                                                                              })}
                />
                <p className="text-sm text-gray-500">
                    Το συνθηματικό σας πρέπει να έχει τουλάχιστον 8 χαρακτήρες και να περιέχει τουλάχιστον ένα σύμβολο και ένα αριθμό χωρίς	ελληνικούς χαρακτήρες.
                </p>
                <Button onClick={() => {setPasswordNotShown(); setVerifyPasswordNotShown();}} type="submit">{isPendingChangePassword ? 'Αλλαγή συνθηματικού...' : 'Αλλαγή συνθηματικού'}</Button>
                {errorChangePassword && <div className="text-red-500 text-sm">{errorChangePassword}</div>}
                {successChangePassword && <div className="text-green-500 text-sm">Το συνθηματικό σας άλλαξε!</div>}
            </form>
        </div>
    );
}
