import { Link } from 'react-router-dom'

export default function Contribute() {
    return (
        <div>
            <div className="mt-6 mx-auto text-md text-navy-900">
                Πρωτού ξεκινήσετε την συνεισφορά σας στο GreekQA, σας συστήνουμε να διαβάσετε τις <Link to="/dashboard/guidelines" className="text-navy-400 font-medium hover:underline hover:text-gray-600">Οδηγίες Χρήσης</Link>.
            </div>
            <div className="my-8">
                <Link to="/dashboard/contribute" className="px-4 py-2 bg-navy-400 text-white font-medium rounded-lg transition duration-200 ease-in-out hover:bg-navy-600">Ξεκινήστε εδώ</Link>
            </div>
        </div>
    );
}
