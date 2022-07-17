import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

import { useAuthContext } from 'hooks/useAuthContext';
import { useFirestoreParagraphs } from 'hooks/useFirestoreParagraphs';

import { NavyLink } from 'components/Shared/NavyLink';
import { Input } from 'components/Shared/Input';
import { Button } from 'components/Shared/Button';

export function Contribute() {
    const { user } = useAuthContext();
    const { getDocument, updateQas, response } = useFirestoreParagraphs();
    useEffect(() => {
        getDocument(user.uid);
    }, []);

    const [ document, setDocument ] = useState(null);
    useEffect(() => {
        setDocument(response.document);
    }, [response.document]);

    const submitQAs = async (document, user_uid) => {
        const answer = window.confirm("Είστε σίγουροι ότι θέλετε να καταχωρήσετε όλες τις απαντήσεις/ερωτήσεις;");
        if (answer) {
            await updateQas(document, user_uid);
            getDocument(user.uid);
        }
    }

    const popQA = (index) => {
        var newDocument = JSON.parse(JSON.stringify(document));
        newDocument.paragraph.qas.splice(index, 1);
        setDocument(newDocument);
    };

    const pushQA = (qa) => {
        document.paragraph.qas.push(qa);
    };

    const [selectedText, setSelectedText] = useState('');
    const [selectionRange, setSelectionRange] = useState({});

    const { register: registerQA, resetField: resetFieldQA, handleSubmit: handleSubmitQA, formState: { errors: errorsQA } } = useForm();
    const onSubmitQA = (data, e) => {
        e.preventDefault();
        var newQA = {
            question: data.question,        
            answers: [
                {
                    answer_start: selectionRange.startOffset,
                    text: selectedText
                }
            ]
        }
        pushQA(newQA);
        resetFieldQA("question");
        setSelectedText('');
        setSelectionRange({});
    };

    return (
        <div className="space-y-5">
            <h2 className="mb-6 text-2xl sm:text-3xl font-medium text-navy-600 select-none">
                Συγγραφή ερωτήσεων/απαντήσεων
            </h2>
            <div className="p-6 rounded-lg shadow-lg">
                <h3 className="mb-6 text-xl">
                    <span className="font-medium text-lg sm:text-xl select-none">Τίτλος Άρθρου:</span> <span className="text-lg sm:text-xl select-none">{document != null ? document.title : 'Φόρτωση...'}</span>
                </h3>
                <p className="text-left text-sm sm:text-base" onMouseUp={() => {setSelectedText(window.getSelection().toString()); setSelectionRange(window.getSelection().getRangeAt(0))}} onContextMenu={() => {setSelectedText(window.getSelection().toString()); setSelectionRange(window.getSelection().getRangeAt(0))}}>
                    <span className="font-medium text-lg sm:text-xl select-none">Παράγραφος:</span><br />
                    {document != null ? document.paragraph.context : 'Φόρτωση...'}
                </p>
            </div>
            <div className="my-6">
                {document != null ? document.paragraph.qas.map((qa, index) => (
                    <Disclosure key={index} as="div" className="my-2 pt-2">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-navy-900 bg-navy-50 rounded-lg shadow-md hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                            {`Ερώτηση/Aπάντηση ${index+1}`}
                            <ChevronUpIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-navy-600`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900 space-y-6 rounded-lg bg-gray-50 shadow-lg">
                            <Input label={`Ερώτηση ${index+1}`} type="text" value={qa.question} disabled readOnly></Input>
                            <Input label={`Απάντηση ${index+1}`} type="text" value={qa.answers[0].text} disabled readOnly></Input>
                            <Button red="true" onClick={()=> popQA(index)}>Αφαίρεση Ερώτησης</Button>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                )) : 'Φόρτωση...'}
            </div>
            <form onSubmit={handleSubmitQA(onSubmitQA)} className="space-y-4">
                <Input label="Νέα ερώτηση" id="question" name="question" type="text" placeholder="Γράψτε την ερώτηση" autocomplete="off"
                       errors={errorsQA.question}  register={registerQA("question", { required: "Παρακαλώ συμπληρώστε μια ερώτηση",
                                                                                    pattern: {
                                                                                    message: "Παρακαλώ συμπληρώστε μια ερώτηση στα ελληνικά που να τελειώνει με ερωτηματικό (π.χ. Πόση ειναι η διάμετρος της Γης;",
                                                                                    value: /^[Α-Ωα-ωA-Za-zΆΈΊΌΎΏΪΫΏάέήίόύώϊϋΰψΐζήθόςώϊΐΰΆΈΉΊΌΎΏΪΫΏάέήίόύώϊϋΰψΐζήθόςώϊΐΰ0-9'":!@#$%^&*()-_+=\s]+;$/
                                                                                }
                                                                            })}
                />
                <Input label="Νέα απάντηση" id="answer" name="answer" type="text" placeholder="Μάρκαρετε την απάντηση στην παράγραφο" value={selectedText} readOnly
                       errors={errorsQA.answer} register={registerQA("answer", { required: "Παρακαλώ συμπληρώστε μια απάντηση (π.χ. 12.742 χλμ.)"})}
                />
            
                <Button green="true" type="submit" disabled={document ? (document.paragraph.qas.length >= 5 ? true: false): false}>Προσθήκη Ερώτησης {document ? (document.paragraph.qas.length >= 5 ? "(Μπορείτε να καταχωρήσετε το πολύ 5 ερωτήσεις/απαντήσεις ανά παράγραφο!)" : ""): ""}</Button>
            </form>
            <div>
                <b className="text-red-500">Προσοχή: </b>
                <ul className="pl-5 list-disc">
                    <li>Η απάντηση πρέπει να είναι <b className="text-navy-500">το μικρότερο δυνατό μέρος του κειμένου (φράση ή λέξη) που απαντά στην εκάστοτε ερώτηση</b> και <b className="text-navy-500">όχι ολόκληρη πρόταση</b>. Περισσότερες λεπτομέρειες στις Οδηγίες Χρήσης παρακάτω.</li>
                    <li>Σε κάθε παράγραφο μπορείτε να γράψετε <b className="text-navy-500">3-5 ερωτήσεις/απαντήσεις</b>.</li>
                    <li>Πριν καταχωρήσετε τις ερωτήσεις/απαντήσεις σας, παρακαλούμε <b className="text-navy-500">βεβαιωθείτε ότι είναι σωστές</b>, διότι δεν μπορούν να αλλαχθούν στην συνέχεια.</li>
                    <li>Πριν αποχωρήσετε από την σελίδα, παρακαλούμε <b className="text-navy-500">καταχωρήστε τις ερωτήσεις/απαντήσεις σας</b>, διότι δεν αποθηκεύονται προσωρινά.</li>
                </ul>
            </div>
            <Button type="submit" onClick={()=> submitQAs(document, user.uid)} disabled={document ? (document.paragraph.qas.length >= 3 ? false: true): true}>Καταχώρηση όλων των ερωτήσεων/απαντήσεων {document ? (document.paragraph.qas.length >= 3 ? "" : "(Χρειάζεστε τουλάχιστον 3 ερωτήσεις/απαντήσεις ανά παράγραφο!)"): "(Χρειάζεστε τουλάχιστον 3 ερωτήσεις/απαντήσεις ανά παράγραφο!)"}</Button>
            <div>
                <NavyLink to="/get-started">Επιστροφή στην εφαρμογή</NavyLink>
            </div>
        </div>
    );
}