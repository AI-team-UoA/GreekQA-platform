import DashboardLayout from 'layouts/DashboardLayout'
import GetStarted from 'components/Dashboard/GetStarted'

export default function GetStartedPage() {
    return (
        <DashboardLayout 
            title="Ξεκινήστε να συνεισφέρετε"
            content={ <GetStarted /> }
        />
    );
}