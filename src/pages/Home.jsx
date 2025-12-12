import React from "react";
import logo from "../assets/imgs/logo_full.png";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { Footer } from "../components/Footer";

export const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="home-intro font-bold">
        <h1 className="text-6xl">Welcome to Dev Unity</h1>

        <h2 className="text-5xl text-blue-600 pl-0 md:pl-20 mt-2">
          Transforming Ideas into Reality
        </h2>
      </div>
      <div className="home-about flex flex-col gap-5 mt-50">
        <h1 className="text-2xl text-center font-bold">Why Join Dev Unity</h1>

        <div className="flex flex-col lg:flex-row gap-10 items-center-safe mt-10">
          <motion.img
            src={logo}
            className="bg-cyan-900 rounded-lg max-w-120 w-[70%] hover:bg-cyan-950 hover:scale-105 transition-all"
          />

          <div
            className={
              darkMode
                ? "content bg-gray-800 p-5 hover:bg-gray-900 transition-all hover:rounded-2xl"
                : "bg-gray-200 p-5 hover:bg-gray-300 transition-all hover:rounded-2xl"
            }
          >
            <div className="hover:scale-104 origin-top-left transition-transform duration-300">
              <p className="mb-5 text-lg">
                Exciting IT Events At Dev Unity, we organize a variety of IT
                events that provide invaluable experiences and opportunities:
              </p>

              <ul className="ml-5 flex flex-col gap-2">
                <li>
                  <b>Tech Conferences:</b> Attend our tech conferences to hear
                  from industry leaders about the latest trends and innovations
                  in technology.
                </li>
                <li>
                  <b>Workshops and Seminars:</b> Participate in hands-on
                  workshops and insightful seminars led by experts in various
                  tech fields.
                </li>

                <li>
                  <b>Hackathons:</b> Collaborate with peers in high-energy
                  hackathons where creativity and problem-solving are key.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center-safe mt-10">
          <motion.img
            src={logo}
            className="bg-cyan-900 rounded-lg max-w-120 w-[70%] hover:bg-cyan-950 hover:scale-105 transition-all"
          />

          <div
            className={twMerge(
              "content p-5",
              darkMode
                ? "content bg-gray-800 p-5 hover:bg-gray-900 transition-all hover:rounded-2xl"
                : "bg-gray-200  hover:bg-gray-300 transition-all hover:rounded-2xl "
            )}
          >
            <div className="hover:scale-104 origin-top-left transition-transform duration-300">
              <p className="mb-5 text-lg">
                Expert Insights
                <br />
                Learn from the best in the industry. We regularly invite
                specialists and experts to share their knowledge and
                experiences:
              </p>

              <ul className="ml-5 flex flex-col gap-5">
                <li>
                  <b>Guest Speakers:</b> Gain insights from top professionals
                  and thought leaders who discuss cutting-edge technologies and
                  their applications.
                </li>
                <li>
                  <b>Panel Discussions:</b> Engage in interactive panel
                  discussions with experts who provide diverse perspectives on
                  current tech issues and trends.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center-safe mt-10 mb-20">
          <motion.img
            src={logo}
            className="bg-cyan-900 rounded-lg max-w-120 w-[70%] hover:bg-cyan-950 hover:scale-105 transition-all"
          />

          <div
            className={twMerge(
              "content p-5 overflow-hidden",
              darkMode
                ? "bg-gray-800 hover:bg-gray-900"
                : "bg-gray-200 hover:bg-gray-300"
            )}
          >
            <div className="hover:scale-105 origin-top-left transition-transform duration-300">
              <p className="mb-5 text-lg group-hover:text-xl transition-all duration-300">
                Teamwork and Collaboration
                <br />
                Dev Unity emphasizes the importance of teamwork and
                collaboration:
              </p>

              <ul className="ml-5 flex flex-col gap-2">
                <li className="group-hover:text-lg transition-all duration-300">
                  <b>Project Collaboration:</b> Work on group projects that
                  encourage cooperation and collective problem-solving.
                </li>
                <li className="group-hover:text-lg transition-all duration-300">
                  <b>Networking Events:</b> Connect with like-minded individuals
                  and build relationships that can lead to future
                  collaborations.
                </li>
                <li className="group-hover:text-lg transition-all duration-300">
                  <b>Team Building Activities:</b> Participate in activities
                  designed to strengthen team dynamics and improve interpersonal
                  skills.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
};
