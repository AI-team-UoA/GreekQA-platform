import { Link } from 'react-router-dom'
import Sidebar from "Sidebar.js"

export default function Statistics() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="relative flex-1 overflow-y-auto w-full px-12 pt-12 p-2 ">
                <h2 className="pb-6 text-3xl font-medium text-teal-500 select-none">Στατιστικά</h2>
            </main>
        </div>
    )
}