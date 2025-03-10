import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import Career from "./Components/Home/Career";
// import Portfolio from "./Components/Home/Portfolio";
// import TicTac from "./Components/TicTac";
// import Radioo from "./Components/Radioo";
// import Photo from "./Components/Photo";
// import Event from "./Components/Event";
import Contact from "./Components/Home/Contact";
import Service from "./Components/Home/Service";
import Footer from "./Components/Footer/Footer";
import TopBar from "./Components/Navbar/Topbar";
// import Medical from "./Components/Medical";
import DigitalMarketing from "./Components/Service/DigitalMarketing";
import UiUx from "./Components/Service/UiUx";
import Game from "./Components/Service/Game";
import WebMain from "./Components/Service/WebMain";
import MobileApp from "./Components/Service/MobileApp";
// import NextStep from "./Components/Portfolio/NextStep";
// import Education from "./Components/Portfolio/Education";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/career" element={<Career />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/tictac" element={<TicTac />} /> */}
        {/* <Route path="/radioo" element={<Radioo />} /> */}
        {/* <Route path="/Photo" element={<Photo />} /> */}
        {/* <Route path="/Event" element={<Event />} /> */}
        {/* <Route path="/Medical" element={<Medical />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ui-ux" element={<UiUx />} />
        <Route path="/services/Game" element={<Game />} />
        <Route path="/services/WebMain" element={<WebMain />} />
        <Route path="/services/MobileApp" element={<MobileApp />} />
        {/* <Route path="/NextStep" element={<NextStep />} /> */}
        {/* <Route path="/Education" element={<Education />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
