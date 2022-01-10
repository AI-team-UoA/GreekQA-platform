import { Fragment,useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Sidebar from 'components/Dashboard/Sidebar'

export default function MobileSidebar() {
  const [isOpen, setOpen] = useState(false)

  return (
      <div className="bg-navy-400 h-full">
            <button onClick={() => setOpen((open) => !open)} className=" py-4 px-2">
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-8 w-8 font-bold text-white" aria-hidden="true" />
            </button>
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
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
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
                        className="text-navy-400 hover:text-gray-500 focus:outline-none focus:ring-0"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-8 w-8" aria-hidden="true" />
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

//   <li>
//   <div className="flex items-center border-r border-gray-200">                     
//     <Switch
//           checked={enabled}
//           onChange={setEnabled}
//           className={`${
//             enabled ? 'bg-aqua-500' : 'bg-aqua-900'
//           } relative inline-flex items-center h-7 rounded-full w-14 transition-colors focus:outline-none`}
//         >
//           <span
//             className={`${
//               enabled ? 'translate-x-8 bg-aqua-400' : 'translate-x-1 bg-navy-500'
//             } inline-block w-5 h-5 transform rounded-full transition-transform`}
//           >
//             <LightSvg stroke="SkyBlue" fill="SkyBlue" fill-opacity="0.4" stroke-opacity="0.8" className={`${
//               enabled ? 'visible' : 'invisible'
//             } absolute w-5 h-5`}></LightSvg>
//             <DarkSvg  stroke-width="1" fill="SkyBlue" fill-opacity="0.6" className={`${
//               enabled ? 'invisible' : 'visible'
//             } absolute w-5 h-5`}></DarkSvg>
//             {/* <DarkSvg className="w-8 h-8"></DarkSvg> */}
//           </span>
//         </Switch>
//   </div>
//   <a href="https://github.com/ssiatras" target="_blank"><GithubSvg className="w-5 h-5 fill-aqua-400" /></a>
// </li>