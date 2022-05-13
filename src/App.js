import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import FAQ from "./pages/faq";
import ELectionPage from './pages/activeVotes';
import PageNotFound from './pages/404';

function App() {
  return (
    <>
      <Router>
        <Routes >
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/sign-in" element={<Login />} />
          <Route exact path="/sign-up" element={<Register />} />
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
      </Router>
    </>
  );
}

export default App;

