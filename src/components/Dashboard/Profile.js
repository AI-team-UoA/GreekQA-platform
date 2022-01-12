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

    const { changeDisplayName, error: errorChangeDisplayName, isPending: isPendingChangeDisplayName } = useChangeDisplayName();
    const { changePassword, error: errorChangePassword, isPending: isPendingChangePassword } = useChangePassword();

    const { register: registerDisplayName, handleSubmit: handleSubmitDisplayName, formState: { errors: errorsDisplayName } } = useForm();
    const onSubmitDisplayName = (data, e) => {
        e.preventDefault();
        console.log(data);
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
                    <Input label="Όνομα" id="firstname" name="firstname" type="text" autoComplete="given-name" placeholder="Το όνομά σου (π.χ. ΙΩΑΝΝΗΣ)" defaultValue={currentFirstname}
                        errors={errorsDisplayName.firstname} register={registerDisplayName("firstname", {   required: "Παρακαλώ συμπλήρωσε το όνομά σου",
                                                                                                            pattern: {
                                                                                                                message: "Παρακαλώ συμπλήρωσε το όνομα σου χωρίς κενά (διπλά ονόματα με παύλα)",
                                                                                                                value: /^[a-zA-Zα-ωΑ-ΩΆΈΊΌΎΏΫΏΪΫΏΩΏάέήίόύώϊϋϊϋΐΰΆΈΉΊΌΎΏΫΏΪΫΏΩΏάέήίόύώϊϋϊϋΐΰ]+$/
                                                                                                        }})}
                    />
                    <Input label="Επώνυμο" id="lastname" name="lastname" type="text" autoComplete="family-name" placeholder="Το επώνυμό σου (π.χ. ΠΑΠΑΔΟΠΟΥΛΟΣ)" defaultValue={currentLastname}
                        errors={errorsDisplayName.lastname} register={registerDisplayName("lastname", { required: "Παρακαλώ συμπλήρωσε το επώνυμό σου",
                                                                                                        pattern: {
                                                                                                            message: "Παρακαλώ συμπλήρωσε το επώνυμό σου χωρίς κενά (διπλά ονόματα με παύλα)",
                                                                                                            value: /^[a-zA-Zα-ωΑ-ΩΆΈΊΌΎΏΫΏΪΫΏΩΏάέήίόύώϊϋϊϋΐΰΆΈΉΊΌΎΏΫΏΪΫΏΩΏάέήίόύώϊϋϊϋΐΰ]+$/
                                                                                                      }})}
                    />
                </div>
                    <Input label="Διεύθυνση email" id="email" name="email" type="email" autoComplete="email" value={user.email} disabled />
                    <Button type="submit">{isPendingChangeDisplayName ? 'Αποθήκευση Αλλαγών...' : 'Αποθήκευση Αλλαγών'}</Button>
                    {errorChangeDisplayName && <div className="text-red-500 text-sm">{errorChangeDisplayName}</div>}
            </form>
            <form onSubmit={handleSubmitPassword(onSubmitPassword)} className="p-6 max-w-3xl space-y-8 shadow-lg rounded-lg">
                <h3 className="mb-6 text-xl font-medium text-navy-600 select-none">Αλλαγή συνθηματικού</h3>
                <Input label="Νέο Συνθηματικό" id="password" name="password" type="password" autoComplete="new-password" placeholder="To νέο συνθηματικό σου"
                        passwordShown={passwordShown} togglePasswordVisibility={togglePasswordVisibility}
                        errors={errorsPassword.password} register={registerPassword("password", {   required: "Παρακαλώ συμπλήρωσε το νέο συνθηματικό σου",
                                                                                    pattern: {
                                                                                        message: "Παρακαλώ συμπλήρωσε ένα νέο έγκυρο συνθηματικό",
                                                                                        value: /^(?=.*[A-Za-zΑ-Ωα-ω])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                                                                                }})}
                />
                <Input label="Επιβεβαίωση νέου συνθηματικού" id="passwordConfirm" name="passwordConfirm" type="password" autoComplete="new-password" placeholder="Τo νέο συνθηματικό σου πάλι"
                        passwordShown={verifyPasswordShown} togglePasswordVisibility={toggleVerifyPasswordVisibility}
                        errors={errorsPassword.passwordConfirm} register={registerPassword("passwordConfirm", { required: "Παρακαλώ συμπλήρωσε ξανά το νέο συνθηματικό σου",
                                                                                                                validate: (value) => value === watchPassword('password') || "Τα συνθηματικά δεν ταιριάζουν"
                                                                                                              })}
                />
                <p className="text-sm text-gray-500">
                    Το συνθηματικό σου πρέπει να έχει τουλάχιστον 8 χαρακτήρες και να περιέχει τουλάχιστον ένα σύμβολο και ένα αριθμό χωρίς	ελληνικούς χαρακτήρες.
                </p>
                <Button onClick={() => {setPasswordNotShown(); setVerifyPasswordNotShown();}} type="submit">{isPendingChangePassword ? 'Αλλαγή συνθηματικού...' : 'Αλλαγή συνθηματικού'}</Button>
                {errorChangePassword && <div className="text-red-500 text-sm">{errorChangePassword}</div>}
            </form>
        </div>
    );
}
