import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaBuilding, FaUtensils, FaWifi } from "react-icons/fa";

const Testimonial = () => {
  // State for current testimonial
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Refs for GSAP animations
  const testimonialRef = useRef(null);
  const leftImagesRef = useRef([]);
  const rightImagesRef = useRef([]);

  // Testimonial data with icon components
  const testimonials = [
    {
      icon: FaBuilding,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      quote:
        "The digital strategies implemented significantly boosted our lead quality and helped us reach the right buyers efficiently. The team was professional and proactive throughout.",
      name: "Real Estate Industry",
      profession: "Property Development",
    },
    {
      icon: FaUtensils,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
      quote:
        "The content and advertising approach perfectly captured our brand's personality, driving more foot traffic and online orders in just a few months. Very satisfied with the results!",
      name: "Food & Restaurant Business",
      profession: "Hospitality Sector",
    },
    {
      icon: FaWifi,
      iconColor: "text-green-500",
      bgColor: "bg-green-100",
      quote:
        "With a targeted marketing plan and timely campaign optimizations, we saw a strong increase in customer sign-ups and brand awareness. The professionalism and expertise made a real difference.",
      name: "Internet Service Industry",
      profession: "Technology Sector",
    },
  ];

  // GSAP animations
  useGSAP(() => {
    // Animate left images
    leftImagesRef.current.forEach((img, index) => {
      if (img) {
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
      }
    });

    // Animate right images
    rightImagesRef.current.forEach((img, index) => {
      if (img) {
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
      }
    });
  }, []);

  // Animate testimonial slide
  useEffect(() => {
    if (testimonialRef.current) {
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
    }
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

  // Icon component for rendering
  const IconComponent = ({ testimonial, size = "text-4xl" }) => {
    const Icon = testimonial.icon;
    return (
      <div
        className={`${testimonial.bgColor} p-4 rounded-full flex items-center justify-center`}
      >
        <Icon className={`${testimonial.iconColor} ${size}`} />
      </div>
    );
  };

  return (
    <div
      className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 w-full"
      id="testimonial"
    >
      <div className="container mx-auto py-6 sm:py-8 mt-3">
        <h4 className="text-gray-400 uppercase text-xs sm:text-sm md:text-base">
          My Client Voices,
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28 text-left font-[amspiro2] tracking-wider font-extrabold">
          What My Clients Say
        </h1>
        <section
          id="testimonial"
          className="py-6 sm:py-12 lg:py-16 bg-black text-white -mt-10"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
              Industries I've Worked With
            </h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 relative">
              {/* Left Images */}
              <div className="hidden lg:block relative w-full lg:w-1/4 h-96">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`left-${index}`}
                    className="absolute"
                    style={{
                      top: leftPositions[index].top,
                      left: leftPositions[index].left,
                    }}
                    ref={(el) => (leftImagesRef.current[index] = el)}
                  >
                    <IconComponent testimonial={testimonial} size="text-2xl" />
                  </div>
                ))}
              </div>

              {/* Testimonial Carousel */}
              <div className="w-full lg:w-1/2 text-center" ref={testimonialRef}>
                <div className="relative mb-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                    <IconComponent
                      testimonial={testimonials[currentTestimonial]}
                      size="text-5xl sm:text-6xl"
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-3xl text-blue-600">
                    <span className="text-6xl">"</span>
                  </div>
                </div>
                <p className="text-base sm:text-lg italic text-gray-300 mb-6 px-4 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <hr className="w-16 mx-auto border-gray-400 mb-4" />
                <h5 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </h5>
                <p className="text-sm text-gray-400">
                  {testimonials[currentTestimonial].profession}
                </p>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index
                          ? "bg-blue-600 scale-125"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    ></button>
                  ))}
                </div>

                {/* Navigation Arrows (Optional) */}
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={() =>
                      setCurrentTestimonial(
                        currentTestimonial === 0
                          ? testimonials.length - 1
                          : currentTestimonial - 1
                      )
                    }
                    className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setCurrentTestimonial(
                        currentTestimonial === testimonials.length - 1
                          ? 0
                          : currentTestimonial + 1
                      )
                    }
                    className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Right Images */}
              <div className="hidden lg:block relative w-full lg:w-1/4 h-96">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`right-${index}`}
                    className="absolute"
                    style={{
                      top: rightPositions[index].top,
                      right: rightPositions[index].right,
                    }}
                    ref={(el) => (rightImagesRef.current[index] = el)}
                  >
                    <IconComponent testimonial={testimonial} size="text-2xl" />
                  </div>
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
