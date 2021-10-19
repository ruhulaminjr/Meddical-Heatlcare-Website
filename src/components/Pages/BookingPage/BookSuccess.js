import React from "react";
import { NavLink } from "react-router-dom";

const BookSuccess = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl lg:text-3xl text-bold text-green-500 text-center">
        Congratulation You Successfully Booked Your Service
      </h1>
      <div className="py-8 text-center">
        <NavLink
          to="/"
          className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-8 py-4 rounded"
          type="submit"
        >
          Go To Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default BookSuccess;
