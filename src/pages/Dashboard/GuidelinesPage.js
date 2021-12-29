import DashboardLayout from "layouts/DashboardLayout";
import Guidelines from "components/Dashboard/Guidelines";

export default function GuidelinesPage() {
    return (
        <DashboardLayout 
            title="Οδηγίες Χρήσης"
            content={ <Guidelines /> }
        />
    );
}