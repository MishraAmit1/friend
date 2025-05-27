import { useRef } from "react";
import Home from "./Component/Home";
import AboutMe from "./Component/AboutMe.jsx";
import Expertise from "./Component/Expertise.jsx";
import MyProjects from "./Component/MyProjects";
import Projects from "./Component/Projects.jsx";
import Testimonial from "./Component/Testimonial";
import Contactme from "./Component/Contactme";
import Footer from "./Component/Footer";
import "./index.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const expertiseRef = useRef(null);
  const myProjectsRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExpertise = () => {
    expertiseRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMyProjects = () => {
    myProjectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTestimonial = () => {
    testimonialRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div id="main" ref={homeRef}>
        <Home
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToExpertise={scrollToExpertise}
          scrollToMyProjects={scrollToMyProjects}
          scrollToProjects={scrollToProjects}
          scrollToTestimonial={scrollToTestimonial}
          scrollToContact={scrollToContact}
          scrollToFooter={scrollToFooter}
        />
      </div>

      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={expertiseRef}>
        <Expertise />
      </div>
      <div ref={myProjectsRef}>
        <MyProjects />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
      <div ref={contactRef}>
        <Contactme />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

{
  /* <Experience /> */
}

{
  /* <div ref={aboutRef}>
        <Technologies />
      </div> */
}
