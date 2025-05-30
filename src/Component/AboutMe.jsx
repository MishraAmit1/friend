import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import about1 from "../assets/images/social-media-.jpg"; // Use one of the images

const AboutMe = () => {
  // Ref for GSAP animation
  const leftColumnRef = useRef(null);

  // GSAP animation for left column only
  useGSAP(() => {
    gsap.fromTo(
      leftColumnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
    );
  }, []);

  return (
    <div
      className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 w-full"
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

              {/* Right Column - Single Image */}
              <div className="w-full lg:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={about1}
                  alt="Developer coding a website"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
