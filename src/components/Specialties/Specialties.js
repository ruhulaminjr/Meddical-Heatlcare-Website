import React from "react";

const Specialties = () => {
  return (
    <div>
      <div className="container mx-auto flex px-2 py-2 flex-col items-center">
        <h2 className="lg:text-2xl text-2xl md:text-3xl text-green-700 font-bold my-2 tracking-widest">
          Always Caring
        </h2>
        <h1 className="lg:text-4xl md:text-4xl text-2xl text-gray-9-- font-semibold my-3">
          Our Specialties
        </h1>
      </div>
      <div className="container px-5 py-4 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4  md:-grid-cols-4 -m-2 gird-cols-2 lg:px-24">
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Neurology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Bones</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Oncology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Otorngology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Ophtmology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Pulmology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">RenMedicine</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Gasterology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Urology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Dertology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Gynaecology</h5>
          </div>
          {/* fds ------------------------------------------ */}
          <div className="border-2 border-gray-100 py-8 px-10 d-flex flex-row items-center hover:bg-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="44"
              viewBox="0 0 24 24"
            >
              <path d="M15.653 19.415c-1.162 1.141-2.389 2.331-3.653 3.585-6.43-6.381-12-11.147-12-15.808 0-4.005 3.098-6.192 6.281-6.192 2.197 0 4.434 1.042 5.719 3.248 1.279-2.195 3.521-3.238 5.726-3.238 3.177 0 6.274 2.171 6.274 6.182 0 1.269-.424 2.546-1.154 3.861l-1.483-1.484c.403-.836.637-1.631.637-2.377 0-2.873-2.216-4.182-4.274-4.182-3.257 0-4.976 3.475-5.726 5.021-.747-1.54-2.484-5.03-5.72-5.031-2.315-.001-4.28 1.516-4.28 4.192 0 3.442 4.742 7.85 10 13l2.239-2.191 1.414 1.414zm7.347-5.415h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
            </svg>
            <h5 className="my-2">Neurology</h5>
          </div>
          {/* fds ------------------------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Specialties;
