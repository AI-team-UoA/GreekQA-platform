export default function AuthLayout({ form, illustration }) {
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
                {form}
            </div>    
            <div className="hidden lg:flex flex-1 justify-center content-center">
                <div className="w-4/5 m-auto max-w-3xl">
                    {illustration}
                </div>
            </div>
        </div>
    )
}