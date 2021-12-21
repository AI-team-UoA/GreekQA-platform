import userImage from 'assets/user.svg'

export default function Sidebar() {
    return (
        <div className="flex h-screen overflow-hidden bg-white rounded-lg">
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="
              flex flex-col flex-grow
              pt-5
              overflow-y-auto
              bg-aqua-700
              border-r
            ">
              <div className="flex flex-col items-center flex-shrink-0 px-4">
                <a href="/" className="px-8 text-left focus:outline-none">
                  <h2 className="
                    block
                    p-2
                    text-3xl
                    font-medium
                    tracking-tighter
                    text-white
                    transition
                    duration-500
                    ease-in-out
                    transform
                    cursor-pointer
                    hover:text-white
                    select-none
                  ">GreekQA</h2>
                </a>
                <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col flex-grow px-4 mt-5">
                <nav className="flex-1 space-y-1 bg-aqua-700">
                  <ul>
                    <li>
                      <a className="
                        inline-flex
                        items-center
                        w-full
                        px-4
                        py-2
                        mt-1
                        text-base text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        bg-aqua-600
                        rounded-lg
                        focus:shadow-outline
                      ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="ml-4 select-none">Άρθρα</span>
                      </a>
                    </li>
                    <li>
                      <a className="
                        inline-flex
                        items-center
                        w-full
                        px-4
                        py-2
                        mt-1
                        text-base text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border-aqua-800
                        rounded-lg
                        hover:border-aqua-800
                        focus:shadow-outline
                        hover:bg-aqua-600
                      " href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="ml-4">User</span>
                      </a>
                    </li>
                    <li>
                      <a className="
                        inline-flex
                        items-center
                        w-full
                        px-4
                        py-2
                        mt-1
                        text-base text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border-aqua-800
                        rounded-lg
                        hover:border-aqua-800
                        focus:shadow-outline
                        hover:bg-aqua-600
                      " href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="ml-4">Settings</span></a>
                    </li>
                  </ul>
                  <p className="px-4 pt-4 font-medium text-white uppercase">ΔΙΑΧΕΙΡΙΣΤΗΣ</p>
                  <ul>
                    <li>
                      <a className="
                        inline-flex
                        items-center
                        w-full
                        px-4
                        py-2
                        mt-1
                        text-base text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border-aqua-800
                        rounded-lg
                        hover:border-aqua-800
                        focus:shadow-outline
                        hover:bg-aqua-600
                      ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="ml-4"> Tasks</span>
                      </a>
                    </li>
                    <li>
                      <a className="
                        inline-flex
                        items-center
                        w-full
                        px-4
                        py-2
                        mt-1
                        text-base text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border-aqua-800
                        rounded-lg
                        hover:border-aqua-800
                        focus:shadow-outline
                        hover:bg-aqua-600
                      ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="ml-4"> Reports</span>
                      </a>
                    </li>
                    <li>
                      <a className="
                        inline-flex
                        items-center
                        w-full
                        px-4
                        py-2
                        mt-1
                        text-base text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border-aqua-800
                        rounded-lg
                        hover:border-aqua-800
                        focus:shadow-outline
                        hover:bg-aqua-600
                      ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                        <span className="ml-4"> Dashboard</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex flex-shrink-0 p-4 px-4 bg-aqua-600">
                <a href="#" className="flex-shrink-0 block w-full group">
                  <div className="flex items-center">
                    <div>
                      <img className="inline-block rounded-full h-9 w-9" src={userImage} />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">sdi160152@di.uoa.gr</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <h1 className="text-lg text-neutral-600"> Here is where you put your stuff </h1>
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {/* Put your content here */}
                <div className="py-4">
                  <div className="rounded-lg bg-gray-50 h-96" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }