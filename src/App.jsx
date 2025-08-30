import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import HomeAbout from "./Components/Home/HomeAbout";
import TestimonialSection from "./Components/Home/TestimonialSection";
import EventsSection from "./Components/Home/EventsSection";
import KidsLanding from "./Components/Home/KidsLanding";
import AboutSection from "./Components/AboutPage/AboutSection";
import AboutUsSection from "./Components/AboutPage/AboutUsSection";
import OurValueSection from "./Components/AboutPage/OurValueSection";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <HomeAbout />
                <TestimonialSection />
                <EventsSection />
                <KidsLanding />
              </>
            }
          />
          <Route
            path="/AboutSection"
            element={
              <>
                <AboutSection />
                <AboutUsSection />
                <OurValueSection />
              </>
            }
          />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
