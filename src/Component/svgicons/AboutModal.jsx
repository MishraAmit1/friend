import React, { memo } from "react";
import TechStack from "./TechStack";
import image from "../../assets/images/1-removebg.png";
import { CloseIcon } from "./SocialIcons";

const AboutContent = memo(({ technologies }) => (
  <div>
    <h2 className="text-xl md:text-3xl font-bold text-blue-500 mb-2 md:mb-4">
      ABOUT ME
    </h2>
    <p className="mb-2 md:mb-6 leading-relaxed">
      I help business owners and busy web developers design & develop creative
      websites that fit their vision and attract visitors to stay forever.
      Technologies and tools that I use to create such awesome websites:
    </p>
    <div className="flex flex-wrap gap-2 mb-2 md:mb-8">
      {technologies.map((tag) => (
        <span
          key={tag}
          className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-blue-500 transition-all duration-300 hover:shadow-glow"
        >
          {tag}
        </span>
      ))}
    </div>
    <TechStack />
  </div>
));

const AboutModal = memo(({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const technologies = [
    "#javascript",
    "#react.js",
    "#redux",
    "#node.js",
    "#express.js",
    "#mongoDB",
    "#mongoose",
    "#mysql",
    "#tailwind",
    "#bootstrap",
    "#git",
    "#github",
    "#sass",
    "#php",
    "#graphic-design",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[999999] mt-44 md:mt-0">
      <div className="bg-[#1B1535] text-white rounded-lg shadow-lg w-11/12 max-w-5xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-500 hover:text-gray-100"
        >
          <CloseIcon />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 z-[999999]">
          <AboutContent technologies={technologies} />
          <div className="flex items-center justify-center z-[999999]">
            <img
              src={image}
              className="bg-transparent w-2/3 sm:w-1/2 md:w-4/5 lg:w-4/5 filter drop-shadow-[0_40px_60px_rgba(59,130,246,0.8)]"
              alt="About"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutModal;
