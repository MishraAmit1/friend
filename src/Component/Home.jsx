import React, { useCallback, useState, useRef, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import "./Home.css";
import particleConfig from "../particlesjs/particleConfig";
import {
  AmsLogo,
  ArrowIconDown,
  Telephone,
  Whatsapp,
} from "./svgicons/SocialIcons";

// Placeholder image (replace with actual path in your project)
import profileImage from "../assets/images/profile.png";

const Home = ({
  scrollToHome,
  scrollToAbout,
  scrollToExpertise,
  scrollToMyProjects,
  scrollToProjects,
  scrollToTestimonial,
  scrollToContact,
  scrollToFooter,
}) => {
  const particlesInit = useCallback(async (main) => {
    try {
      await loadFull(main);
    } catch (error) {
      console.error("Failed to initialize particles:", error);
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleConfig}
        />
      </div>

      <section className="relative z-10 flex flex-col min-h-screen text-white">
        {/* Header */}
        <header className="flex items-center justify-between w-full px-6 py-4 md:px-8 md:py-6">
          <AmsLogo className="w-12 h-12 md:w-16 md:h-16" />
          <div className="flex items-center gap-4 md:gap-6">
            <a
              target="_blank"
              href="tel:8733073469"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Telephone className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/918733073469?text=Hi, I'm from your Portfolio. I want to know more about your services?"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Whatsapp className="w-6 h-6" />
            </a>
            <button
              ref={hamburgerRef}
              onClick={toggleMenu}
              className="p-2 text-white focus:outline-none hover:text-[#4595eb] transition-colors"
              aria-label="Menu"
            >
              <HiOutlineMenuAlt1 className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col-reverse items-center justify-center flex-1 px-6 pb-12 md:flex-row md:justify-between md:px-12 lg:px-24 md:pb-0">
          {/* Text Content */}
          <div className="w-full mt-8 text-center md:text-left md:mt-0 md:w-1/2 md:pr-8">
            <h3 className="text-lg font-medium text-[#4595eb] md:text-xl lg:text-2xl">
              Hello, I'm
            </h3>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl font-['Spartan'] mt-2 mb-4">
              Divya Bhanusali
            </h1>
            <p className="text-lg italic text-gray-300 font-['Merriweather'] mb-8 md:text-xl lg:text-2xl">
              Digital Marketing Expert
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/12inpT6-AVSEgDUSnTsX8rCC3ctrP2tMi/view?usp=sharing"
                download
                className="px-6 py-3 text-sm font-bold text-white transition-all duration-300 rounded-lg md:px-8 md:py-3 md:text-base bg-gradient-to-r from-[#1595b6] to-[#1f2667e6] hover:scale-105 hover:shadow-lg"
              >
                Download CV
              </a>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 text-sm font-bold transition-all duration-300 border-2 rounded-lg md:px-8 md:py-3 md:text-base border-[#4595eb] text-[#4595eb] hover:bg-[#4595eb] hover:text-white hover:shadow-lg"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full max-w-xs md:max-w-md md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full opacity-50 -z-10"></div>
              <img
                src={profileImage}
                alt="Divya Bhanusali"
                className="relative z-10 w-full rounded-lg shadow-2xl md:rounded-2xl"
              />
            </div>
          </div>
        </main>

        {/* Scroll Down Button */}
        <div className="mt-20">
          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowIconDown className="w-8 h-8 text-white hover:text-[#4595eb] transition-colors" />
          </button>
        </div>
      </section>

      {/* Mobile Menu - Updated to match previous style */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 text-white z-50 transform transition-transform duration-300 ease-in-out backdrop-blur-sm ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none hover:text-[#4595eb] transition-colors text-2xl"
            aria-label="Close menu"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-lg font-semibold">
          {[
            { name: "Home", action: scrollToHome },
            { name: "About Me", action: scrollToAbout },
            { name: "Expertise", action: scrollToExpertise },
            { name: "My Projects", action: scrollToMyProjects },
            { name: "Projects", action: scrollToProjects },
            { name: "Testimonial", action: scrollToTestimonial },
            { name: "Contact Me", action: scrollToContact },
            { name: "Footer", action: scrollToFooter },
          ].map((item) => (
            <li key={item.name}>
              <button
                onClick={() => {
                  item.action();
                  setIsMenuOpen(false);
                }}
                className="hover:text-[#4595eb] transition-colors w-full text-left py-2"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
