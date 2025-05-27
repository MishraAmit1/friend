import { useState, useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import about1 from "../assets/images/about-1.jpg";
import about2 from "../assets/images/about-2.jpg";
const AboutMe = () => {
  // State for counter animation
  const [happyClients, setHappyClients] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);

  // Refs for GSAP animation
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  // GSAP animation
  useGSAP(() => {
    gsap.fromTo(
      leftColumnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
    );
    gsap.fromTo(
      rightColumnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  // Counter animation effect
  useEffect(() => {
    const animateCounter = (setCounter, target, duration) => {
      let start = 0;
      const increment = target / (duration / 16); // 60 FPS
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounter(target);
          clearInterval(timer);
        } else {
          setCounter(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    };

    animateCounter(setHappyClients, 1234, 2000);
    animateCounter(setProjectsCompleted, 1234, 2000);
  }, []);

  return (
    <div
      className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 w-full"
      // id="education"
      id="technologies"
    >
      <div className="container mx-auto py-6 sm:py-8">
        <h4 className="text-gray-400 uppercase text-xs sm:text-sm md:text-base">
          My Journey,
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28 text-left font-[amspiro2] tracking-wider font-extrabold">
          Crafting Digital Experiences
        </h1>
        <section id="about" className="py-6 sm:py-12 lg:py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Left Column */}
              <div ref={leftColumnRef} className="w-full lg:w-1/2">
                <div className="flex items-center mb-6 sm:mb-8 md:-ml-2 -ml-5">
                  <div className="flex-shrink-0 text-center mr-4 text-white p-4 rounded-lg">
                    <h1 className="text-9xl sm:text-6xl md:text-7xl lg:text-[8rem] font-bold mb-0 text-center md:ml-0 -ml-3">
                      15
                    </h1>
                    <h5 className="mb-0 tracking-[1.5rem] sm:tracking-[1rem] md:tracking-[1.5rem] lg:tracking-[1.8rem] text-center md:ml-6 ml-2 mt-2">
                      Years
                    </h5>
                  </div>
                  <h3 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed text-white md:-ml-7 -ml-3">
                    of working experience as a web designer & developer
                  </h3>
                </div>
                <p className="mb-4 text-sm sm:text-base text-gray-300">
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  No stet est diam rebum amet diam ipsum. Clita clita labore,
                  dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                </p>
                <p className="mb-3 flex items-center text-sm sm:text-base text-gray-300">
                  <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />{" "}
                  Affordable Prices
                </p>
                <p className="mb-3 flex items-center text-sm sm:text-base text-gray-300">
                  <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />{" "}
                  High Quality Product
                </p>
                <p className="mb-3 flex items-center text-sm sm:text-base text-gray-300">
                  <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />{" "}
                  On Time Project Delivery
                </p>
                <button
                  className="inline-block bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 mt-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition"
                  onClick={() => alert("Read More clicked!")}
                >
                  Read More
                </button>
              </div>

              {/* Right Column */}
              <div ref={rightColumnRef} className="w-full lg:w-1/2">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                  <div>
                    <img
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg"
                      src={about2}
                      alt="Team working on a web design project"
                    />
                  </div>
                  <div>
                    <img
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg"
                      src={about1}
                      alt="Developer coding a website"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                  <h5 className="sm:border-r sm:pr-3 sm:mr-3 text-gray-300 font-medium text-sm sm:text-base mb-2 sm:mb-0">
                    Happy Clients
                  </h5>
                  <h2 className="text-blue-600 font-bold text-2xl sm:text-3xl">
                    {happyClients}
                  </h2>
                </div>
                <p className="mb-4 text-sm sm:text-base text-gray-300">
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  No stet est diam amet diam ipsum clita labore dolor duo clita.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center mb-3">
                  <h5 className="sm:border-r sm:pr-3 sm:mr-3 text-gray-300 font-medium text-sm sm:text-base mb-2 sm:mb-0">
                    Projects Completed
                  </h5>
                  <h2 className="text-blue-600 font-bold text-2xl sm:text-3xl">
                    {projectsCompleted}
                  </h2>
                </div>
                <p className="mb-0 text-sm sm:text-base text-gray-300">
                  Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
                  No stet est diam amet diam ipsum clita labore dolor duo clita.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
