import { EmailIcon, InstagramIcon, LinkedInIcon } from "./svgicons/SocialIcons";

const Footer = () => {
  // Function to scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const topOffset = section.offsetTop - 60; // Adjusted offset for better alignment
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Name Section */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
          Divya Bhanushali
        </h1>

        {/* Social Icons Section */}
        <div className="flex justify-center gap-6 sm:gap-8 mb-10">
          {[
            {
              href: "mailto:sochdigital25@gmail.com",
              icon: <EmailIcon className="w-8 h-8" />,
              label: "Email",
            },
            {
              href: "https://www.linkedin.com/in/divya-bhanushali-669864238",
              icon: <LinkedInIcon className="w-8 h-8" />,
              label: "LinkedIn",
            },
            {
              href: "https://www.instagram.com/sochdigital_/",
              icon: <InstagramIcon className="w-8 h-8" />,
              label: "Instagram",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 hover:bg-blue-600/50 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Navigation Links Section */}
        <nav className="flex justify-center mb-8">
          <ul className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 text-sm md:text-base font-medium">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Me" }, // Changed from "technologies"
              { id: "expertise", label: "Expertise" }, // Changed from "education"
              { id: "projects", label: "Projects" },
              {
                href: "https://drive.google.com/file/d/12inpT6-AVSEgDUSnTsX8rCC3ctrP2tMi/view?usp=sharing",
                label: "Resume",
                external: true,
              },
            ].map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer"
                onClick={() => !item.external && scrollToSection(item.id)}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                ) : (
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400">
          &copy; {currentYear} Divya Bhanushali. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
