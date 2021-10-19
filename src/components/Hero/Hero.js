import React from "react";
import { NavLink } from "react-router-dom";
import "./hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero py-8">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h2 className="text-3xl text-green-600 my-2">Caring for Life</h2>
              <h1 className="text-5xl lg:text-6xl sm:text-5xl mb-4 font-medium my-2 text-gray-200">
                Leading the Way <br /> in Medical Excellence
              </h1>
              <div className="flex justify-center">
                <NavLink
                  to="/services"
                  className="animate-pulse inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg my-2"
                >
                  Our Services
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container mx-auto flex px-2 py-6 flex-column flex-col items-center">
        <h2 className="lg:text-4xl text-2xl md:text-3xl text-green-700 font-bold my-2">
          Welcome to Meddical
        </h2>
        <h1 className="lg:text-5xl md:text-4xl text-2xl text-gray-9-- font-semibold my-3">
          A Great Place to Receive Care
        </h1>
        <p className="md:w-3/6 text-center my-3">
          Since January, SCFT has also been running large scale COVID-19
          vaccination centres for the population across Sussex, and this week
          hit the milestone of delivering 100,000 vaccinations. As well as the
          centres, teams from the Trust have also been supporting GPs to deliver
          the vaccination to thousands of care home staff and residents, as well
          as people who cannot leave their homes.
        </p>
        <NavLink
          to="/about"
          className="bg-gray-300 hover:bg-green-700 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center md:my-2 sm:my-2"
        >
          Learn More
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
        </NavLink>
      </div>
      <div className="container mx-auto">
        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1491&q=80"
            alt="doctors operation"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
