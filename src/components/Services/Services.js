import React from "react";
import useServices from "../../hooks/useServices";
import Service from "./Service/Service";

const Services = () => {
  const { serviceData } = useServices();
  return (
    <div>
      <div className="container mx-auto flex px-2 py-2 flex-col items-center">
        <h2 className="lg:text-2xl text-2xl md:text-3xl text-green-700 font-bold my-2 tracking-widest">
          Care you can believe in
        </h2>
        <h1 className="lg:text-4xl md:text-4xl text-2xl text-gray-9-- font-semibold my-3">
          Our Services
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {serviceData.splice(0, 4).map((item) => (
              <Service service={item} key={item.id}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
