import { ReactComponent as TypewriterSvg } from 'assets/typewriter.svg'

import AuthLayout from 'layouts/AuthLayout'
import RegisterForm from 'components/Auth/RegisterForm'

export default function RegisterPage() { 
    return (
        <AuthLayout 
            form={ <RegisterForm /> }
            illustration={ <TypewriterSvg /> }
        />
    );
}