import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import earth from "../assets/images/Techno/earth.jpg";

const Contactme = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    fetch("https://getform.io/f/azyyogvb", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        toast.success("Message Sent Successfully! 🚀", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "dark",
        });

        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again!", {
          position: "top-center",
          autoClose: 3000,
        });
        setLoading(false);
      });
  };

  return (
    <div className="text-white px-4 md:px-32 py-10 w-full">
      <ToastContainer />
      <div className="container mx-auto py-8">
        <h4 className="text-gray-400 uppercase">Want to send me a message</h4>
        <h1 className="md:text-5xl text-2xl mb-12 md:mb-6 text-left font-[amspiro2] tracking-wider font-extrabold">
          Contact Me.
        </h1>
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 gap-14">
          <div className="w-full max-w-md bg-[#1B1535]/70 backdrop-blur-md p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3-3m-3 3l3-3"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Rotating Earth Image */}
          <div className="w-full md:w-auto ml-20">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <img
                src={earth}
                alt="Rotating Earth"
                className="w-full h-full animate-spin-slow rounded-full hover:shadow-glow transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
