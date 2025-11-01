import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Expertise = () => {
  // State for tab switching
  const [activeTab, setActiveTab] = useState("tab-1");

  // Refs for GSAP animations
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const progressBarsRef = useRef([]);

  // GSAP animations
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
    progressBarsRef.current.forEach((bar, index) => {
      gsap.fromTo(
        bar,
        { width: 0 },
        {
          width: bar.dataset.value + "%",
          duration: 1.5,
          ease: "power2.out",
          delay: 0.2 * index + 0.5,
        }
      );
    });
  }, []);

  // Skills data
  const skills = [
    { name: "Social Media Marketing (SMM)", value: 90, color: "bg-blue-600" },
    { name: "Performance Marketing", value: 83, color: "bg-yellow-400" },
    { name: "SEO & Content Marketing", value: 85, color: "bg-red-600" },
    { name: "Email Marketing", value: 85, color: "bg-red-600" },
    { name: "Branding & Strategy ", value: 95, color: "bg-gray-600" },
    { name: "Analytics & Reporting", value: 90, color: "bg-teal-500" },
    { name: "Team Leadership", value: 90, color: "bg-pink-500" },
  ];

  // Experience and Education data
  const experience = [
    {
      title: "Digital Marketer & Team Lead",
      period: "April 2023 – Present",
      company: "Softyoug Digital Marketing Agency, Vapi",
      achievements: [
        "Spearheading digital marketing strategies for multiple clients across industries.",
        "Managing social media accounts, running ad campaigns, and optimizing for better ROI.",
        "Leading a team of Designers and interns, overseeing day-to-day digital activities.",
        "Working directly with clients to understand goals and deliver targeted marketing solutions.",
        "Created content calendars, ad creatives, and growth strategies that resulted in improved traffic, engagement, and lead generation.",
      ],
    },
    {
      title: "Founder | Digital Marketing Educator",
      period: "2025 – Present",
      company: "Soch Digital",
      achievements: [
        "Building a learning platform for digital marketing beginners and small business owners.",
        "Sharing tips, tutorials, and simplified marketing knowledge through Instagram & social media.",
        "Helping businesses understand the power of digital and implement effective strategies.",
      ],
    },
  ];

  const education = [
    {
      title: "Master of Business Administration (MBA) – Digital Marketing",
      period: "2024 - 2025",
      institute: "MIT School of Distance Education (MITSDE) — Pune, India",
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      period: "2021 - 2023",
      institute: "VNSGU University, Gujarat",
    },
  ];

  return (
    <div
      className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 w-full"
      id="education"
    >
      <div className="container mx-auto py-6 sm:py-8">
        <h4 className="text-gray-400 uppercase text-xs sm:text-sm md:text-base">
          My Journey,
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28 text-left font-[amspiro2] tracking-wider font-extrabold">
          Crafting Digital Experiences
        </h1>
        <section id="skill" className="py-6 sm:py-12 lg:py-16 bg-black -mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Left Column: Skills */}
              <div ref={leftColumnRef} className="w-full lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-white">
                  Skills & Experience
                </h1>
                <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-white">
                  My Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <h6 className="font-bold text-sm sm:text-base text-white">
                          {skill.name}
                        </h6>
                        <h6 className="font-bold text-sm sm:text-base text-white">
                          {skill.value}%
                        </h6>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${skill.color}`}
                          style={{ width: "0%" }}
                          data-value={skill.value}
                          ref={(el) => (progressBarsRef.current[index] = el)}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Experience & Education */}
              <div ref={rightColumnRef} className="w-full lg:w-1/2">
                <ul className="flex border-2 border-blue-600 rounded-lg mb-5">
                  <li className="w-1/2">
                    <button
                      className={`w-full py-3 text-sm sm:text-base font-medium ${
                        activeTab === "tab-1"
                          ? "bg-blue-600 text-white"
                          : "bg-transparent text-gray-300"
                      } rounded-l-lg transition-colors`}
                      onClick={() => setActiveTab("tab-1")}
                    >
                      Experience
                    </button>
                  </li>
                  <li className="w-1/2">
                    <button
                      className={`w-full py-3 text-sm sm:text-base font-medium ${
                        activeTab === "tab-2"
                          ? "bg-blue-600 text-white"
                          : "bg-transparent text-gray-300"
                      } rounded-r-lg transition-colors`}
                      onClick={() => setActiveTab("tab-2")}
                    >
                      Education
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className={`tab-pane ${
                      activeTab === "tab-1" ? "block" : "hidden"
                    }`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {experience.map((exp, index) => (
                        <div key={index} className="mb-6">
                          <h5 className="text-base sm:text-lg font-medium text-white">
                            {exp.title}
                          </h5>
                          <hr className="border-blue-600 my-2" />
                          <p className="text-blue-600 text-sm mb-1">
                            {exp.period}
                          </p>
                          <h6 className="text-sm sm:text-base text-gray-300 mb-2">
                            {exp.company}
                          </h6>
                          <ul className="list-disc pl-5 text-sm text-gray-300">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${
                      activeTab === "tab-2" ? "block" : "hidden"
                    }`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {education.map((edu, index) => (
                        <div key={index}>
                          <h5 className="text-base sm:text-lg font-medium text-white">
                            {edu.title}
                          </h5>
                          <hr className="border-blue-600 my-2" />
                          <p className="text-blue-600 text-sm mb-1">
                            {edu.period}
                          </p>
                          <h6 className="text-sm sm:text-base text-gray-300 mb-0">
                            {edu.institute}
                          </h6>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Expertise;
