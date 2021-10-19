import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";
  const {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    logInWithGoogle,
    auth,
    updateProfile,
    setUser,
  } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const signUpForm = (data) => {
    const { Password, Email, Name } = data;

    if (isNewUser) {
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((result) => {
          setError(null);
          updateProfile(auth.currentUser, {
            displayName: Name,
          })
            .then(() => {
              history.push(redirectUrl);
              window.location.reload();
            })
            .catch((error) => {
              setError(error.message);
              // ...
            });
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, Email, Password)
        .then((result) => {
          setUser(result.user);
          setError(null);
          history.push(redirectUrl);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  const googleSignInHanlder = () => {
    logInWithGoogle()
      .then((result) => {
        setError(null);
        history.push(redirectUrl);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="container mx-auto py-8">
      <div className=" w-full lg:w-4/6 mx-auto py-6 px-2">
        <div className="w-full bg-white rounded shadow-lg p-4 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4 text-center">
            {isNewUser ? "Register" : "Login"}
          </span>
          <form className="mb-4" onSubmit={handleSubmit(signUpForm)}>
            {isNewUser && (
              <div className="mb-4 md:w-full">
                <label htmlFor="name" className="block text-xs mb-1">
                  Name
                </label>
                <input
                  className="w-full border rounded p-2 outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  id="name"
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
            )}
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
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
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                {...register("Password", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.Password?.type === "required" && (
                <p className="text-red-500">Password Is Required</p>
              )}
              {errors.Password?.type === "minLength" && (
                <p className="text-red-500">Password Atleast 6 Character</p>
              )}
            </div>
            {isNewUser ? (
              <button
                className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                type="submit"
              >
                Sign Up
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
                type="submit"
              >
                Login
              </button>
            )}
          </form>
          {isNewUser ? (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
              onClick={() => setIsNewUser(false)}
            >
              Existing User!
            </button>
          ) : (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
              onClick={() => setIsNewUser(true)}
            >
              New User ?
            </button>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <p className="mt-4">Or Sign In With</p>
          <button className="p-2" onClick={googleSignInHanlder}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
              style={{ width: "80px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
