import React, { useRef, useState } from 'react'
import { useAuth } from 'contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as LoginSvg } from 'assets/login.svg'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          navigate.push("/")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
    }
    
    return (
    <div className="flex min-h-screen overflow-hidden">
        <div className="
        flex flex-col
        justify-center
        flex-1
        px-4
        py-12
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
        ">
        <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
                <h2 className="mt-6 text-3xl font-bold text-aqua-600"> Είσοδος στο greekQA </h2>
            </div>
            <div className="mt-8">
                <div className="mt-6">
                    <form onSubmit="" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Διεύθυνση email </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="username" required placeholder="To email σου (*.uoa.gr)" className="
                                    block
                                    w-full
                                    px-5
                                    py-3
                                    text-base
                                    placeholder-gray-300
                                    transition
                                    duration-300
                                    ease-in-out
                                    transform
                                    border border-transparent
                                    rounded-lg
                                    text-neutral-600
                                    bg-gray-50
                                    autofill:disabled
                                    focus:outline-none
                                    focus:border-transparent
                                    focus:ring-2
                                    focus:ring-white
                                    focus:ring-offset-2
                                    focus:ring-offset-aqua-500
                                " />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Συνθηματικό </label>
                            <div className="mt-100">
                                <input id="password" name="password" type="password" autoComplete="current-password" required placeholder="Το συνθηματικό σου" className="
                                    block
                                    w-full
                                    px-5
                                    py-3
                                    text-base
                                    placeholder-gray-300
                                    transition
                                    duration-300
                                    ease-in-out
                                    transform
                                    border border-transparent
                                    rounded-lg
                                    text-neutral-600
                                    bg-gray-50
                                    focus:outline-none
                                    focus:border-transparent
                                    focus:ring-2
                                    focus:ring-white
                                    focus:ring-offset-2
                                    focus:ring-offset-aqua-500
                                " />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="
                                    w-4
                                    h-4
                                    text-aqua
                                    border-gray-200
                                    rounded
                                    focus:ring-0
                                    focus:ring-offset-0
                                    transition duration-250 ease-in-out
                                " />
                                <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-700 select-none"> Να με θυμάσαι </label>
                            </div>
                            <div className="text-sm text-aqua-800 hover:underline">
                                <Link to="/forgot-password"> Έχω ξεχάσει το συνθηματικό μου </Link>
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
                                text-center text-white
                                transition
                                duration-300
                                ease-in-out
                                transform
                                bg-aqua-600
                                rounded-3xl
                                hover:bg-aqua-700
                                focus:outline-none
                                focus:ring-2
                                focus:ring-offset-2
                                focus:ring-aqua-500
                            "> Είσοδος </button>
                        </div>
                    </form>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-700 select-none"> Νέος χρήστης; </span>
                        </div>
                        </div>
                        <div className="relative flex justify-center text-sm text-aqua-800 hover:underline">
                            <Link to="/register"> Γίνε μέλος (εγγραφή μόνο με email του ΕΚΠΑ) </Link>
                        </div>
                {/*
                <div>
                <button type="submit" className="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-aqua-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                ">
                    <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                        <defs>
                        <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                        </defs>
                        <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible" />
                        </clipPath>
                        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                        <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                        <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                        <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                    </svg>
                    <span className="ml-4"> Log in with Google</span>
                    </div>
                </button>
                </div> */}
                </div>
            </div>
        </div>
    </div>
    <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
        {/* <img src={loginSvg} className="scale-50" /> */}
        <LoginSvg className="justify-content:center content-center w-3/5"/>
        {/* <img className="absolute inset-0 object-cover w-full h-full" src="https://d33wubrfki0l68.cloudfront.net/1a058aec6e3d81efe3ac4ca6366b40574876f6bc/32bc1/images/placeholders/rectanglewide.svg" alt="" /> */}
    </div>
</div>
);
}