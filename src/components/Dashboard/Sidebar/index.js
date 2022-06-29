import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Transition } from '@headlessui/react';

import { useAuthContext } from 'hooks/useAuthContext';
import { useLogout } from 'hooks/useLogout';

import { NavigationItems } from 'components/Dashboard/Sidebar/NavigationItems';

export function Sidebar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout()

  return (
      <div className="flex flex-col w-72">
        <div className="
          flex flex-col flex-grow
          pt-5
          overflow-y-auto
          bg-navy-400
        ">
          <h1 className="
            px-6
            py-2
            block
            text-left
            text-3xl
            text-white
            tracking-tighter
            select-none
          ">GreekQA</h1>
          <div className="flex flex-col flex-grow px-4 mt-5">
            <nav className="flex-1 space-y-1 bg-navy-400">
              <ul>
                {NavigationItems.main.map((item, index) => (
                    <li key={index}>
                      <NavLink to={item.path}
                        className={({ isActive }) => `${
                          isActive ? 'shadow-outline bg-navy-500 text-white' : 'text-navy-50 hover:text-white hover:bg-navy-300'
                        } inline-flex items-center w-full px-4 py-2 mt-1 text-base font-medium rounded-lg transition duration-200 ease-in-out transform active:bg-navy-600`}
                      >
                        {item.icon}
                        <span className="ml-4 select-none">{item.name}</span>
                      </NavLink>
                    </li>))
                }
              </ul>
              {/* <p className="px-4 pt-4 font-medium text-white uppercase select-none">ΔΙΑΧΕΙΡΙΣΤΗΣ</p>
              <ul>
                {NavigationItems.admin.map((item, index) => (
                    <li key={index}>
                      <NavLink to={item.path}
                        className={({ isActive }) => `${
                          isActive ? 'shadow-outline bg-navy-500 text-white' : 'text-navy-50 hover:text-white hover:bg-navy-300'
                        } inline-flex items-center w-full px-4 py-2 mt-1 text-base font-medium rounded-lg transition duration-200 ease-in-out transform active:bg-navy-600`}
                      >
                        {item.icon}
                        <span className="ml-4 select-none">{item.name}</span>
                      </NavLink>
                    </li>))
                }
              </ul> */}
            </nav>
          </div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-3 text-sm text-white transition duration-200 ease-in-out bg-navy-500 hover:bg-navy-600 active:bg-navy-300">
                <div href="profile" className="flex-shrink-0 block w-full">
                  <div className="flex items-center">
                      <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 22V18C5 15.7909 6.79086 14 9 14H15C17.2091 14 19 15.7909 19 18V22" stroke="currentColor" strokeWidth="2"></path>
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth={2}></circle>
                      </svg>
                      <div className="text-left">
                        <div className="text-sm ml-3 h-5 text-ellipsis overflow-hidden font-medium select-none">{user.displayName}</div>
                        <div className="text-sm ml-3 h-5 text-ellipsis overflow-hidden select-none">{user.email}</div>
                      </div>
                  </div>
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute -top-24 left-1 w-11/12 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none ">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/account/profile"
                          className={`${
                            active ? 'transition duration-200 ease-in-out bg-navy-400 text-white' : 'text-navy-800'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Ο λογαριασμός μου
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button onClick={logout}
                          className={`${
                            active ? 'transition duration-200 ease-in-out bg-navy-400 text-white' : 'text-navy-800'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {isPending ? 'Αποσύνδεση...' : 'Αποσύνδεση'}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
        </div>
    </div>
  );
}