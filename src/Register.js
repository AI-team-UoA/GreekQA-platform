import React, { useRef, useState } from 'react'
import { useAuth } from 'contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as TypewriterSvg } from 'assets/typewriter.svg'

export default function Register() { 
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
                    <h2 className="mt-6 text-3xl font-bold text-navy-400 select-none">Εγγραφή στο GreekQA</h2>
                </div>
                <div className="mt-8">
                    <form onSubmit="" className="space-y-6">
                        <div>
                            <label htmlFor="text" className="block text-md font-medium text-navy-600">Όνομα</label>
                            <div className="mt-1">
                                <input id="firstname" name="firstname" type="text" autoComplete="given-name" required placeholder="To όνομά σου (Γεώργιος)" className="
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
                            <label htmlFor="text" className="block text-md font-medium text-navy-600">Επώνυμο</label>
                            <div className="mt-1">
                                <input id="firstname" name="firstname" type="text" autoComplete="family-name" required placeholder="To επώνυμό σου (Παπαδόπουλος)" className="
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
                            <label htmlFor="email" className="block text-md font-medium text-navy-600"> Διεύθυνση email </label>
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
                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-md font-medium text-navy-600">Συνθηματικό</label>
                            <div className="mt-100">
                                <input id="password" name="password" type="password" autoComplete="new-password" required placeholder="Το συνθηματικό σου" className="
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
                                text-center text-white
                                transition
                                duration-300
                                ease-in-out
                                bg-navy-400
                                rounded-3xl
                                hover:bg-navy-500
                                focus:outline-none
                            ">Εγγραφή</button>
                        </div>
                    </form>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-navy-400" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-700 select-none">Έχεις ήδη λογαριασμό;</span>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <Link to="/login" className="text-sm text-navy-400 hover:underline hover:text-gray-600">Είσοδος στην εφαρμογή (μόνο με email του ΕΚΠΑ)</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden lg:flex flex-1 justify-center content-center">
            <TypewriterSvg className="w-4/5 m-auto max-w-3xl"/>
        </div>
    </div>
    );
}