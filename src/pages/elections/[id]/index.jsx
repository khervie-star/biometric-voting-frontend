import * as React from "react";
import Elections from "../../../components/elections/allvotes";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import { FullPage, Slide } from "react-full-page";
import SingleElectionDetails from "../../../components/singleElection";

const slides = [
  {
    color: "#2ECC40",
    content: 1,
  },
  {
    color: "#0074D9",
    content: 2,
  },
  {
    color: "#00c4ff",
    content: 3,
  },
  {
    color: "#d52685",
    content: 4,
  },
];

const controlsProps = {
  style: {
    left: "50%",
    paddingTop: "10px",
    position: "fixed",
    transform: "translateX(-50%)",
  },
};

export default function SingleElection() {
  const [visibleSlides, setVisibleSlides] = React.useState(slides);
  return (
    <>
      <Navbar />
      <FullPage controls controlsProps={controlsProps}>
        {visibleSlides.map(({ color, content }) => (
          <Slide
            key={content}
            style={{
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "30vh",
            }}
          >
            <SingleElectionDetails />
          </Slide>
        ))}
      </FullPage>
      {/* <Footer /> */}
    </>
  );
}
