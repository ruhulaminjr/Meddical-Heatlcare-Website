import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const BookingPage = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const BookingForm = (data) => {
    history.push("/successfull");
  };
  const { user } = useAuth();
  const { pathname } = useLocation();
  const name = pathname.split("/")[2];
  return (
    <div className="container mx-auto py-8">
      <div className=" w-full lg:w-4/6 mx-auto py-6 px-2">
        <div className="w-full bg-white rounded shadow-lg p-4 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4 text-center">
            Book an Appointment
          </span>
          <h4 className="text-2xl text-green-600 text-center py-4">{name}</h4>
          <form className="mb-4" onSubmit={handleSubmit(BookingForm)}>
            <div className="mb-4 md:w-full">
              <label htmlFor="name" className="block text-xs mb-1">
                Name
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="name"
                id="name"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                {...register("Name", {
                  required: true,
                  maxLength: 20,
                  minLength: 4,
                })}
              />
              {errors.Name?.type === "minLength" && (
                <p className="text-red-500">Name Atleast 4 Character Long</p>
              )}
              {errors.Name?.type === "required" && (
                <p className="text-red-500">Enter Your Name</p>
              )}
            </div>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                defaultValue={user?.email}
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.Email?.type === "required" && (
                <p className="text-red-500">Email Address Can Not be Empty</p>
              )}
              {errors.Email?.type === "pattern" && (
                <p className="text-red-500">Email Is Not Valid</p>
              )}
            </div>
            <div className="mb-4 md:w-full">
              <label htmlFor="name" className="block text-xs mb-1">
                Phone
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Number"
                {...register("Phone", {
                  required: true,
                  maxLength: 14,
                  minLength: 11,
                })}
              />
              {errors.Phone?.type === "minLength" && (
                <p className="text-red-500">Type 11 Digit Number</p>
              )}
              {errors.Phone?.type === "required" && (
                <p className="text-red-500">Phone Number Is Required</p>
              )}
              {errors.Phone?.type === "maxLength" && (
                <p className="text-red-500">Number Is too long</p>
              )}
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
              type="submit"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
