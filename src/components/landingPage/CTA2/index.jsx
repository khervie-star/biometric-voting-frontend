import React from "react";
function CTA2() {
  return (
    <>
      <div className="md:mx-auto md:container my-10 px-4">
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <h1
                    className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black"
                    data-aos="fade-down"
                  >
                    Interact with your audience in an instant
                  </h1>
                  <p
                    className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8"
                    data-aos="fade-up"
                  >
                    Create a poll and you will immediately be given a url to
                    your poll. Share the url with anyone and gather votes in
                    seconds.
                  </p>
                  <div
                    className="flex items-center cursor-pointer pb-4 md:pb-0"
                    data-aos="fade-up-left"
                  >
                    <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline decoration-[#F7B538] text-[#C32F27]">
                      Lets Get Started
                    </h3>
                    <div className="pl-2 animate__animated animate__shakeY	">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#F7B538"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA2;
