import { Fragment,useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import { Transition } from '@headlessui/react'
// import userImage from 'assets/user.png'
import { ReactComponent as LightSvg } from 'assets/icons/light.svg'
import { ReactComponent as DarkSvg } from 'assets/icons/dark.svg'
import { ReactComponent as GithubSvg } from 'assets/icons/github.svg'


export default function Sidebar() {
  const email = "sdi1600152@di.uoa.gr"
  const name= "ΕΥΣΤΑΘΙΟΣ ΣΙΑΤΡΑΣ"
  const [enabled, setEnabled] = useState(true)

    return (
        <div className="flex h-screen overflow-hidden hidden md:flex ">
          <div className="flex flex-col w-64">
            <div className="
              flex flex-col flex-grow
              pt-5
              overflow-y-auto
              bg-aqua-750
              border-r
            ">
              {/* className="flex flex-col items-center flex-shrink-0 px-4 > font-medium*/}
                {/* <Link to="/" className="> */}
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
                <nav className="flex-1 space-y-1 bg-aqua-750">
                  <ul>
                    <li>
                      <NavLink to="/dashboard/articles"
                        className={({ isActive }) =>
                          [
                            "inline-flex items-center w-full px-4 py-2 mt-1 text-base font-medium rounded-lg transition duration-200 ease-in-out transform active:bg-aqua-800",
                            isActive ? 'shadow-outline border-aqua-800 bg-aqua-850 text-white' : 'text-aqua-200 hover:text-white hover:border-aqua-850 hover:bg-aqua-650',
                          ].join(" ")
                        }
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="ml-4 select-none">Άρθρα</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/guidelines"
                        className={({ isActive }) =>
                          [
                            "inline-flex items-center w-full px-4 py-2 mt-1 text-base font-medium rounded-lg transition duration-200 ease-in-out transform active:bg-aqua-800",
                            isActive ? 'shadow-outline bg-aqua-850 text-white' : 'text-aqua-200 hover:text-white hover:bg-aqua-650'
                          ].join(" ")
                        }
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="ml-4">Οδηγίες Χρήσης</span>
                      </NavLink>
                    </li>
                  </ul>
                  <p className="px-4 pt-4 font-medium text-white uppercase select-none">ΔΙΑΧΕΙΡΙΣΤΗΣ</p>
                  <ul>
                    <li>
                      <NavLink to="/dashboard/statistics" 
                        className={({ isActive }) =>
                          [
                            "inline-flex items-center w-full px-4 py-2 mt-1 text-base font-medium rounded-lg transition duration-200 ease-in-out transform active:bg-aqua-800",
                            isActive ? 'shadow-outline bg-aqua-850 text-white' : 'text-aqua-200 hover:text-white hover:border-aqua-850 hover:bg-aqua-650'
                          ].join(" ")
                        }
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                        <span className="ml-4 select-none">Στατιστικά</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <NavLink to="/account/profile"
                className={({ isActive }) =>
                  [
                    "flex flex-shrink-0 p-4 px-4 bg-aqua-600 transition duration-300 ease-in-out border-aqua-800 active:bg-aqua-750",
                    isActive ? "bg-aqua-800" : "hover:bg-aqua-800"
                  ].join(" ")
                }
              > */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm text-aqua-200 transition duration-200 ease-in-out bg-aqua-850 hover:bg-aqua-800 active:bg-aqua-650 hover:text-white">
                    <div href="profile" className="flex-shrink-0 block w-full">
                      <div className="flex items-center">
                          {/* <img className="inline-block rounded-full h-6 w-6" src={userImage} /> */}
                          <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 22V18C5 15.7909 6.79086 14 9 14H15C17.2091 14 19 15.7909 19 18V22" stroke="white" stroke-width="2"></path><circle cx="12" cy="7" r="4" stroke="white" stroke-width="2"></circle></svg>
                          {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg> */}
                          <div className="text-left">
                            <div className="text-sm font-medium ml-3 select-none">{email}</div>
                            <div className="text-sm h-4 ml-3 text-ellipsis overflow-hidden select-none">{name}</div>
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
                    <Menu.Items className="absolute -top-24 left-1 w-60 mt-2 origin-top-left bg-aqua-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/account/profile"
                              className={`${
                                active ? 'transition duration-200 ease-in-out bg-aqua-650 text-white' : 'text-gray-700'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Ο λογαριασμός μου
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/logout"
                              className={`${
                                active ? 'transition duration-200 ease-in-out bg-aqua-650 text-white' : 'text-gray-700'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              Αποσύνδεση
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
            </div>
          </div>
        </div>
    );
  }

//   <div href="profile" className="flex-shrink-0 block w-full">
//   <div className="flex items-center">
//       {/* <img className="inline-block rounded-full h-6 w-6" src={userImage} /> */}
//       <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 22V18C5 15.7909 6.79086 14 9 14H15C17.2091 14 19 15.7909 19 18V22" stroke="white" stroke-width="2"></path><circle cx="12" cy="7" r="4" stroke="white" stroke-width="2"></circle></svg>
//       {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//       </svg> */}
//       <span className="text-sm font-medium ml-3 text-white">{email}</span>
//   </div>
// </div>


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
//               enabled ? 'translate-x-8 bg-aqua-400' : 'translate-x-1 bg-aqua-800'
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

  // <div className="flex h-screen overflow-hidden">
  //           <div className="flex flex-col flex-1 w-0 overflow-hidden">
  //         <main className="relative flex-1 overflow-y-auto">
  //           <div className="py-6">
  //             <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
  //               <h1 className="text-lg text-neutral-600">Here is where you put your stuff</h1>
  //             </div>
  //             <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
  //               <div className="py-4">
  //                 <div className="rounded-lg bg-gray-50 h-96" />
  //               </div>
  //             </div>
  //           </div>
  //         </main>
  //       </div>
  //     </div>

  // className="
  // inline-flex
  // items-center
  // w-full
  // px-4
  // py-2
  // mt-1
  // text-base text-white
  // transition
  // duration-300
  // ease-in-out
  // transform
  // border-aqua-800
  // rounded-lg
  // hover:border-4-aqua-800
  // hover:bg-aqua-600"