import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Document from "./components/document/Document";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

{
  /* <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/" element={<About />}>
          <Route path="portfolio" element={<Portfolio />}>
            <Route path="portfoliodetail" element={<PortfolioDetail />} />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
            <Route path="footer" element={<Footer />} />
          </Route>
        </Route>
      </Routes> */
}
