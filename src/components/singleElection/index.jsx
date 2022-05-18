import React from "react";

const SingleElectionDetails = ({ title, candidates }) => {
  console.log(title, candidates);
  return (
    <div className="pb-16 w-screen h-screen mt-[8rem] md:mt-[8rem]">
      <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
        <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-0 px-4 md:px-6 2xl:px-0">
          <div>
            <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">
              Presidential Candidates
            </p>
          </div>
          <div>
            <p className="text-base leading-normal sm:leading-none text-center text-gray-600">
              Explore products that are bought most frequently by people
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-x-6 gap-y-5">
          {candidates?.map((candidate, index) => (
            <div
              className="flex flex-col justify-center items-start p-2 bg-white"
              key={index}
            >
              <div className="relative">
                <img
                  className="hidden lg:block"
                  src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png"
                  alt="watch"
                />
                <img
                  className="lg:hidden"
                  src="https://i.ibb.co/h1Vc29G/Rectangle-37.png"
                  alt="watch"
                />

                <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center content-center bg-white rounded-full">
                  <p className="text-lg leading-none text-right text-gray-600 font-extrabold m-0 ">
                    {candidate.party_name}
                  </p>
                </button>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-lg font-medium leading-none text-gray-800">
                      {candidate.first_name +
                        " " +
                        candidate.middle_name +
                        " " +
                        candidate.last_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-md  leading-none text-right text-gray-600 font-bold">
                      {candidate.gender}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleElectionDetails;
