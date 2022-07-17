import { Sidebar } from 'components/Dashboard/Sidebar';
import { MobileSidebar } from 'components/Dashboard/Sidebar/MobileSidebar';

export function DashboardLayout({ title, content }) {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="hidden md:flex">
                <Sidebar  />
                </div>
            <div className="sticky md:hidden">
                <MobileSidebar />
            </div>
            <main className="relative flex-1 overflow-y-auto w-full px-6 pt-12">
                <h2 className="mb-6 text-2xl sm:text-3xl font-medium text-navy-600 select-none">{title}</h2>
                {content}
            </main>
        </div>
    );
}