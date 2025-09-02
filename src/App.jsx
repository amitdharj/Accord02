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
import Instructor from "./Components/AboutPage/Instructor";
import Classes from "./Components/Programs/Classes";
import ProgramSection from "./Components/Programs/Program";
import ContactSection from "./Components/Contact/ContactSection";
import YogaSection from "./Components/Yoga_Dance/Yoga";
import MagazineSection from "./Components/Yoga_Dance/MagazineSection";
import EventCategoryPage from "./Components/CategoryPages/EventCategory";
import ClassCategory from "./Components/CategoryPages/ClassCategory";
import StudentCategory from "./Components/CategoryPages/Students";
import TeachersCategory from "./Components/CategoryPages/Teachers";


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
                <Instructor />
              </>
            }
          />
          <Route
            path="/ProgramSection"
            element={
              <>
                <ProgramSection />
                <Classes />
              </>
            }
          />
          <Route
            path="/ContactSection"
            element={
              <>
                <ContactSection />
              </>
            }
          />
          <Route
            path="/YogaSection"
            element={
              <>
                <YogaSection />
                <MagazineSection />
              </>
            }
          />
          
          <Route path="/Category" element={<EventCategoryPage />}/>
          <Route path="/ClassCategory" element={<ClassCategory />}/>
          <Route path="/TeachersCategory" element={<TeachersCategory/>}/>
          <Route path="/StudentCategory" element={<StudentCategory />}/>

        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
