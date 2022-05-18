import * as React from "react";
import Elections from "../../../components/elections/allvotes";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import { FullPage, Slide } from "react-full-page";
import SingleElectionDetails from "../../../components/singleElection";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { userService } from "../../../serverRequest/userService";

class CustomControls extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    getCurrentSlideIndex: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    scrollToSlide: PropTypes.func.isRequired,
    slidesCount: PropTypes.number.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: "full-page-controls",
    style: {
      bottom: 30,
      right: 30,
      paddingTop: "10px",
      position: "fixed",
      transform: "translateX(-50%)",
    },
  };

  render() {
    const { getCurrentSlideIndex, slidesCount, style, className } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <div className={className}>
        <button
          className={`block hover:opacity-90 text-base w-[150px] xl:text-base xl:w-[120px] mt-4 xl:mt-8 mx-2  f-f-r py-4  bg-indigo-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md  fixed bottom-4 left-4 pt-[10px] ${
            currentSlideIndex === 0
              ? `transition opacity-0 ease-in-out duration-800`
              : `transition opacity-100 ease-in-out duration-800`
          }`}
          disabled={currentSlideIndex === 0}
          onClick={this.props.onPrev}
        >
          Previous
        </button>

        <button
          className={`block hover:opacity-90 text-base w-[150px] xl:text-base xl:w-[120px] mt-4 xl:mt-8 mx-2  f-f-r py-4  bg-indigo-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md  fixed bottom-4 right-4 pt-[10px] ${
            currentSlideIndex === slidesCount - 1
              ? `transition opacity-0 ease-in-out duration-800`
              : `transition opacity-100 ease-in-out duration-800`
          }`}
          type="button"
          disabled={currentSlideIndex === slidesCount - 1}
          onClick={this.props.onNext}
        >
          Next
        </button>
      </div>
    );
  }
}

export default function SingleElection() {
  const [governorshipCandidates, setGovernorshipCandidates] = React.useState(
    []
  );
  const [presidentialCandidates, setPresidentialCandidates] = React.useState(
    []
  );
  const [allCandidates, setAllCandidates] = React.useState([]);
  const [dataFetching, setDataFetching] = React.useState(false);

  // GET SLUG FROM URL
  const { slug } = useParams();
  console.log(presidentialCandidates, governorshipCandidates, allCandidates);

  // FETCH DATA
  React.useEffect(() => {
    setDataFetching(true);
    userService
      .getSingleElection(slug)
      .then((res) => {
        console.log(res.data);
        setAllCandidates(res.data.candidates);
        const setGov = res.data.candidates.filter((item) => {
          return Object.values(item.position_name)
            .join("")
            .includes("Governor");
        });
        const setPres = res.data.candidates.filter((item) => {
          return Object.values(item.position_name)
            .join("")
            .includes("President");
        });
        setGovernorshipCandidates(setGov);
        setPresidentialCandidates(setPres);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      <FullPage controls={CustomControls}>
        <Slide className="bg-gray-100 flex justify-center items-center">
          <SingleElectionDetails
            title="presidential"
            candidates={presidentialCandidates}
          />
        </Slide>
        <Slide className="bg-gray-100 flex justify-center items-center">
          <SingleElectionDetails
            title="governorship"
            candidates={governorshipCandidates}
          />
        </Slide>
        <Slide className="bg-green-100 flex justify-center items-center">
          <h1>2</h1>
        </Slide>
      </FullPage>
      {/* <Footer /> */}
    </>
  );
}
