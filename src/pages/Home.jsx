import Hero from "../components/compro/Hero";
import Navbar from "../components/compro/Navbar";
import Features from "../components/compro/Features";
import Blog from "../components/compro/Blog";
import Footer from "../components/compro/Footer";
import Faq from "../components/compro/Faq";

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
