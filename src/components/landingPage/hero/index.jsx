import React from "react";
import heroVector from "../../../assets/img/vecteezy_people-vote-us-election_.jpg";

function Hero() {
  return (
    <>
      <div className="relative w-full h-[90vh] pb-10 bg-gradient-to-r from-[#ff00cc] via-purple-500 to-[#333399]">
        <div className="relative px-10 py-10 container mx-auto md:flex items-center gap-8">
          <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
            <h1
              className="text-3xl md:text-3xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-white/80 font-light f-f-l"
              data-aos="fade-up"
            >
              Electronic
              <br />
              <span className="font-extrabold f-f-l">Voting</span>
            </h1>
            <div className="w-[200px] h-[1px] bg-white/70" />
            <div
              className="f-f-r text-[#fafafa] text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6 font-normal"
              data-aos="fade-up"
            >
              <h2>
                Aute duis amet reprehenderit est aliqua consequat incididunt
                deserunt et labore sunt irure Lorem. Pariatur proident velit
                proident irure aute pariatur sunt voluptate. Id cillum laboris
                id velit ut adipisicing amet do. Occaecat deserunt do quis
                dolore qui ut tempor duis culpa duis ea id quis nulla.
              </h2>
            </div>
            <div className="lg:flex">
              <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                Get started
              </button>
            </div>
          </div>
          <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
            <div>
              <img src={heroVector} width="100%" height="100%" />
            </div>
          </div>

          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
            Get started
          </button>
        </div>
        {/* <div class="custom-shape-divider-bottom-1653301240">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div> */}
      </div>

      <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
    </>
  );
}

export default Hero;
