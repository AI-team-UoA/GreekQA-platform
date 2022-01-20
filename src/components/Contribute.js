import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

import { useFirestore } from 'hooks/useFirestore';

import { NavyLink } from 'components/Shared/NavyLink';
import { Input } from 'components/Shared/Input';
import { Button } from 'components/Shared/Button';

export function Contribute() {
    const { getDocument, response } = useFirestore();
    useEffect(() => {
        getDocument();
    }, []);

    const [ document, setDocument ] = useState(null);
    useEffect(() => {
        setDocument(response.document);
    }, [response.document]);

    const popQA = (index) => {
        document.paragraph.qas.splice(index, 1);
    };

    const pushQA = (qa) => {
        document.paragraph.qas.push(qa);
    };


    const [selectedText, setSelectedText] = useState('');
    const [selectionRange, setSelectionRange] = useState({});

    const { register: registerQA, handleSubmit: handleSubmitQA, formState: { errors: errorsQA } } = useForm();
    const onSubmitQA = (data, e) => {
        e.preventDefault();
        pushQA(data.question, data.answer);
    };

    
    const { register: registerParagraph, handleSubmit: handleSubmitParagraph, formState: { errors: errorsParagraph } } = useForm();
    const onSubmitParagraph = (data, e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmitParagraph(onSubmitParagraph)} className="space-y-6">
            <h2 className="mb-6 text-3xl font-medium text-navy-600 select-none">
                Συγγραφή ερωτήσεων/απαντήσεων
            </h2>
            <div className="p-6 rounded-lg shadow-lg">
                <h3 className="mb-6 text-xl">
                    <span className="font-medium select-none">Τίτλος Άρθρου: </span>{document != null ? document.title : 'Φόρτωση...'}
                </h3>
                <p className="text-md text-left" onMouseUp={() => {setSelectedText(window.getSelection().toString()); setSelectionRange(window.getSelection().getRangeAt(0))}} onTouchEnd={() => setSelectedText(window.getSelection().toString())}>
                    <span className="font-medium text-xl select-none">Παράγραφος:</span><br />
                    {document != null ? document.paragraph.context : 'Φόρτωση...'}
                </p>
            </div>
            <div className="my-6">
                {document != null ? document.paragraph.qas.map((qa, index) => (
                    <Disclosure key={index} as="div" className="my-2 pt-2">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-navy-900 bg-navy-50 rounded-lg shadow-md hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
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
                            <button onClick={()=> popQA(index)}>Αφαίρεση Ερώτησης</button>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                )) : 'Φόρτωση...'}
            </div>
            <form onSubmit={handleSubmitQA(onSubmitQA)} className="space-y-4">
                <Input label="Νέα ερώτηση" id="question" name="question" type="text" placeholder="Γράψε την ερώτηση"></Input>
                <Input label="Νέα απάντηση" id="answer" name="answer" type="text" placeholder="Μάρκαρε την απάντηση στο κείμενο" value={selectedText} readOnly></Input>
            
            {/* {selectionRange.startOffset}<br/>
            {selectionRange.endOffset} */}
            {/* <div className="grid grid-cols-2 gap-5"> */}
                <button submit onClick={(question, answer) => pushQA(question, answer)}>Προσθήκη Ερώτησης</button>
            </form>
                <Button type="submit">Καταχώρηση όλων των ερωτήσεων/απαντήσεων</Button>
                <b className="select-none text-red-400">Προσοχή: </b>Πριν καταχωρήσετε τις ερωτήσεις/απαντήσεις σας, παρακαλούμε <b>βεβαιωθείτε ότι είναι σωστές</b>, διότι δεν μπορούν να αλλαχθούν στην συνέχεια.

                {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}
            <div>
                <NavyLink className="text-md" to="/dashboard/get-started">Επιστροφή στην εφαρμογή</NavyLink>
            </div>
        </form>
    );
}