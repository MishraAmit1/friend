import React from "react";
import html from "../assets/images/Techno/html.svg";
import css from "../assets/images/Techno/css.svg";
import javascript from "../assets/images/Techno/js.svg";
import php from "../assets/images/Techno/php.svg";
import reactjs from "../assets/images/Techno/react.svg";
import nodejs from "../assets/images/Techno/node.svg";
import mongodb from "../assets/images/Techno/mongodb.svg";
import mysql from "../assets/images/Techno/mysql.svg";
import tailwind from "../assets/images/Techno/tailwind.svg";
import bootstrap from "../assets/images/Techno/bootstrap.svg";
import git from "../assets/images/Techno/git.svg";
import postman from "../assets/images/Techno/postman.svg";
import Tilt from "react-parallax-tilt";

const Technologies = () => {
  return (
    <div
      className="text-white bg-black px-4 md:px-10 py-10 w-full text-2xl md:text-5xl font-[amspiro2] text-center"
      id="technologies"
    >
      <h1 className="mb-8">Technologies</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-center items-center mt-10 md:mt-20 md:px-32 lg:px-72">
        {[
          html,
          css,
          javascript,
          php,
          reactjs,
          nodejs,
          mongodb,
          mysql,
          tailwind,
          bootstrap,
          git,
          postman,
        ].map((tech, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            scale={1.1}
            transitionSpeed={2500}
            className="z-30"
          >
            <div
              className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b3b3b3] flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              <img
                src={tech}
                alt={`Technology ${index}`}
                className="w-10 sm:w-12 md:w-14 h-auto"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
                aria-label={`Technology ${index}`}
              />
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
