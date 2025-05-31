import { useRef, useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import about1 from "../assets/images/social-media-.jpg"; // Use one of the images

const AboutMe = () => {
  // Ref for GSAP animation
  const leftColumnRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // GSAP animation for left column only
  useGSAP(() => {
    gsap.fromTo(
      leftColumnRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 }
    );
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <section id="about" className="py-6 sm:py-12 lg:py-16 bg-black -mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Left Column */}
              <div ref={leftColumnRef} className="w-full lg:w-1/2">
                <div className="flex items-center mb-6 sm:mb-8 md:-ml-2 -ml-5">
                  <div className="flex-shrink-0 text-center mr-4 text-white p-4 rounded-lg">
                    <h1 className="text-9xl sm:text-6xl md:text-7xl lg:text-[8rem] font-bold mb-0 text-center md:ml-0 -ml-3">
                      1.5
                    </h1>
                    <h5 className="mb-0 tracking-[1.5rem] sm:tracking-[1rem] md:tracking-[1.5rem] lg:tracking-[1.8rem] text-center md:ml-6 ml-2 mt-2">
                      Years
                    </h5>
                  </div>
                  <h3 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed text-white md:-ml-7 -ml-3">
                    of hands-on experience as a Digital Marketer
                  </h3>
                </div>
                <p className="mb-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                  Hi, I'm Divya Bhanushali — a passionate and performance-driven
                  Digital Marketer. From crafting engaging content to running
                  ROI-focused campaigns, I've been on a mission to turn digital
                  ideas into measurable results.
                </p>
                <p className="mb-3 flex items-center text-sm sm:text-base text-gray-300">
                  <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />{" "}
                  ROI-Focused Campaigns
                </p>
                <p className="mb-3 flex items-center text-sm sm:text-base text-gray-300">
                  <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />{" "}
                  Cross-Platform Strategies
                </p>
                <p className="mb-3 flex items-center text-sm sm:text-base text-gray-300">
                  <FaCheckCircle className="text-blue-600 mr-3 flex-shrink-0" />{" "}
                  Engagement-Driven Results
                </p>
                <button
                  className="inline-block bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 mt-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                  onClick={openModal}
                >
                  Read More
                </button>
              </div>

              {/* Right Column - Single Image */}
              <div className="w-full lg:w-1/2">
                <img
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  src={about1}
                  alt="Digital Marketing Professional"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Modal - Fixed Responsive Design */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition duration-300"
              >
                <FaTimes />
              </button>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Left side - Image - Fixed Responsive Issues */}
                  <div className="w-full lg:w-2/5 xl:w-1/3">
                    <div className="relative">
                      <img
                        src={about1}
                        alt="Divya Bhanushali - Digital Marketer"
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg shadow-lg"
                      />
                      {/* Optional: Add a gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="w-full lg:w-3/5 xl:w-2/3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-[amspiro2]">
                      About Me
                    </h2>

                    <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                      <p>
                        Hi, I'm{" "}
                        <span className="text-blue-400 font-semibold">
                          Divya Bhanushali
                        </span>{" "}
                        — a passionate and performance-driven Digital Marketer
                        with 1.5 years of hands-on experience in helping brands
                        grow online. From crafting engaging content to running
                        ROI-focused campaigns, I've been on a mission to turn
                        digital ideas into measurable results.
                      </p>

                      <p>
                        My journey began with a curiosity to understand how
                        people interact with brands online. Over time, that
                        curiosity transformed into a deep understanding of how
                        marketing channels work — from SEO, social media
                        marketing, paid ads, email marketing to brand
                        storytelling.
                      </p>

                      <p>
                        I've had the opportunity to work with multiple
                        businesses, manage cross-platform strategies, lead
                        teams, and build engagement-driven campaigns. Whether
                        it's boosting visibility or generating leads, my goal is
                        always the same: to deliver value, creatively and
                        strategically.
                      </p>
                    </div>

                    {/* Skills/Services - Improved Mobile Layout */}
                    <div className="mt-6 sm:mt-8">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                        My Expertise
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <FaCheckCircle className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0 text-sm" />
                          SEO & Content Marketing
                        </div>
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <FaCheckCircle className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0 text-sm" />
                          Social Media Marketing
                        </div>
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <FaCheckCircle className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0 text-sm" />
                          Paid Advertising (PPC)
                        </div>
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <FaCheckCircle className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0 text-sm" />
                          Email Marketing
                        </div>
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <FaCheckCircle className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0 text-sm" />
                          Brand Storytelling
                        </div>
                        <div className="flex items-center text-gray-300 text-sm sm:text-base">
                          <FaCheckCircle className="text-blue-600 mr-2 sm:mr-3 flex-shrink-0 text-sm" />
                          Campaign Management
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
