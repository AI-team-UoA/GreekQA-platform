import { DashboardLayout } from 'layouts/DashboardLayout';
import { Statistics } from 'components/Dashboard/Statistics';

export function StatisticsPage() {
    return (
        <DashboardLayout 
            title="Στατιστικά"
            content={ <Statistics /> }
        />
    );
}