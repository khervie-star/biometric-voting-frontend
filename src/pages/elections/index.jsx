import * as React from "react";
import Elections from "../../components/elections/allvotes";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function ELectionPage() {
  const [activeStatus, setActiveStatus] = React.useState(1);

  return (
    <>
      <Navbar />
      <div>
        <div className="relative py-6 lg:py-8">
          <img
            className="z-0 w-full h-full absolute inset-0 object-cover"
            src="https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_dark.png"
            alt="bg"
          />
          <div className="z-10 relative container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h4 className="text-2xl font-bold leading-tight text-white">
                Elections
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Elections />
      <Footer />
    </>
  );
}
