import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

import { useFirestore } from 'hooks/useFirestore';

import { NavyLink } from 'components/Shared/NavyLink';
import { Input } from 'components/Shared/Input';
import { Button } from 'components/Shared/Button';

// async function getArticle() {
//     const articleRef = doc(db, 'data', 'Alexander_Graham_Bell');
//     const articleSnap = await getDoc(articleRef);
//     if (articleSnap.exists()) {
//         console.log("Document data:", articleSnap.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }      
// }




export function Contribute() {
    const { getDocument, response } = useFirestore();

    // async function getParagraph() {
    //     const paragraphsRef = collectionGroup(db, 'paragraphs');
    //     const q = query(paragraphsRef, where("completed", '==', "false"),  limit(1));
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         console.log("FOREACH");
    //         return {
    //             title: doc.ref.parent.parent.id,
    //             paragraph: doc.data()
    //         };
    //     });
    // }

    // var { title, paragraph } = useEffect(() => {
    //     return getParagraph();
    // }, []);

    // var { title, paragraph } = getDocument();
    useEffect(() => {
        getDocument();
        console.log(response);
    }, []);


    // console.log("TITLE: ", title);
    // console.log("PARAGRAPH IS :" + paragraph);

    var article = {
    "title": "asda",
    "paragraphs": [
        {
            "context": "Architecturally, the school has a Catholic character. Atop the Main Building's gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend \"Venite Ad Me Omnes\". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.",
            "qas": [
            {
                "answers": [
                {
                    "answer_start": 515,
                    "text": "Saint Bernadette Soubirous"
                }
                ],
                "question": "To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?",
                "id": "5733be284776f41900661182"
            },
            {
                "answers": [
                {
                    "answer_start": 188,
                    "text": "a copper statue of Christ"
                }
                ],
                "question": "What is in front of the Notre Dame Main Building?",
                "id": "5733be284776f4190066117f"
            },
            {
                "answers": [
                {
                    "answer_start": 279,
                    "text": "the Main Building"
                }
                ],
                "question": "The Basilica of the Sacred heart at Notre Dame is beside to which structure?",
                "id": "5733be284776f41900661180"
            }
            ]
        }
    ]
    }

    const [selectedText, setSelectedText] = useState('');
    const [selectionRange, setSelectionRange] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
    };

    const pushQA = (article) => {
        let qa = {
            "answers": [
                {
                    "answer_start": 515,
                    "text": "Saint Bernadette Soubirous"
                }
            ],
            "question": "To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?",
            "id": "5733be284776f41900661182"
        }

        article.paragraphs[0].qas.push(qa);
    }
    
    const popQA = (article) => {
        if (article.paragraphs[0].qas.length > 0) {
            article.paragraphs[0].qas.pop();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="mb-6 text-3xl font-medium text-navy-600 select-none">
                Συγγραφή ερωτήσεων/απαντήσεων
            </h2>
            <div className="p-6 rounded-lg shadow-lg">
                <h3 className="mb-6 text-xl">
                    <span className="font-medium select-none">Τίτλος Άρθρου: </span>{response.document.title}
                    <br />
                    <span className="font-medium select-none">Παράγραφος: </span>1 από τις 15
                </h3>
                <p className="text-md text-left" onMouseUp={() => {setSelectedText(window.getSelection().toString()); setSelectionRange(window.getSelection().getRangeAt(0))}} onTouchEnd={() => setSelectedText(window.getSelection().toString())}>
                    <span className="font-medium text-xl select-none">Κείμενο:</span><br />
                    {article.paragraphs[0].context}
                </p>
            </div>
            <div className="my-6">
                {response.document.paragraph.qas.map((qa, index) => (
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
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                            <Input label={`Ερώτηση ${index+1}`} type="text" value={qa.question} disabled readOnly></Input>
                            <Input label={`Απάντηση ${index+1}`} type="text" value={qa.answers[0].text} disabled readOnly></Input>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                ))}
            </div>
            <Button red hidden={article.paragraphs[0].qas.length === 0} onClick={(article) => popQA(article)}>Αφαίρεση Ερώτησης</Button>
            <div className="space-y-4">
                <Input label="Νέα ερώτηση" type="text" placeholder="Γράψε την ερώτηση"></Input>
                <Input label="Νέα απάντηση" type="text" placeholder="Μάρκαρε την απάντηση στο κείμενο" value={selectedText} readOnly></Input>
            </div>
            {/* {selectionRange.startOffset}<br/>
            {selectionRange.endOffset} */}
            {/* <div className="grid grid-cols-2 gap-5"> */}
                <Button green onClick={(article) => pushQA(article)}>Προσθήκη Ερώτησης</Button>
                <Button type="submit">Καταχώρηση όλων των ερωτήσεων/απαντήσεων</Button>
                <b className="text-red-400">Προσοχή:</b> Πριν καταχωρήσετε τις ερωτήσεις/απαντήσεις σας, παρακαλούμε <b>βεβαιωθείτε ότι είναι σωστές</b>, διότι δεν μπορούν να αλλαχθούν στην συνέχεια.
                
                {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}
            <div>
                <NavyLink className="text-md" to="/dashboard/get-started">Επιστροφή στην εφαρμογή</NavyLink>
            </div>
        </form>
    );
}