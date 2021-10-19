import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../../Services/Service/Service";
import "./servicespage.css";
const ServicesPage = () => {
  const { serviceData } = useServices();
  return (
    <div>
      <div className="service-header">
        <h1 className="text-center lg:text-5xl text-3xl text-green-500  py-8">
          Our Services
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            {serviceData.map((item) => (
              <Service service={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
