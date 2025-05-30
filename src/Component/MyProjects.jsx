import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/school.jpg";
import project3 from "../assets/images/worker-uses-control-panel-factory.jpg";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import Tilt from "react-parallax-tilt";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Real Estate",
      description: [
        "Helped real estate brands increase lead generation through targeted Meta Ads and Google Ads.",
        "Created location-based lead forms",
        "Built trust through content showcasing projects, testimonials & site progress",
        "Focused on high-quality lead nurturing and CRM coordination",
      ],
    },
    {
      id: 2,
      image: project2,
      title: "Education (Schools, Institutes & Online Courses)",
      description: [
        "Promoted institutions with a focus on admissions, awareness, and engagement.",
        "Developed admission-focused ad campaigns",
        "Created engaging content for parents & students",
        "Managed content calendars for regular and exam-season promotions",
      ],
    },
    {
      id: 3,
      image: project3,
      title: "Machinery / Calibration Industry",
      description: [
        "B2B strategy for technical products and niche services.",
        "Focused on brand visibility via SEO and LinkedIn",
        "Designed educational content for industrial products and services",
        "Generated quality leads using professional and technical creatives",
      ],
    },
    {
      id: 4,
      image: project4, // Placeholder; replace with actual image
      title: "Food, Café & Restaurant",
      description: [
        "Improved footfall and online orders through creative storytelling.",
        "Designed mouth-watering social media content and reels",
        "Managed offers, reviews, and Google Business listings",
        "Ran geo-targeted promotions to drive in-store traffic",
      ],
    },
    {
      id: 5,
      image: project5, // Placeholder; replace with actual image
      title: "Automotive Industry",
      description: [
        "Worked with auto service centers, detailing studios, and dealerships.",
        "Promoted services via Instagram/Facebook Ads",
        "Designed before-after visuals and reviews for trust building",
        "Managed local SEO and service-based lead generation",
      ],
    },
    {
      id: 6,
      image: project6, // Placeholder; replace with actual image
      title: "Hospitals, Gyms & Internet Providers",
      description: [
        "Handled a mix of healthcare, fitness, and service-based local businesses.",
        "Ran health awareness and gym transformation campaigns",
        "Focused on lead generation and appointment bookings",
        "Designed informative content, reels, and engagement polls",
      ],
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
          Over the past 1.5 years, I’ve had the opportunity to craft and execute
          digital marketing strategies across a wide range of industries. From
          local businesses to service-based companies, each project helped me
          sharpen my skills and adapt strategies to fit unique audience needs,
          goals, and platforms — while delivering measurable results.
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
                className="bg-[#1B1535] text-white rounded-lg shadow-md p-4 relative flex flex-col overflow-y-auto"
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
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                {/* Project Content */}
                <div className="mt-2 flex-grow">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <ul className="mt-2 text-sm space-y-1">
                    {project.description.map((line, index) => (
                      <li key={index}>{"✅ " + line}</li>
                    ))}
                  </ul>
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
