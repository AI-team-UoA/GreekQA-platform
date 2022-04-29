import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export function Statistics() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    // const data = {
    //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //   datasets: [
    //     {
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)',
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)',
    //       ],
    //       borderWidth: 1,
    //     },
    //   ],
    // };

    const paragraphsCompleted = 18
    const paragraphsTotal = 141
    const paragraphsPerc = (paragraphsCompleted / paragraphsTotal) * 100

    const qasWritten = 30
    const meanQasPerParagraph = (qasWritten / paragraphsTotal) * 100

    const people = [
        { 
            id: 1,
            name: 'Durward Reynolds'
        },
        { 
            id: 2,
            name: 'Kenton Towne'
        },
        { 
            id: 3,
            name: 'Therese Wunsch'
        },
        { 
            id: 4,
            name: 'Benedict Kessler'
        },
        {
            id: 5,
            name: 'Katelyn Rohan'
        },
      ]
      
    
    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('')

      
    const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    
    return (
        <div classname="space-y-12">
            <div className="p-6 max-w-3xl space-y-6 shadow-lg rounded-lg">
                    <h3 className="mb-6 text-xl font-medium text-navy-600 select-none">Στατιστικά Συνόλου Δεδομένων</h3>
                    <div className="grid grid-cols-1 gap-5">
                        <p>
                            Έχουν συμπληρωθεί <span className="font-medium text-navy-600">{paragraphsCompleted}</span> από τις <span className="font-medium text-navy-600">{paragraphsTotal}</span> παραγράφους (<span className="font-medium text-navy-600">{paragraphsPerc.toFixed(2)}%</span>).
                        </p>
                        <p>
                            Έχουν γραφτεί <span className="font-medium text-navy-600">{qasWritten}</span> ερωτοαπαντήσεις (<span className="font-medium text-navy-600">{meanQasPerParagraph.toFixed(2)}</span> ερωτοαπαντήσεις ανά παράγραφο).
                        </p>
                    </div>
                    {/* <div className="grid grid-cols-1 gap-5 lg:grid-cols-2"> */}
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
                                            key={person.id}
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
                                                {person.name}
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
                        <p>
                            {selected.name}
                        </p>
                    </div>
                    {/* <div className="grid grid-cols-1 gap-5 lg:grid-cols-2"> */}
            </div>
            <div className="space-12">
                {/* <Pie className="block w-12 p-6 shadow-lg rounded-lg" data={data} />
                <Pie className="block p-6 shadow-lg rounded-lg" data={data} /> */}
            </div>
        </div>
    );
}
