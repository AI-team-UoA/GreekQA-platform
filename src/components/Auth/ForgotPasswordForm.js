import { useForm } from 'react-hook-form';
import { useResetPassword } from 'hooks/useResetPassword';

import { Input } from 'components/Shared/Input';
import { Button } from 'components/Shared/Button';
import { NavyLink } from 'components/Shared/NavyLink';


export function ForgotPasswordForm() {
    const { resetPassword, error, isPending } = useResetPassword();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        resetPassword(data.email);
    };

    return (
        <div>
            <h1 className="mt-6 text-3xl font-bold text-navy-400 select-none">Επαναφορά Κωδικού</h1>
            <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <span className="text-navy-700 ">Θα σας στείλουμε ένα email για να ορίσετε ένα <b>νέο συνθηματικό</b>, αν υπάρχει λογαριασμός με αυτό το email.</span>
                    <Input label="Διεύθυνση email" id="email" name="email" type="email" autoComplete="email" placeholder="To email σας (*.uoa.gr)"
                        errors={errors.email} register={register("email", { required: "Παρακαλώ συμπληρώστε το email σας",
                        pattern: {
                            message: "Παρακαλώ συμπληρώστε ένα email που τελειώνει σε .uoa.gr",
                            value: /^[^@]+@[^@]+\.uoa.gr$/
                        }})}    
                    />
                    <Button type="submit">{isPending ? 'Αποστολή email...' : 'Αποστολή email'}</Button>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                </form>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-navy-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-navy-900 select-none">Αλλάξατε γνώμη;</span>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    {/* <button className="text-sm text-navy-400 hover:underline hover:text-gray-600" onClick={() => navigate(-1)}>Πήγαινε πίσω</button> */}
                    <NavyLink className="text-sm" to="/login">Είσοδος στην εφαρμογή (μόνο με email του ΕΚΠΑ)</NavyLink>
                </div>
            </div>
        </div>
    );
}