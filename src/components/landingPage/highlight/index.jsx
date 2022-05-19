import React from "react";

const Highlight = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-10">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 ">
        <div className=" p-6 bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
            Secure
          </p>
          <p className=" font-normal text-base leading-6 text-gray-600 my-4">
            Our online election is equipped their software with state-of-the-art
            security. Common features include single-vote verification, which
            ensures members don’t inadvertently vote more than once;
          </p>
          <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
            Learn More
          </a>
        </div>

        <div className=" p-6 bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
            Accurate
          </p>
          <p className=" font-normal text-base leading-6 text-gray-600 my-4">
            Online voting boasts security systems that ensure every vote is
            counted in real time. Every step is accounted for and the
            organization can receive exact results instantaneously.
          </p>
          <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
            Learn More
          </a>
        </div>

        <div className=" p-6 bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
            Reduced Costs
          </p>
          <p className=" font-normal text-base leading-6 text-gray-600 my-4">
            It saves you the price of printing and mailing thousands of ballots
            and eliminate the costs of renting a polling location and the
            printing of all materials used.
          </p>
          <a className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
