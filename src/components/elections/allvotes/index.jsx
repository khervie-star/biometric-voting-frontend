import * as React from "react";
import { Link } from "react-router-dom";
import { electionData } from "../../../utils/data";

export default function Elections() {
  return (
    <>
      <div className="bg-gray-100 ">
        {/* Remove py-8 */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center justify-center">
            {/* Card 1 */}
            {electionData?.map((data, index) => (
              <Link to={`/${data.id}`}>
                <div className="mx-2 my-4 w-72 lg:mb-0 mb-8" key={index}>
                  <div className="bg-white">
                    <div className="flex items-center justify-end px-4 pt-4">
                      <div
                        className={`py-1.5 my-0 px-6 rounded-full ${
                          !data.active ? "bg-red-200" : "bg-green-200"
                        }`}
                      >
                        <p
                          className={`text-xs  my-0 ${
                            !data.active ? "text-red-500" : "text-green-500"
                          }`}
                        >
                          {!data.active ? "Closed" : "Active"}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold">{data.name}</h2>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">{data.date}</p>
                      <div className="flex mt-4">
                        <div>
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            {data.category}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <h2 className="text-indigo-700 text-xs font-semibold">
                          {data.votes}{" "}
                          <span className="text-xs text-grey-900">votes</span>
                        </h2>
                        <h3 className="text-indigo-700 text-lg font-semibold"></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Card 1 Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
