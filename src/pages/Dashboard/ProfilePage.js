import { DashboardLayout } from 'layouts/DashboardLayout';
import { Profile } from 'components/Dashboard/Profile';

export function ProfilePage() {
    return (
        <DashboardLayout 
            title="Ο λογαριασμός μου"
            content={ <Profile /> }
        />
    );
}