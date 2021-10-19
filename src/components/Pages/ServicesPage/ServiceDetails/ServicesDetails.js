import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import useServices from "../../../../hooks/useServices";

const ServicesDetails = () => {
  const [currentService, setCurrentService] = useState();
  const { id } = useParams();
  const { serviceData } = useServices();
  useEffect(() => {
    // eslint-disable-next-line
    const filteredServices = serviceData.find((service) => service.id == id);
    setCurrentService(filteredServices);
    // eslint-disable-next-line
  }, [serviceData]);
  return (
    <div className="container mx-auto p-10">
      <div>
        <img
          src={currentService?.img}
          alt=""
          className="h-60 lg:h-96 w-full img-fluid"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h2 className="text-3xl text-center py-4">{currentService?.name}</h2>
        <p className="text-lg text-center px-4 lg:w-4/6 mx-auto">
          {currentService?.shortDesc}
        </p>
        <p className="text-lg text-center px-4 lg:w-4/6 mx-auto">
          {currentService?.desc}
        </p>
        <div className="flex justify-center">
          <NavLink
            to={`/booking/${currentService?.name}`}
            className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg my-2"
          >
            Book an Appointment
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
