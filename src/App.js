import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import LandingPage from "./pages/landingPage";
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import FAQ from "./pages/faq";
import ElectionPage from './pages/elections';
import SingleElection from "./pages/elections/[id]";
import PageNotFound from './pages/404';
import Auth from "./helper/Auth";

function App() {

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    <>
      <ToastContainer
        transition={Bounce}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontFamily: 'Patrick Hand, cursive' }}

      />
      <Routes >
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/elections" element={<ElectionPage />} />
        <Route exact path="/elections/:slug" element={<SingleElection />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="*" element={<PageNotFound />} />
        {/* <Route  path="/dashboard" component={DashboardWrapper} /> */}
        {
          Auth.getUserDetails() !== undefined &&
            Auth.getUserDetails() !== null &&
            Auth.getToken() !== undefined ? (
            <Route path="/elections" element={<ElectionPage />} />
          ) : (
            // <Redirect to="/PageNotFound" />
            <Route Redirect to="/PageNotFound" exact component={PageNotFound} />
          )
        }
      </Routes >
    </>
  );
}

export default App;

