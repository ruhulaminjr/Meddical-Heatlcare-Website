import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto flex px-2 py-2 flex-col items-center">
        <h2 className="lg:text-2xl text-2xl md:text-3xl text-green-700 font-bold my-2 tracking-widest">
          Get in touch
        </h2>
        <h1 className="lg:text-4xl md:text-4xl text-2xl text-gray-9-- font-semibold my-3">
          Contact
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container lg:px-5 px-2 py-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="py-10 px-6 bg-gray-700 rounded hover:bg-gray-900">
              <svg
                width="40"
                height="38"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#fff"
              >
                <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
              </svg>
              <h4 className="font-bold text-white">Emergency</h4>
              <p className="tracking-wider text-white">(237) 681-812-255</p>
              <p className="tracking-wider text-white">(237) 666-331-894</p>
            </div>
            {/* --------- */}
            <div className="py-10 px-6 bg-gray-700 rounded hover:bg-gray-900">
              <svg
                width="40"
                height="38"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#fff"
              >
                <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
              </svg>
              <h4 className="font-bold text-white">Location</h4>
              <p className="tracking-wider text-white">0123 Some place</p>
              <p className="tracking-wider text-white">9876 Some country</p>
            </div>
            {/* --------- */}
            <div className="py-10 px-6 bg-gray-700 rounded hover:bg-gray-900">
              <svg
                width="40"
                height="38"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#fff"
              >
                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
              </svg>
              <h4 className="font-bold text-white">Email</h4>
              <p className="tracking-wider text-white">fildineeesoe@gmil.com</p>
              <p className="tracking-wider text-white">myebstudios@gmail.com</p>
            </div>
            {/* --------- */}
            <div className="py-10 px-6 bg-gray-700 rounded hover:bg-gray-900">
              <svg
                width="40"
                height="38"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#fff"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
              </svg>
              <h4 className="font-bold text-white">Working Hours</h4>
              <p className="tracking-wider text-white">Mon-Sat 09:00-20:00</p>
              <p className="tracking-wider text-white">Sunday Emergency only</p>
            </div>
            {/* --------- */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
