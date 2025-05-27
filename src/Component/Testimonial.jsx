import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Placeholder images (replace with actual paths in your project)
import testimonial1 from "../assets/images/testimonial-1.jpg";
import testimonial2 from "../assets/images/testimonial-2.jpg";
import testimonial3 from "../assets/images/testimonial-3.jpg";

const Testimonial = () => {
  // State for current testimonial
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Refs for GSAP animations
  const testimonialRef = useRef(null);
  const leftImagesRef = useRef([]);
  const rightImagesRef = useRef([]);

  // Testimonial data
  const testimonials = [
    {
      image: testimonial1,
      quote:
        "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      name: "Client Name",
      profession: "Profession",
    },
    {
      image: testimonial2,
      quote:
        "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      name: "Client Name",
      profession: "Profession",
    },
    {
      image: testimonial3,
      quote:
        "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
      name: "Client Name",
      profession: "Profession",
    },
  ];

  // GSAP animations
  useGSAP(() => {
    // Animate left images
    leftImagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.2 + 0.1,
        }
      );
    });

    // Animate right images
    rightImagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.2 + 0.1,
        }
      );
    });
  }, []);

  // Animate testimonial slide
  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, [currentTestimonial]);

  // Positions for left and right images in a circular pattern
  const leftPositions = [
    { top: "10%", left: "20%" },
    { top: "40%", left: "10%" },
    { top: "70%", left: "25%" },
  ];

  const rightPositions = [
    { top: "15%", right: "25%" },
    { top: "45%", right: "10%" },
    { top: "75%", right: "20%" },
  ];

  return (
    <div
      className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 w-full"
      id="testimonial"
    >
      <div className="container mx-auto py-6 sm:py-8">
        <h4 className="text-gray-400 uppercase text-xs sm:text-sm md:text-base">
          My Client Voices,
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28 text-left font-[amspiro2] tracking-wider font-extrabold">
          What My Clients Say
        </h1>
        <section
          id="testimonial"
          className="py-6 sm:py-12 lg:py-16 bg-black text-white"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
              Testimonial
            </h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 relative">
              {/* Left Images */}
              <div className="hidden lg:block relative w-full lg:w-1/4 h-96">
                {testimonials.map((_, index) => (
                  <img
                    key={`left-${index}`}
                    src={testimonials[index].image}
                    alt={`Testimonial ${index + 1}`}
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-300"
                    style={{
                      top: leftPositions[index].top,
                      left: leftPositions[index].left,
                    }}
                    ref={(el) => (leftImagesRef.current[index] = el)}
                  />
                ))}
              </div>

              {/* Testimonial Carousel */}
              <div className="w-full lg:w-1/2 text-center" ref={testimonialRef}>
                <div className="relative mb-8">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gray-400 p-1 mx-auto"
                  />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-3xl text-blue-600">
                    <i className="fa fa-quote-left"></i>
                  </div>
                </div>
                <p className="text-base sm:text-lg italic text-gray-300 mb-6 px-4">
                  {testimonials[currentTestimonial].quote}
                </p>
                <hr className="w-16 mx-auto border-gray-400 mb-4" />
                <h5 className="text-lg sm:text-xl font-semibold text-white">
                  {testimonials[currentTestimonial].name}
                </h5>
                <span className="text-sm sm:text-base text-gray-400">
                  {testimonials[currentTestimonial].profession}
                </span>
                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-4 h-4 rounded-full ${
                        currentTestimonial === index
                          ? "bg-blue-600"
                          : "bg-yellow-400"
                      } transition-colors`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Right Images */}
              <div className="hidden lg:block relative w-full lg:w-1/4 h-96">
                {testimonials.map((_, index) => (
                  <img
                    key={`right-${index}`}
                    src={testimonials[index].image}
                    alt={`Testimonial ${index + 1}`}
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-300"
                    style={{
                      top: rightPositions[index].top,
                      right: rightPositions[index].right,
                    }}
                    ref={(el) => (rightImagesRef.current[index] = el)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
