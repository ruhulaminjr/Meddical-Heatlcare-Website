import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/doctor.png";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-gray-800	">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl text-white">
              MED<span className="text-green-700 hover:text-white">DICAL</span>
            </span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/home"
              className="mr-5 text-white hover:text-green-700"
            >
              Home
            </NavLink>
            <NavLink
              to="/home"
              className="mr-5 text-white hover:text-green-700"
            >
              About Us
            </NavLink>
            <NavLink
              to="/home"
              className="mr-5 text-white hover:text-green-700"
            >
              Services
            </NavLink>
            <NavLink
              to="/home"
              className="mr-5 text-white hover:text-green-700"
            >
              Doctors
            </NavLink>
            <NavLink
              to="/home"
              className="mr-5 text-white hover:text-green-700"
            >
              Emergency Services
            </NavLink>
          </nav>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center me-1 mx-4 lg:my-0 xl:my-0 my-4 hover:bg-green-700 hover:text-white">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <button className="bg-gray-300 hover:bg-green-700 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center md:my-2 sm:my-2">
            Sing Up
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
