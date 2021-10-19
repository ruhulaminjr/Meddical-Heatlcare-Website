import React from "react";
import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, shortDesc } = service;
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={img}
          alt={name}
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {name}
          </h1>
          <p className="leading-relaxed mb-3">{shortDesc}</p>
          <div className="flex items-center flex-wrap ">
            <NavLink
              to="/"
              className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              See More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
