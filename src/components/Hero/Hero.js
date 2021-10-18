import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero py-8">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-3xl text-green-600 my-2">Caring for Life</h2>
            <h1 class="text-5xl lg:text-6xl sm:text-5xl mb-4 font-medium my-2 text-gray-200">
              Leading the Way <br /> in Medical Excellence
            </h1>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-2">
                Out Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
