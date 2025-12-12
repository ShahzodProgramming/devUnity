import React from "react";
import { Link } from "react-router-dom";

export const Footer = ({ darkMode }) => {
  return (
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
          <Link href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
            <i className="ri-facebook-circle-line"></i>
          </Link>
          <Link href="#" className="text-sky-500 hover:text-sky-700 text-2xl">
            <i className="ri-twitter-line"></i>
          </Link>
          <Link href="#" className="text-pink-600 hover:text-pink-800 text-2xl">
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
  );
};
