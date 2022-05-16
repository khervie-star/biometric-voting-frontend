import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LandingPage from "./pages/landingPage";
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import FAQ from "./pages/faq";
import ElectionPage from './pages/elections';
import PageNotFound from './pages/404';

function App() {
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
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="*" element={<PageNotFound />} />
        {/* <Route  path="/dashboard" component={DashboardWrapper} /> */}
        {/* {
            Auth.getUserDetails() !== undefined &&
              Auth.getUserDetails() !== null &&
              Auth.getToken() !== undefined ? (
              <Route path="/dashboard" component={DashboardWrapper} />
            ) : (
              // <Redirect to="/PageNotFound" />
              <Route Redirect to="/PageNotFound" exact component={PageNotFound} />
            )
          } */}
      </Routes >
    </>
  );
}

export default App;

