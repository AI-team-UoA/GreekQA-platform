import { DashboardLayout } from 'layouts/DashboardLayout';
import { GetStarted } from 'components/Dashboard/GetStarted';

export function GetStartedPage() {
    return (
        <DashboardLayout 
            title="Ξεκινήστε να συνεισφέρετε"
            content={ <GetStarted /> }
        />
    );
}