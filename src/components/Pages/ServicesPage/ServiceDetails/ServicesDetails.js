import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../../../hooks/useServices";

const ServicesDetails = () => {
  const [currentService, setCurrentService] = useState();
  const { id } = useParams();
  const { serviceData } = useServices();
  useEffect(() => {
    const filteredServices = serviceData.find((service) => service.id == id);
    setCurrentService(filteredServices);
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
        <p className="text-lg text-center px-4 lg:w-4/6 mx-auto">{currentService?.shortDesc}</p>
        <p className="text-lg text-center px-4 lg:w-4/6 mx-auto">{currentService?.desc}</p>
      </div>
    </div>
  );
};

export default ServicesDetails;
