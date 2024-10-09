import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
