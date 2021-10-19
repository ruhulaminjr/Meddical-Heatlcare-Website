import React from "react";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Specialties from "../Specialties/Specialties";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Specialties />
      <Doctors />
      <Contact />
    </div>
  );
};

export default Home;
