import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Placeholder images (replace with actual paths in your project)
import portfolio1 from "../assets/images/portfolio-1.jpg";
import portfolio2 from "../assets/images/portfolio-2.jpg";
import portfolio3 from "../assets/images/portfolio-3.jpg";
import portfolio4 from "../assets/images/portfolio-4.jpg";
import portfolio5 from "../assets/images/portfolio-5.jpg";
import portfolio6 from "../assets/images/portfolio-6.jpg";

const Projects = () => {
  // State for filter
  const [filter, setFilter] = useState("*");

  // Refs for GSAP animations
  const portfolioItemsRef = useRef([]);
  const filterButtonsRef = useRef([]);
  const portfolioContainerRef = useRef(null);

  // GSAP animations
  useGSAP(() => {
    // Animate filter buttons on hover
    filterButtonsRef.current.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  // Animate portfolio items on filter change
  useEffect(() => {
    gsap.fromTo(
      portfolioContainerRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, [filter]);

  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      filter: "filter-1",
      title: "eCommerce Website",
      image: portfolio1,
    },
    {
      id: 2,
      filter: "filter-2",
      title: "Product Landing Page",
      image: portfolio2,
    },
    {
      id: 3,
      filter: "filter-3",
      title: "JavaScript quiz game",
      image: portfolio3,
    },
    {
      id: 4,
      filter: "filter-1",
      title: "JavaScript drawing",
      image: portfolio4,
    },
    {
      id: 5,
      filter: "filter-2",
      title: "Social Mobile Apps",
      image: portfolio5,
    },
    {
      id: 6,
      filter: "filter-3",
      title: "Company Website",
      image: portfolio6,
    },
  ];

  // Filter portfolio items
  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === filter);

  return (
    <div
      className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 w-full"
      id="portfolio"
    >
      <div className="container mx-auto py-6 sm:py-8">
        <h4 className="text-gray-400 uppercase text-xs sm:text-sm md:text-base">
          My Portfolio,
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28 text-left font-[amspiro2] tracking-wider font-extrabold">
          Excellent Portfolio
        </h1>
        <section id="portfolio" className="py-6 sm:py-12 lg:py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Projects
              </h2>
            </div>
            <div className="mb-8">
              <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {["*", "filter-1", "filter-2", "filter-3"].map(
                  (filterType, index) => (
                    <li
                      key={filterType}
                      className={`cursor-pointer px-4 py-2 text-sm sm:text-base font-medium rounded-lg ${
                        filter === filterType
                          ? "bg-blue-600 text-white"
                          : "bg-gray-800 text-gray-300"
                      } transition-colors`}
                      onClick={() => setFilter(filterType)}
                      ref={(el) => (filterButtonsRef.current[index] = el)}
                    >
                      {filterType === "*"
                        ? "All"
                        : filterType === "filter-1"
                        ? "Web Design"
                        : filterType === "filter-2"
                        ? "Mobile Apps"
                        : "Game Dev"}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              ref={portfolioContainerRef}
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative group"
                  ref={(el) => (portfolioItemsRef.current[index] = el)}
                >
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-base sm:text-lg font-semibold">
                      {item.title}
                    </h3>
                    <button
                      className="absolute bottom-4 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold hover:bg-blue-700 transition"
                      onClick={() => alert(`View ${item.title} image`)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
