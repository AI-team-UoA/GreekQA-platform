import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { useFirestoreUsers } from 'hooks/useFirestoreUsers';
// import { useFirestoreStatistics } from 'hooks/useFirestoreStatistics';

export function Statistics() {
    const { getUsers, response } = useFirestoreUsers();
    // const { getStatistics, response: responseStatistics } = useFirestoreStatistics();

    useEffect(() => {
        getUsers();
        // getStatistics();
    }, []);

    const [document, setDocument] = useState(null);
    useEffect(() => {
        setDocument(response.document);
    }, [response.document]);

    // const [statsDocument, setStatsDocument] = useState(null);
    // useEffect(() => {
    //     setStatsDocument(responseStatistics);
    // }, [responseStatistics]);

    const paragraphsCompleted = 18
    const paragraphsTotal = 141
    const paragraphsPerc = (paragraphsCompleted / paragraphsTotal) * 100

    const qasWritten = 30
    const meanQasPerParagraph = (qasWritten / paragraphsTotal) * 100     
    
    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('')

    const people = document ? document.users : []
    const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.displayName
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    
    return (
        <div className="space-y-8">
            <div className="p-6 max-w-3xl space-y-6 shadow-lg rounded-lg">
                    <h3 className="mb-6 text-xl font-medium text-navy-600 select-none">Στατιστικά Συνόλου Δεδομένων</h3>
                    <ul className="grid grid-cols-1 gap-5">
                        <li>
                            Έχουν συμπληρωθεί <span className="font-medium text-navy-600"></span> από τις <span className="font-medium text-navy-600">{paragraphsTotal}</span> παραγράφους (<span className="font-medium text-navy-600">{paragraphsPerc.toFixed(2)}%</span>).
                        </li>
                        <li>
                            Έχουν γραφτεί <span className="font-medium text-navy-600">{qasWritten}</span> ερωτοαπαντήσεις (<span className="font-medium text-navy-600">{meanQasPerParagraph.toFixed(2)}</span> ερωτοαπαντήσεις ανά παράγραφο).
                        </li>
                    </ul>
            </div>
            <div className="p-6 max-w-3xl space-y-6 shadow-lg rounded-lg">
                <h3 className="mb-6 text-xl font-medium text-navy-600 select-none">Στατιστικά Χρηστών</h3>
                <div className="grid grid-cols-1 gap-5">
                    <Combobox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <div className="focus:outline-none relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-300 sm:text-sm">
                                <Combobox.Input
                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                displayValue={(person) => person.name}
                                placeholder="Αναζήτηση χρήστη..."
                                onChange={(event) => setQuery(event.target.value)}
                                />
                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <SelectorIcon
                                    className="h-5 w-5 text-navy-400"
                                    aria-hidden="true"
                                />
                                </Combobox.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setQuery('')}
                            >
                                <Combobox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                                {filteredPeople.length === 0 && query !== '' ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Δεν υπάρχει χρήστης με αυτό το όνομα.
                                    </div>
                                ) : (
                                    filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person.displayName}
                                        className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-navy-600 text-white' : 'text-gray-900'
                                        }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                        <>
                                            <span
                                            className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                            }`}
                                            >
                                            {person.displayName}
                                            </span>
                                            {selected ? (
                                            <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active ? 'text-white' : 'text-navy-600'
                                                }`}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            ) : null}
                                        </>
                                        )}
                                    </Combobox.Option>
                                    ))
                                )}
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </Combobox>
                    {selected ? (
                    <ul className="grid grid-cols-1 gap-2 list-disc list-inside">
                        <li>
                            Όνομα χρήστη: <span className="font-medium text-navy-600">{selected.displayName}</span>
                        </li>
                        <li>
                            Email χρήστη: <span className="font-medium text-navy-600">{selected.email}</span>
                        </li>
                        <li>
                            Έχουν συμπληρωθεί <span className="font-medium text-navy-600">{selected.numParagraphs}</span> παραγράφους από τον χρήστη.
                        </li>
                        <li>
                            Έχουν γραφτεί <span className="font-medium text-navy-600">{selected.numQas}</span> ερωτοαπαντήσεις από τον χρήστη (<span className="font-medium text-navy-600">{+(((selected.numQas / selected.numParagraphs) * 100).toFixed(2)) || 0}</span> ερωτοαπαντήσεις ανά παράγραφο).
                        </li>
                    </ul>) : null}
                </div>
            </div>
        </div>
    );
}
