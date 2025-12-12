import React from "react";
import ustod from "../assets/imgs/fazliddin.png";
import ibrohim from "../assets/imgs/ibrohim.png";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

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

      <Footer darkMode={darkMode}/>
    </div>
  );
};
