import * as React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { userService } from "../../../serverRequest/userService";
import { electionData } from "../../../utils/data";

export default function Elections() {
  const [allElections, setAllElections] = React.useState([]);
  const [dataFetching, setDataFetching] = React.useState(false);

  React.useEffect(() => {
    setDataFetching(true);
    userService
      .getActiveElections()
      .then((res) => {
        console.log(res.data);
        setAllElections(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

  return (
    <>
      <div className="bg-gray-100 ">
        {/* Remove py-8 */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center justify-center">
            {/* Card 1 */}
            {allElections?.map((data, index) => (
              <Link to={`${data.slug}`}>
                <div className="mx-2 my-4 w-72 lg:mb-0 mb-8" key={index}>
                  <div className="bg-white">
                    <div className="flex items-center justify-end px-4 pt-4">
                      <div
                        className={`py-1.5 my-0 px-6 rounded-full ${
                          !data.users_can_vote ? "bg-red-200" : "bg-green-200"
                        }`}
                      >
                        <p
                          className={`text-xs  my-0 ${
                            !data.users_can_vote
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {!data.users_can_vote ? "Inactive" : "Active"}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold">{data.name}</h2>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {data.election_date}
                      </p>
                      <div className="flex mt-4">
                        <div>
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            Presidency
                          </p>
                        </div>
                        <div className="ml-2">
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            Governorship
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <h2 className="text-indigo-700 text-xs font-semibold">
                          {data.number_of_votes}{" "}
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
