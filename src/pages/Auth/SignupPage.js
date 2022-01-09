import { ReactComponent as TypewriterSvg } from 'assets/typewriter.svg'

import AuthLayout from 'layouts/AuthLayout'
import SignupForm from 'components/Auth/SignupForm'

export default function SignupPage() { 
    return (
        <AuthLayout 
            form={ <SignupForm /> }
            illustration={ <TypewriterSvg /> }
        />
    );
}