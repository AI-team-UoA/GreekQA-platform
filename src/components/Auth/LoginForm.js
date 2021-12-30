import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export default function LoginForm() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => setPasswordShown(!passwordShown);
    const setPasswordNotShown = () => setPasswordShown(false);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="w-full max-w-xl mx-auto lg:w-96">
            <h1 className="mt-6 text-3xl font-bold text-navy-400 select-none">Είσοδος στο GreekQA</h1>
            <div className="mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-md font-medium text-navy-600">Διεύθυνση email</label>
                        <input id="email" name="email" type="email" autoComplete="email" placeholder="To email σου (*.uoa.gr)" 
                            className="
                                block
                                w-full
                                mt-1
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
                            "
                            {...register("email", { required: "This is required" })}
                        />
                    </div>
                    {errors.email?.message}
                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-md font-medium text-navy-600">Συνθηματικό</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-4 flex items-center pl-2">
                                {passwordShown ? 
                                    <EyeOffIcon className="h-5 w-5 text-navy-600" onClick={togglePasswordVisibility} /> :
                                    <EyeIcon className="h-5 w-5" onClick={togglePasswordVisibility} />
                                }
                            </div>
                            <input id="password" name="password" type={passwordShown ? "text" : "password"} autoComplete="new-password" required placeholder="Το συνθηματικό σου" className="
                                    pr-10
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
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="
                                w-4
                                h-4
                                text-navy-400
                                border-gray-200
                                rounded
                                focus:ring-0
                                focus:ring-offset-0
                                transition duration-250 ease-in-out
                            " />
                            <label htmlFor="remember-me" className="block ml-2 text-sm text-navy-900 select-none">Να με θυμάσαι</label>
                        </div>
                        <div className="text-sm text-navy-500 hover:underline">
                            <Link to="/forgot-password">Έχω ξεχάσει το συνθηματικό μου</Link>
                        </div>
                    </div>
                    <button type="submit" onClick={setPasswordNotShown} className="
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
                    ">Είσοδος</button>
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
                    <Link to="/register" className="text-sm text-navy-400 hover:underline hover:text-gray-600">Γίνε μέλος (εγγραφή μόνο με email του ΕΚΠΑ)</Link>
                </div>
            </div>
        </div>
    )
}