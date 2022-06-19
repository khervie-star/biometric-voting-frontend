import React from "react";
import { Link } from "react-router-dom";

function CTA3() {
  return (
    <>
      <div className>
        <div className="bg-[#eee]">
          <section className="mx-auto container w-full py-36">
            <div className="flex flex-row justify-center items-center">
              <div className="basis-1/4 md:text-5xl text-4xl font-black text-left text-gray-800 dark:text-white leading-snug lg:w-3/4">
                <h2>Conduct elections without risk</h2>
              </div>
              <div className="basis-2/3 md:text-xl">
                <p>
                  Conduct online elections with complete confidence in their
                  reliability. Polys is built by blockchain voting experts. Our
                  first pilot took place in 2016 and since then hundreds of
                  organizations around the world have held elections with our
                  help.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CTA3;
