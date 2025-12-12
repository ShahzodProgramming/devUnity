import React from "react";
import logo from "../assets/imgs/logo.png";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center mb-10">
      <img src={logo} alt="Logo" className="max-w-20 hidden md:block" />

      <ul className="flex gap-6 ">
        <li>
          <Link className="hover:text-emerald-300 transition" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-emerald-300 transition" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-emerald-300 transition" to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link className="hover:text-emerald-300 transition" to="/team">
            Our Team
          </Link>
        </li>
        <li>
          <Link className="hover:text-emerald-300 transition" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>

      <motion.button
        className="text-xl"
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.2, rotate: 720 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? (
          <i className="ri-moon-line text-white  transition"></i>
        ) : (
          <i className="ri-sun-line  transition"></i>
        )}
      </motion.button>
    </nav>
  );
};
