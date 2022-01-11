import { ReactComponent as VerifyEmailSvg } from 'assets/verifyemail.svg';

import { AuthLayout } from 'layouts/AuthLayout';
import { VerifyEmailForm } from 'components/Auth/VerifyEmailForm';

export function VerifyEmailPage() {  
    return (
        <AuthLayout
            form={ <VerifyEmailForm /> }
            illustration={ <VerifyEmailSvg /> }
        />
    );
}