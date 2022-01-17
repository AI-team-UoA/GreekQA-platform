import { Link } from 'react-router-dom';
import { NavyLink } from 'components/Shared/NavyLink';

export function GetStarted() {
    return (
        <div>
            <div className="mt-6 mx-auto text-md text-navy-900">
                Πρωτού ξεκινήσετε την συνεισφορά σας στο GreekQA, σας συστήνουμε να διαβάσετε τις <NavyLink className="text-md font-medium" to="/dashboard/guidelines">Οδηγίες Χρήσης</NavyLink>.
            </div>
            <div className="my-8">
                <Link to="/contribute" className="px-4 py-2 bg-navy-400 text-white font-medium rounded-lg transition duration-200 ease-in-out hover:bg-navy-600">Ξεκινήστε εδώ</Link>
            </div>
        </div>
    );
}
