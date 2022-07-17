import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

import { GuidelineItems } from 'components/Dashboard/Guidelines/GuidelineItems';

export function Guidelines() {
  
    return (
        <div className="w-full mx-auto rounded-lg shadow-lg p-6">
            {GuidelineItems.map((item, index) => (
            <Disclosure key={index} as="div" className="mt-2" defaultOpen={item.open}>
            {({ open }) => (
                <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-navy-900 text-sm sm:text-base bg-navy-50 rounded-lg shadow-md hover:bg-navy-100 focus:outline-none focus-visible:ring focus-visible:ring-navy-400 focus-visible:ring-opacity-75">
                    {item.question}
                    <ChevronUpIcon
                    className={`${
                        open ? 'transform rotate-180' : ''
                    } w-5 h-5 text-navy-600`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-navy-900">
                    {item.answer}
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
            ))}
        </div>
    );
}