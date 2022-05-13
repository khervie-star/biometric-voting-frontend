import * as React from "react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ELectionPage() {
  const [activeStatus, setActiveStatus] = React.useState(1);

  return (
    <>
      <div>
        <div className="relative py-6 lg:py-8">
          <img className="z-0 w-full h-full absolute inset-0 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_dark.png" alt="bg" />
          <div className="z-10 relative container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-white">Dashboard</h4>
              <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-300 text-sm mt-3">
                <li className="flex items-center mr-4">
                  <div className="mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paperclip" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                    </svg>
                  </div>
                  <span className="mr-3">Remote</span>
                </li>
                <li className="flex items-center mr-4 mt-4 md:mt-0">
                  <div className="mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trending-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="3 17 9 11 13 15 21 7" />
                      <polyline points="14 7 21 7 21 14" />
                    </svg>
                  </div>
                  <span className="mr-3"> Trending</span>
                </li>
                <li className="flex items-center mt-4 md:mt-0">
                  <div className="mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plane-departure" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z" transform="rotate(-15 12 12) translate(0 -1)" />
                      <line x1={3} y1={21} x2={21} y2={21} />
                    </svg>
                  </div>
                  <span>Started on 29 Jan 2020</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="mr-3 bg-white focus:outline-none transition duration-150 ease-in-out rounded text-indigo-600 hover:bg-gray-300 px-5 py-2 text-sm">Back</button>
              <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button>
            </div>
          </div>
        </div>
        ;
      </div>

      {/* ACTUVE TAB FILTER */}
      <div>
        <div className="sm:hidden relative w-11/12 mx-auto bg-white rounded">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
          <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
            <option className="text-sm text-gray-600">inactive </option>
            <option className="text-sm text-gray-600">inactive </option>
            <option selected className="text-sm text-gray-600">
              Active
            </option>
            <option className="text-sm text-gray-600">inactive </option>
            <option className="text-sm text-gray-600">inactive </option>
          </select>
        </div>
        <div className="justify-between flex-wrap hidden sm:block bg-white shadow rounded">
          <div className="xl:w-full xl:mx-0 -b pl-5 pr-5 h-12">
            <ul className="flex items-center h-full">
              <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "text-sm text-indigo-700 py-2 px-4 bg-gray-200 rounded mr-8 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal hover:text-indigo-700 cursor-pointer"}>
                {activeStatus == 1 ? "Active" : "Inactive"}
              </li>
              <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "text-sm text-indigo-700 py-2 px-4 bg-gray-200 rounded mr-8 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal hover:text-indigo-700 cursor-pointer"}>
                {activeStatus == 2 ? "Active" : "Inactive"}
              </li>
              <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "text-sm text-indigo-700 py-2 px-4 bg-gray-200 rounded mr-8 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal hover:text-indigo-700 cursor-pointer"}>
                {activeStatus == 3 ? "Active" : "Inactive"}
              </li>
              <li onClick={() => setActiveStatus(4)} className={activeStatus == 4 ? "text-sm text-indigo-700 py-2 px-4 bg-gray-200 rounded mr-8 font-normal" : "text-sm text-gray-600 py-3 mr-10 font-normal hover:text-indigo-700 cursor-pointer"}>
                {activeStatus == 4 ? "Active" : "Inactive"}
              </li>
            </ul>
          </div>
        </div>
      </div>


    </>
  );
}
