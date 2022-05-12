import { DatePicker, Space } from "antd";
import { stateData } from "../../../utils/data";

export default function Step2({ onChange, menu }) {
  return (
    <>
      <p className="mb-4">Just a little bit of contact info</p>
      <div className="relative mb-4">
        <input
          type="number"
          id="number"
          className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="number"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Phone number
        </label>
      </div>
      <div className="grid gap-6 mb-4 lg:grid-cols-2">
        <div className="relative">
          <div className="block rounded-lg px-2.5 py-1.5 w-full text-sm text-gray-900 bg-gray-50 border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer">
            <DatePicker
              bordered={false}
              onChange={onChange}
              style={{ width: "100%" }}
              placeholder="Date of birth"
            />
          </div>

          <label
            htmlFor="first_name"
            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          ></label>
        </div>
        <div className="relative">
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {/* <label
            for="countries"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            Gender
          </label> */}
        </div>
      </div>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
          {/* <label
            for="countries_disabled"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          ></label> */}
          <select
            disabled
            id="countries_disabled"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected>Nigeria</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div>
          {/* <label
            for="states"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          ></label> */}
          <select
            id="states"
            class="text-gray-900 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            {stateData?.map((state, index) => (
              <option value={state.label} key={index}>
                {state.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
