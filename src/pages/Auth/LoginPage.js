import { ReactComponent as WorkTogetherSvg } from 'assets/worktogether.svg'

import AuthLayout from 'layouts/AuthLayout'
import LoginForm from 'components/Auth/LoginForm'

export default function LoginPage() { 
    return (
        <AuthLayout 
            form={ <LoginForm /> }
            illustration={ <WorkTogetherSvg /> }
        />
    );
}