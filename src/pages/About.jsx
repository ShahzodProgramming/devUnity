import React from "react";
import ustod from "../assets/imgs/fazliddin.png";
import ibrohim from "../assets/imgs/ibrohim.png";
import { Link } from "react-router-dom";

export const About = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <div
        className={
          darkMode
            ? "bg-gray-900 about-intro flex flex-col gap-5  p-10"
            : "bg-gray-200 about-intro flex flex-col gap-5  p-10"
        }
      >
        <p className="text-2xl">
          Founded on February 19, 2023, by the 2023 graduates, Dev Unity is a
          vibrant and dynamic club aimed at bringing together students who share
          a passion for information technology. Our main mission is to create a
          community where students can enhance their skills, learn from experts,
          and collaborate on exciting projects.
        </p>

        <p className="text-2xl">
          Our Mission Dev Unity's primary goal is to gather IT enthusiasts from
          our school and provide them with opportunities to develop both their
          social and technical skills. We believe that by working together and
          learning from one another, we can foster a supportive environment that
          encourages innovation and growth.
        </p>
      </div>

      <div className="about-faculty mt-40 max-w-5xl mx-auto">
        <h1 className="text-6xl text-center mb-5">Message from our Faculty</h1>

        <div className="about-people flex flex-col gap-10">
          <div
            className={
              darkMode
                ? "card mt-5 flex bg-gray-900 rounded items-center gap-5 flex-col md:flex-row"
                : "card mt-5 flex bg-gray-200 rounded items-center gap-5 flex-col md:flex-row"
            }
          >
            <div className="flex flex-col pl-5 pr-5 justify-between ">
              <p className="text-lg">
                Let me get straight to the point: never stop improving. The
                world’s moving fast, and we can’t sit around congratulating
                ourselves on past successes. We need to constantly push
                ourselves to be better, to innovate, and to tackle new
                challenges. What we did yesterday was great, but it’s not enough
                for tomorrow. So, stay sharp, be open to new ideas, learn from
                your mistakes, and always aim higher. Let’s make sure we’re
                always moving forward.
              </p>

              <p className="text-right text-lg mt-10">
                -Fazliddin Ismailov (Associate Director)
              </p>
            </div>
            <img src={ustod} className="max-w-100" />
          </div>

          <div
            className={
              darkMode
                ? "card mt-5 flex bg-gray-900 rounded items-center gap-5 flex-col md:flex-row"
                : "card mt-5 flex bg-gray-200 rounded items-center gap-5 flex-col md:flex-row"
            }
          >
            <div className="flex flex-col pl-5 pr-5 justify-between ">
              <p className="text-lg">
                It’s amazing to see how far we’ve come together, but this is
                just the beginning. Our success comes from unity and
                collaboration. We’ve achieved a lot, but we can do even more.
                Greatness comes from pushing ourselves, embracing challenges,
                and never settling for less. When we hit obstacles, let’s see
                them as opportunities. When we reach goals, let’s set new ones.
                Let’s keep striving for excellence and moving forward together.
                Thank you, and let’s keep making great things happen!
              </p>

              <p className="text-right text-lg mt-10">
                -Ibrohim Muhtarov (The founder of Dev Unity)
              </p>
            </div>
            <img src={ibrohim} className="max-w-100" />
          </div>

          <div
            className={
              darkMode
                ? "card mt-5 flex bg-gray-900 rounded items-center gap-5 flex-col md:flex-row"
                : "card mt-5 flex bg-gray-200 rounded items-center gap-5 flex-col md:flex-row"
            }
          >
            <img src={ibrohim} className="max-w-100" />

            <div className="flex flex-col pl-5 pr-5 justify-between ">
              <p className="text-lg">
                I’m here to remind you of something crucial: the power of
                motivation. We’ve accomplished so much together, but our journey
                is far from over. The key to our success is staying motivated
                and never losing sight of our goals. When things get tough,
                that’s when we need to push even harder. Remember, challenges
                are just opportunities in disguise. Every obstacle we face is a
                chance to grow and improve. Let’s stay focused, keep our energy
                high, and always strive for excellence. Together, we can achieve
                incredible things. Let’s keep moving forward with passion and
                determination.
              </p>

              <p className="text-right text-lg mt-10">
                -Izzatbek Akbarov (The motivator of Dev Unity)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-footer mt-10">
        <hr className="w-full border-dashed border-2 border-gray-500 " />

        <div
          className={
            darkMode
              ? "mx-auto p-6 bg-gray-900 rounded-lg shadow-md"
              : "mx-auto p-6 bg-gray-200 rounded-lg shadow-md"
          }
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold ">Dev Unity</h1>
            <p className="mt-2">
              Thanks for visiting our site, Follow us here and
              <br />
              Visit our blog :
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <i className="ri-facebook-circle-line"></i>
            </Link>
            <Link href="#" className="text-sky-500 hover:text-sky-700 text-2xl">
              <i className="ri-twitter-line"></i>
            </Link>
            <Link
              href="#"
              className="text-pink-600 hover:text-pink-800 text-2xl"
            >
              <i className="ri-instagram-line"></i>
            </Link>
            <Link href="#" className=" hover:text-black text-2xl">
              <i className="ri-global-line"></i>
            </Link>
          </div>

          <hr className="my-6 border-gray-300" />

          <div>
            <h2 className="text-2xl font-semibold mb-4">Reach Us</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="ri-school-line text-xl mt-1"></i>
                <div>
                  <p className="font-medium">
                    School named after Mukhammad al-Khwarazmiy
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-xl"></i>
                <div>
                  <Link
                    href="tel:+998-98-311-13-13"
                    className="text-blue-600 hover:underline"
                  >
                    +998-98-311-13-13
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-xl"></i>
                <div>
                  <Link
                    href="mailto:abdulazizilla200709@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    abdulazizilla200709@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
