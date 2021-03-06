import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <header className="text-gray-600 body-font bg-gray-800	">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl text-white">
              MED<span className="text-green-700 hover:text-white">DICAL</span>
            </span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 text-white hover:text-green-700">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="mr-5 text-white hover:text-green-700"
            >
              About us
            </NavLink>
            <NavLink
              to="/services"
              className="mr-5 text-white hover:text-green-700"
            >
              Services
            </NavLink>
            <NavLink
              to="/doctors"
              className="mr-5 text-white hover:text-green-700"
            >
              Doctors
            </NavLink>
            <NavLink
              to="/emergency"
              className="mr-5 text-white hover:text-green-700"
            >
              Emergency Services
            </NavLink>
          </nav>
          {user ? (
            <>
              Sign as:{" "}
              <p className="mr-5 text-white hover:text-green-700">
                {user.displayName}
              </p>{" "}
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center me-1 mx-4 lg:my-0 xl:my-0 my-4 hover:bg-green-700 hover:text-white"
                onClick={logOut}
              >
                Logout
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="animate-bounce bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center me-1 mx-4 lg:my-0 xl:my-0 my-4 hover:bg-green-700 hover:text-white"
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className=" w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
