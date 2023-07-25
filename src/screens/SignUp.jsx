import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/d08d5065-cd5d-4962-b1d2-cd72e271efb9/TR-en-20230717-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        ></img>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w-[450px] bg-black/70 mx-auto text-white h-[600px]">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold"> Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 my-2 bg-gray-700 rounded indent-2"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                ></input>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-3 my-2 bg-gray-700 rounded indent-2"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                ></input>
                <button className="bg-red-600 py-3 my-3 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p>
                    <input className="mr-2 " type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p className="py-8 ">
                  <span className="text-gray-400">
                    Already subsucribed to Netflix ?{" "}
                  </span>{" "}
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
