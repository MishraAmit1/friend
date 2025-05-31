import { useCallback, useState, useRef, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";
import "./Home.css";
import particleConfig from "../particlesjs/particleConfig";
import { ArrowIconDown, Telephone, Whatsapp } from "./svgicons/SocialIcons";

// Placeholder image (replace with actual path in your project)
import profileImage from "../assets/images/profile2-removebg-preview.png";

// Typewriter Animation Hook
const useTypewriter = (texts, speed = 100, deleteSpeed = 50, pause = 2000) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentFullText = texts[textIndex];

        if (!isDeleting) {
          // Typing
          if (currentIndex < currentFullText.length) {
            setCurrentText(currentFullText.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setCurrentText(currentFullText.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentIndex,
    isDeleting,
    textIndex,
    texts,
    speed,
    deleteSpeed,
    pause,
  ]);

  return currentText;
};

const Home = ({
  scrollToHome,
  scrollToAbout,
  scrollToExpertise,
  scrollToMyProjects,
  scrollToTestimonial,
  scrollToContact,
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

  // Typewriter effect for the professional titles
  const typewriterText = useTypewriter([
    "Digital Marketing Expert",
    "Social Media Marketer",
  ]);

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
          <div className="flex items-center">
            {/* Rotating Border Logo */}
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              {/* Rotating Border with Dots */}
              <div className="absolute inset-0 animate-spin [animation-duration:3s]">
                {/* Rectangular Border */}
                <div className="w-full h-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg p-[2px]">
                  <div className="w-full h-full bg-black rounded-lg"></div>
                </div>

                {/* Rotating Dots */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              {/* Static Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-lg md:text-xl font-bold text-white tracking-wider">
                  DIVYA
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a
              target="_blank"
              href="tel:8866492402"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <Telephone className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/918866492402?text=Hi, I'm from your Portfolio. I want to know more about your services?"
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
              Divya Bhanushali
            </h1>

            {/* Updated typewriter text with cursor */}
            <p className="text-lg italic text-gray-300 font-['Merriweather'] mb-8 md:text-xl lg:text-2xl h-8 md:h-10 lg:h-12 flex items-center justify-center md:justify-start">
              {typewriterText}
              <span className="ml-1 animate-pulse text-[#4595eb]">|</span>
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1pV6pb7NA3n7YI0GY8SLneMD6FsJe0tN2/view?usp=sharing"
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
                alt="Divya Bhanushali"
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
            { name: "Projects", action: scrollToMyProjects },
            { name: "Testimonial", action: scrollToTestimonial },
            { name: "Contact Me", action: scrollToContact },
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
