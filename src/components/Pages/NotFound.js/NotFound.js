import React from "react";
import { NavLink } from "react-router-dom";
import not404 from "../../../images/404.jpg";

const NotFoundpage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center py-8">
        <NavLink
          to="/"
          className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg my-2"
        >
          HomePage
        </NavLink>
      </div>

      <div className="flex justify-center py-8">
        <img src={not404} alt="not found page" />
      </div>
    </div>
  );
};

export default NotFoundpage;
