import React from "react";
import Login from "../../components/auth/login";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login to new account</title>
        <meta name="description" content="Generated by create react app" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Login />
    </div>
  );
};

export default LandingPage;
