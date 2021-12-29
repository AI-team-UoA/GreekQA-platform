import DashboardLayout from 'layouts/DashboardLayout'
import Contribute from 'components/Dashboard/Contribute'

export default function ContributePage() {
    return (
        <DashboardLayout 
            title="Συγγραφή ερωτήσεων/απαντήσεων"
            content={ <Contribute /> }
        />
    )
}