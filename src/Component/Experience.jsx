const Experience = () => {
  return (
    <div className="bg-black text-white px-10 md:px-32 w-full" id="education">
      <div className="container mx-auto py-8">
        <h4 className="text-gray-400 uppercase">My,</h4>
        <h1 className="md:text-5xl text-2xl mb-12 md:mb-28 text-left font-[amspiro2] tracking-wider font-extrabold">
          Education ＆ Experience.
        </h1>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#1595B6] shadow-glow"></div>
          {/* Timeline Item 1 */}
          <div className="mb-20 flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex justify-end pr-0 md:pr-8 relative">
              <div className="bg-[#1B1535] p-6 rounded-lg shadow-lg w-full md:w-[60%] md:mr-12">
                <h3 className="text-left font-extrabold">12th (Sceince)</h3>

                <p className="text-sm">Modern English High School ,</p>
                <p className="text-sm">
                  <span className="font-medium">Board</span>: GSEB
                </p>
                <p className="text-sm">Percentage: 85%</p>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border-t-4 w-0 md:w-20 border-[#1595B6] shadow-glow"></div>
            </div>

            {/* Center Point */}
            <div className="relative">
              <p className="absolute top-2 md:-top-3 left-14 text-sm whitespace-nowrap">
                Jun 2019 - Apr 2020
              </p>
              <div className="w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow"></div>
            </div>
            {/* Right Empty Space */}
            <div className="w-full md:w-1/2 "></div>
          </div>
          {/* Timeline Item 2 */}
          <div className="mb-20 flex flex-col md:flex-row items-center">
            {/* Left Empty Space */}
            <div className="w-full md:w-1/2"></div>

            {/* Center Point */}
            <div className="relative">
              <p className="absolute top-40 md:-top-3 md:-left-44 left-14 text-sm whitespace-nowrap">
                Aug 2020- Mar 2023
              </p>

              <div className="w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow z-50"></div>
            </div>
            {/* Right Content */}
            <div className="w-full md:w-1/2 flex justify-start relative pl-0 md:pl-8">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 border-t-4 w-0 md:w-20 border-[#1595B6] shadow-glow"></div>
              <div className="bg-[#1B1535] p-6 rounded-lg shadow-lg w-full md:w-[60%] md:ml-12">
                <h4 className="text-left font-extrabold  whitespace-normal tracking-wider">
                  Bachelor of Computer Application (BCA)
                </h4>
                <p className="text-sm">
                  Veer Narmad South Gujarat University, (VNSGU)
                </p>
                <p className="text-sm">
                  <span className="font-medium">CGPA</span>: 7.67
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="md:hidden w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow z-50"></div>
            </div>
          </div>
          {/* Timeline Item 3 */}
          <div className="mb-20 flex flex-col md:flex-row items-center">
            <div className="relative">
              <div className="md:hidden w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow z-50"></div>
            </div>
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex justify-end pr-0 md:pr-8 relative">
              <div className="bg-[#1B1535] p-6 rounded-lg shadow-lg w-full md:w-[60%] md:mr-12">
                <h4 className="text-left font-extrabold  whitespace-normal tracking-wider">
                  Web Developer Intern
                </h4>
                <p className="text-sm">Cloud9SofTech, Vapi, Gujarat</p>
                <h4 className="font-semibold mt-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>
                    Enhanced site performance by developing backend features in
                    PHP.
                  </li>
                  <li>
                    Integrated dynamic content by collaborating with frontend
                    developers.
                  </li>
                  <li>
                    Optimized MySQL queries for faster data access and
                    management.
                  </li>
                </ul>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border-t-4 w-0 md:w-20 border-[#1595B6] shadow-glow"></div>
            </div>

            {/* Center Point */}
            <div className="relative">
              <p className="absolute top-2 md:-top-3 left-14 text-sm whitespace-nowrap">
                May 2023 - Jul 2023
              </p>
              <div className="w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow"></div>
            </div>
            {/* Right Empty Space */}
            <div className="w-full md:w-1/2 "></div>
          </div>
          {/* Timeline Item 4 */}
          <div className="mb-20 flex flex-col md:flex-row items-center">
            {/* Left Empty Space */}
            <div className="w-full md:w-1/2"></div>
            {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border-t-4 w-0 md:w-20 border-[#1595B6] shadow-glow"></div> */}
            {/* Center Point */}
            <div className="relative">
              <p className="absolute top-40 md:-top-3 md:-left-44 left-14 text-sm whitespace-nowrap">
                Aug 2023 - Apr 2025
              </p>

              <div className="w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow  z-50"></div>
            </div>
            {/* Right Content */}
            <div className="w-full md:w-1/2 flex justify-start relative pl-0 md:pl-8">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 border-t-4 w-0 md:w-20 border-[#1595B6] shadow-glow"></div>
              <div className="bg-[#1B1535] p-6 rounded-lg shadow-lg w-full md:w-[60%] md:ml-12">
                <h4 className="text-left font-extrabold  whitespace-normal tracking-wider">
                  Master of Computer Application (MCA)
                </h4>
                <p className="text-sm">Sardar Patel University, (SPU)</p>
                <p className="text-sm">(Pursuing)</p>
                <p className="text-sm">
                  <span className="font-medium">CGPA</span>: 6.67
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="md:hidden w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow z-50"></div>
            </div>
          </div>
          {/* Timeline Item 5 */}
          <div className="mb-20 flex flex-col md:flex-row items-center">
            <div className="relative">
              <div className="md:hidden w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow z-50"></div>
            </div>
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex justify-end pr-0 md:pr-8 relative">
              <div className="bg-[#1B1535] p-6 rounded-lg shadow-lg w-full md:w-[60%] md:mr-12">
                <h4 className="text-left font-extrabold whitespace-normal tracking-wider">
                  MERN Stack Intern (Pursuing)
                </h4>
                <p className="text-sm">Script India, Balitha Vapi, Gujarat</p>
                <h4 className="font-semibold mt-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 text-sm">
                  <li>Developed web apps using the MERN stack.</li>
                  <li>
                    Collaborated with team members for feature implementation.
                  </li>
                  <li>Optimized app performance and resolved bugs.</li>
                </ul>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 border-t-4 w-0 md:w-20 border-[#1595B6] shadow-glow"></div>
            </div>

            {/* Center Point */}
            <div className="relative">
              <p className="absolute top-2 md:-top-3 left-14 text-sm whitespace-nowrap">
                Jan 2025 - Apr 2025
              </p>
              <div className="md:block hidden w-6 h-6 bg-[#1B1535] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#1595B6] shadow-glow"></div>
            </div>
            {/* Right Empty Space */}
            <div className="w-full md:w-1/2 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
