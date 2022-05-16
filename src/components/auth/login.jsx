import * as React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userService } from "../../serverRequest/userService";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please provide a valid email")
      .max(255)
      .required("Email is required"),
    password: yup
      .string()
      .required("Please provide a valid password")
      .min(8, "Password is too short - should be 8 chars minimum."),
  })
  .required();

const Login = () => {
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    return userService
      .login(data)
      .then((response) => {
        // get return url from query parameters or default to '/'
        toast.success("Login Successful");
        // setTimeout(() => {
        //   const returnUrl = router.query.returnUrl || "/";
        //   router.push(returnUrl), 5000;
        // });
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast.error(error.message);
      });
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2500,
    cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    pauseOnHover: true,
  };

  return (
    <>
      <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
        <div className="bg-white shadow-lg rounded-lg min-h-screen w-screen flex">
          {/* <div className="lg:flex lg:flex-wrap g-0"> */}
          <div
            className="lg:w-6/12 lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
            style={{
              background:
                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
            }}
          >
            <div className="text-red px-4 py-6 md:p-12 md:mx-6 w-full">
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                  <h4 className="text-xl font-semibold mb-6">
                    We are more than just a company
                  </h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div>
                  <h3>2</h3>
                  <h4 className="text-xl font-semibold mb-6">
                    We are more than just a company
                  </h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div>
                  <h3>3</h3>
                </div>
              </Slider>
            </div>
          </div>

          <div className="lg:w-6/12 px-4 md:px-0">
            <div className="md:p-12 md:mx-6">
              <div className="flex items-center">
                <svg
                  aria-label="Home"
                  id="logo"
                  enableBackground="new 0 0 300 300"
                  height={44}
                  viewBox="0 0 300 300"
                  width={43}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path
                      fill="#4c51bf"
                      d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                    />
                  </g>
                </svg>
                <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3">
                  Ecclipse
                </h2>
              </div>
              <form>
                <p className="mb-4">Please login to your account</p>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <p>{errors.email?.message}</p>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                    {...register("password")}
                  />
                  <p>{errors.password?.message}</p>
                </div>
                <div className="text-center pt-1 mb-12 pb-1">
                  <button
                    className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                    type="button"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #d3675, #b44593)",
                    }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Log in
                  </button>
                  <a className="text-gray-500" href="#!">
                    Forgot password?
                  </a>
                </div>
                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 mr-2">
                    Don't have an account? <Link to="/sign-up">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Login;
