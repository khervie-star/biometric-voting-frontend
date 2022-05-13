import * as React from "react";
import {
  Steps,
  Button,
  message,
  DatePicker,
  Space,
  Dropdown,
  Menu,
} from "antd";
import { Step1, Step2, Step3, Step4 } from "../steppers";

const { Step } = Steps;

const Register = () => {
  const [current, setCurrent] = React.useState(0);
  const [steps, setSteps] = React.useState(3);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div className="grid justify-center items-center text-center content-center h-full  gradient-form bg-[#5A4Ad1] md:h-screen">
      <div className=" bg-white shadow-lg rounded-lg w-[500px] h-[500px] overflow-hidden relative  px-6 py-2.5">
        <div className="text-center">
          <img
            className="mx-auto w-40"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo"
          />
          <h4 className="text-2xl font-semibold mt-0 mb-6 pb-1">
            Create your account
          </h4>
        </div>
        <div className="w-full mx-auto text-center my-4">
          <Steps current={current}>
            <Step />
            <Step />
            <Step />
          </Steps>
        </div>

        <div className="steps-content">
          <form className="my-4">
            {current === 0 && <Step1 />}
            {current === 1 && <Step2 onChange={onChange} />}
            {current === 2 && <Step3 onChange={onChange} />}
          </form>
        </div>
        <div className="steps-action">
          {current > 0 && (
            <button
              className="mx-2 text-[#5A4Ad1] border border-[#5A4Ad1] w-[150px] rounded-md px-4 py-2 text-md font-semibold"
              onClick={() => prev()}
            >
              Back
            </button>
          )}
          {current < steps - 1 && (
            <button
              className="bg-[#5A4Ad1] px-4 py-2 rounded-md text-white text-md font-semibold w-[150px] border-0"
              type="primary"
              onClick={() => next()}
            >
              Next
            </button>
          )}
          {current === steps - 1 && (
            <button
              className="bg-[#5A4Ad1] px-4 py-2 rounded-md text-white text-md font-semibold w-[150px] border-0"
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Save details
            </button>
          )}
        </div>
        {/* <div className="text-center pt-1 mb-12 pb-1">
          <button
            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            style={{
              background:
                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593 )",
            }}
          >
            Log in
          </button>
        </div>
        <div className="flex items-center justify-between pb-6 absolute bottom-[0] left-[20px] text-xs">
          <p className="mb-0 mr-2">Have an account?</p>
          <button
            type="button"
            className="inline-block text-red-600 font-semibold text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Login
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
