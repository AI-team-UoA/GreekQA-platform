import { Contribute } from 'components/Dashboard/Contribute';

export function ContributePage() {
    return (
        <div className="flex flex-col justify-center content-center m-0 md:m-auto">
            <div className="m-4 md:mx-10 md:p-10 md:rounded-lg md:shadow-lg">
                <Contribute />
            </div>
        </div>
        // <DashboardLayout 
        //     title="Συγγραφή ερωτήσεων/απαντήσεων"
        //     content={ <Contribute /> }
        // />
    )
}