import Sidebar from "Sidebar.js"
import { Link } from "react-router-dom"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Guidelines() {
    return (
        <div className="flex h-screen">
        <Sidebar />
            <main className="relative flex-1 overflow-y-auto w-full px-12 pt-12 p-2 ">
                    <h2 className="pb-6 text-3xl font-medium text-navy-600 select-none">Οδηγίες Χρήσης</h2>
                    <div className="w-full mx-auto">
                        <Disclosure as="div" className="mt-2" defaultOpen="true">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                                <span>Τι είναι το GreekQA;</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-navy-600`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                                If you're unhappy with your purchase for any reason, email us
                                within 90 days and we'll refund you in full, no questions asked.
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2" defaultOpen="true">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                                <span>Γιατί να συνεισφέρω;</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-navy-600`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                                No.
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2" defaultOpen="true">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                                <span>Πως μπορώ να συνεισφέρω;</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-navy-600`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                                Αφού διαβάσετε τις Οδηγίες Χρήσης, μπορείτε να ξεκινήσετε να συνεισφέρετε άμεσα στην καρτέλα <Link to="/dashboard/articles" className="text-navy-400 font-medium hover:underline hover:text-gray-600">Άρθρα</Link>.
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                                <span>Τι είδη ερωτήσεων αναζητούμε;</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-navy-600`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                                Ιδανικά θέλουμε οι ερωτήσεις <b>να μην χρησιμοποιούν τις ίδιες λέξεις/φράσεις που εμφανίζονται στο κείμενο</b>.
                                <br/><br/>
                                Γενικά, τα είδη των ερωτήσεων που αναζητούμε είναι:
                                <ul className="pl-4 list-disc">
                                    <li><b>Λεκτική παραλλαγή (συνωνυμία)</b>: Οι κύριες αντιστοιχίες μεταξύ της ερώτησης και της απάντησης είναι συνώνυμα.
                                        <br/>
                                        Παράδειγμα:
                                        <ul className="pl-8">
                                            <li>Ερώτηση: Πώς <b>ονομάζεται</b> μερικές φορές ο κύκλος Rankine; </li>
                                            <li>Πρόταση/<u>Απάντηση</u>: Ο κύκλος Rankine μερικές φορές <b>αναφέρεται</b> ως <u>πρακτικός κύκλος Carnot</u>.</li>
                                        </ul>
                                    </li>
                                    <br/>
                                    <li><b>Λεκτική παραλλαγή (παγκόσμια γνώση)</b>: Οι κύριες αντιστοιχίες μεταξύ της ερώτησης και της απάντησης απαιτούν παγκόσμια γνώση.
                                        <br/>
                                        Παράδειγμα:
                                        <ul className="pl-8">
                                            <li>Ερώτηση: Ποια <b>κυβερνητικά όργανα</b> έχουν δικαίωμα βέτο;</li>
                                            <li>Πρόταση/<u>Απάντηση</u>: <b><u>Το Ευρωπαϊκό Κοινοβούλιο και το Συμβούλιο της Ευρωπαϊκής Ένωσης</u></b> έχουν δικαίωμα τροποποίησης και βέτο κατά τη νομοθετική διαδικασία.</li>
                                        </ul>
                                    </li>
                                    <br/>
                                    <li><b>Συντακτική παραλλαγή</b>: Μετά την παράφραση της ερώτησης σε δηλωτική μορφή, η εξάρτηση δομής δεν ταιριάζει με αυτήν της απάντησης ακόμη και μετά από τοπικές τροποποιήσεις.
                                        <br/>
                                        Παράδειγμα:
                                        <ul className="pl-8">
                                            <li>Ερώτηση: Ποιος ερευνητής του Shakespeare είναι αυτή τη στιγμή στο <b>Διδακτικό Ερευνητικό Προσωπικό</b>;</li>
                                            <li>Πρόταση/<u>Απάντηση</u>: To <b>Διδακτικό Ερευνητικό Προσωπικό</b> περιλαμβάνει τον ανθρωπολόγο Marshall Sahlins, ..., τον μελετητή του Shakespeare <u>David Bevington</u>.</li>
                                        </ul>
                                    </li>
                                    <br/>
                                    <li><b>Συλλογισμός πολλαπλών προτάσεων</b>: Υπάρχει αναφορά ή απαιτείται συγχώνευση πολλαπλών προτάσεων.
                                        <br/>
                                        Παράδειγμα:
                                        <ul className="pl-8">
                                            <li>Ερώτηση: Τι συλλογή κατέχουν <b>η γκαλερί V&A Theatre & Performance</b>;</li>
                                            <li>Πρόταση/<u>Απάντηση</u>: <b>Η γκαλερί V&A Theatre & Performance</b> άνοιξαν τον Μάρτιο του 2009. ... <b>Αυτή η γκαλερί</b> διατηρεί τη μεγαλύτερη εθνική συλλογή του Ηνωμένου Βασιλείου από <u>εκθέματα σχετικά με ζωντανές εμφανίσεις</u>.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                                <span>Τι είδη απαντήσεων αναζητούμε;</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-navy-600`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                                Οι απαντήσεις πρέπει να είναι <b>το μικρότερο δυνατό μέρος του κειμένου</b> που απαντά στην εκάστοτε ερώτηση.
                                <br/>
                                <br/>
                                Γενικά, τα είδη των απαντήσεων που αναζητούμε είναι:
                                <ul className="pl-4 list-disc">
                                    <li><b>Ημερομηνία</b>: 19 Οκτωβρίου 1512</li>
                                    <li><b>Αριθμός</b>: 12</li>
                                    <li><b>Άτομο</b>: Μανόλης Κουμπαράκης</li>
                                    <li><b>Τοποθεσία</b>: Αθήνα</li>
                                    <li><b>Οντότητα</b>: Ευρωπαϊκή Ένωση</li>
                                    <li><b>Φράση ουσιαστικού</b>: καταστροφή ιδιοκτησίας</li>
                                    <li><b>Φράση επιθέτου</b>: δεύτερο μεγαλύτερο</li>
                                    <li><b>Φράση ρήματος</b>: επέστρεψε στην Γη</li>
                                    <li><b>Πρόταση/Υποπρόταση</b>: για να αποφευχθεί ο πόλεμος</li>
                                    <li><b>Άλλα</b>: προσεκτικά</li>
                                </ul>
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                                <span>Πρέπει οι απαντήσεις να είναι αναγκαστικά μέρος του κειμένου;</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-navy-600`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                                <b>Ναι.</b><br/>Ο χρήστης γράφει την ερώτηση και στην συνέχεια <b>επιλέγει το μικρότερο δυνατό τμήμα του κειμένου που απαντά στην εκάστοτε ερώτηση</b>.
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                                <span>Πόσο "εύκολες/δύσκολες" πρέπει να είναι οι ερωτήσεις;</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-navy-600`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                                Oι ερωτήσεις που αναζητούμε πρέπει να είναι <b>απλές και ακριβείς ως προς την διατύπωση</b>, καθώς και <b>να μπορούν απαντηθούν σχετικά εύκολα</b>.
                                <br />
                                Παραδείγματα τέτοιων ερωτήσεων βρίσκονται στην ερώτηση <i>"Tι είδη ερωτήσεων αναζητούμε;"</i>.
                                <br />
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                                <span>Πόσο σημαντική είναι η ποικιλομορφία στις ερωτοαπαντήσεις;</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'transform rotate-180' : ''
                                } w-5 h-5 text-navy-600`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                                <b>Η ποικιλομορφία</b> των ερωτοαπαντήσεων αποτελεί <b>σημαντικός παράγοντας</b> για την άρτια ανάπτυξη του dataset.
                                <br />
                                Συνεπώς, παροτρύνουμε τα μέλη να συνεισφέρουν όσο το δυνατόν ερωτήσεις και απαντήσεις <b>διαφορετικών ειδών</b>.
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                    </div>
            </main>
        </div>
    )
}