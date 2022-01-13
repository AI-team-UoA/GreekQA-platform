import { Fragment,useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { Sidebar } from 'components/Dashboard/Sidebar';

export function MobileSidebar() {
  const [isOpen, setOpen] = useState(false)

  return (
      <div className="bg-navy-400 h-full flex">
            <button onClick={() => setOpen((open) => !open)} className="px-2">
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-12 w-12 font-bold text-white rounded-md transition duration-200 ease-in-out hover:bg-navy-300 p-2" aria-hidden="true" />
            </button>
            <h1 className="p-3
            text-left
            text-3xl
            text-white
            tracking-tighter
            select-none
          ">GreekQA</h1>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 md:hidden" onClose={setOpen}>
          <div className="absolute inset-0">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 left-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="flex h-screen">
                <div className="flex flex-col w-72">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-4 pl-6">
                      <button
                        className="text-white hover:text-navy-400 focus:outline-none focus:ring-0"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-7 w-7" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-screen">
                    <Sidebar />
                </div>
                </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}