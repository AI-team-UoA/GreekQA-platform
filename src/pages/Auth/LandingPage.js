import { ReactComponent as TaskSvg } from 'assets/task.svg';

import { AuthLayout } from 'layouts/AuthLayout';
import { NavyLink } from 'components/Shared/NavyLink';

export function LandingPage() { 
    return (
        <div>
        <AuthLayout 
            form={
                <div>
                    <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-navy-400 select-none">Πλατφόρμα συλλογής δεδομένων GreekQA</h1>
                    <div className="mt-8 space-y-4 text-sm sm:text-base">
                        <p>
                            Στην παρούσα <b> πλατφόρμα συλλογής δεδομένων GreekQA</b>, θέλουμε να δημιουργήσουμε το <b>ομώνυμο Greek Question Answering Dataset (GreekQA)</b>, το πρώτο Ελληνικό Σύνολο Δεδομένων Ερωτήσεων και Απαντήσεων.
                        </p>
                        <p>
                            Το <b>GreekQA</b> στοχεύει να γίνει ένα ελληνικό σύνολο δεδομένων <b>κατανόησης ανάγνωσης εγγενών ερωτήσεων και απαντήσεων</b> σε ένα <b>σύνολο άρθρων της ελληνικής Wikipedia</b> που θα αποτελείται από 5.000+ δείγματα ερωτήσεων και απαντήσεων.
                        </p>
                        <p>
                            Τα τελευταία χρόνια, o τομέας της <b>Επεξεργασίας Φυσικής Γλώσσας</b> έχει σημειώσει <b>αξιοσημείωτη πρόοδο</b> με την εντυπωσιακή εξέλιξη state-of-the-art μοντέλων. Μεταξύ των επιμέρους τομέων της Επεξεργασίας Φυσικής Γλώσσας, η <b>Αναγνωστική Κατανόηση (Reading Comprehension)</b> έχει σημειώσει αντίστοιχη σημαντική πρόοδο τα τελευταία χρόνια. 
                        </p>
                        <p>
                            Ωστόσο, η <b>πλειονότητα</b> των επιστημονικών εργασιών αυτού του τομέα <b>αφορούν την αγγλική γλώσσα</b>, καθώς τα <b>διαθέσιμα δεδομένα</b> που διατίθονται <b>σε άλλες γλώσσες</b>, όπως <b>τα ελληνικά</b>, είναι <b>περιορισμένα</b>.
                        </p>
                        <p>
                            Η συγκεκριμένη πλατφόρμα δημιουργήθηκε από τον <NavyLink a="true" target="_blank" className="font-bold" href="https://siatras.dev/">Στάθη Σιάτρα</NavyLink> στα πλαίσια της πτυχιακής του για την <NavyLink a="true" target="_blank" className="font-bold" href="http://ai.di.uoa.gr/">Ομάδα Τεχνητής Νοημοσύνης</NavyLink> του Τμήματος Πληροφορικής και Τηλεπικοινωνιών, Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών με επιβλέποντες τον <NavyLink a="true" target="_blank" className="font-bold" href="http://cgi.di.uoa.gr/~koubarak/">Καθηγητή Μανόλη Κουμπαράκη</NavyLink> και την <NavyLink a="true" className="font-bold" target="_blank" href="https://cgi.di.uoa.gr/~dpantazi/">Υποψήφια Διδάκτωρ Δέσποινα-Αθανασία Πανταζή</NavyLink>.
                        </p>
                        <p>    
                            Με την δική σας συνεισφορά, το <b>GreekQA</b> θα μπορέσει να αναπτυχθεί και να αποτελέσει <b>ακρογωνιαίο λίθο</b> στην περαιτέρω <b>ανάπτυξη</b> και <b>δοκιμή ελληνικών</b> και <b>πολυγλωσσικών μοντέλων Αναγνωστικής Κατανόησης</b>.
                        </p>
                    </div>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-navy-300" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-2 bg-white text-navy-900 select-none">Ξεκινήστε να συνεισφέρετε</span>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <NavyLink className="mx-auto text-center" to="/login">Είσοδος στην εφαρμογή</NavyLink>
                        <NavyLink className="mx-auto text-center" to="/signup">Εγγραφή στην εφαρμογή</NavyLink>
                    </div>
                </div>
            }
            illustration={ <TaskSvg /> }
        />
    </div>
    );
}