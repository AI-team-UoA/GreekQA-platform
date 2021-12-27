import { Link } from 'react-router-dom'
import Sidebar from "Sidebar.js"

export default function Start() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="relative flex-1 overflow-y-auto w-full px-12 pt-12 p-2 ">
                    <h2 className="pb-6 text-3xl font-medium text-aqua-700 select-none">Άρθρα</h2>
                    <div className="mx-auto text-md text-gray-600">
                        Πρωτού ξεκινήσετε την συνεισφορά σας στο GreekQA, σας συστήνουμε να διαβάσετε τις <Link to="/dashboard/guidelines" className="text-aqua-800 font-bold hover:underline">Οδηγίες Χρήσης</Link>.
                    </div>
                    <br/>
                    <Link to="/dashboard/articles/start" className="my-8 px-4 py-2 mt-1 text-aqua-50 font-medium rounded-lg transition duration-200 ease-in-out transform bg-aqua-700 hover:bg-aqua-800 hover:text-white transform">Ξεκινήστε εδώ</Link>
            </main>
        </div>
    )
}