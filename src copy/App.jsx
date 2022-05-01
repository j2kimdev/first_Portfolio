import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Document from "./components/document/Document";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioDetail from "./components/portfoliodetail/PortfolioDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Nav />}>
            <Route path="/portfoliodetail" element={<PortfolioDetail />} />
            {/* <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />          
          <Route path="contact" element={<Contact />} />
          <Route path="footer" element={<Footer />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
