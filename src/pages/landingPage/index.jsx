import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Helmet } from "react-helmet";
import Hero from "../../components/landingPage/hero";
import CTA1 from "../../components/landingPage/CTA1";
import Highlight from "../../components/landingPage/highlight";
import CTA2 from "../../components/landingPage/CTA2";

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page of Voting Site</title>
        <meta name="description" content="Generated by create react app" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      <Hero />
      <CTA2 />
      <CTA1 />
      <Highlight />
      <Footer />
    </div>
  );
};

export default LandingPage;
