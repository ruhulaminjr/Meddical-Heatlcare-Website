import React from "react";
import useDoctor from "../../hooks/useDoctor";
import Doctor from "./Doctor/Doctor";

const Doctors = () => {
  const { doctorData } = useDoctor();
  return (
    <div>
      <div className="container mx-auto flex px-2 py-2 flex-col items-center">
        <h2 className="lg:text-2xl text-2xl md:text-3xl text-green-700 font-bold my-2 tracking-widest">
          Trusted Care
        </h2>
        <h1 className="lg:text-4xl md:text-4xl text-2xl text-gray-9-- font-semibold my-3">
          Our Doctors
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-5 px-2 py-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            {doctorData.splice(0, 3).map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
