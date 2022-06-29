import { Contribute } from 'components/Contribute';
import { Guidelines } from 'components/Dashboard/Guidelines';

export function ContributePage() {
    return (
        <div className="space-12">
            <div className="transition-all duration-500 ease-in-out transform m-4 md:mx-10 md:p-10 md:rounded-lg md:shadow-lg space-12">
                <Contribute />
            </div>
            <div className="transition-all duration-500 ease-in-out transform m-4 md:mx-10 md:p-10 md:rounded-lg md:shadow-lg space-12">
                <h2 className="mb-6 text-3xl font-medium text-navy-600 select-none">
                    Οδηγίες Χρήσης
                </h2>
                <Guidelines />
            </div>
        </div>
    );
}