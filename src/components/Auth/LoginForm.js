import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLogin } from 'hooks/useLogin';
import Input from 'components/Input';
import Button from 'components/Button';
import NavyLink from 'components/NavyLink';

export default function LoginForm() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => setPasswordShown(!passwordShown);
    const setPasswordNotShown = () => setPasswordShown(false);

    const { login, error, isPending } = useLogin();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        login(data.email, data.password);
    };

    return (
        <div>
            <h1 className="mt-6 text-3xl font-bold text-navy-400 select-none">Είσοδος στο GreekQA</h1>
            <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <Input label="Διεύθυνση email" id="email" name="email" type="email" autoComplete="email" placeholder="To email σου (*.uoa.gr)"
                        errors={errors.email} register={register("email", { required: "Παρακαλώ συμπλήρωσε το email σου" })}
                    />
                    <Input label="Συνθηματικό" id="password" name="password" type="password" autoComplete="current-password" placeholder="To συνθηματικό σου"
                                errors={errors.password} register={register("password", { required: "Παρακαλώ συμπλήρωσε το συνθηματικό σου" })}
                                passwordShown={passwordShown} togglePasswordVisibility={togglePasswordVisibility}
                    />
                    <div className="flex items-center justify-between">
                        <Input label="Να με θυμάσαι" id="remember-me" name="remember-me" type="checkbox" />
                        <NavyLink to="/forgot-password">Έχω ξεχάσει το συνθηματικό μου</NavyLink>
                    </div>
                    <Button type="submit" onClick={setPasswordNotShown}>Είσοδος</Button>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                </form>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-navy-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-navy-900 select-none">Νέος χρήστης;</span>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    <NavyLink to="/signup">Γίνε μέλος (μόνο με email του ΕΚΠΑ)</NavyLink>
                </div>
            </div>
        </div>
    )
}