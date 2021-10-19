import React from "react";
import useDoctor from "../../../hooks/useDoctor";
import Doctor from "../../Doctors/Doctor/Doctor";
import "./Doctorpage.css";
const DoctorsPage = () => {
  const { doctorData } = useDoctor();
  return (
    <div>
      <div className="doctor-header">
        <h1 className="text-center lg:text-5xl text-3xl text-green-500  py-8">
          Our Doctor
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-5 px-2 py-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            {doctorData.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
