import DashboardLayout from 'layouts/DashboardLayout'
import Profile from 'components/Dashboard/Profile'

export default function ProfilePage() {
    return (
        <DashboardLayout 
            title="Ο λογαριασμός μου"
            content={ <Profile /> }
        />
    );
}