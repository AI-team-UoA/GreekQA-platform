import { useAuthContext } from 'hooks/useAuthContext';

import Input from 'components/Input';
import Button from 'components/Button';

export default function Profile() {
    const { user } = useAuthContext();
    const [firstname, lastname] = user.displayName.split(' ');

    return (
        <div className="space-y-12">
            <div className="p-6 max-w-3xl space-y-6 shadow-lg rounded-lg">
                <h3 className="mb-6 text-xl font-medium text-navy-600 select-none">Τα στοιχεία μου</h3>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <Input label="Όνομα" id="firstname" name="firstname" type="text" autoComplete="given-name" disabled value={firstname} />
                    <Input label="Επώνυμο" id="firstname" name="firstname" type="text" autoComplete="family-name" disabled value={lastname} />
                </div>
                    <Input label="Διεύθυνση email" id="email" name="email" type="email" autoComplete="email" disabled value={user.email} />
                    <Button disabled>Αποθήκευση Αλλαγών</Button>
            </div>
            <div className="p-6 max-w-3xl space-y-8 shadow-lg rounded-lg">
                <h3 className="mb-6 text-xl font-medium text-navy-600 select-none">Αλλαγή συνθηματικού</h3>
                <Input label="Νέο συνθηματικό" id="password" name="password" type="password" autoComplete="new-password" placeholder="To νέο συνθηματικό σου" />
                <Input label="Επιβεβαίωση νέου συνθηματικού" id="passwordConfirm" name="passwordConfirm" type="password" autoComplete="new-password" placeholder="Το νέο συνθηματικό σου ξανά" />
                <Button>Αλλαγή συνθηματικού</Button>
            </div>
        </div>
    );
}
