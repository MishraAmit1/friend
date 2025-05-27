import React from "react";
import GitHubIcon from "../assets/images/Techno/github.svg";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import Tilt from "react-parallax-tilt";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Gym Management System",
      description: [
        "Real-time membership approval and plan-based access.",
        "Responsive UI for all devices.",
        "Comprehensive admin dashboard for management.",
      ],
      link: "https://github.com/MishraAmit1/mishrajii-gym",
      tags: ["Html", "Css", "JavaScript", "Php", "MySQL"],
    },
    {
      id: 2,
      image: project2,
      title: "Top 15+ JavaScript Projects",
      description: [
        "Created 18+ interactive JS projects for learning.",
        "Live previews and easy code download.",
        "Boosted user engagement with hands-on projects.",
      ],
      link: "https://github.com/MishraAmit1/javascript-projects-for-beginners",
      tags: ["Html", "Css", "JavaScript"],
    },
    {
      id: 3,
      image: project3,
      title: "Event Management System",
      description: [
        "Web-based system for managing events.",
        "User registration, event categorization, and tracking.",
        "Admin panel for managing users and events.",
      ],
      link: "https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg",
      tags: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    },
  ];

  return (
    <div className="bg-black text-white px-10 md:px-32 w-full" id="projects">
      <div className="container mx-auto py-8">
        <h4 className="text-gray-400 uppercase">My Work</h4>
        <h1 className="md:text-5xl text-2xl mb-12 md:mb-6 text-left font-[amspiro2] tracking-wider font-extrabold">
          Projects.
        </h1>
        <p className="text-gray-500 mb-8">
          Following projects showcase my skills and experience through
          real-working examples of my work. Each project is briefly described
          with links to code repositories and live demos. It reflects my ability
          to solve complex problems, work with different technologies, and
          manage projects effectively.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              scale={1.05}
              transitionSpeed={2500}
            >
              <div
                className="bg-[#1B1535] text-white rounded-lg shadow-md p-4 relative flex flex-col justify-between"
                style={{
                  height: "450px",
                  minHeight: "450px",
                  maxHeight: "450px",
                }}
              >
                {/* Project Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-50 object-cover"
                  />
                  {/* GitHub Icon */}
                  <div className="absolute top-1 right-1 cursor-pointer z-50 bg-slate-300 rounded-3xl p-1 hover:shadow-glow">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={GitHubIcon}
                        alt="GitHub Icon"
                        className="w-7 h-7"
                      />
                    </a>
                  </div>
                </div>
                {/* Project Content */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <ul className="mt-2 text-sm space-y-1">
                    {project.description.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap mt-4 gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-blue-200 text-blue-800 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
