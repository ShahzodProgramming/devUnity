import React from "react";
import { Link } from "react-router-dom";

export const OurTeam = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50"
      } min-h-screen`}
    >
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1
            className={`text-4xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            } mb-4`}
          >
            Our Team
          </h1>
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } text-lg max-w-3xl mx-auto`}
          >
            Meet the talented individuals behind Dev Unity who are passionate
            about technology, education, and creating impactful solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Team Member 1 */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow`}
          >
            <div
              className={`w-32 h-32 ${
                darkMode
                  ? "bg-gradient-to-br from-blue-900/30 to-indigo-900/30"
                  : "bg-gradient-to-br from-blue-100 to-indigo-100"
              } rounded-full mx-auto mb-4 flex items-center justify-center`}
            >
              <i className="ri-user-3-line text-5xl text-blue-600"></i>
            </div>
            <h3
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Abdulaziz
            </h3>
            <p className="text-blue-600 font-medium mb-2">
              Founder & Lead Developer
            </p>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } text-sm mb-4`}
            >
              Passionate about creating educational technology solutions and
              mentoring young developers.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="mailto:abdulazizilla200709@gmail.com"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-blue-500"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-sky-400"
                    : "text-gray-600 hover:text-sky-500"
                }`}
              >
                <i className="ri-twitter-line text-xl"></i>
              </a>
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-blue-500"
                    : "text-gray-600 hover:text-blue-700"
                }`}
              >
                <i className="ri-linkedin-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow`}
          >
            <div
              className={`w-32 h-32 ${
                darkMode
                  ? "bg-gradient-to-br from-green-900/30 to-emerald-900/30"
                  : "bg-gradient-to-br from-green-100 to-emerald-100"
              } rounded-full mx-auto mb-4 flex items-center justify-center`}
            >
              <i className="ri-user-star-line text-5xl text-green-600"></i>
            </div>
            <h3
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Sarah Khan
            </h3>
            <p className="text-green-600 font-medium mb-2">UI/UX Designer</p>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } text-sm mb-4`}
            >
              Creates beautiful and intuitive interfaces that enhance user
              experience across all platforms.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-green-500"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-pink-500"
                    : "text-gray-600 hover:text-pink-600"
                }`}
              >
                <i className="ri-dribbble-line text-xl"></i>
              </a>
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-blue-500"
                    : "text-gray-600 hover:text-blue-700"
                }`}
              >
                <i className="ri-behance-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow`}
          >
            <div
              className={`w-32 h-32 ${
                darkMode
                  ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30"
                  : "bg-gradient-to-br from-purple-100 to-pink-100"
              } rounded-full mx-auto mb-4 flex items-center justify-center`}
            >
              <i className="ri-user-5-line text-5xl text-purple-600"></i>
            </div>
            <h3
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Michael Chen
            </h3>
            <p className="text-purple-600 font-medium mb-2">
              Backend Developer
            </p>
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } text-sm mb-4`}
            >
              Builds robust server architectures and ensures system reliability
              and scalability.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-purple-500"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-gray-300"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <i className="ri-github-line text-xl"></i>
              </a>
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-gray-400 hover:text-blue-500"
                    : "text-gray-600 hover:text-blue-700"
                }`}
              >
                <i className="ri-linkedin-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`${
            darkMode
              ? "bg-gradient-to-r from-blue-900/20 to-indigo-900/20"
              : "bg-gradient-to-r from-blue-50 to-indigo-50"
          } rounded-xl p-8 mb-12`}
        >
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            } text-center mb-8`}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div
                className={`w-16 h-16 ${
                  darkMode ? "bg-blue-900/30" : "bg-blue-100"
                } rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i className="ri-lightbulb-line text-3xl text-blue-600"></i>
              </div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                } mb-2`}
              >
                Innovation
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Continuously pushing boundaries with creative solutions
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 ${
                  darkMode ? "bg-green-900/30" : "bg-green-100"
                } rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i className="ri-team-line text-3xl text-green-600"></i>
              </div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                } mb-2`}
              >
                Collaboration
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Working together to achieve extraordinary results
              </p>
            </div>

            <div className="text-center">
              <div
                className={`w-16 h-16 ${
                  darkMode ? "bg-purple-900/30" : "bg-purple-100"
                } rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <i className="ri-graduation-cap-line text-3xl text-purple-600"></i>
              </div>
              <h3
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                } mb-2`}
              >
                Education
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                Empowering through knowledge sharing and mentorship
              </p>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div
          className={`text-center p-8 ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          } rounded-xl`}
        >
          <i className="ri-user-add-line text-5xl text-blue-600 mb-4"></i>
          <h2
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            } mb-3`}
          >
            Want to Join Our Team?
          </h2>
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } mb-6 max-w-2xl mx-auto`}
          >
            We're always looking for passionate individuals who want to make a
            difference in tech education.
          </p>
          <a
            href="mailto:abdulazizilla200709@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <i className="ri-mail-line"></i>
            <Link to="/contact">Contact Us</Link>
          </a>
        </div>
      </div>
    </div>
  );
};
