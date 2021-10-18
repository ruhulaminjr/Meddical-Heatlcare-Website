import React from "react";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            The Catalyzer
          </h1>
          <p className="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <div className="flex items-center flex-wrap ">
            <NavLink
              to="/"
              className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              See More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
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
