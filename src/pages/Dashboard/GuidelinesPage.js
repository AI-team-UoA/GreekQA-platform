import { DashboardLayout } from 'layouts/DashboardLayout';
import { Guidelines } from 'components/Dashboard/Guidelines';

export function GuidelinesPage() {
    return (
        <DashboardLayout 
            title="Οδηγίες Χρήσης"
            content={ <Guidelines /> }
        />
    );
}