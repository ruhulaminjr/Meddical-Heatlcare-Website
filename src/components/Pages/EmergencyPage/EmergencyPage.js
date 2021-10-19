import React from "react";

const EmergencyPage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://media-eng.dhakatribune.com/uploads/2017/01/20170102-Mehedi-Hasan00016.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Emergency Service Ready For You 24/7
            </h1>
            <p className="mb-8 leading-relaxed">
              Emergency physicians work primarily in the emergency department of
              public or private hospitals. They assess and treat a wide range of
              illnesses, and potentially life or limb threatening conditions.
              According to the latest statistics, physicians working in the
              orthopedics specialty are the highest earning doctors in the US,
              with an average annual income of
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Call: (237) 681-812-255
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Email: fildineeesoe@gmil.com
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyPage;
